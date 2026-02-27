'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import Image from 'next/image';
// import { items } from '@/components/website/constant';

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1761882835101-02ab45ac0726?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=690',
    title: 'MAXX PHAM',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1661980494567-40a5e01b699b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685',
    title: 'BOXIEN BAY',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    title: 'AUSIZE MAM',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1761775915848-467e41c1c4db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=689',
    title: 'RECLKTIKA',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1761078980679-e89e25fe279b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    title: 'SONYPOO',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1760389005000-bf02bf24f463?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1123',
    title: 'DONM FLY',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1761165307495-56bd564d322f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=663',
    title: 'Snowy Mountain Highway',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1756299792672-157811bf1005?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    title: 'FOGGY FOLS',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1572851899646-a1f69c664e1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    title: 'DIM DARKO',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1759247178379-0e8eba83a4a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    title: 'BEALIVE',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1754968230523-052635c98f99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736',
    title: 'DOMEDOM ROME',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1643037508102-46fb319979c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
    title: 'IKEIMON POVE',
  },
];

function FramerCarousel() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!carousel.current) return;
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [carousel]);

  return (
    <>
      <motion.div
        layoutId={'activeItems'}
        className='rounded-md w-fit pb-4 gap-2 items-center mx-auto cursor-auto '
        onClick={(e) => e.stopPropagation()}
      >
        <>
          {items.map((tab: any, index) => (
            <>
              <AnimatePresence mode='popLayout' initial={false}>
                {tab.id === activeItem.id && (
                  <motion.figure
                    key={tab?.id}
                    className='dark:bg-neutral-900/60 bg-neutral-100/60 border  rounded-md p-4 backdrop-blur-xs'
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          ease: 'easeInOut',
                          duration: 0.3,
                          delay: 0.2,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          ease: 'easeInOut',
                          duration: 0.2,
                        },
                      }}
                    >
                      <Image
                        src={activeItem.url}
                        width={1000}
                        height={1000}
                        alt='preview_img'
                        className=' object-contain h-96  mx-auto rounded-md'
                      />
                    </motion.div>
                  </motion.figure>
                )}
              </AnimatePresence>
            </>
          ))}
        </>
        <motion.div className='w-[550px] mt-4 mx-auto overflow-hidden   dark:bg-neutral-900/60 bg-neutral-100/60 border rounded-md'>
          <motion.div
            ref={carousel}
            drag='x'
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='flex  '
          >
            {items.slice(0, 8)?.map((itemData, index) => {
              return (
                <motion.div
                  key={itemData?.id ?? itemData?.url}
                  className={`relative p-2 shrink-0`}
                  onClick={() => setActiveItem(itemData)}
                >
                  <Image
                    src={itemData?.url}
                    width={400}
                    height={400}
                    alt='img'
                    className='w-28 h-16 object-cover cursor-pointer relative z-2 rounded-md pointer-events-none'
                  />
                  {itemData?.id === activeItem?.id && (
                    <motion.div
                      layoutId='slider'
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: 'easeOut',
                        },
                      }}
                      className='absolute top-0 left-0 h-full w-full dark:bg-neutral-100 bg-neutral-800 rounded-md'
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default FramerCarousel;
