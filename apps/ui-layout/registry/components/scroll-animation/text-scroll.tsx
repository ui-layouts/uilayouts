'use client';
import React from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

function TextScroll() {
  return (
    <section>
      <div className='h-[500px] grid place-content-center'>
        <h1 className='text-6xl font-semibold text-center py-8'>
          Scroll Down 👇{' '}
        </h1>
      </div>
      <div className='py-2'>
        <div>
          <ScrollAnimation
            direction='left'
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            className='text-6xl text-left py-44 2xl:max-w-xl max-w-lg'
          >
            <p>Take a glance over to the left side.</p>
          </ScrollAnimation>

          <ScrollAnimation
            direction='right'
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            className='text-6xl text-right py-44 2xl:max-w-xl max-w-lg ml-auto'
          >
            <p>Now shift your eyes to the right side.</p>
          </ScrollAnimation>

          <ScrollAnimation
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            className='text-6xl max-w-md mx-auto text-center py-44 2xl:max-w-xl'
          >
            <p>And finally, don’t miss what’s waiting below.</p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default TextScroll;
