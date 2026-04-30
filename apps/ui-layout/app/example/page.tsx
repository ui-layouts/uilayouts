import NotificationLiquid from '@/registry/components/liquid-glass/notification';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import React from 'react';

function page() {
  return (
    <div>
      <SwitchPrimitive.Root className='relative h-6 w-11 cursor-default rounded-md outline-none data-[state=checked]:bg-black bg-neutral-200'>
        <SwitchPrimitive.Thumb className='block size-5 translate-x-0.5 rounded-md bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]' />
      </SwitchPrimitive.Root>
      <div className='grid  2xl:grid-cols-[140px_minmax(0,1fr)] w-11 mt-6 lg:whitespace-normal whitespace-nowrap'>
        <h1 className='text-8xl py-24 mb-8'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='xl:block hidden'>Test Heading</h1>
      </div>
      <NotificationLiquid />
    </div>
  );
}

export default page;
