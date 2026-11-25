'use client';

import { lazy, Suspense, useId, useMemo, useState } from 'react';
import ImageMouseTrail from '@/components/ui/mousetrail';
import { stampEffects } from './trail-stamp-effects';

const TrailCanvas = lazy(() => import('./trail-canvas'));

type StampPreviewId = Exclude<keyof typeof stampEffects, 'cursor-trailer'>;

type Example = { title: string; description: string } & (
  | { id: 'cursor-trailer'; group: 'codepen' }
  | {
      id: StampPreviewId | 'motion-gooey';
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
    description: 'Playful 3D emoji slide to the pointer, then shrink away.',
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
    description: 'Photos settle at the pointer and take turns falling out of frame.',
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

const photoUrls = (...ids: string[]) =>
  ids.map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=480&q=80`);

// Fluent Emoji artwork © Microsoft Corporation, MIT licensed.
// https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE
const emojiRoot =
  'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@1ffb34c752ecf5d402f04cfb4b392c77f57c54bc/assets';
const shrinkEmoji = [
  'Melting%20face/3D/melting_face_3d.png',
  'Face%20with%20spiral%20eyes/3D/face_with_spiral_eyes_3d.png',
  'Face%20with%20peeking%20eye/3D/face_with_peeking_eye_3d.png',
  'Star-struck/3D/star-struck_3d.png',
  'Zany%20face/3D/zany_face_3d.png',
  'Sparkling%20heart/3D/sparkling_heart_3d.png',
].map((path) => `${emojiRoot}/${path}`);

type StampPreview = {
  items: string[];
  className: string;
  imgClass?: string;
  duration: number;
  threshold?: number;
  minInterval?: number;
};

const stampPreviews: Record<StampPreviewId, StampPreview> = {
  'image-shrink': {
    items: shrinkEmoji,
    className: 'bg-[#fff1e8] text-[#493029]',
    imgClass: 'size-[clamp(74px,14cqw,122px)] object-contain',
    duration: 1420,
  },
  'image-bloom': {
    items: photoUrls(
      '1795169972131-f816a82536a8',
      '1794350325792-c83741409cc7',
      '1793034574913-b8c21bbd13fb'
    ),
    className: 'bg-[#edf0e3] text-[#293127] bg-[radial-gradient(ellipse_at_28%_0%,#faf9f0,transparent_75%)]',
    duration: 1420,
  },
  'image-fall': {
    items: photoUrls(
      '1793911166330-08fd4bfe75c6',
      '1793033259489-200bd4af74e4',
      '1792081863451-1236a1248831'
    ),
    className: 'bg-[#e6edf3] text-[#25303a] bg-[radial-gradient(ellipse_at_30%_0%,#f7fafc,transparent_74%)]',
    duration: 950,
    threshold: 50,
    minInterval: 195,
  },
  'motion-classic': {
    items: photoUrls(
      '1795258566246-ae94d575fb80',
      '1720462393492-046dfa56b1d1',
      '1792655282510-7c34839d0b2b'
    ),
    className: 'bg-[#202226] text-[#f6f3ed] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,#ffffff0a_3px,#ffffff0a_4px)]',
    duration: 800,
  },
  'motion-innerscape': {
    items: photoUrls(
      '1635776063043-ab23b4c226f6',
      '1795153624227-49ec391b973e',
      '1788802906864-37fe089b2aff'
    ),
    className: 'bg-[#ddd3ee] text-[#332642] bg-[radial-gradient(ellipse_at_50%_12%,#faf6ff,transparent_74%),repeating-linear-gradient(135deg,transparent_0px,transparent_7px,#31244a14_7px,#31244a14_8px)]',
    duration: 1420,
  },
};

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

function ExampleStage({ example, stickers }: { example: Example; stickers: string[] }) {
  if (example.group === 'codepen') {
    return (
      <ImageMouseTrail
        items={stickers}
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
    const { className, imgClass, threshold = 64, ...preview } = stampPreviews[example.id];
    return (
      <ImageMouseTrail
        {...preview}
        effect={stampEffects[example.id]}
        threshold={threshold}
        maxNumberOfImages={11}
        touchAction='none'
        imgClass={imgClass ?? 'h-32 w-24 rounded-sm border border-white/30 shadow-lg sm:h-48 sm:w-36'}
        className={`@container h-[clamp(300px,55vw,520px)] ${className}`}
      >
        {hint}
      </ImageMouseTrail>
    );
  }

  return (
    <div className='@container relative isolate grid h-[clamp(300px,45vw,430px)] touch-none place-items-center overflow-hidden rounded-lg bg-white text-[#151510]'>
      <h2 className='pointer-events-none px-4 text-center text-[clamp(2.5rem,8cqw,5rem)] leading-none font-semibold tracking-[-0.08em] [font-family:Trail_Space_Grotesk,sans-serif]'>
        Soft shapes.
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
