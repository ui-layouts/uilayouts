'use client';
import { DualRangeSlider } from '@/components/ui/slider';
import React, { useState } from 'react';

export default function DualRangeSliderDemo() {
  const [celPer, setCelPer] = useState(70);
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className=' w-3/5 mx-auto space-y-20 py-20'>
        <DualRangeSlider
          label={() => <>℃</>}
          value={values}
          onValueChange={setValues}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </>
  );
}
