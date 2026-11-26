'use client';

import { CodeSurface } from './code-surface';
import styles from './code-surface.module.css';
import { cn } from '@/lib/utils';
import { CopyButton } from './copy-button';

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
    <div className={cn(styles.shell, className)}>
      <CopyButton code={raw} classname='right-2 top-2 bg-card' />

      <CodeSurface html={html} />
    </div>
  );
}
