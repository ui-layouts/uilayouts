'use client';

import { CopyButton } from '@/components/website/code-components/copy-button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki/bundle/web'; // pre-bundled, browser-ready

export function ShikiCode({
  code,
  lang = 'tsx',
  className,
}: {
  code: string;
  lang?: string;
  className?: string;
}) {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    codeToHtml(code, {
      lang,
      themes: { light: 'github-light', dark: 'slack-dark' },
    }).then((h) => {
      if (!cancelled) setHtml(h);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (!html)
    return (
      <pre className='opacity-50'>
        <code>{code}</code>
      </pre>
    ); // skeleton
  return (
    <div className={cn('relative', className)}>
      <CopyButton
        code={code}
        classname='right-2 top-2 bg-white dark:bg-neutral-800'
      />

      <div
        className='not-prose max-h-[550px] overflow-x-hidden rounded-md text-sm border dark:border-neutral-800'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
