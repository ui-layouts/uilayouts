'use client';

import { Download } from 'lucide-react';
import { CopyButton } from '../code-components/copy-button';

export function DesignMarkdown({
  id,
  markdown,
  html,
}: {
  id: string;
  markdown: string;
  html: string;
}) {
  const download = () => {
    const url = URL.createObjectURL(new Blob([markdown], { type: 'text/markdown;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${id}-design.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='relative'>
      <div className='absolute right-2 top-2 z-10 flex gap-2'>
        <button
          type='button'
          onClick={download}
          className='flex h-8 items-center gap-1.5 border bg-card px-2 text-xs font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          aria-label={`Download ${id} design system as Markdown`}
        >
          <Download className='h-3.5 w-3.5' />
          Download .md
        </button>
        <CopyButton code={markdown} classname='static bg-card' />
      </div>
      <div
        className='not-prose max-h-[650px] overflow-auto rounded-md border text-sm dark:border-neutral-800'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
