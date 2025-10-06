'use client';
import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/ui/carousel';
import ClassNames from 'embla-carousel-class-names';

function ClassName() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <Carousel options={OPTIONS} plugins={[ClassNames()]}>
        <SliderContainer className='gap-2'>
          <Slider
            className='
    w-4/5
    transition-opacity duration-700 ease-out
    [&.is-in-view]:opacity-20
    [&.is-snapped]:opacity-100
  '
          >
            <div className='h-[28em] pl-2 bg-red-500 rounded-xl'></div>
          </Slider>

          <Slider
            className='
    w-4/5 
    transition-opacity duration-700 ease-out
    [&.is-in-view]:opacity-20
    [&.is-snapped]:opacity-100
  '
          >
            <div className='h-[28em] bg-blue-500 rounded-xl'></div>
          </Slider>

          <Slider
            className='
    w-4/5
    transition-opacity duration-700 ease-out
    [&.is-in-view]:opacity-20
    [&.is-snapped]:opacity-100
  '
          >
            <div className='h-[28em] bg-green-500 rounded-xl'></div>
          </Slider>

          <Slider
            className='
    w-4/5
    transition-opacity duration-700 ease-out
    [&.is-in-view]:opacity-20
    [&.is-snapped]:opacity-100
  '
          >
            <div className='h-[28em] bg-yellow-500 rounded-xl'></div>
          </Slider>
        </SliderContainer>
        <div className='flex justify-center py-2'>
          <SliderDotButton />
        </div>
      </Carousel>
    </>
  );
}

export default ClassName;
