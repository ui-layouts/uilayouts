// @ts-nocheck
'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export const itemsArr = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
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
    url:'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
    title: 'Misty Mountain Peaks',
    description:
      "Majestic mountain peaks emerging from a sea of clouds, showcasing nature's grandeur.",
    tags: ['Misty', 'Peaks', 'Clouds', 'Majestic', 'Nature'],
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
    title: 'Golden Hour Glow',
    description:
      'A stunning mountain landscape bathed in the warm light of the golden hour, highlighting every contour.',
    tags: ['Golden Hour', 'Mountains', 'Landscape', 'Warm', 'Scenic'],
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format',
    title: 'Snowy Mountain Highway',
    description:
      'A winding road cutting through a snowy mountain landscape, inviting adventure and exploration.',
    tags: ['Snow', 'Road', 'Mountains', 'Winter', 'Adventure'],
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format',
    title: 'Foggy Mountain Forest',
    description:
      'A mysterious and enchanting forest shrouded in fog, with mountains looming in the background.',
    tags: ['Fog', 'Forest', 'Mountains', 'Mysterious', 'Enchanting'],
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format',
    title: 'Sunset Mountain Silhouette',
    description:
      'A dramatic silhouette of mountain peaks against a vibrant sunset sky, creating a stunning contrast.',
    tags: ['Sunset', 'Silhouette', 'Mountains', 'Dramatic', 'Sky'],
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
    title: 'Alpine Meadow Bliss',
    description:
      'A lush alpine meadow dotted with wildflowers, set against a backdrop of towering mountain peaks.',
    tags: ['Alpine', 'Meadow', 'Wildflowers', 'Mountains', 'Peaceful'],
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format',
    title: 'Mountain Lake Serenity',
    description:
      'A serene mountain lake surrounded by pine forests, reflecting the calm beauty of the wilderness.',
    tags: ['Lake', 'Mountains', 'Forest', 'Reflection', 'Serenity'],
  },
  
];

function Gallery({ items, setIndex, setOpen, index }:{
  items: typeof itemsArr;
  setIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
  index: number;
}) {
  return (
    <div className='rounded-md w-fit mx-auto md:gap-2 gap-1 flex pb-20 pt-10 '>
      {items.slice(0, 11).map((item, i) => {
        return (
          <>
            <motion.img
              whileTap={{ scale: 0.95 }}
              className={`rounded-2xl ${
                index === i
                  ? 'w-[250px] '
                  : 'xl:w-[50px] md:w-[30px] sm:w-[20px] w-[14px]'
              } h-[200px] shrink-0  object-cover transition-[width] ease-in-out duration-300`}
              key={item}
              onMouseEnter={() => {
                setIndex(i);
              }}
              onMouseLeave={() => {
                setIndex(i);
              }}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              src={item?.url}
              layoutId={item.id}
            />
          </>
        );
      })}
    </div>
  );
}

export default function index() {
  const [index, setIndex] = useState(5);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  return (
    <div className='relative'>
      <Gallery
        items={itemsArr}
        index={index}
        setIndex={setIndex}
        setOpen={setOpen}
      />
      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key='overlay'
            className='dark:bg-black/40 bg-white/40 backdrop-blur-lg fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 w-full h-full grid place-content-center'
            onClick={() => {
              setOpen(false);
            }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={itemsArr[index].id}
                className='w-[400px] h-[400px] rounded-2xl relative cursor-default overflow-hidden'
              >
                <Image
                  src={itemsArr[index].url}
                  width={400}
                  height={400}
                  alt='single-image'
                  className='rounded-2xl h-full w-full object-cover'
                />
                <article className='dark:bg-black/40 bg-white/40 backdrop-blur-md absolute -bottom-1 left-0 w-full rounded-md p-2'>
                  <motion.h1
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className='text-xl font-semibold'
                  >
                    {itemsArr[index].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ scaleY: -10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className='text-sm leading-[100%] py-2'
                  >
                    {itemsArr[index].description}
                  </motion.p>
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
