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
import Autoplay from 'embla-carousel-autoplay';

function index() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    axis: 'y',
  };
  return (
    <>
      <div className='py-10'>
        <Carousel
          options={OPTIONS}
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 2000,
              stopOnMouseEnter: false,
              stopOnInteraction: false,
            }),
          ]}
          dir='ltr'
          className='relative h-full'
        >
          <SliderContainer className='h-[400px]'>
            <Slider
              className='w-full h-full'
              thumbnailSrc='https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
            >
              <img
                src='https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
                alt='Slide 1'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
            >
              <img
                src='https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
                alt='Slide 2'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
            >
              <img
                src='https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
                alt='Slide 3'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
            >
              <img
                src='https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
                alt='Slide 4'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop'
            >
              <img
                src='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop'
                alt='Slide 5'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>
          </SliderContainer>

          <ThumbsSlider
            className='absolute right-4 top-1/2 -translate-y-1/2 w-20'
            thumbsSliderClassName='border-black'
          />
        </Carousel>
      </div>
    </>
  );
}

export default index;
