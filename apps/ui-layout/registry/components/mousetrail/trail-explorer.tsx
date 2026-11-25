'use client';

import { lazy, Suspense, useId, useMemo, useState } from 'react';
import ImageMouseTrail from '@/components/ui/mousetrail';
import { stampEffects } from './trail-stamp-effects';

const TrailCanvas = lazy(() => import('./trail-canvas'));

type Example = { title: string; description: string } & (
  | { id: 'cursor-trailer'; group: 'codepen' }
  | {
      id: Exclude<keyof typeof stampEffects, 'cursor-trailer'> | 'motion-gooey';
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
    description: 'Photos slide to the pointer, then contract and disappear.',
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
    description: 'Photos settle at the pointer, then drop out of the frame.',
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

const photoUrl = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=720&q=83`;

const stillLife = [
  '1494438639946-1ebd1d20bf85',
  '1490481651871-ab68de25d43d',
  '1600210492486-724fe5c67fb0',
  '1616486338812-3dadae4b4ace',
  '1600607687920-4e2a09cf159d',
  '1616486029423-aaa4789e8c9a',
].map(photoUrl);

const landscapes = [
  '1470770841072-f978cf4d019e',
  '1500534623283-312aade485b7',
  '1500530855697-b586d89ba3ee',
  '1472214103451-9374bd1c798e',
  '1483985988355-763728e1935b',
  '1470071459604-3b5ec3a7fe05',
  '1441974231531-c6227db76b6e',
  '1501785888041-af3ef285b470',
].map(photoUrl);

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

const instrumentSerif = `
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
`;
const displayTitle =
  'pointer-events-none px-4 text-center text-[clamp(2.75rem,8.5cqw,5.5rem)] leading-[0.95] font-normal [font-family:Trail_Instrument_Serif,Georgia,serif]';

const paleStage =
  'bg-[#e8dfd0] text-[#42382e] bg-[radial-gradient(ellipse_at_20%_8%,#f8f3e9,transparent_62%)]';
const darkStage =
  'bg-[#272e27] text-[#f9f3e7] bg-[radial-gradient(ellipse_at_8%_0%,#4d5747,transparent_70%)]';
const hint = (
  <p className='pointer-events-none text-center text-sm font-medium'>
    Move or drag to reveal the trail
  </p>
);

function ExampleStage({ example, stickers }: { example: Example; stickers: string[] }) {
  if (example.group === 'codepen') {
    return (
      <ImageMouseTrail
        items={stickers}
        effect={stampEffects[example.id]}
        threshold={48}
        minInterval={40}
        maxNumberOfImages={20}
        duration={760}
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
    return (
      <ImageMouseTrail
        items={example.group === 'image' ? stillLife : landscapes}
        effect={stampEffects[example.id]}
        threshold={64}
        maxNumberOfImages={11}
        duration={example.id === 'motion-classic' ? 800 : 1420}
        touchAction='none'
        imgClass='h-32 w-24 rounded-sm border border-white/30 shadow-lg sm:h-48 sm:w-36'
        className={`h-[clamp(300px,55vw,520px)] ${example.group === 'image' ? paleStage : darkStage}`}
      >
        {hint}
      </ImageMouseTrail>
    );
  }

  return (
    <div className='@container relative isolate grid h-[clamp(300px,45vw,430px)] touch-none place-items-center overflow-hidden rounded-lg bg-white text-[#151510]'>
      <h2 className={displayTitle}>
        Still <em>in motion.</em>
      </h2>
      <TrailCanvas images={stickers} />
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
    return clayStickers.map((name) => `${baseUrl}/${name}.webp`);
  }, [stickerBaseUrl]);
  const example = examples[index];
  const source = exampleSource(example);

  function step(amount: number) {
    setIndex((value) => (value + amount + examples.length) % examples.length);
  }

  return (
    <section aria-label='Image trail explorer' className='not-prose grid w-full gap-3'>
      <style>{instrumentSerif}</style>
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
