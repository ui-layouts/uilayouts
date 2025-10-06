'use client';
import type { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  Slider,
  SliderContainer,
  ThumbsSlider,
} from '@/components/ui/carousel';

function ThumnailSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Carousel options={OPTIONS} className='relative'>
          <SliderContainer className='gap-2'>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop'
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop'
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop'
                width={687}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop'
                width={1474}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop'
                width={765}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1603338936206-9f7bd3c61cf0?q=80&w=730&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1603338936206-9f7bd3c61cf0?q=80&w=730&auto=format&fit=crop'
                width={730}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://images.unsplash.com/photo-1580411788548-eee17fc98883?q=80&w=687&auto=format&fit=crop'
              }
            >
              <img
                src='https://images.unsplash.com/photo-1580411788548-eee17fc98883?q=80&w=687&auto=format&fit=crop'
                width={687}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
          </SliderContainer>
          <ThumbsSlider
            className='pb-1 px-1'
            thumbsClassName='basis-[15%] h-24'
          />
        </Carousel>
      </div>
    </>
  );
}

export default ThumnailSlider;
