'use client';
import { SpotLightItem, Spotlight } from '@/components/ui/spotlight';
import Image from 'next/image';
import React from 'react';

export default function SpotlightCard2() {
  return (
    <>
      <div className='relative mx-auto w-[calc(100%-1rem)] max-w-sm py-4 rounded-md'>
        <Spotlight className='w-full' ProximitySpotlight={false}>
          <SpotLightItem>
            <div className='relative text-center z-10 px-0 py-16 rounded-lg w-full bg-cover bg-black h-full mx-auto'>
              <Image
                src={'/chat_se21ao.webp'}
                alt='grid'
                width={600}
                className='mx-auto w-[85%]'
                height={600}
              />
              <h2 className='text-xl font-semibold tracking-tight text-white'>
                Create Group Effortlessly
              </h2>
              <p className='pt-2  lg:text-base text-sm  text-muted-foreground capitalize'>
                Seamless chats, crystal-clear videos, and <br />
                premium audio quality
              </p>
            </div>
          </SpotLightItem>
        </Spotlight>
      </div>
    </>
  );
}
