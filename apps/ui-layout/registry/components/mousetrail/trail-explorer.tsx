'use client';

import { lazy, Suspense, useId, useMemo, useState } from 'react';
import ImageMouseTrail from '@/components/ui/mousetrail';
import { stampEffects } from './trail-stamp-effects';

const TrailCanvas = lazy(() => import('./trail-canvas'));

type PhotoPreviewId = Exclude<keyof typeof stampEffects, 'cursor-trailer' | 'image-shrink'>;

type Example = { title: string; description: string } & (
  | { id: 'cursor-trailer'; group: 'codepen' }
  | {
      id: PhotoPreviewId | 'image-shrink' | 'motion-gooey';
      group: 'image' | 'motion';
      demo: number;
    }
);

const groups = {
  image: 'Image Trail Effects',
  motion: 'Motion Trail Animations',
  codepen: 'CodePen',
};

const examples: Example[] = [
  {
    id: 'image-shrink',
    title: 'Shrink Away',
    description: 'Travel stickers slide to the pointer, then shrink away.',
    group: 'image',
    demo: 1,
  },
  {
    id: 'image-bloom',
    title: 'Bloom Out',
    description: 'Photos grow outward as they dissolve.',
    group: 'image',
    demo: 2,
  },
  {
    id: 'image-fall',
    title: 'Gravity Drop',
    description: 'Photos settle at the pointer, then drop out of frame.',
    group: 'image',
    demo: 3,
  },
  {
    id: 'motion-classic',
    title: 'Classic',
    description: 'Photos glide from behind the pointer and shrink as they exit.',
    group: 'motion',
    demo: 1,
  },
  {
    id: 'motion-innerscape',
    title: 'Innerscape',
    description: 'A bright cropped view opens to reveal the full picture.',
    group: 'motion',
    demo: 2,
  },
  {
    id: 'motion-gooey',
    title: 'Gooey',
    description: 'Clay stickers swell into view and connect as they pass each other.',
    group: 'motion',
    demo: 15,
  },
  {
    id: 'cursor-trailer',
    title: 'Cursor Trailer',
    description: 'Move or drag to send clay stickers across the title.',
    group: 'codepen',
  },
];

const photos = [
  '1635776063043-ab23b4c226f6',
  '1795258566246-ae94d575fb80',
  '1720462393492-046dfa56b1d1',
  '1792655282510-7c34839d0b2b',
  '1795169972131-f816a82536a8',
  '1795153624227-49ec391b973e',
  '1793911166330-08fd4bfe75c6',
  '1788802906864-37fe089b2aff',
  '1794350325792-c83741409cc7',
  '1793033259489-200bd4af74e4',
  '1793034574913-b8c21bbd13fb',
  '1792081863451-1236a1248831',
].map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=480&q=80`);

const photoTitles: Record<PhotoPreviewId, string> = {
  'image-bloom': 'Let color bloom.',
  'image-fall': 'Let it fall.',
  'motion-classic': 'Motion never stops.',
  'motion-innerscape': 'See it differently.',
};

const travelStickers = [
  'airplane',
  'suitcase',
  'compass',
  'binoculars',
  'tent',
  'canoe',
  'bicycle',
  'hiking-boot',
  'sailboat',
  'cable-car',
  'lighthouse',
  'hot-air-balloon',
];

const clayStickers = [
  'alarm-clock',
  'watering-can',
  'fan',
  'mailbox',
  'key',
  'backpack',
  'umbrella',
  'mug',
  'toaster',
  'armchair',
  'flashlight',
  'plant',
];

const trailFonts = `
  @font-face {
    font-family: 'Trail Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwY.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Trail Instrument Serif';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Trail Instrument Serif';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7M.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Trail Space Grotesk';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42VnskPMA.woff2') format('woff2');
  }
`;
const displayTitle =
  'pointer-events-none px-4 text-center text-[clamp(2.75rem,8.5cqw,5.5rem)] leading-[0.95] font-normal [font-family:Trail_Instrument_Serif,Georgia,serif]';

const hint = (
  <p className='pointer-events-none text-center text-sm font-medium'>
    Move or drag to reveal the trail
  </p>
);

function ExampleStage({
  example,
  stickers,
}: {
  example: Example;
  stickers: { clay: string[]; travel: string[] };
}) {
  if (example.group === 'codepen') {
    return (
      <ImageMouseTrail
        items={stickers.clay}
        effect={stampEffects[example.id]}
        threshold={44}
        maxNumberOfImages={20}
        duration={560}
        touchAction='none'
        imgClass='size-[clamp(72px,12.5cqw,128px)] object-contain'
        className='@container h-[clamp(300px,45vw,430px)] bg-[#fdfdfc] text-[#151510] [&>[aria-hidden=true]]:z-20'
      >
        <h2 className={displayTitle}>
          <em>Beyond the</em> Limit
        </h2>
      </ImageMouseTrail>
    );
  }

  if (example.id !== 'motion-gooey') {
    const { id } = example;
    const shrink = id === 'image-shrink';
    return (
      <ImageMouseTrail
        items={shrink ? stickers.travel : photos}
        effect={stampEffects[example.id]}
        threshold={64}
        maxNumberOfImages={11}
        duration={example.id === 'motion-classic' ? 800 : 1420}
        touchAction='none'
        imgClass={
          shrink
            ? 'size-[clamp(74px,14cqw,122px)] object-contain'
            : 'h-32 w-24 rounded-sm border border-white/30 shadow-lg sm:h-48 sm:w-36'
        }
        className='@container h-[clamp(300px,55vw,520px)] bg-white text-[#151510] [&>[aria-hidden=true]]:z-20'
      >
        {shrink ? (
          hint
        ) : (
          <h2 className='pointer-events-none text-balance px-4 text-center text-[clamp(2.75rem,11cqw,8rem)] leading-[0.9] font-bold tracking-[-0.08em] [font-family:Trail_Inter,Arial,sans-serif]'>
            {photoTitles[id]}
          </h2>
        )}
      </ImageMouseTrail>
    );
  }

  return (
    <div className='@container relative isolate grid h-[clamp(300px,45vw,430px)] touch-none place-items-center overflow-hidden rounded-lg bg-white text-[#151510]'>
      <h2 className='pointer-events-none px-4 text-center text-[clamp(2.5rem,8cqw,5rem)] leading-none font-semibold tracking-[-0.08em] [font-family:Trail_Space_Grotesk,sans-serif]'>
        Soft shapes.
      </h2>
      <TrailCanvas images={stickers.clay} />
    </div>
  );
}

function exampleSource(example: Example) {
  if (example.group === 'codepen') {
    return {
      href: 'https://codepen.io/thingbynemanja/full/ogjaaNE',
      label: 'CodePen by Nemanja Kočović',
    };
  }

  const { group, demo } = example;
  const collection =
    group === 'image' ? 'ImageTrailEffects/blob/master' : 'MotionTrailAnimations/blob/main';
  return {
    href: `https://github.com/codrops/${collection}/index${demo === 1 ? '' : demo}.html`,
    label: `Codrops demo ${demo}`,
  };
}

export function MousetrailExplorerPreview() {
  return <MousetrailExplorer stickerBaseUrl='/image-trail/clay' />;
}

export default function MousetrailExplorer({
  stickerBaseUrl = 'https://www.ui-layouts.com/image-trail/clay',
}: { stickerBaseUrl?: string } = {}) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const stickers = useMemo(() => {
    const baseUrl = stickerBaseUrl.replace(/\/$/, '');
    return {
      clay: clayStickers.map((name) => `${baseUrl}/${name}.webp`),
      travel: travelStickers.map((name) => `${baseUrl}/travel/${name}.webp`),
    };
  }, [stickerBaseUrl]);
  const example = examples[index];
  const source = exampleSource(example);

  function step(amount: number) {
    setIndex((value) => (value + amount + examples.length) % examples.length);
  }

  return (
    <section aria-label='Image trail explorer' className='not-prose grid w-full gap-3'>
      <style>{trailFonts}</style>
      <div className='flex flex-wrap items-end justify-between gap-3'>
        <div className='grid min-w-0 flex-1 gap-1.5'>
          <label htmlFor={id} className='text-sm font-medium'>
            Explore examples
          </label>
          <select
            id={id}
            value={example.id}
            onChange={(event) => {
              const next = examples.findIndex((entry) => entry.id === event.target.value);
              if (next >= 0) setIndex(next);
            }}
            className='h-10 w-full max-w-xs rounded-md border bg-background px-2.5 text-sm text-foreground'
          >
            {(Object.keys(groups) as (keyof typeof groups)[]).map((group) => (
              <optgroup key={group} label={groups[group]}>
                {examples
                  .filter((entry) => entry.group === group)
                  .map((entry) => (
                    <option key={entry.id} value={entry.id}>
                      {entry.title}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className='flex shrink-0 items-center gap-2'>
          <button
            type='button'
            aria-label='Previous example'
            onClick={() => step(-1)}
            className='grid size-10 cursor-pointer place-items-center rounded-md border text-lg hover:bg-muted'
          >
            <span aria-hidden='true'>←</span>
          </button>
          <span
            aria-hidden='true'
            className='min-w-12 text-center text-sm tabular-nums text-muted-foreground'
          >
            {index + 1}/{examples.length}
          </span>
          <button
            type='button'
            aria-label='Next example'
            onClick={() => step(1)}
            className='grid size-10 cursor-pointer place-items-center rounded-md border text-lg hover:bg-muted'
          >
            <span aria-hidden='true'>→</span>
          </button>
        </div>
      </div>
      <div data-trail-example={example.id}>
        <Suspense
          fallback={
            <p
              role='status'
              className='grid min-h-80 place-items-center rounded-lg bg-muted text-sm'
            >
              Loading preview…
            </p>
          }
        >
          <ExampleStage key={example.id} example={example} stickers={stickers} />
        </Suspense>
      </div>
      <div className='flex flex-wrap items-baseline justify-between gap-2 text-sm text-muted-foreground'>
        <p aria-live='polite'>
          {example.title}. {example.description}
          {example.id === 'motion-gooey' && ' Canvas adaptation.'}
        </p>
        <a
          href={source.href}
          target='_blank'
          rel='noreferrer'
          className='underline underline-offset-4'
        >
          {source.label}
        </a>
      </div>
    </section>
  );
}
