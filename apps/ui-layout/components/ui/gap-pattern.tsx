import { cn } from '@/lib/utils';
import React from 'react';

interface GapPatternProps {
  className?: string;
}

export function GapPattern({ className }: GapPatternProps) {
  return (
    <div
      className={cn(
        'border-y w-full 2xl:h-10 lg:h-7 h-5 bg-card',
        'bg-[repeating-linear-gradient(135deg,var(--border)_0px_1px,transparent_1px_10px)]',
        className
      )}
    />
  );
}
