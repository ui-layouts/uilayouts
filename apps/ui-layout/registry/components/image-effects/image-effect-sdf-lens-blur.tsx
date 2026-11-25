'use client';

import { useState } from 'react';
import { SdfLensBlur } from '@/components/ui/image-effect-sdf-lens-blur';

const variations = [0, 1, 2, 3] as const;

export default function Demo() {
  const [selected, setSelected] = useState<(typeof variations)[number]>(0);

  return <figure className='m-0 w-full'>
    <SdfLensBlur variation={selected} />
    <figcaption className='flex items-center justify-between px-3 py-2 text-xs'>
      <span className="sr-only">Move your pointer across a shape.</span>
      <div className='flex gap-1' role='group' aria-label='Shape variation'>
        {variations.map(index => <button key={index} type='button' onClick={() => setSelected(index)}
          aria-label={'Variation '+(index+1)} aria-pressed={selected === index}
          className={'rounded border px-3 py-1 '+(selected === index ? 'bg-foreground text-background' : '')}>
          {index+1}
        </button>)}
      </div>
    </figcaption>
  </figure>;
}
