'use client';
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
} from 'motion/react';
import * as m from 'motion/react-m';
import { XIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { transition } from '@/lib/utils';

export default function Dialog() {
  const [index, setIndex] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  type Item = {
    id: number;
    imgSrc?: string;
    videoSrc?: string;
  };

  const items: Item[] = [
    {
      id: 1,
      imgSrc:
        'https://images.unsplash.com/photo-1726824766931-4bd8b59af37c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      videoSrc:
        'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
    },
  ];
  const currentItem = items[index];
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setCarouselWidth(
      // @ts-ignore
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, [carousel]);
  return (
    <div className='relative h-full'>
      <MotionConfig transition={transition}>
        <LazyMotion features={domAnimation}>
          <m.div
            ref={carousel}
            drag='x'
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -carouselWidth }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 8, ease: 'easeInOut' }}
            className='flex w-full  gap-4   py-10'
          >
            {items.map((item, i) => {
              return (
                <>
                  <m.div
                    // @ts-ignore
                    key={item}
                    className='w-full flex relative  flex-col overflow-hidden border    dark:bg-black bg-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-950'
                    layoutId={`dialog-${item?.id}`}
                    style={{
                      borderRadius: '12px',
                    }}
                    tabIndex={i}
                    onClick={() => {
                      setIndex(i);
                      setIsOpen(true);
                    }}
                  >
                    {item?.imgSrc && (
                      <m.div
                        layoutId={`dialog-img-${item.id}`}
                        className='w-full h-full'
                      >
                        <img
                          src={item.imgSrc}
                          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                          className=' w-full object-cover'
                        />
                      </m.div>
                    )}
                    {item?.videoSrc && (
                      <m.div
                        layoutId={`dialog-video-${item.id}`}
                        className='w-full h-full'
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          className='h-full w-full object-cover  rounded-xs'
                        >
                          <source src={item.videoSrc!} type='video/mp4' />
                        </video>
                      </m.div>
                    )}
                  </m.div>
                </>
              );
            })}
          </m.div>
        </LazyMotion>
        <AnimatePresence initial={false} mode='sync'>
          {isOpen && (
            <LazyMotion features={domAnimation}>
              <>
                <m.div
                  key={`backdrop-${currentItem.id}`}
                  className='fixed inset-0 h-full w-full dark:bg-black/25 bg-white/95 backdrop-blur-xs '
                  variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
                <m.div
                  key='dialog'
                  className='pointer-events-none fixed inset-0 flex items-center justify-center z-50'
                >
                  <m.div
                    className='pointer-events-auto relative flex flex-col overflow-hidden   dark:bg-neutral-950 bg-neutral-200 border w-[80%] h-[90%] '
                    layoutId={`dialog-${currentItem.id}`}
                    tabIndex={-1}
                    style={{
                      borderRadius: '24px',
                    }}
                  >
                    {items[index]?.imgSrc && (
                      <m.div
                        layoutId={`dialog-img-${currentItem.id}`}
                        className='w-full h-full'
                      >
                        <img
                          src={currentItem.imgSrc}
                          alt=''
                          className='h-full w-full object-cover'
                        />
                      </m.div>
                    )}
                    {items[index]?.videoSrc && (
                      <m.div
                        layoutId={`dialog-video-${currentItem.id}`}
                        className='w-full h-full'
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          controls
                          className='h-full w-full object-cover  rounded-xs'
                        >
                          <source
                            src={currentItem.videoSrc!}
                            type='video/mp4'
                          />
                        </video>
                      </m.div>
                    )}

                    <button
                      onClick={() => setIsOpen(false)}
                      className='absolute right-6 top-6 p-3 text-zinc-50 cursor-pointer dark:bg-neutral-900 bg-neutral-400 hover:bg-neutral-500 rounded-full dark:hover:bg-neutral-800'
                      type='button'
                      aria-label='Close dialog'
                    >
                      <XIcon size={24} />
                    </button>
                  </m.div>
                </m.div>
              </>
            </LazyMotion>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
