'use client';
import React, { useEffect, useId, useState } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  LazyMotion,
  domAnimation,
} from 'motion/react';
import * as m from 'motion/react-m';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const transition = {
  type: 'spring',
  stiffness: 300, // Increased from 80
  damping: 30, // Increased from 10
  mass: 0.5, // Decreased from 0.9
} as const;

interface IMediaModal {
  imgSrc?: string;
  videoSrc?: string;
  className?: string;
}

export function MediaModal({ imgSrc, videoSrc, className }: IMediaModal) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const uniqueId = useId();

  useEffect(() => {
    if (isMediaModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMediaModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMediaModalOpen]);
  return (
    <>
      <LazyMotion features={domAnimation}>
        <MotionConfig transition={transition}>
          <>
            <m.div
              className='w-full h-full flex relative flex-col overflow-hidden border cursor-zoom-in dark:bg-black bg-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-950'
              layoutId={`dialog-${uniqueId}`}
              style={{
                borderRadius: '12px',
              }}
              onClick={() => {
                setIsMediaModalOpen(true);
              }}
            >
              {imgSrc && (
                <m.div
                  layoutId={`dialog-img-${uniqueId}`}
                  className='w-full h-full'
                >
                  <img
                    src={imgSrc}
                    alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                    className=' w-full object-cover h-full'
                  />
                </m.div>
              )}
              {videoSrc && (
                <m.div
                  layoutId={`dialog-video-${uniqueId}`}
                  className='w-full h-full'
                >
                  <video
                    autoPlay
                    muted
                    loop
                    className='h-full w-full object-cover  rounded-xs'
                  >
                    <source src={videoSrc!} type='video/mp4' />
                  </video>
                </m.div>
              )}
            </m.div>
          </>
          <AnimatePresence initial={false} mode='popLayout'>
            {isMediaModalOpen && (
              <>
                <m.div
                  key={`backdrop-${uniqueId}`}
                  className='fixed inset-0 h-full w-full z-50  dark:bg-black/25 bg-white/95 backdrop-blur-xs '
                  variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  onClick={() => {
                    setIsMediaModalOpen(false);
                  }}
                />
                <m.div
                  key='dialog'
                  className='pointer-events-none fixed inset-0 flex items-center justify-center z-50'
                >
                  <m.div
                    className={cn(
                      'pointer-events-auto relative flex flex-col overflow-hidden dark:bg-neutral-950 bg-neutral-200 border w-[80%] h-[90%]',
                      imgSrc && 'cursor-zoom-out'
                    )}
                    layoutId={`dialog-${uniqueId}`}
                    layout={isMediaModalOpen}
                    tabIndex={-1}
                    style={{
                      borderRadius: '24px',
                    }}
                  >
                    {imgSrc && (
                      <m.div
                        layoutId={`dialog-img-${uniqueId}`}
                        className='w-full h-full'
                        onClick={() => setIsMediaModalOpen(false)}
                      >
                        <img
                          src={imgSrc}
                          alt=''
                          className='h-full w-full object-cover'
                        />
                      </m.div>
                    )}
                    {videoSrc && (
                      <m.div
                        layoutId={`dialog-video-${uniqueId}`}
                        className='w-full h-full'
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          controls
                          className='h-full w-full object-cover  rounded-xs'
                        >
                          <source src={videoSrc!} type='video/mp4' />
                        </video>
                      </m.div>
                    )}
                    {videoSrc && (
                      <button
                        onClick={() => setIsMediaModalOpen(false)}
                        className='absolute right-6 top-6 p-3 text-zinc-50 cursor-pointer dark:bg-neutral-900 bg-neutral-400 hover:bg-neutral-500 rounded-xl dark:hover:bg-neutral-800'
                        type='button'
                        aria-label='Close dialog'
                      >
                        <XIcon size={24} />
                      </button>
                    )}
                  </m.div>
                </m.div>
              </>
            )}
          </AnimatePresence>
        </MotionConfig>
      </LazyMotion>
    </>
  );
}
