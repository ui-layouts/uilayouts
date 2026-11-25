'use client';

import { useEffect, useState, type ComponentType } from 'react';
import type { ImageEffectProps } from '@/components/ui/image-effects/props';

const studies = [
  ['Alpine ridge', 'ridge'], ['Forest floor', 'forest'], ['Pacific light', 'coast'],
  ['Desert plateau', 'dunes'], ['Glacial lake', 'lake'], ['Lakeside valley', 'valley'],
] as const;
const images = studies.map(([, id]) => '/image-effects/' + id + '.webp');

type DemoKind = 'gooey' | 'hover' | 'crop' | 'cloth' | 'gallery' | 'path' | 'grid' | 'glass' | 'portrait';
type DemoProps = { effect: ComponentType<ImageEffectProps>; kind: DemoKind; label: string; photographs?: readonly string[]; sourceUrl?: string };

export function WebsiteDemo({ effect: Effect, kind, label, photographs, sourceUrl }: DemoProps) {
  const [path, setPath] = useState(1);
  const [portrait, setPortrait] = useState(false);
  const [ratio, setRatio] = useState('4/3');
  const [resolved, setResolved] = useState<readonly string[]>();
  useEffect(() => {
    if (!photographs) return;
    let active = true;
    // Keep the local studies available if a reference host is unavailable.
    const fallback = window.setTimeout(() => { if (active) setResolved(images); }, 6500);
    Promise.all(photographs.map((src, i) => new Promise<string>(resolve => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(src);
      img.onerror = () => resolve(images[i % images.length]);
      img.src = src;
    }))).then(sources => {
      if (!active) return;
      clearTimeout(fallback);
      setResolved(sources);
    });
    return () => { active = false; clearTimeout(fallback); };
  }, [photographs]);
  const collection = photographs ? resolved : images;
  const figure = 'm-0 min-w-0 overflow-hidden rounded-sm text-neutral-900 [&_[role=status]]:text-neutral-700!';
  const legend = 'px-1 py-3 text-xs leading-relaxed text-neutral-600';

  if (!collection) return <div className='grid aspect-video w-full place-items-center text-sm' role='status'>Loading photographs…</div>;
  if (kind === 'gooey') return <figure className='relative m-0 w-full overflow-hidden [&_[role=status]]:text-neutral-700! px-8 py-10 text-[#181625]'>
    <div className='relative mx-auto max-w-lg'>
      <Effect background='#ffffff' images={collection} label='Woods and forests' style={{aspectRatio:'5/4'}} />
      <h3 className='pointer-events-none absolute bottom-4 left-4 m-0 font-serif text-5xl leading-[0.85] tracking-tight text-white sm:text-6xl'>Woods &amp;<br/><i className='pl-6'>Forests</i></h3>
    </div><figcaption className={legend}>Hover to reveal. Click to open or close the image.</figcaption>
  </figure>;
  if (kind === 'crop') {
    return <figure className={'w-full p-4 ' + figure}>
      <div className='mx-auto w-full max-w-xl'><Effect background='#ffffff' images={[images[0]]} label={label} style={{ aspectRatio:ratio }} /></div>
      <figcaption className='flex flex-wrap items-center justify-between gap-2 pt-4'>
        <span className={legend}>Move across the image to change the crop.</span>
        <div role='group' aria-label='Frame aspect ratio' className='flex gap-1'>
          {['4/3','1/1','3/4'].map(value => <button type='button' key={value} aria-pressed={value === ratio}
            onClick={() => setRatio(value)} className={'rounded border px-2 py-1 text-sm '+(value===ratio?'bg-neutral-950 text-white':'')}>{value.replace('/',':')}</button>)}
        </div>
      </figcaption>
    </figure>;
  }

  const instructions = {
    hover: 'Move your pointer over the photograph.',
    cloth: 'Click the cloth to change the photograph.',
    path: 'Scroll along the selected camera path.',
    gallery: 'Drag or scroll to explore. Use the arrow keys when focused.',
    grid: 'Drag in any direction to explore the canvas.',
    portrait: portrait ? 'Move the pointer to turn the portrait.' : 'Drag to explore the grid. Move the pointer to displace nearby images.',
    glass: 'Drag the glass tiles to explore the collection.',
  }[kind];

  const media = kind === 'glass' ? ['/image-effects/flowers.webp', ...images] : kind === 'portrait' && portrait ? ['/image-effects/portrait.webp'] : collection;
  const glass = kind === 'glass' ? { videos: ['/image-effects/flowers.mp4'], labels: ['Meadow study', ...studies.map(([name]) => name)] } : {};
  return <figure className={'w-full p-3 sm:p-5 ' + figure}>
    <Effect background='#ffffff' images={media} label={label} {...glass} {...(kind === 'path' ? {path} : {})} {...(kind === 'portrait' ? { variant: portrait ? 'portrait' : 'grid' } : {})} style={{ aspectRatio:kind === 'hover' ? '3/2' : '16/10' }} />
    <figcaption className='flex flex-wrap items-center justify-between gap-2'>
      <span className={legend}>{instructions} {sourceUrl && <a data-original-credit className='underline' href={sourceUrl}>Original study</a>}</span>
      {kind === 'path' && <label className='flex items-center gap-2 text-xs'>Camera path
        <select value={path} onChange={e => setPath(Number(e.target.value))} className='rounded border bg-white p-1'>
          {[1,2,3,4,5].map(value => <option key={value} value={value}>{value}</option>)}
        </select></label>}
      {kind === 'portrait' && <div role='group' aria-label='View' className='flex gap-1'>
        {['Grid', 'Portrait'].map((mode, i) => <button key={mode} type='button' aria-pressed={portrait === Boolean(i)} onClick={() => setPortrait(Boolean(i))}
          className={'rounded border px-3 py-1 text-xs ' + (portrait === Boolean(i) ? 'bg-neutral-950 text-white' : '')}>{mode}</button>)}
      </div>}
    </figcaption>
  </figure>;
}
