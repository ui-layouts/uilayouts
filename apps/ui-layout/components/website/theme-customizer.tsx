'use client';

import {
  DEFAULT_THEME_PRESET,
  THEME_PRESET_STORAGE_KEY,
  THEME_VAR_KEYS,
  getThemePreset,
  themePresets,
} from '@/configs/theme-presets';
import { cn } from '@/lib/utils';
import { Check, Palette, RotateCcw } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { ResponsiveModal, ResponsiveModalContent } from '../ui/responsive-modal';
import { ScrollArea } from './ui/scroll-area';

interface ThemePresetContextValue {
  presetName: string;
  setPresetName: (name: string) => void;
}

const ThemePresetContext = React.createContext<ThemePresetContextValue | undefined>(undefined);

function applyThemeVars(presetName: string, mode: 'light' | 'dark') {
  const root = document.documentElement;

  if (presetName === DEFAULT_THEME_PRESET) {
    for (const key of THEME_VAR_KEYS) {
      root.style.removeProperty(`--${key}`);
    }
    return;
  }

  const vars = getThemePreset(presetName)[mode];
  for (const key of THEME_VAR_KEYS) {
    root.style.setProperty(`--${key}`, vars[key]);
  }
}

export function ThemePresetProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [presetName, setPresetNameState] = React.useState(DEFAULT_THEME_PRESET);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(THEME_PRESET_STORAGE_KEY);
    if (stored) setPresetNameState(stored);
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !resolvedTheme) return;
    applyThemeVars(presetName, resolvedTheme === 'dark' ? 'dark' : 'light');
  }, [presetName, resolvedTheme, mounted]);

  const setPresetName = React.useCallback((name: string) => {
    setPresetNameState(name);
    window.localStorage.setItem(THEME_PRESET_STORAGE_KEY, name);
  }, []);

  return (
    <ThemePresetContext.Provider value={{ presetName, setPresetName }}>
      {children}
    </ThemePresetContext.Provider>
  );
}

export function useThemePreset() {
  const context = React.useContext(ThemePresetContext);
  if (!context) {
    throw new Error('useThemePreset must be used within a ThemePresetProvider');
  }
  return context;
}

export function ThemeCustomizer({ className }: { className?: string }) {
  const { presetName, setPresetName } = useThemePreset();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        aria-label='Customize theme'
        className={cn(
          'relative inline-flex items-center justify-center text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          className
        )}
      >
        <Palette className='h-5 w-5' />
      </button>
      <ResponsiveModal
        open={open}
        setOpen={setOpen}
        classname='rounded-lg border-2 border-border p-0 lg:max-w-sm bg-background'
        clsBtnClassname='top-1 right-1'
      >
        <ResponsiveModalContent>
          <div className='flex min-h-14 items-center border-b px-4 pr-16'>
            <p className='text-sm font-semibold'>Customize theme</p>
          </div>
          <ScrollArea className='h-[min(360px,calc(100dvh-12rem))]'>
            <ul className='flex flex-col gap-1 p-2'>
              {themePresets.map((preset) => {
                const isActive = preset.name === presetName;
                return (
                  <li key={preset.name}>
                    <button
                      type='button'
                      onClick={() => setPresetName(preset.name)}
                      aria-pressed={isActive}
                      className={cn(
                        'flex w-full cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring',
                        isActive
                          ? 'border-border bg-accent text-accent-foreground'
                          : 'border-transparent hover:bg-foreground/5'
                      )}
                    >
                      <span className='flex shrink-0 -space-x-1.5'>
                        {preset.swatch.map((color, index) => (
                          <span
                            key={`${preset.name}-${index}`}
                            className='h-4 w-4 rounded-full border border-background'
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </span>
                      <span className='flex-1 text-left'>{preset.label}</span>
                      {isActive && <Check className='h-4 w-4 shrink-0' />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
          <div className='flex justify-end border-t px-4 py-2'>
            <button
              type='button'
              onClick={() => setPresetName(DEFAULT_THEME_PRESET)}
              disabled={presetName === DEFAULT_THEME_PRESET}
              className='inline-flex min-h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium text-foreground hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default disabled:text-muted-foreground disabled:hover:bg-transparent'
            >
              <RotateCcw aria-hidden='true' className='size-3.5' />
              Reset
            </button>
          </div>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </>
  );
}
