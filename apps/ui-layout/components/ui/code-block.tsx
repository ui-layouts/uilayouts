'use client';

import { CopyButton } from '@/components/website/code-components/copy-button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki/bundle/web';

export function CodeBlock({
  code,
  lang = 'tsx',
  className,
}: {
  code: string;
  lang?: string;
  className?: string;
}) {
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const highlightCode = async () => {
      try {
        const highlightedHtml = await codeToHtml(code, {
          lang,
          themes: { light: 'github-light', dark: 'slack-dark' },
        });

        if (!cancelled) {
          setHtml(highlightedHtml);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error highlighting code:', error);
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    highlightCode();

    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (isLoading) {
    return (
      <div className={cn('relative', className)}>
        <div className='p-6 w-full mx-auto h-[400px] bg-muted animate-pulse rounded-xl'></div>
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <CopyButton code={code} classname='right-2 top-2 bg-card' />

      <div
        className='not-prose max-h-[550px] overflow-x-hidden rounded-md text-sm border'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
