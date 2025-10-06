'use client';
import type { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from '@/components/ui/carousel';
import { ChevronDown, ChevronUp } from 'lucide-react';

function VerticalCarousel() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    axis: 'y',
  };

  return (
    <div className='w-full max-w-2xl mx-auto p-4 py-10'>
      <Carousel options={OPTIONS} className='relative h-full'>
        <SliderContainer className='h-[400px]'>
          <Slider className='w-full h-full'>
            <img
              src='https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
              alt='Slide 1'
              className='h-full w-full object-cover rounded-lg'
            />
          </Slider>

          <Slider className='w-full h-full'>
            <img
              src='https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
              alt='Slide 2'
              className='h-full w-full object-cover rounded-lg'
            />
          </Slider>

          <Slider className='w-full h-full'>
            <img
              src='https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
              alt='Slide 3'
              className='h-full w-full object-cover rounded-lg'
            />
          </Slider>

          <Slider className='w-full h-full'>
            <img
              src='https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
              alt='Slide 4'
              className='h-full w-full object-cover rounded-lg'
            />
          </Slider>
        </SliderContainer>

        <SliderPrevButton className='absolute top-4 left-1/2 -translate-x-1/2 p-2 border-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-colors disabled:opacity-20 z-10'>
          <ChevronUp className='w-6 h-6' />
        </SliderPrevButton>

        <SliderNextButton className='absolute bottom-4 left-1/2 -translate-x-1/2 p-2 border-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-colors disabled:opacity-20 z-10'>
          <ChevronDown className='w-6 h-6' />
        </SliderNextButton>

        <div className='absolute right-4 top-1/2 -translate-y-1/2'>
          <SliderDotButton className='flex-col gap-2' />
        </div>
      </Carousel>
    </div>
  );
}

export default VerticalCarousel;
