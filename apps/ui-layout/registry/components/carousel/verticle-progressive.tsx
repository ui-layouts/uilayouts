'use client';
import { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@/components/ui/progress-carousel';
import { Home } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { imgPreview } from '@/components/website/constant';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bridge',
    desc: 'A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
    sliderName: 'bridge',
  },
  {
    img: 'https://images.unsplash.com/photo-1518972734183-c5b490a7c637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountains View',
    desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
    sliderName: 'mountains',
  },
  {
    img: 'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Autumn',
    desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
    sliderName: 'autumn',
  },
  {
    img: 'https://images.unsplash.com/photo-1628965882741-570e75becd5d?q=80&w=687&auto=format&fit=crop',
    title: 'Foggy',
    sliderName: 'foggy',
    desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
  },
];
export default function index() {
  const isMobile = useMediaQuery('(min-width: 640px)');
  return (
    <>
      <ProgressSlider
        vertical={isMobile ? true : false}
        fastDuration={300}
        duration={4000}
        activeSlider='bbridge'
        className='sm:flex '
      >
        <SliderBtnGroup className='sm:relative absolute bottom-0 lg:w-[28rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-[500px] h-fit sm:dark:bg-black sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left  p-3 sm:border-b border sm:pl-5 sm:pb-0 pb-6 sm:flex-1'
              progressBarClass='left-0 sm:top-0 bottom-0 dark:bg-white bg-black sm:w-3 sm:h-full h-4  before:h-full before:w-4 before:'
            >
              <h2 className='relative px-4 rounded w-fit dark:bg-blue-500 bg-black text-white mb-2'>
                {item.title}
              </h2>
              <p className='text-sm font-medium dark:text-slate-200 text-slate-900 line-clamp-2'>
                {item.desc}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
        <SliderContent className='w-full'>
          {items.map((item, index) => (
            <SliderWrapper
              className='h-full'
              key={index}
              value={item?.sliderName}
            >
              <Image
                className=' h-[500px] object-cover'
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>
      </ProgressSlider>
    </>
  );
}
