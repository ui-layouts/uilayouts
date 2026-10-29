'use client';

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { IPhoneDuo } from '@/components/ui/iphone-duo';

export default function IPhoneDuoDemo() {
  const [progress, setProgress] = useState(0);

  return (
    <section
      aria-label='Scroll to unfold the phone. Use arrow keys or scroll inside this preview.'
      // biome-ignore lint/a11y/noNoninteractiveTabindex: the scroll region must be focusable for keyboard scrolling.
      tabIndex={0}
      onScroll={(event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
        setProgress(Math.max(0, Math.min(1, scrollTop / (scrollHeight - clientHeight))));
      }}
      className='h-[580px] w-full overflow-y-auto overscroll-contain rounded-xl bg-[#0b1220] text-[#f5f5f0] outline-none focus-visible:ring-2 focus-visible:ring-lime-300'
    >
      <div className='relative h-[1740px]'>
        <div className='sticky top-0 flex h-[580px] flex-col overflow-hidden'>
          <header className='flex items-start justify-between px-6 pt-7 sm:px-9'>
            <div>
              <p className='font-mono text-[10px] uppercase tracking-[0.25em] text-lime-200'>
                Form / 01
              </p>
              <h3 className='mt-3 text-3xl font-medium leading-tight tracking-tight sm:text-4xl'>
                Less in your pocket.
                <br />
                More in your hands.
              </h3>
            </div>
            <ArrowUpRight aria-hidden='true' className='mt-1 size-5 text-white/40' />
          </header>
          <IPhoneDuo
            angle={progress * 180}
            imageSrc='/iphone-duo-artwork.svg'
            interactive={false}
            className='min-h-0 flex-1'
          />
          <footer className='mx-6 mb-6 flex items-end justify-between border-t border-white/15 pt-4 sm:mx-9'>
            <p className='flex items-center gap-2 text-xs text-white/60'>
              <ArrowDown aria-hidden='true' className='size-3.5' />
              Scroll to unfold
            </p>
            <div className='text-right'>
              <p className='font-mono text-2xl tabular-nums text-lime-200'>
                {Math.round(progress * 180)
                  .toString()
                  .padStart(3, '0')}
                °
              </p>
              <p className='mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40'>
                {progress < 0.15 ? 'Pocket' : progress > 0.85 ? 'Canvas' : 'In between'}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
