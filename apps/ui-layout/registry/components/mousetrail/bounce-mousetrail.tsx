'use client';

import ImageMouseTrail from '@/components/ui/mousetrail';

const images = [
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=85',
];

export default function BounceMousetrail() {
  return (
    <ImageMouseTrail
      items={images}
      variant='bounce'
      touchAction='none'
      fadeAnimation
      threshold={90}
      maxNumberOfImages={8}
      duration={1600}
      imgClass='h-44 w-32 rounded-xl border-[4px] border-white/90 shadow-[0_18px_45px_-12px_#9b5c6055] sm:h-56 sm:w-40'
      className='h-[600px] bg-[#f3e5e0] text-[#713f46] bg-[radial-gradient(ellipse_at_50%_40%,#fff9e8_0%,transparent_55%),radial-gradient(ellipse_at_0%_100%,#e6b3ac_0%,transparent_65%),radial-gradient(ellipse_at_100%_0%,#dbd9c4_0%,transparent_60%)]'
    >
      <div className='pointer-events-none flex h-[600px] flex-col justify-between p-7 sm:p-10'>
        <div className='flex items-center justify-between border-b border-current/15 pb-4 text-[10px] uppercase tracking-[0.2em]'>
          <span>Ordinary magic</span>
          <span className='opacity-50'>03 / Play a little</span>
        </div>
        <div className='text-center'>
          <p className='mb-5 text-[10px] uppercase tracking-[0.35em] opacity-65'>
            For the joy of the unexpected
          </p>
          <h2 className='font-serif text-7xl font-normal italic leading-[0.85] tracking-[-0.07em] sm:text-9xl'>
            Oh,
            <br />
            hello.
          </h2>
          <p className='mt-6 text-xs opacity-65'>A little surprise. A lovely little moment.</p>
        </div>
        <div className='flex items-end justify-between border-t border-current/15 pt-4 text-[10px] uppercase tracking-[0.18em] opacity-60'>
          <span>
            Collected moments,
            <br />
            made to move.
          </span>
          <span className='text-right'>
            Move to explore
            <br />
            Drag on touch ↗
          </span>
        </div>
      </div>
    </ImageMouseTrail>
  );
}
