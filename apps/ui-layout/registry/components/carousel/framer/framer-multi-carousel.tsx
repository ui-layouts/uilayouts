'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

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

export default function FramerMultiSlideCarousel({
  breakpoints = {
    0: { slidesToShow: 1 },
    768: { slidesToShow: 2 },
    1024: { slidesToShow: 3 },
  },
}) {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  // Handle responsive breakpoints
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      const sortedBreakpoints = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a);

      for (const bp of sortedBreakpoints) {
        if (width >= bp) {
          // @ts-ignore
          setSlidesToShow(breakpoints[bp].slidesToShow);
          break;
        }
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [breakpoints]);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const slideWidth = containerWidth / slidesToShow;
      const targetX = -index * slideWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, slidesToShow]);

  // Reset index if it exceeds max when resizing
  useEffect(() => {
    const maxIndex = Math.max(0, items.length - slidesToShow);
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [slidesToShow, index]);

  const maxIndex = Math.max(0, items.length - slidesToShow);

  return (
    <div className='w-full lg:p-10 sm:p-4 p-2'>
      <h2 className='text-2xl mb-4'>
        Responsive Multi-Slide Carousel (Showing {slidesToShow})
      </h2>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div className='flex gap-4' style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className='flex-shrink-0 h-[300px] rounded-lg overflow-hidden relative'
                style={{
                  width: `calc((100% - ${
                    (slidesToShow - 1) * 16
                  }px) / ${slidesToShow})`,
                }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover select-none pointer-events-none'
                  draggable={false}
                />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3'>
                  <p className='text-white text-sm font-medium'>{item.title}</p>
                </div>
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
                  ? 'opacity-40 cursor-not-allowed bg-gray-300'
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

          <motion.button
            disabled={index === maxIndex}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === maxIndex
                  ? 'opacity-40 cursor-not-allowed bg-gray-300'
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
      </div>
    </div>
  );
}
