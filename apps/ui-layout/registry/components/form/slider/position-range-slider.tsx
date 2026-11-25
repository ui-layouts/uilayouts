'use client';
import { DualRangeSlider } from '@/components/ui/slider';
import React, { useState } from 'react';

export default function PositionRangeSlider() {
  const [celPer, setCelPer] = useState(70);
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className='mx-auto w-[calc(100%-1rem)] max-w-xl space-y-20 py-20'>
        <DualRangeSlider
          label={() => <>$</>}
          lableContenPos={'left'}
          value={values}
          onValueChange={setValues}
          min={0}
          max={100}
          step={1}
        />

        <DualRangeSlider
          label={() => <>℃</>}
          value={[celPer]}
          labelPosition='bottom'
          onValueChange={([celPer]) => celPer != null && setCelPer(celPer)}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </>
  );
}
