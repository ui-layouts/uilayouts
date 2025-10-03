'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const images: ImageData[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
    alt: 'Follow Your Path',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
    alt: 'Shine Bright',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
    alt: 'Create Magic',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
    alt: 'Keep Moving Forward',
  },
];

const ImageReveal2: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [activeImage, setActiveImage] = useState<ImageData | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const requestRef = useRef<number | null>(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;

    // Apply easing to the cursor movement
    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;

    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);

  const handleImageHover = useCallback(
    (image: ImageData) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);

  return (
    <div className='relative w-full' onMouseLeave={handleMouseLeave}>
      {images.map((image) => (
        <div
          key={image.id}
          className={`px-2 cursor-pointer relative sm:flex items-center border-b border-primary justify-between`}
          onMouseEnter={() => handleImageHover(image)}
        >
          {!isDesktop && (
            <img
              src={image?.src}
              className='sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md'
              alt='mobileImg'
            />
          )}
          <h2
            className={`newFont dark:text-gray-300 uppercase md:text-5xl sm:text-2xl text-xl sm:py-6 py-2 leading-[100%] relative ${
              activeImage?.id === image?.id
                ? 'mix-blend-difference z-20 text-gray-300'
                : 'text-gray-700'
            }`}
          >
            {image.alt}
          </h2>
          <button
            className={`sm:block hidden p-2 rounded-full transition-all duration-300 ease-out ${
              activeImage?.id === image?.id
                ? 'mix-blend-difference z-20 bg-white text-black'
                : ''
            }`}
          >
            <ArrowUpRight className='w-8 h-8' />
          </button>
          <div
            className={`w-full dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
              activeImage?.id === image?.id ? 'h-full' : 'h-0'
            }`}
          />
        </div>
      ))}
      {isDesktop && activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className={`fixed dark:bg-gray-950 rotate-12 bg-white object-cover pointer-events-none z-10 w-[300px] h-[400px] rounded-lg`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
  );
};

export default ImageReveal2;
