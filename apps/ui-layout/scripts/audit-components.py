"""Audit rendered component links, headings and landmarks against a running build."""
import argparse
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.links, self.frames, self.headings = set(), [], [], []
        self.main_count = 0
        self.heading = None
    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get('id'): self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('href'): self.links.append(attrs['href'])
        if tag == 'iframe' and attrs.get('src'): self.frames.append(attrs['src'])
        if tag == 'main': self.main_count += 1
        if tag == 'h1': self.heading = []
    def handle_data(self, data):
        if self.heading is not None: self.heading.append(data)
    def handle_endtag(self, tag):
        if tag == 'h1' and self.heading is not None:
            self.headings.append(''.join(self.heading).strip())
            self.heading = None

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url', required=True)
    parser.add_argument('--report', type=Path)
    args = parser.parse_args()
    base = args.base_url.rstrip('/')
    hosts = {urlsplit(base).netloc, 'ui-layouts.com', 'www.ui-layouts.com'}
    def local_link(href, parent):
        target = urlsplit(urljoin(base + parent, href))
        if target.scheme not in ('http', 'https'): return None
        if target.netloc == 'preview.ui-layouts.com': return 'https://preview.ui-layouts.com' + (target.path or '/'), unquote(target.fragment)
        if target.netloc not in hosts: return None
        return target.path or '/', unquote(target.fragment)
    def fetch(route):
        result = {'path': route}
        try:
            with urlopen(Request(route if route.startswith('https://') else base + route, headers={'User-Agent': 'UI-Layouts-Link-Audit/1.0'}), timeout=60) as response:
                result['status'] = response.status
                result['final_path'] = urlsplit(response.url).path
                if 'text/html' in response.headers.get('Content-Type', ''):
                    page = Page(); page.feed(response.read().decode('utf8'))
                    result['page'] = page
        except (HTTPError, URLError, TimeoutError) as error:
            result['status'] = getattr(error, 'code', 0)
            result['error'] = str(error)
        return route, result
    docs = ['/components/' + str(file.relative_to(ROOT/'content/components')).replace('\\', '/').removesuffix('.mdx') for file in (ROOT/'content/components').rglob('*.mdx')]
    seeds = ['/components'] + sorted(docs)
    with ThreadPoolExecutor(max_workers=4) as pool:
        results = dict(pool.map(fetch, seeds))
        references = []
        for route, result in results.items():
            page = result.get('page')
            if not page: continue
            for href in page.links + page.frames:
                target = local_link(href, route)
                if target: references.append((route, href, *target))
        extras = {ref[2] for ref in references} - results.keys()
        aliases = re.findall(r"source: '/components/([^']+)'", (ROOT/'next.config.ts').read_text())
        extras.update('/components/' + alias for alias in aliases)
        results.update(pool.map(fetch, sorted(extras)))
    issues = []
    for route, result in results.items():
        if result['status'] != 200: issues.append({'path':route, 'status':result['status'], 'error':result.get('error')})
    for route in seeds:
        page = results[route].get('page')
        if page and (len(page.headings) != 1 or page.main_count != 1):
            issues.append({'path':route, 'h1':page.headings, 'main_count':page.main_count})
    for parent, href, target, fragment in references:
        page = results[target].get('page')
        if fragment and page and fragment not in page.ids:
            issues.append({'path':parent, 'broken_anchor':href})
    report = {'component_pages':len(seeds), 'checked_destinations':len(results), 'internal_references':len(references), 'issues':issues}
    output = json.dumps(report, indent=2)
    if args.report: args.report.write_text(output)
    print(output)
    return bool(issues)

if __name__ == '__main__': raise SystemExit(main())
