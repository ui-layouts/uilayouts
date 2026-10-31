'use client';

import {
  Component,
  GalleryHorizontalEnd,
  Home,
  MonitorSmartphone,
  Moon,
  RotateCcw,
  Settings2,
  Sun,
  Video,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Suspense, useEffect, useState } from 'react';
import { AllComponents } from '@/configs/docs';
import { useSelectedComponentStore, useStateChange } from '@/hooks/useZustStore';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import LabSidebar from './labs-sidebar';

const defaults = {
  width: 100,
  height: 100,
  componentWidth: 100,
  scale: 1,
  padding: 0,
  fontSize: 100,
};
const buttonClass =
  'inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border bg-background px-3 text-sm text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

function SizeControl({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className='grid gap-2 rounded-md border bg-muted/40 p-3 text-sm'>
      <span className='flex items-center justify-between gap-2'>
        {label}
        <output className='tabular-nums text-muted-foreground'>
          {value}
          {unit}
        </output>
      </span>
      <input
        aria-label={label}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className='h-5 w-full cursor-pointer accent-primary'
      />
    </label>
  );
}

export default function ComponentSection() {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar, isSidebarOpen } = useStateChange();
  const selected = useSelectedComponentStore((state) => state.recentComponents[0]);
  const current = AllComponents.find((item) => item.componentName === selected?.componentName);
  const [sizes, setSizes] = useState(defaults);
  const [recording, setRecording] = useState(false);
  useEffect(() => {
    if (!recording) return;
    const restoreControls = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setRecording(false);
    };
    window.addEventListener('keydown', restoreControls);
    return () => window.removeEventListener('keydown', restoreControls);
  }, [recording]);
  const updateSize = (key: keyof typeof defaults, value: number) =>
    setSizes((previous) => ({ ...previous, [key]: value }));
  const Preview = current?.componentSrc;
  const iframeSrc = current?.iframe
    ? current.iframeSrc &&
      (/^https?:\/\//.test(current.iframeSrc)
        ? current.iframeSrc
        : `/${current.iframeSrc.replace(/^\/+/, '')}`)
    : current?.iframelink && process.env.NEXT_PUBLIC_ANIMATION_URL
      ? `${process.env.NEXT_PUBLIC_ANIMATION_URL.replace(/\/$/, '')}/${current.iframelink}`
      : undefined;

  return (
    <div
      className={cn(
        'relative grid h-dvh min-h-0 w-full overflow-hidden',
        !isSidebarOpen &&
          !recording &&
          'md:grid-cols-[minmax(0,1fr)_320px] 2xl:grid-cols-[minmax(0,1fr)_400px]'
      )}
    >
      <div className='relative isolate min-h-0 min-w-0'>
        <div
          data-testid='labs-workspace'
          className='absolute inset-0 flex items-center justify-center overflow-hidden'
        >
          <div
            data-testid='labs-canvas'
            className='relative shrink-0 overflow-auto bg-background'
            style={{
              width: `${sizes.width}%`,
              height: `${sizes.height}%`,
              fontSize: `${sizes.fontSize}%`,
            }}
          >
            {current ? (
              <div
                data-testid='labs-component'
                key={current.componentName}
                className={cn(
                  'relative mx-auto h-full min-h-0 origin-center',
                  current.center && 'grid place-items-center'
                )}
                style={{
                  width: `${sizes.componentWidth}%`,
                  padding: sizes.padding,
                  transform: `scale(${sizes.scale})`,
                }}
              >
                {iframeSrc ? (
                  <iframe
                    src={iframeSrc}
                    className='block h-full w-full border-0'
                    title={`${current.title} Labs preview`}
                  />
                ) : Preview ? (
                  <div
                    className={cn(
                      'h-full min-h-0 w-full',
                      current.center
                        ? 'grid place-items-center'
                        : '[&>*]:h-full! [&>*]:min-h-0! [&>*]:w-full! [&>*]:max-w-none!'
                    )}
                  >
                    <Suspense
                      fallback={
                        <div role='status' className='grid h-full place-items-center'>
                          Preparing preview…
                        </div>
                      }
                    >
                      <Preview />
                    </Suspense>
                  </div>
                ) : (
                  <p className='grid h-full place-items-center p-6 text-center text-muted-foreground'>
                    This preview is unavailable. Select another component.
                  </p>
                )}
              </div>
            ) : (
              <div className='grid h-full place-items-center p-6 text-center text-muted-foreground'>
                Select a component from the sidebar to start recording.
              </div>
            )}
          </div>
        </div>

        {!recording && (
          <div className='pointer-events-none absolute inset-x-0 bottom-4 z-30 flex justify-center px-2'>
            <div
              role='toolbar'
              aria-label='Labs controls'
              className='pointer-events-auto flex max-w-full items-center gap-2 rounded-xl border bg-background/95 p-2 shadow-lg backdrop-blur'
            >
              <Link
                href='/components'
                aria-label='Components'
                title='Components'
                className={buttonClass}
              >
                <Component className='size-4' />
              </Link>
              <Link href='/' aria-label='Home' title='Home' className={buttonClass}>
                <Home className='size-4' />
              </Link>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type='button'
                    aria-label='Choose theme'
                    title='Choose theme'
                    className={buttonClass}
                  >
                    <Sun className='size-4 dark:hidden' />
                    <Moon className='hidden size-4 dark:block' />
                  </button>
                </PopoverTrigger>
                <PopoverContent side='top' className='z-40 w-40 bg-background p-1'>
                  {(
                    [
                      { value: 'light', label: 'Light', icon: Sun },
                      { value: 'dark', label: 'Dark', icon: Moon },
                      { value: 'system', label: 'System', icon: MonitorSmartphone },
                    ] as const
                  ).map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      type='button'
                      aria-pressed={theme === value}
                      onClick={() => setTheme(value)}
                      className='flex w-full items-center gap-2 rounded px-3 py-2 text-sm text-foreground hover:bg-muted aria-pressed:bg-muted'
                    >
                      <Icon className='size-4' />
                      {label}
                    </button>
                  ))}
                </PopoverContent>
              </Popover>
              {current && (
                <Link
                  href={current.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonClass, 'hidden sm:inline-flex')}
                >
                  View component
                </Link>
              )}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type='button'
                    aria-label='Canvas settings'
                    title='Canvas settings'
                    className={buttonClass}
                  >
                    <Settings2 className='size-4' />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side='top'
                  align='center'
                  sideOffset={12}
                  className='z-40 w-[min(420px,calc(100vw-24px))] bg-background p-3 text-foreground'
                >
                  <div className='mb-3 flex items-center justify-between gap-2'>
                    <h2 className='font-semibold'>Canvas settings</h2>
                    <button
                      type='button'
                      onClick={() => setSizes(defaults)}
                      className='flex items-center gap-1 rounded px-2 py-1 text-sm hover:bg-muted'
                    >
                      <RotateCcw className='size-3' />
                      Reset
                    </button>
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <SizeControl
                      label='Canvas width'
                      value={sizes.width}
                      min={10}
                      max={100}
                      unit='%'
                      onChange={(value) => updateSize('width', value)}
                    />
                    <SizeControl
                      label='Canvas height'
                      value={sizes.height}
                      min={10}
                      max={100}
                      unit='%'
                      onChange={(value) => updateSize('height', value)}
                    />
                    <SizeControl
                      label='Component width'
                      value={sizes.componentWidth}
                      min={10}
                      max={150}
                      unit='%'
                      onChange={(value) => updateSize('componentWidth', value)}
                    />
                    <SizeControl
                      label='Padding'
                      value={sizes.padding}
                      min={0}
                      max={150}
                      unit='px'
                      onChange={(value) => updateSize('padding', value)}
                    />
                    <SizeControl
                      label='Scale'
                      value={sizes.scale}
                      min={0.25}
                      max={3}
                      step={0.05}
                      unit='×'
                      onChange={(value) => updateSize('scale', value)}
                    />
                    <SizeControl
                      label='Font size'
                      value={sizes.fontSize}
                      min={50}
                      max={150}
                      unit='%'
                      onChange={(value) => updateSize('fontSize', value)}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <button
                type='button'
                aria-label='Hide controls for recording'
                title='Hide controls for recording (Esc to restore)'
                className={buttonClass}
                onClick={() => setRecording(true)}
              >
                <Video className='size-4' />
              </button>
              <button
                type='button'
                aria-label={isSidebarOpen ? 'Show sidebar' : 'Hide sidebar'}
                title={isSidebarOpen ? 'Show sidebar' : 'Hide sidebar'}
                className={buttonClass}
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <GalleryHorizontalEnd className='size-4' />
                ) : (
                  <X className='size-4' />
                )}
              </button>
            </div>
          </div>
        )}
        {recording && (
          <>
            <p role='status' className='sr-only'>
              Controls hidden for recording. Press Escape to restore them.
            </p>
            <button
              type='button'
              aria-label='Show Labs controls'
              onClick={() => setRecording(false)}
              className='absolute right-4 top-4 z-50 rounded-md border bg-background px-3 py-2 text-sm text-foreground opacity-0 hover:opacity-100 focus-visible:opacity-100'
            >
              Show controls
            </button>
          </>
        )}
      </div>
      {!recording && <LabSidebar />}
    </div>
  );
}
