'use client';
import { SpotLightItem, Spotlight } from '@/components/ui/spotlight';
import Image from 'next/image';
import React from 'react';

export default function index() {
  return (
    <>
      <div className='relative bg-black sm:p-8 px-4 rounded-md'>
        <Spotlight className='sm:w-96 w-full' ProximitySpotlight={false}>
          <SpotLightItem>
            <div className="relative text-center z-10 px-0 py-16 rounded-lg w-fit   bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] bg-cover  bg-black h-full mx-auto">
              <Image
                src={'/chat_se21ao.webp'}
                alt='grid'
                width={600}
                className='mx-auto w-[85%]'
                height={600}
              />
              <h1 className='text-xl font-semibold tracking-tight text-white'>
                Create Group Effortlessly
              </h1>
              <p className='pt-2  lg:text-base text-sm  text-gray-300 capitalize'>
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
