'use client';

import { Aperture } from 'lucide-react';
import { useId, useState } from 'react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

const blurClasses = {
  sm: 'backdrop-blur-xs',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
} as const;
const edgeOptions = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
const cardClass = 'grid h-32 w-40 place-items-center text-white';
const solidFill = 'bg-[#193349]';
const frostClass = `border border-white/25 ${solidFill} supports-[backdrop-filter:blur(1px)]:bg-white/10`;
const liquidClass = `${solidFill} supports-[backdrop-filter:blur(1px)]:bg-transparent`;
const fieldClass = 'h-9 min-w-0 w-full rounded-md border border-input bg-background px-2 text-sm';

const finishes = {
  frosted: { label: 'Frosted', detail: 'Backdrop blur softens the lines under the panel.' },
  liquid: {
    label: 'Liquid glass',
    detail: 'Displacement bends the lines, and inset light defines the edge.',
  },
} as const;

export function LiquidGlassPlayground() {
  const finishGroup = useId();
  const [finish, setFinish] = useState<keyof typeof finishes>('liquid');
  const [blur, setBlur] = useState<keyof typeof blurClasses>('sm');
  const [edge, setEdge] = useState<(typeof edgeOptions)[number]>('sm');
  const [radius, setRadius] = useState(32);

  const borderRadius = `${radius}px`;
  const frostedClassName = `${cardClass} ${frostClass} ${blurClasses[blur]}`;
  const isLiquid = finish === 'liquid';
  const sample = (
    <span className='relative z-30 grid justify-items-center gap-1.5 text-sm font-medium drop-shadow-md'>
      <Aperture size={48} strokeWidth={1.35} aria-hidden='true' />
      Glass surface
    </span>
  );
  const code = isLiquid
    ? `<LiquidGlassCard
  draggable={false}
  borderRadius="${borderRadius}"
  blurIntensity="${blur}"
  shadowIntensity="${edge}"
  className="${cardClass}
    ${liquidClass}"
>
  <span className="relative z-30">
    Glass surface
  </span>
</LiquidGlassCard>`
    : `<div
  style={{ borderRadius: '${borderRadius}' }}
  className="${cardClass}
    ${frostClass}
    ${blurClasses[blur]}"
>
  <span>Glass surface</span>
</div>`;

  return (
    <div className='not-prose my-5 overflow-hidden rounded-xl border border-border bg-card'>
      <fieldset className='flex flex-wrap items-center gap-2 px-4 pt-4'>
        <legend className='sr-only'>Surface finish</legend>
        {(Object.keys(finishes) as (keyof typeof finishes)[]).map((option) => (
          <label key={option} className='cursor-pointer'>
            <input
              type='radio'
              name={finishGroup}
              className='peer sr-only'
              checked={finish === option}
              onChange={() => setFinish(option)}
            />
            <span className='block rounded-md border border-border px-3 py-1.5 text-sm peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring'>
              {finishes[option].label}
            </span>
          </label>
        ))}
      </fieldset>
      <p className='px-4 pt-2 pb-3 text-sm text-muted-foreground' aria-live='polite'>
        {finishes[finish].detail}
      </p>
      <div className='grid border-y border-border sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]'>
        <div
          role='group'
          aria-label='Glass preview'
          className='relative isolate grid min-h-56 place-items-center overflow-hidden bg-[#102c43] p-4'
        >
          <div
            aria-hidden='true'
            className='absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,transparent_0px_18px,#e8f6ff75_19px_20px),linear-gradient(125deg,#18273e_8%,#0c5666_41%,#63908b_42%,#2e5e75_64%,#654960_65%,#162641_94%)]'
          />
          {isLiquid ? (
            <LiquidGlassCard
              draggable={false}
              borderRadius={borderRadius}
              blurIntensity={blur}
              shadowIntensity={edge}
              className={`${cardClass} ${liquidClass}`}
            >
              {sample}
            </LiquidGlassCard>
          ) : (
            <div style={{ borderRadius }} className={frostedClassName}>
              {sample}
            </div>
          )}
        </div>
        <div className='min-w-0 border-t border-border bg-muted/35 sm:border-t-0 sm:border-l'>
          <p className='border-b border-border px-4 py-2 text-xs font-medium text-muted-foreground'>
            JSX
          </p>
          <pre
            className='whitespace-pre-wrap break-words px-4 py-3 text-xs leading-5'
            aria-label='Live JSX example'
          >
            <code>{code}</code>
          </pre>
        </div>
      </div>
      <div className='grid gap-3 p-4 sm:grid-cols-3'>
        <label className='grid content-start gap-1.5 text-sm'>
          Blur intensity
          <select
            className={fieldClass}
            value={blur}
            onChange={(event) => setBlur(event.target.value as typeof blur)}
          >
            {Object.keys(blurClasses).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className='grid content-start gap-1.5 text-sm'>
          Edge highlight
          <select
            className={`${fieldClass} disabled:opacity-50`}
            value={edge}
            disabled={!isLiquid}
            onChange={(event) => setEdge(event.target.value as typeof edge)}
          >
            {edgeOptions.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className='grid content-start gap-1.5 text-sm'>
          <span className='flex justify-between gap-2'>
            Corner radius <span className='tabular-nums text-muted-foreground'>{borderRadius}</span>
          </span>
          <input
            type='range'
            min={4}
            max={64}
            step={2}
            value={radius}
            onChange={(event) => setRadius(event.target.valueAsNumber)}
            className='h-9 w-full accent-primary'
            aria-valuetext={borderRadius}
          />
        </label>
      </div>
    </div>
  );
}
