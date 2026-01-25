'use client';

import { CopyButton } from './copy-button';
import { cn } from '@/lib/utils';

export function ClientPreCode({
  html,
  raw,
  className,
}: {
  html: string;
  raw: string;
  className?: string;
}) {
  return (
    <div className={cn('relative', className)}>
      <CopyButton
        code={raw}
        classname='right-2 top-2 bg-white dark:bg-neutral-800'
      />

      <div
        className='not-prose max-h-[550px] overflow-x-hidden rounded-md text-sm border dark:border-neutral-800'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
