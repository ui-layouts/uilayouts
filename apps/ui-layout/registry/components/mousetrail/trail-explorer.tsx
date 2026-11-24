'use client';

import { lazy, Suspense, useId, useState } from 'react';
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
    id: 'motion-velocity',
    title: 'Velocity',
    description: 'Move slowly for soft monochrome, or quickly for large, sharp color.',
    group: 'motion',
    demo: 6,
  },
  {
    id: 'motion-gooey',
    title: 'Gooey',
    description: 'Rounded drops swell into photos and connect where they meet.',
    group: 'motion',
    demo: 15,
  },
  {
    id: 'cursor-trailer',
    title: 'Cursor Trailer',
    description: 'Tilted photos spring into view and shrink in place.',
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

const cursorPhotos = [
  '1518005020951-eccb494ad742',
  '1518837695005-2083093ee35b',
  '1501785888041-af3ef285b470',
  '1616486338812-3dadae4b4ace',
].map(photoUrl);

const paleStage =
  'bg-[#e8dfd0] text-[#42382e] bg-[radial-gradient(ellipse_at_20%_8%,#f8f3e9,transparent_62%)]';
const darkStage =
  'bg-[#272e27] text-[#f9f3e7] bg-[radial-gradient(ellipse_at_8%_0%,#4d5747,transparent_70%)]';
const hint = (
  <p className='pointer-events-none text-center text-sm font-medium'>
    Move or drag to reveal the trail
  </p>
);

function ExampleStage({ example }: { example: Example }) {
  if (example.group === 'codepen') {
    return (
      <ImageMouseTrail
        items={cursorPhotos}
        effect={stampEffects[example.id]}
        threshold={100}
        minInterval={70}
        maxNumberOfImages={18}
        duration={1200}
        touchAction='none'
        imgClass='mt-10 h-48 w-32 rounded-sm shadow-xl sm:mt-[75px] sm:h-[300px] sm:w-[200px]'
        className='h-[clamp(300px,55vw,520px)] bg-[#eeedf5] text-[#332d43] bg-[radial-gradient(ellipse_at_18%_12%,#fffaf4,transparent_70%)]'
      >
        {hint}
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
    <div
      className={`relative isolate grid h-[clamp(300px,55vw,520px)] touch-none place-items-center overflow-hidden rounded-lg ${darkStage}`}
    >
      {hint}
      <TrailCanvas images={landscapes} />
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

export default function MousetrailExplorer() {
  const id = useId();
  const [index, setIndex] = useState(0);
  const example = examples[index];
  const source = exampleSource(example);

  function step(amount: number) {
    setIndex((value) => (value + amount + examples.length) % examples.length);
  }

  return (
    <section aria-label='Image trail explorer' className='not-prose grid w-full gap-3'>
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
          <ExampleStage key={example.id} example={example} />
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
