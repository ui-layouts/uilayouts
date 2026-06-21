'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';
import { ThemePresetProvider } from './theme-customizer';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemePresetProvider>{children}</ThemePresetProvider>
    </NextThemesProvider>
  );
}
