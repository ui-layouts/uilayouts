'use client';

import ImageMouseTrail from '@/components/ui/mousetrail';

const images = [
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=85',
];

export default function MomentumMousetrail() {
  return (
    <ImageMouseTrail
      items={images}
      variant='momentum'
      fadeAnimation
      threshold={90}
      maxNumberOfImages={8}
      duration={1400}
      imgClass='h-44 w-32 rounded-sm border border-white/15 grayscale shadow-[0_24px_50px_-15px_#0009] sm:h-56 sm:w-40'
      className='h-[600px] bg-[#151619] text-[#f0eee7] bg-[radial-gradient(ellipse_at_80%_90%,#393c4b_0%,transparent_55%),radial-gradient(ellipse_at_0%_0%,#33322f_0%,transparent_55%)]'
    >
      <div className='pointer-events-none flex h-[600px] flex-col justify-between p-7 sm:p-10'>
        <div className='flex items-center justify-between border-b border-current/15 pb-4 text-[10px] uppercase tracking-[0.2em]'>
          <span>Form / and feeling</span>
          <span className='opacity-50'>02 / In motion</span>
        </div>
        <div className='text-center'>
          <p className='mb-5 text-[10px] uppercase tracking-[0.35em] text-[#d0bfa3]'>
            Nothing beautiful stands still
          </p>
          <h2 className='text-6xl font-medium leading-[0.9] tracking-[-0.07em] sm:text-8xl'>
            Follow the
            <br />
            <span className='font-serif font-normal italic text-[#d0bfa3]'>feeling.</span>
          </h2>
          <p className='mt-6 text-xs text-white/60'>
            A study in movement, form, and a little instinct.
          </p>
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
