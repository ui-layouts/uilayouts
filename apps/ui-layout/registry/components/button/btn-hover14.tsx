'use client';
import { Button } from '@ui-sdk/react/button';

import { ArrowRight } from 'lucide-react';

const ButtonHover14 = (
  props: Pick<React.ComponentProps<typeof Button>, 'onClick' | 'disabled' | 'type' | 'aria-label'>
) => {
  return (
    <>
      <Button
        {...props}
        className='group cursor-pointer slide-anime px-5 py-3 rounded-full w-[180px] shadow bg-card text-primary flex justify-between items-center font-semibold '
      >
        Schedule Call{' '}
        <div className='group-hover:translate-x-2 transition-all'>
          <ArrowRight />
        </div>
      </Button>
    </>
  );
};

export default ButtonHover14;
