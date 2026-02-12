'use client';
import React, { SetStateAction } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
    title: 'Misty Mountain Majesty',
    description:
      'A breathtaking view of misty mountains shrouded in clouds, creating an ethereal landscape.',
    tags: ['Misty', 'Mountains', 'Clouds', 'Ethereal', 'Landscape'],
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
    title: 'Winter Wonderland',
    description:
      "A serene winter scene with snow-covered trees and mountains, showcasing nature's pristine beauty.",
    tags: ['Winter', 'Snow', 'Trees', 'Mountains', 'Serene'],
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
    title: 'Autumn Mountain Retreat',
    description:
      'A cozy cabin nestled in the mountains, surrounded by the vibrant colors of autumn foliage.',
    tags: ['Autumn', 'Cabin', 'Mountains', 'Foliage', 'Cozy'],
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
    title: 'Tranquil Lake Reflection',
    description:
      'A calm mountain lake perfectly reflecting the surrounding peaks and sky, creating a mirror-like surface.',
    tags: ['Lake', 'Reflection', 'Mountains', 'Tranquil', 'Mirror'],
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
    title: 'Misty Mountain Peaks',
    description:
      "Majestic mountain peaks emerging from a sea of clouds, showcasing nature's grandeur.",
    tags: ['Misty', 'Peaks', 'Clouds', 'Majestic', 'Nature'],
  },
];

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger duration for children
    },
  },
};

type item = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};
interface GaleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number | undefined;
}
function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <div className='w-fit mx-auto gap-1 flex pb-20 pt-10 '>
      {items.slice(0, 5).map((item: item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl relative ${
              index === i ? 'w-[450px] ' : 'w-[50px]'
            } h-[400px] shrink-0  transition-[width] ease-in-linear duration-500 origin-center  `}
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            onMouseEnter={() => {
              setIndex(i);
            }}
          >
            <motion.img
              src={item?.url}
              className={`${
                index === i ? 'cursor-default' : 'cursor-pointer'
              } w-full rounded-xl  h-full object-cover `}
            />
            <AnimatePresence mode='wait'>
              {index === i && (
                <motion.article
                  //@ts-ignore
                  variants={article}
                  initial='hidden'
                  animate='show'
                  className='absolute flex rounded-xl  flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden bg-linear-to-t dark:from-neutral-900/60 from-neutral-100/60  from-20% to-transparent to-80% '
                >
                  <motion.h1
                    // @ts-ignore
                    variants={article}
                    className='text-2xl font-semibold'
                  >
                    {item?.title}
                  </motion.h1>
                  <motion.p
                    // @ts-ignore
                    variants={article}
                    className='leading-[120%]'
                  >
                    {item?.description}
                  </motion.p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function SingleLayout() {
  const [index, setIndex] = useState(2);

  return (
    <div className='relative'>
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  );
}
