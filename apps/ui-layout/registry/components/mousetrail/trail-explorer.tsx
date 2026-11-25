'use client';

import { lazy, Suspense, useMemo } from 'react';
import ImageMouseTrail from '@/components/ui/mousetrail';
import { stampEffects } from './trail-stamp-effects';

const TrailCanvas = lazy(() => import('./trail-canvas'));

type PhotoPreviewId = Exclude<keyof typeof stampEffects, 'cursor-trailer' | 'image-shrink'>;
export type ImageTrailPreviewVariant = keyof typeof stampEffects | 'motion-gooey';

const photos = [
  '1635776063043-ab23b4c226f6',
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
  id,
  stickers,
}: {
  id: ImageTrailPreviewVariant;
  stickers: string[];
}) {
  if (id === 'cursor-trailer') {
    return (
      <ImageMouseTrail
        items={stickers}
        effect={stampEffects[id]}
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

  if (id !== 'motion-gooey') {
    const shrink = id === 'image-shrink';
    return (
      <ImageMouseTrail
        items={shrink ? stickers : photos}
        effect={stampEffects[id]}
        threshold={64}
        maxNumberOfImages={11}
        duration={id === 'motion-classic' ? 800 : 1420}
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
      <TrailCanvas images={stickers} />
    </div>
  );
}

export function LocalImageTrailPreview({ variant }: { variant?: ImageTrailPreviewVariant }) {
  return <ImageTrailPreview variant={variant} stickerBaseUrl='/image-trail/clay' />;
}

export default function ImageTrailPreview({
  variant = 'motion-gooey',
  stickerBaseUrl = 'https://www.ui-layouts.com/image-trail/clay',
}: { variant?: ImageTrailPreviewVariant; stickerBaseUrl?: string } = {}) {
  const stickers = useMemo(() => {
    const baseUrl = stickerBaseUrl.replace(/\/$/, '');
    const isTravel = variant === 'image-shrink';
    const names = isTravel ? travelStickers : clayStickers;
    const folder = isTravel ? `${baseUrl}/travel` : baseUrl;
    return names.map((name) => `${folder}/${name}.webp`);
  }, [stickerBaseUrl, variant]);

  return (
    <div data-trail-example={variant} className='not-prose w-full'>
      <style>{trailFonts}</style>
      <Suspense
        fallback={
          <p role='status' className='grid min-h-80 place-items-center rounded-lg bg-muted text-sm'>
            Loading preview…
          </p>
        }
      >
        <ExampleStage key={variant} id={variant} stickers={stickers} />
      </Suspense>
    </div>
  );
}
