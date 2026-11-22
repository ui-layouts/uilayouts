"""Audit canonical pages, metadata, schema and discovery against a running production build."""
import argparse
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
import re
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

ORIGIN = 'https://www.ui-layouts.com'

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals, self.meta, self.titles, self.schemas = [], {}, [], []
        self.capture = None
        self.text = ''
        self.h1 = self.main = 0
    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if tag == 'meta': self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonicals.append(attrs.get('href'))
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'title' or (tag == 'script' and attrs.get('type') == 'application/ld+json'):
            self.capture, self.text = tag, ''
    def handle_data(self, text):
        if self.capture: self.text += text
    def handle_endtag(self, tag):
        if tag == self.capture:
            if tag == 'title': self.titles.append(self.text)
            else: self.schemas.append(json.loads(self.text))
            self.capture = None

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url', required=True)
    args = parser.parse_args()
    base = args.base_url.rstrip('/')
    def fetch(path):
        with urlopen(Request(base + path, headers={'User-Agent': 'UI-Layouts-SEO-Audit/1.0'}), timeout=60) as response:
            return response.status, response.read().decode('utf8'), response.headers
    _, xml, _ = fetch('/sitemap.xml')
    tree = ET.fromstring(xml)
    urls = [node.text for node in tree.findall('{*}url/{*}loc')]
    assert len(urls) == len(set(urls)), 'Sitemap contains duplicates'
    assert not tree.findall('{*}url/{*}lastmod'), 'Do not invent modification timestamps'
    assert all(url.startswith(ORIGIN) for url in urls), 'Sitemap must use the public canonical host'
    paths = [urlsplit(url).path or '/' for url in urls]
    assert not any(path.startswith(('/labs', '/preview', '/live-components', '/example', '/search')) for path in paths)
    def audit(path):
        status, html, _ = fetch(path)
        page = Page(); page.feed(html)
        expected = ORIGIN + ('' if path == '/' else path)
        assert status == 200, path
        assert len(page.titles) == 1 and page.titles[0].strip(), f'{path}: missing title'
        assert page.meta.get('description'), f'{path}: missing description'
        assert page.canonicals == [expected], f'{path}: canonical {page.canonicals}'
        assert page.meta.get('og:url') == expected, f'{path}: wrong social URL'
        assert 'noindex' not in page.meta.get('robots', ''), f'{path}: unexpectedly noindexed'
        for schema in page.schemas:
            serialized = json.dumps(schema)
            assert schema.get('@context') == 'https://schema.org', path
            assert 'AggregateRating' not in serialized, f'{path}: unverified rating'
            assert '"softwareVersion"' not in serialized, f'{path}: unverified version'
            assert '"dateModified"' not in serialized, f'{path}: unverified modification date'
            assert 'FAQPage' not in serialized, f'{path}: hidden FAQ markup'
        return path, page
    with ThreadPoolExecutor(max_workers=4) as pool: pages = dict(pool.map(audit, paths))
    assert pages['/get-started'].h1 == 1, 'Getting started needs a primary heading'
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
    for icon in manifest['icons']:
        with urlopen(base + icon['src'], timeout=60) as response: assert response.status == 200
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
            image = page.meta.get(name)
            assert image, f'Missing {name}'
            assert urlsplit(image).netloc == 'www.ui-layouts.com', image
            target = urlsplit(image)
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
