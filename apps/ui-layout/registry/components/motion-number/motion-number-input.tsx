'use client';
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrement,
  NumberInputIncrement,
} from '@ui-sdk/react/number-input';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

type Props = {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

export function Input({
  value = 0,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  onChange,
}: Props) {
  const defaultValue = React.useRef(value);
  const [animated, setAnimated] = React.useState(true);
  // Hide the caret during transitions so you can't see it shifting around:
  const [showCaret, setShowCaret] = React.useState(true);

  return (
    <NumberInput
      value={value}
      min={Number.isFinite(min) ? min : undefined}
      max={Number.isFinite(max) ? max : undefined}
      step={1}
      format={{ useGrouping: false, maximumFractionDigits: 0 }}
      onValueChange={(next, details) => {
        setAnimated(details.reason !== 'input-change');
        onChange?.(next ?? defaultValue.current);
      }}
      className='group flex items-stretch rounded-md text-3xl font-semibold border w-fit mx-auto bg-muted'
    >
      <NumberInputDecrement
        aria-label='Decrease number'
        className='flex items-center pl-[.5em] pr-[.325em]'
      >
        <Minus className='size-4' absoluteStrokeWidth strokeWidth={3.5} />
      </NumberInputDecrement>
      <div className="relative grid items-center justify-items-center text-center [grid-template-areas:'overlap'] *:[grid-area:overlap]">
        <NumberInputControl
          aria-label='Number'
          className={cn(
            showCaret ? 'caret-primary' : 'caret-transparent',
            'spin-hide w-[1.5em] bg-transparent py-2 text-center font-[inherit] text-transparent outline-hidden appearance-none'
          )}
          // Make sure to disable kerning, to match NumberFlow:
          style={{ fontKerning: 'none' }}
          autoComplete='off'
          inputMode='numeric'
        />
        <NumberFlow
          value={value}
          format={{ useGrouping: false }}
          aria-hidden
          animated={animated}
          onAnimationsStart={() => setShowCaret(false)}
          onAnimationsFinish={() => setShowCaret(true)}
          className='pointer-events-none'
          willChange
        />
      </div>
      <NumberInputIncrement
        aria-label='Increase number'
        className='flex items-center pl-[.325em] pr-[.5em]'
      >
        <Plus className='size-4' absoluteStrokeWidth strokeWidth={3.5} />
      </NumberInputIncrement>
    </NumberInput>
  );
}

export default function MotionNumberInput() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Input value={value} min={0} max={99} onChange={setValue} />
    </>
  );
}
