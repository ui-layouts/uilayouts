'use client';
import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  ThumbsSlider,
} from '@/components/ui/carousel';

function index() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    axis: 'y',
    direction: 'rtl',
  };
  return (
    <>
      <Carousel options={OPTIONS} className='relative flex gap-2'>
        <SliderContainer className='gap-2 h-[400px] w-full'>
          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>

          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>

          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>

          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>

          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>

          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1603338936206-9f7bd3c61cf0?q=80&w=730&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1603338936206-9f7bd3c61cf0?q=80&w=730&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>

          <Slider
            className='h-full w-full'
            thumbnailSrc='https://images.unsplash.com/photo-1580411788548-eee17fc98883?q=80&w=687&auto=format&fit=crop'
          >
            <img
              src='https://images.unsplash.com/photo-1580411788548-eee17fc98883?q=80&w=687&auto=format&fit=crop'
              alt='image'
              className='h-full object-cover rounded-lg w-full'
            />
          </Slider>
        </SliderContainer>
        <ThumbsSlider
          className='w-20'
          thumbsClassName='h-[400px]'
          thumbsSliderClassName='border-black'
        />
      </Carousel>
    </>
  );
}

export default index;
