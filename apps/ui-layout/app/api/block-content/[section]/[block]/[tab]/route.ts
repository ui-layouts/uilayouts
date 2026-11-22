import { blocksDesign } from '@/blocks-docs';
import { getBlockDesignMarkdown } from '@/lib/block-design-documents';
import { highlightCode } from '@/lib/shiki-highlighter';
import { transformCodeFiles } from '@/lib/transform-code-files';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return blocksDesign.flatMap((section) =>
    section.blocks.flatMap((block) =>
      ['code', 'design'].map((tab) => ({ section: section.id, block: block.id, tab }))
    )
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string; block: string; tab: string }> }
) {
  const { section, block, tab } = await params;
  const entry = blocksDesign.find((item) => item.id === section)?.blocks.find((item) => item.id === block);

  if (!entry || (tab !== 'code' && tab !== 'design')) {
    return new Response(null, { status: 404 });
  }

  const headers = { 'X-Robots-Tag': 'noindex' };
  if (tab === 'code') {
    const files = await transformCodeFiles(entry.filePath, entry.id);
    return Response.json({ tab, files }, { headers });
  }

  const markdown = getBlockDesignMarkdown(entry.id);
  const html = await highlightCode(markdown, 'markdown');
  return Response.json({ tab, markdown, html }, { headers });
}
