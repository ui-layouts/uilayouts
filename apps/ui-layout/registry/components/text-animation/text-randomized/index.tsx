'use client';

import { RandomizedTextEffect } from '@/components/ui/text-randomized';
import React from 'react';

function TextRandomized() {
  return (
    <>
      <div className=' py-10 rounded-md'>
        <h2 className='font-departure text-4xl relative z-10 text-center h-[120px] md:h-auto leading-tight'>
          <RandomizedTextEffect text='Production ready code' />
        </h2>
      </div>
    </>
  );
}

export default TextRandomized;
