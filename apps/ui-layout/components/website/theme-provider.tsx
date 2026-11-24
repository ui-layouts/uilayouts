'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { ThemePresetProvider } from './theme-customizer';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname();
  const showcase = /^\/(?:components|live-components)\/.+/.test(pathname ?? '');
  return (
    <NextThemesProvider {...props} forcedTheme={showcase ? 'light' : props.forcedTheme}>
      <ThemePresetProvider>{children}</ThemePresetProvider>
    </NextThemesProvider>
  );
}
