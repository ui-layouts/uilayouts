'use client';

import { animate, useMotionValue, useMotionValueEvent, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { IPhoneDuo } from '@/components/ui/iphone-duo';

export default function IPhoneDuoHover() {
  const [open, setOpen] = useState(false);
  const [angle, setAngle] = useState(0);
  const opening = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  useMotionValueEvent(opening, 'change', setAngle);

  useEffect(() => {
    const animation = animate(opening, open ? 180 : 0, {
      duration: reducedMotion ? 0 : 1.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => animation.stop();
  }, [open, opening, reducedMotion]);

  return (
    <div
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setOpen(false);
      }}
      className='group block w-full overflow-hidden rounded-xl bg-[#eae8e2] text-left text-[#292b25] outline-none focus-visible:ring-2 focus-visible:ring-emerald-700'
    >
      <div className='flex items-center justify-between px-6 pt-6'>
        <span className='font-mono text-[10px] uppercase tracking-[0.2em] opacity-50'>
          Form / 02
        </span>
        <span className='rounded-full border border-black/15 px-3 py-1 text-[11px]'>
          Hover or tap
        </span>
      </div>
      <IPhoneDuo angle={angle} screen='launcher' interactive={false} className='h-[380px]' />
      <button
        type='button'
        aria-label={open ? 'Close the phone' : 'Unfold the phone'}
        aria-pressed={open}
        onClick={() => setOpen((value) => !value)}
        className='flex w-full items-end justify-between px-6 pb-6 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-emerald-700'
      >
        <span className='text-2xl font-medium tracking-tight'>Room for more.</span>
        <span aria-hidden='true' className='text-xl transition-transform group-hover:rotate-45'>
          ↗
        </span>
      </button>
    </div>
  );
}
