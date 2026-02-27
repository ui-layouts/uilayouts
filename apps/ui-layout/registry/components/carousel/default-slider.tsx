'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';

import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from '@/components/ui/carousel';

import { ChevronLeft, ChevronRight } from 'lucide-react';

function DefaultSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <Carousel options={OPTIONS}>
        <SliderContainer className='sm:h-120 h-110'>
          <Slider className='w-full h-full'>
            {/* <div className='bg-blue-500 md:h-[500px] sm:h-[400px] h-[300px] w-full rounded-lg'></div> */}
            <img
              src='https://images.unsplash.com/photo-1760389005000-bf02bf24f463?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1123'
              alt='Nature slide 1'
              className='w-full object-cover aspect-square'
            />
          </Slider>
          <Slider className='w-full h-full'>
            {/* <div className='bg-green-500 md:h-[500px] sm:h-[400px] h-[300px] w-full rounded-lg'></div> */}
            <img
              src='https://images.unsplash.com/photo-1761078980679-e89e25fe279b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'
              alt='Nature slide 2'
              className='w-full object-cover aspect-square'
            />
          </Slider>
          <Slider className='w-full h-full'>
            {/* <div className='bg-yellow-500 md:h-[500px] sm:h-[400px] h-[300px] w-full rounded-lg'></div> */}
            <img
              src='https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'
              alt='Nature slide 3'
              className='w-full object-cover aspect-square'
            />
          </Slider>
          <Slider className='w-full h-full'>
            <img
              src='https://images.unsplash.com/photo-1761775915848-467e41c1c4db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=689'
              alt='Nature slide 4'
              className='w-full object-cover aspect-square'
            />
            {/* <div className='bg-red-500 md:h-[500px] sm:h-[400px] h-[300px] w-full rounded-lg'></div> */}
          </Slider>
        </SliderContainer>
        <SliderPrevButton className='absolute top-[50%] p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-xs text-primary disabled:opacity-20'>
          <ChevronLeft className='w-8 h-8' />
        </SliderPrevButton>
        <SliderNextButton className='absolute right-4 p-2 border-2 rounded-full top-[50%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-xs text-primary disabled:opacity-20'>
          <ChevronRight className='w-8 h-8' />
        </SliderNextButton>
        <div className='flex justify-center py-2'>
          <SliderDotButton />
        </div>
      </Carousel>
    </>
  );
}

export default DefaultSlider;
