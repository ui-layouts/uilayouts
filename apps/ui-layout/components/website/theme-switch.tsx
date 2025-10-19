'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ThemeSwitch({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center',
        className
      )}
      aria-label='Toggle theme'
      type='button'
    >
      {mounted ? (
        resolvedTheme === 'light' ? (
          <SunIcon className='h-5 w-5' />
        ) : (
          <MoonIcon className='h-5 w-5' />
        )
      ) : null}
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}