'use client';
import { SpotLightItem, Spotlight } from '@/components/ui/spotlight';
import Image from 'next/image';
import React from 'react';

export default function index() {
  return (
    <div className='relative bg-black sm:p-8 px-4 rounded-md'>
      <Spotlight
        className='sm:w-96 w-full mx-auto'
        ProximitySpotlight={false}
        HoverFocusSpotlight={true}
      >
        <SpotLightItem>
          <div className="relative text-center z-10 sm:px-8 px-4 py-6 rounded-lg w-full  bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png')] bg-cover   bg-black h-full mx-auto">
            <Image
              src={'/statistic_ac1ivs.webp'}
              alt='grid'
              width={600}
              className='w-fit mx-auto '
              height={600}
            />
            <h1 className='text-3xl pt-6 font-medium tracking-tight text-white'>
              Subscriber Growth
            </h1>
            <p className='pt-2  text-gray-300 capitalize'>
              Experience a significant boost in your subscriber <br /> count,
              achieving 3x growth.
            </p>
          </div>
        </SpotLightItem>
      </Spotlight>
    </div>
  );
}
