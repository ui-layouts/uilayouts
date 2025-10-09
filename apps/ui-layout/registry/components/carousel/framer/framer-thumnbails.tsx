'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  animate,
} from 'motion/react';

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
    title: 'Misty Mountain Majesty',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop',
    title: 'Winter Wonderland',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop',
    title: 'Autumn Mountain Retreat',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1683722319473-f851deb3fdf2?q=80&w=880&auto=format&fit=crop',
    title: 'Tranquil Lake Reflection',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=734&auto=format&fit=crop',
    title: 'Misty Mountain Peaks',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1698774303292-7af9410c3a57?q=80&w=436&auto=format&fit=cropv',
    title: 'Golden Hour Glow',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1643994542584-1247b5266429?q=80&w=869&auto=format&fit=crop',
    title: 'Snowy Mountain Highway',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1613681230409-6423a38c43e1?q=80&w=871&auto=format&fit=crop',
    title: 'Foggy Mountain Forest',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1486102515046-44130769cb25?q=80&w=435&auto=format&fit=crop',
    title: 'Sunset Mountain Silhouette',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?q=80&w=430&auto=format&fit=crop',
    title: 'Alpine Meadow Bliss',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1546471180-335a013cb87b?q=80&w=387&auto=format&fit=crop',
    title: 'Mountain Lake Serenity',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1540163502599-a3284e17072d?q=80&w=880&auto=format&fit=crop',
    title: 'Icy Mountain Stream',
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1555803741-1ac759ac2f53?q=80&w=880&auto=format&fit=crop',
    title: 'Wildflower Mountain Meadow',
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?q=80&w=880&auto=format&fit=crop',
    title: 'Mountain Valley Vista',
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1512045519129-eb9ceb788555?q=80&w=880&auto=format&fit=crop',
    title: 'Rugged Mountain Terrain',
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=880&auto=format&fit=crop',
    title: 'Mountain Wildflower Bloom',
  },
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1611582450053-0f056a82a68e?q=80&w=735&auto=format&fit=crop',
    title: 'Mountain River Rapids',
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1590872000386-4348c6393115?q=80&w=688&auto=format&fit=crop',
    title: 'Lush Mountain Valley',
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function FramerCarouselThumbnails() {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <div className='w-[80%] mx-auto lg:p-10 p-2'>
      <div className='flex flex-col gap-3'>
        {/* Main Carousel */}
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div
            className='flex'
            drag='x'
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item) => (
              <div key={item.id} className='flex-shrink-0 w-full h-[400px]'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
        </div>

        <Thumbnails index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

function Thumbnails({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className='overflow-x-auto scrollbar-hide'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className='flex gap-1 h-20 pb-2' style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative shrink-0 h-full overflow-hidden'
          >
            <img
              src={item.url}
              alt={item.title}
              className='w-full h-full object-cover pointer-events-none select-none'
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default FramerCarouselThumbnails;
