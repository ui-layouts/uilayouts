'use client';
import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';
import Autoplay from 'embla-carousel-autoplay';

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <Carousel
        options={OPTIONS}
        className='w-4/5 mx-auto'
        plugins={[
          Autoplay({
            playOnInit: true,
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <SliderContainer className='gap-2'>
          <Slider className='w-full'>
            <div className='bg-red-500 rounded-xl h-[400px] w-full'></div>{' '}
            {/* Red background with rounded corners */}
          </Slider>
          <Slider className='w-full'>
            <div className='bg-blue-500 rounded-xl h-[400px] w-full'></div>{' '}
            {/* Blue background with rounded corners */}
          </Slider>
          <Slider className='w-full'>
            <div className='bg-green-500 rounded-xl h-[400px] w-full'></div>{' '}
            {/* Green background with rounded corners */}
          </Slider>
          <Slider className='w-full'>
            <div className='bg-yellow-500 rounded-xl h-[400px] w-full'></div>{' '}
            {/* Yellow background with rounded corners */}
          </Slider>
        </SliderContainer>
        <div className='flex justify-center py-4'>
          <SliderDotButton />
        </div>
      </Carousel>
    </>
  );
}

export default index;
