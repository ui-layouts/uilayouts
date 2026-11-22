"""Audit canonical pages, metadata, schema and discovery against a running production build."""
import argparse
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
import re
from urllib.parse import urlsplit
from urllib.error import HTTPError
from urllib.request import HTTPRedirectHandler, Request, build_opener, urlopen
import xml.etree.ElementTree as ET

ORIGIN = 'https://www.ui-layouts.com'

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals, self.meta, self.titles, self.schemas, self.links = [], {}, [], [], []
        self.capture = None
        self.text = ''
        self.h1, self.main, self.images = [], 0, {}
    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if tag == 'meta':
            key = attrs.get('name', attrs.get('property'))
            value = attrs.get('content', '')
            if key in ('og:image', 'twitter:image'):
                self.images.setdefault(key, []).append(value)
            else:
                self.meta[key] = value
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonicals.append(attrs.get('href'))
        if tag == 'a' and attrs.get('href'): self.links.append(attrs['href'])
        if tag == 'main': self.main += 1
        if tag in ('title', 'h1') or (tag == 'script' and attrs.get('type') == 'application/ld+json'):
            self.capture, self.text = tag, ''
    def handle_data(self, text):
        if self.capture: self.text += text
    def handle_endtag(self, tag):
        if tag == self.capture:
            if tag == 'title': self.titles.append(self.text)
            elif tag == 'h1': self.h1.append(self.text.strip())
            else: self.schemas.append(json.loads(self.text))
            self.capture = None

def schema_objects(value):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from schema_objects(child)
    elif isinstance(value, list):
        for child in value:
            yield from schema_objects(child)


def schema_type_names(node):
    value = node.get('@type')
    if isinstance(value, str):
        return (value,)
    if isinstance(value, list):
        return tuple(name for name in value if isinstance(name, str))
    return ()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url', required=True)
    args = parser.parse_args()
    base = args.base_url.rstrip('/')
    def fetch(path):
        request = Request(base + path, headers={'User-Agent': 'UI-Layouts-SEO-Audit/1.0'})
        with urlopen(request, timeout=60) as response:
            assert response.url == request.full_url, f'{path}: redirects to {response.url}'
            return response.status, response.read().decode('utf8'), response.headers
    _, xml, _ = fetch('/sitemap.xml')
    tree = ET.fromstring(xml)
    urls = [node.text for node in tree.findall('{*}url/{*}loc')]
    assert len(urls) == len(set(urls)), 'Sitemap contains duplicates'
    assert not tree.findall('{*}url/{*}lastmod'), 'Do not invent modification timestamps'
    origin = urlsplit(ORIGIN)
    assert all(
        (urlsplit(url).scheme, urlsplit(url).netloc) == (origin.scheme, origin.netloc)
        and not urlsplit(url).query and not urlsplit(url).fragment
        for url in urls
    ), 'Sitemap must use canonical URLs on the public origin'
    paths = [urlsplit(url).path or '/' for url in urls]
    assert not any(path.startswith(('/labs', '/preview', '/live-components', '/example', '/search')) for path in paths)
    def audit(path):
        status, html, _ = fetch(path)
        page = Page(); page.feed(html)
        expected = ORIGIN + ('' if path == '/' else path)
        assert status == 200, path
        if path.startswith('/blocks/'):
            assert len(html.encode('utf8')) < 2_000_000, f'{path}: HTML exceeds 2 MB'
        assert len(page.titles) == 1 and page.titles[0].strip(), f'{path}: missing title'
        assert page.meta.get('description'), f'{path}: missing description'
        assert page.canonicals == [expected], f'{path}: canonical {page.canonicals}'
        assert page.meta.get('og:url') == expected, f'{path}: wrong social URL'
        assert 'noindex' not in page.meta.get('robots', ''), f'{path}: unexpectedly noindexed'
        for schema in page.schemas:
            serialized = json.dumps(schema)
            roots = schema if isinstance(schema, list) else [schema]
            assert roots and all(isinstance(root, dict) and root.get('@context') == 'https://schema.org' for root in roots), path
            schema_types = {name for node in schema_objects(schema) for name in schema_type_names(node)}
            assert not schema_types.intersection({'Product', 'SoftwareApplication'}), f'{path}: catalog marked as a product'
            assert 'AggregateRating' not in serialized, f'{path}: unverified rating'
            assert '"softwareVersion"' not in serialized, f'{path}: unverified version'
            assert '"dateModified"' not in serialized, f'{path}: unverified modification date'
            assert 'FAQPage' not in serialized, f'{path}: hidden FAQ markup'
        return path, page
    with ThreadPoolExecutor(max_workers=4) as pool: pages = dict(pool.map(audit, paths))
    assert len(pages['/get-started'].h1) == 1 and pages['/get-started'].h1[0], 'Getting started needs a primary heading'
    assert pages['/changelog'].h1 == ['Changelog'], 'The changelog needs a primary heading'
    assert 'MCP Server' in pages['/mcp'].titles[0], 'The MCP page should identify its purpose'
    category_descriptions = set()
    for path, page in pages.items():
        assert 'https://ui-layouts.com/blocks' not in page.links, f'{path}: link to redirected host'
        assert 'http://pro.ui-layouts.com/blocks' not in page.links, f'{path}: link to HTTP'
        if path.startswith('/blocks/'):
            assert len(page.h1) == 1 and page.h1[0], f'{path}: missing or duplicate primary heading'
            description = page.meta['description']
            assert description not in category_descriptions, f'{path}: duplicate category description'
            category_descriptions.add(description)
            collections = [
                node for schema in page.schemas for node in schema_objects(schema)
                if 'CollectionPage' in schema_type_names(node)
            ]
            assert len(collections) == 1, f'{path}: missing CollectionPage markup'
            item_list = collections[0]['mainEntity']
            assert item_list['@type'] == 'ItemList' and item_list['itemListElement'], path
            assert all(item['url'].startswith(ORIGIN + path + '#') for item in item_list['itemListElement']), path
    assert pages['/'].main == 1, 'Homepage needs a main landmark'
    component = next(path for path in paths if path.startswith('/components/'))
    _, html, _ = fetch('/live-components/image-mousetrail-default')
    page = Page(); page.feed(html)
    assert 'noindex' in page.meta.get('robots', '') and 'noindex' in page.meta.get('googlebot', '')
    for path in ['/labs', '/example', '/preview/hero-section/hero-ai-infrastructure']:
        _, html, _ = fetch(path); page = Page(); page.feed(html)
        assert 'noindex' in page.meta.get('robots', ''), path
        assert 'noindex' in page.meta.get('googlebot', ''), path
    _, robots, _ = fetch('/robots.txt')
    assert 'Sitemap: ' + ORIGIN + '/sitemap.xml' in robots
    assert 'Disallow: /live-components' not in robots, 'Keep noindex pages crawlable'
    _, manifest, _ = fetch('/manifest.webmanifest')
    manifest = json.loads(manifest)
    assert {'192x192', '512x512'} <= {icon['sizes'] for icon in manifest['icons']}
    for icon in manifest['icons']:
        with urlopen(base + icon['src'], timeout=60) as response:
            data = response.read(24)
            assert response.status == 200 and data.startswith(b'\x89PNG\r\n\x1a\n'), icon
            dimensions = tuple(int.from_bytes(data[offset:offset + 4], 'big') for offset in (16, 20))
            assert 'x'.join(map(str, dimensions)) == icon['sizes'], icon
    class NoRedirect(HTTPRedirectHandler):
        def redirect_request(self, request, fp, code, msg, headers, newurl):
            return None
    try:
        build_opener(NoRedirect).open(base + '/profitables', timeout=60)
    except HTTPError as error:
        assert error.code == 308 and error.headers.get('Location') == 'https://profitables.ui-layouts.com/', error
    else:
        raise AssertionError('The retired Profitables path should redirect permanently')
    for path in ['/llms.txt', '/llms-full.txt']:
        _, markdown, _ = fetch(path)
        links = re.findall(r'\]\((https://www\.ui-layouts\.com[^)]+)\)', markdown)
        for link in links:
            route = urlsplit(link).path or '/'
            assert route in paths or route in ['/r/registry.json', '/sitemap.xml', '/llms-full.txt'], f'{path}: stale link {link}'
        assert component in markdown, f'{path}: missing generated component index'
    # Confirm every sharing image referenced by metadata actually exists.
    image_paths = set()
    for page in pages.values():
        for name in ['og:image', 'twitter:image']:
            images = page.images.get(name)
            assert images, f'Missing {name}'
            for image in images:
                target = urlsplit(image)
                assert (target.scheme, target.netloc) == (origin.scheme, origin.netloc), image
                image_paths.add(target.path + ('?' + target.query if target.query else ''))
    with ThreadPoolExecutor(max_workers=4) as pool:
        def check_image(path):
            try:
                with urlopen(base + path, timeout=60) as response:
                    assert response.status == 200 and response.headers.get('Content-Type', '').startswith('image/'), path
            except Exception as error:
                raise AssertionError(f'{path}: {error}') from error
        list(pool.map(check_image, image_paths))
    print(json.dumps({'canonical_pages':len(paths), 'sharing_images':len(image_paths), 'utility_noindex':4, 'discovery_indexes':2, 'issues':[]}, indent=2))

if __name__ == '__main__': main()
