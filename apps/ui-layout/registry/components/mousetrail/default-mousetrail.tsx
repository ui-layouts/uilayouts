'use client';

import ImageMouseTrail from '@/components/ui/mousetrail';

const images = [
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=85',
];

export default function FollowMousetrail() {
  return (
    <ImageMouseTrail
      items={images}
      variant='follow'
      touchAction='none'
      fadeAnimation
      threshold={90}
      maxNumberOfImages={8}
      duration={1400}
      imgClass='h-44 w-32 rounded-[2px] border-[5px] border-[#fffdf7] shadow-[0_16px_45px_-15px_#55432c66] sm:h-56 sm:w-40'
      className='h-[600px] bg-[#eee9df] text-[#413d35] bg-[radial-gradient(ellipse_at_15%_10%,#fffdf7_0%,transparent_55%),radial-gradient(ellipse_at_90%_100%,#cbbba5_0%,transparent_60%)]'
    >
      <div className='pointer-events-none flex h-[600px] flex-col justify-between p-7 sm:p-10'>
        <div className='flex items-center justify-between border-b border-current/15 pb-4 text-[10px] uppercase tracking-[0.2em]'>
          <span>Still life studio</span>
          <span className='opacity-50'>01 / Soft focus</span>
        </div>
        <div className='text-center'>
          <p className='mb-5 text-[10px] uppercase tracking-[0.35em] opacity-60'>
            An archive of everyday beauty
          </p>
          <h2 className='font-serif text-6xl font-normal leading-[0.9] tracking-[-0.06em] sm:text-8xl'>
            The art of
            <br />
            <em>noticing.</em>
          </h2>
          <p className='mt-6 text-xs opacity-60'>Good things are all around you.</p>
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
