'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  LazyMotion,
  animate,
  domAnimation,
  useMotionValue,
} from 'motion/react';
import * as m from 'motion/react-m';

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
      <h2 className='text-2xl mb-4 sr-only'>
        Responsive Multi-Slide Carousel (Showing {slidesToShow})
      </h2>
      <div className='flex flex-col gap-3'>
        <LazyMotion features={domAnimation}>
          <div
            className='relative overflow-hidden rounded-lg'
            ref={containerRef}
          >
            <m.div className='flex gap-4' style={{ x }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  className='shrink-0 h-[300px] rounded-lg overflow-hidden relative'
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
                  <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3'>
                    <p className='text-white text-sm font-medium'>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </m.div>

            {/* Navigation Buttons */}
            <m.button
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed bg-neutral-300'
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
            </m.button>

            <m.button
              disabled={index === maxIndex}
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === maxIndex
                  ? 'opacity-40 cursor-not-allowed bg-neutral-300'
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
            </m.button>
          </div>
        </LazyMotion>
      </div>
    </div>
  );
}
