'use client';
import React from 'react';
import ScrollElement from '@/components/ui/scroll-animation';

function index() {
  return (
    <section>
      <div className='h-[500px] grid place-content-center'>
        <h1 className='text-6xl font-semibold text-center py-8'>
          Scroll Down 👇{' '}
        </h1>
      </div>
      <div className='py-2'>
        <div>
          <ScrollElement
            direction='left'
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            className='text-6xl text-left py-44 2xl:max-w-xl max-w-lg'
          >
            <p>Take a glance over to the left side.</p>
          </ScrollElement>

          <ScrollElement
            direction='right'
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            className='text-6xl text-right py-44 2xl:max-w-xl max-w-lg ml-auto'
          >
            <p>Now shift your eyes to the right side.</p>
          </ScrollElement>

          <ScrollElement
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
            className='text-6xl max-w-md mx-auto text-center py-44 2xl:max-w-xl'
          >
            <p>And finally, don’t miss what’s waiting below.</p>
          </ScrollElement>
        </div>
      </div>
    </section>
  );
}

export default index;
