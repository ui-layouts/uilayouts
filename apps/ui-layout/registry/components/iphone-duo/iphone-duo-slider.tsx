'use client';

import { Slider } from '@ui-sdk/react/slider';
import { useId, useState } from 'react';
import { IPhoneDuo } from '@/components/ui/iphone-duo';

export default function IPhoneDuoSlider() {
  const [angle, setAngle] = useState(180);
  const id = useId();

  return (
    <div className='flex h-[580px] w-full flex-col overflow-hidden rounded-xl bg-[#f6f6f3] text-[#242622]'>
      <IPhoneDuo angle={angle} interactive={false} className='min-h-0 flex-1' />
      <div className='mx-auto mb-7 w-full max-w-[420px] px-8'>
        <label htmlFor={id} className='sr-only'>
          Fold angle
        </label>
        <Slider
          className='contents'
          aria-label='Fold angle'
          min={0}
          max={180}
          step={0.1}
          value={angle}
          onValueChange={setAngle}
        >
          <input
            id={id}
            type='range'
            min='0'
            max='180'
            step='0.1'
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
            style={{ colorScheme: 'light' }}
            className='h-9 w-full cursor-ew-resize accent-[#6a795c]'
          />
        </Slider>
      </div>
    </div>
  );
}
