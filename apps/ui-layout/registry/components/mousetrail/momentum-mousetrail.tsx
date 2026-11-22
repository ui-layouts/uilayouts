'use client';

import ImageMouseTrail from '@/components/ui/mousetrail';

const images = [
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=480&q=85',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=480&q=85',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=480&q=85',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=480&q=85',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=480&q=85',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=480&q=85',
];

export default function MomentumMousetrail() {
  return (
    <ImageMouseTrail
      items={images}
      variant='momentum'
      fadeAnimation
      threshold={70}
      maxNumberOfImages={10}
      duration={1300}
      imgClass='h-40 w-28 rounded-md shadow-xl sm:h-52 sm:w-40'
      className='h-[560px] bg-[#181822] text-[#ede9ff]'
    >
      <div className='pointer-events-none px-6 text-center'>
        <p className='mb-6 text-xs uppercase tracking-[0.3em] opacity-60'>Image trail / 02</p>
        <h2 className='max-w-xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl'>
          Keep the feeling.
        </h2>
        <p className='mt-6 text-sm opacity-60'>A little motion goes a long way.</p>
        <p className='mt-16 text-xs uppercase tracking-[0.2em] opacity-50'>
          Move your pointer · Drag on touch
        </p>
      </div>
    </ImageMouseTrail>
  );
}
