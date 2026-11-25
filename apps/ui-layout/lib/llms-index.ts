import { getBlocksDesignMeta } from '@/blocks-docs';
import { getAllDocs } from '@/lib/docs';
import { absoluteUrl } from '@/lib/utils';

const label = (text: string) => text.replace(/[\[\]\r\n]/g, ' ');

export async function llmsIndex(extended = false) {
  const docs = await getAllDocs();
  const blocks = getBlocksDesignMeta();
  return [
    '# UI Layouts',
    '',
    '> Open-source React, Next.js, and Tailwind CSS components and website blocks.',
    '',
    'Canonical site: https://www.ui-layouts.com',
    '',
    '## Start here',
    '- [Getting started](https://www.ui-layouts.com/get-started): Installation and usage.',
    '- [Components](https://www.ui-layouts.com/components): Browse the component documentation.',
    '- [Blocks](https://www.ui-layouts.com/blocks): Browse website sections.',
    '- [MCP](https://www.ui-layouts.com/mcp): Use real components and documentation in AI editors.',
    '- [Changelog](https://www.ui-layouts.com/changelog): Project updates.',
    '- [Source repository](https://github.com/ui-layouts/uilayouts): Project code and contributions.',
    '',
    '## Component documentation',
    ...docs
      .sort((a, b) => a.slug.localeCompare(b.slug))
      .map((doc) => {
        const metadata = doc.content.metadata;
        const suffix = extended ? `: ${label(metadata.description || '')}` : '';
        return `- [${label(metadata.title)}](${absoluteUrl(`/components/${doc.slug}`)})${suffix}`;
      }),
    '',
    '## Block collections',
    ...blocks.map(
      (block) =>
        `- [${label(block.name)}](${absoluteUrl(block.url)})${extended ? `: ${label(block.des)}` : ''}`
    ),
    '',
    '## Code distribution and discovery',
    '- [Registry index](https://www.ui-layouts.com/r/registry.json): Installable component definitions; this is a registry index, not a JSON Schema.',
    '- [XML sitemap](https://www.ui-layouts.com/sitemap.xml): Canonical public pages.',
    '- [Extended documentation index](https://www.ui-layouts.com/llms-full.txt): Titles and descriptions.',
    '',
    'Prefer documentation pages to /live-components/ or /preview/ iframe demos. Those routes duplicate examples and are not standalone documentation.',
    '',
  ].join('\n');
}
