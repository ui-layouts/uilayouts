'use client';
import { Button } from '@ui-sdk/react/button';

const ButtonHoverUnderLine = (
  props: Pick<React.ComponentProps<typeof Button>, 'onClick' | 'disabled' | 'type' | 'aria-label'>
) => {
  return (
    <Button
      {...props}
      className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
    >
      Contact me
    </Button>
  );
};

export default ButtonHoverUnderLine;
