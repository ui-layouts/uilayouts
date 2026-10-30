'use client';

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
      className='h-[580px] w-full overflow-y-auto overscroll-contain rounded-xl bg-[#f6f6f3] text-[#242622] outline-none focus-visible:ring-2 focus-visible:ring-[#6a795c]'
    >
      <div className='relative h-[1740px]'>
        <div className='sticky top-0 h-[580px] overflow-hidden'>
          <IPhoneDuo angle={progress * 180} interactive={false} className='h-full' />
        </div>
      </div>
    </section>
  );
}
