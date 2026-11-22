import GithubSlugger from 'github-slugger';
import type { Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

export interface TableOfContents {
  items: Array<{
    title: string;
    url: string;
    items?: Array<{
      title: string;
      url: string;
    }>;
  }>;
}

export async function getTableOfContents(mdxContent: string): Promise<TableOfContents> {
  const tableOfContents: TableOfContents = { items: [] };
  const { default: remarkParse } = await import('remark-parse');
  const tree = unified().use(remarkParse).parse(mdxContent) as Root;
  // rehype-slug uses the same slugger, including punctuation and duplicate suffixes.
  const slugger = new GithubSlugger();
  let currentH2: NonNullable<TableOfContents['items'][number]> | undefined;

  visit(tree, 'heading', (heading) => {
    const title = toString(heading);
    const url = `#${slugger.slug(title)}`;
    // Slug every heading, even those outside the TOC, to keep duplicate IDs in sync.
    if (heading.depth === 2) {
      currentH2 = { title, url, items: [] };
      tableOfContents.items.push(currentH2);
    } else if (heading.depth === 3 && currentH2) {
      currentH2.items?.push({ title, url });
    }
  });

  return tableOfContents;
}
