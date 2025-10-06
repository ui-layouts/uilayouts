'use client';
import type { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

function AutoScrollSlider() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <Carousel
        options={OPTIONS}
        plugins={[
          AutoScroll({
            speed: 2,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            startDelay: 100,
          }),
        ]}
        className='w-4/5 mx-auto'
      >
        <SliderContainer className='gap-2 h-[400px] md:text-3xl text-md'>
          <Slider className='w-[40%] bg-red-500 uppercase rounded-xl h-full grid place-items-center'>
            <p>Slide 1</p>
          </Slider>
          <Slider className='w-[80%] bg-blue-500 uppercase rounded-xl h-full grid place-items-center'>
            <p>Slide 2</p>
          </Slider>
          <Slider className='w-[40%] bg-green-500 uppercase rounded-xl h-full grid place-items-center'>
            <p>Slide 3</p>
          </Slider>
          <Slider className='w-[80%] mr-2 bg-yellow-500 uppercase rounded-xl h-full grid place-items-center'>
            <p>Slide 4</p>
          </Slider>
        </SliderContainer>
      </Carousel>
    </>
  );
}

export default AutoScrollSlider;
