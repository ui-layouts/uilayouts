import React from 'react';
import { cn } from '@/lib/utils';

interface GapPatternProps {
  className?: string;
}

export function GapPattern({ className }: GapPatternProps) {
  return (
    <div
      className={cn(
        'border-y dark:border-neutral-700 w-full 2xl:h-10 lg:h-7 h-5 dark:bg-neutral-900 bg-white',
        'dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]',
        className
      )}
    />
  );
}
