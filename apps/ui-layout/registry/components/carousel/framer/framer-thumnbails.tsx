'use client';

import { animate, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

const items: CarouselItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1761882835101-02ab45ac0726?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=690', title: 'MAXX PHAM' },
  { id: 2, url: 'https://images.unsplash.com/photo-1661980494567-40a5e01b699b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=685', title: 'BOXIEN BAY' },
  { id: 3, url: 'https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687', title: 'AUSIZE MAM' },
  { id: 4, url: 'https://images.unsplash.com/photo-1761775915848-467e41c1c4db?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=689', title: 'RECLKTIKA' },
  { id: 5, url: 'https://images.unsplash.com/photo-1761078980679-e89e25fe279b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687', title: 'SONYPOO' },
  { id: 6, url: 'https://images.unsplash.com/photo-1760389005000-bf02bf24f463?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1123', title: 'DONM FLY' },
  { id: 7, url: 'https://images.unsplash.com/photo-1761165307495-56bd564d322f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=663', title: 'Snowy Mountain Highway' },
  { id: 8, url: 'https://images.unsplash.com/photo-1756299792672-157811bf1005?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074', title: 'FOGGY FOLS' },
  { id: 9, url: 'https://images.unsplash.com/photo-1572851899646-a1f69c664e1e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170', title: 'DIM DARKO' },
  { id: 10, url: 'https://images.unsplash.com/photo-1759247178379-0e8eba83a4a6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687', title: 'BEALIVE' },
  { id: 11, url: 'https://images.unsplash.com/photo-1754968230523-052635c98f99?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=736', title: 'DOMEDOM ROME' },
  { id: 12, url: 'https://images.unsplash.com/photo-1643037508102-46fb319979c5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764', title: 'IKEIMON POVE' },
  { id: 13, url: 'https://images.unsplash.com/photo-1555803741-1ac759ac2f53?q=80&w=880&auto=format&fit=crop', title: 'Wildflower Mountain Meadow' },
  { id: 14, url: 'https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?q=80&w=880&auto=format&fit=crop', title: 'Mountain Valley Vista' },
  { id: 15, url: 'https://images.unsplash.com/photo-1512045519129-eb9ceb788555?q=80&w=880&auto=format&fit=crop', title: 'Rugged Mountain Terrain' },
  { id: 16, url: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=880&auto=format&fit=crop', title: 'Mountain Wildflower Bloom' },
  { id: 17, url: 'https://images.unsplash.com/photo-1611582450053-0f056a82a68e?q=80&w=735&auto=format&fit=crop', title: 'Mountain River Rapids' },
  { id: 18, url: 'https://images.unsplash.com/photo-1590872000386-4348c6393115?q=80&w=688&auto=format&fit=crop', title: 'Lush Mountain Valley' },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;
const SWIPE_THRESHOLD = 0.3;
const VELOCITY_THRESHOLD = 500;
const AUTOPLAY_INTERVAL_MS = 4000;
const ZOOM_MIN = 1;
const ZOOM_MAX = 3;

interface FramerCarouselThumbnailsProps {
  initialIndex?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  enableZoom?: boolean;
  onIndexChange?: (index: number) => void;
}

function FramerCarouselThumbnails({
  initialIndex = 0,
  autoPlay = false,
  autoPlayInterval = AUTOPLAY_INTERVAL_MS,
  loop = false,
  enableZoom = false,
  onIndexChange,
}: FramerCarouselThumbnailsProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const setActiveIndex = useCallback(
    (newIndex: number) => {
      if (loop) {
        const mod = ((newIndex % items.length) + items.length) % items.length;
        setIndex(mod);
        onIndexChange?.(mod);
      } else {
        const clamped = Math.max(0, Math.min(items.length - 1, newIndex));
        setIndex(clamped);
        onIndexChange?.(clamped);
      }
    },
    [loop, onIndexChange]
  );

  useEffect(() => {
    if (isDragging || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth || 1;
    const springConfig = prefersReducedMotion
      ? { type: 'spring' as const, stiffness: 500, damping: 50 }
      : { type: 'spring' as const, stiffness: 300, damping: 30 };

    animate(x, -index * containerWidth, springConfig);
  }, [index, x, isDragging, prefersReducedMotion]);

  useEffect(() => {
    if (!autoPlay || isPaused || isDragging || prefersReducedMotion) return;
    const id = setInterval(() => setActiveIndex(index + 1), autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, isPaused, isDragging, index, setActiveIndex, autoPlayInterval, prefersReducedMotion]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActiveIndex(index - 1);
      else if (e.key === 'ArrowRight') setActiveIndex(index + 1);
    };

    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [index, setActiveIndex]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
      setIsDragging(false);
      const containerWidth = containerRef.current?.offsetWidth || 1;
      const offset = info.offset.x;
      const velocity = info.velocity.x;

      let newIndex = index;
      if (Math.abs(velocity) > VELOCITY_THRESHOLD) {
        newIndex = velocity > 0 ? index - 1 : index + 1;
      } else if (Math.abs(offset) > containerWidth * SWIPE_THRESHOLD) {
        newIndex = offset > 0 ? index - 1 : index + 1;
      }

      setActiveIndex(newIndex);
    },
    [index, setActiveIndex]
  );

  const toggleFullscreen = useCallback(() => {
    if (!mainRef.current) return;
    if (!document.fullscreenElement) {
      mainRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <div
      className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black p-4' : 'w-[80%] mx-auto lg:p-10 p-2'}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      ref={mainRef}
    >
      <div className="flex flex-col gap-3">
        <div
          className={`relative overflow-hidden rounded-lg ${isFullscreen ? 'h-screen' : ''}`}
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Image carousel"
          tabIndex={0}
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            {items.map((item, i) => (
              <ZoomableSlide
                key={item.id}
                item={item}
                index={i}
                isActive={i === index}
                total={items.length}
                enableZoom={enableZoom}
              />
            ))}
          </motion.div>

          <button
            disabled={!loop && index === 0}
            onClick={() => setActiveIndex(index - 1)}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-20 ${
              !loop && index === 0
                ? 'opacity-40 cursor-not-allowed'
                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            disabled={!loop && index === items.length - 1}
            onClick={() => setActiveIndex(index + 1)}
            className={`absolute right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-20 ${
              !loop && index === items.length - 1
                ? 'opacity-40 cursor-not-allowed'
                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
            }`}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={toggleFullscreen}
            className="absolute right-4 top-4 w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center shadow-lg transition-colors z-20"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isFullscreen ? (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </>
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </>
              )}
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {items.slice(0, Math.min(items.length, 9)).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all ${
                  i === index ? 'bg-white w-4 h-2' : 'bg-white/50 hover:bg-white/70 w-2 h-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            {items.length > 9 && (
              <span className="text-white/70 text-xs self-center ml-1">+{items.length - 9}</span>
            )}
          </div>
        </div>

        <Thumbnails index={index} setIndex={setActiveIndex} />
      </div>
    </div>
  );
}

function ZoomableSlide({
  item,
  index: i,
  isActive,
  total,
  enableZoom,
}: {
  item: CarouselItem;
  index: number;
  isActive: boolean;
  total: number;
  enableZoom: boolean;
}) {
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!isActive) scale.set(1);
  }, [isActive, scale]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!enableZoom || !isActive) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      scale.set(Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, scale.get() + delta)));
    },
    [enableZoom, isActive, scale]
  );

  return (
    <div
      className="shrink-0 w-full h-[400px] overflow-hidden"
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${i + 1} of ${total}: ${item.title}`}
      aria-hidden={!isActive}
      onWheel={handleWheel}
    >
      <motion.img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
        draggable={false}
        loading={i < 3 ? 'eager' : 'lazy'}
        style={enableZoom && isActive ? { scale: springScale } : undefined}
      />
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
    const el = thumbnailsRef.current;
    if (!el) return;

    let scrollPosition = 0;
    for (let i = 0; i < index; i++) {
      scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
    }
    scrollPosition += MARGIN_PX;

    const containerWidth = el.offsetWidth;
    const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
    scrollPosition -= centerOffset;

    el.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      role="tablist"
      aria-label="Image thumbnails"
    >
      <div className="flex gap-1 h-20 pb-2" style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: { width: FULL_WIDTH_PX, marginLeft: MARGIN_PX, marginRight: MARGIN_PX },
              inactive: { width: COLLAPSED_WIDTH_PX, marginLeft: 0, marginRight: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative shrink-0 h-full overflow-hidden rounded-sm"
            role="tab"
            aria-selected={i === index}
            aria-label={`${item.title} — slide ${i + 1}`}
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
              loading="lazy"
            />
            {i === index && (
              <div className="absolute inset-0 ring-2 ring-white ring-inset rounded-sm" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default FramerCarouselThumbnails;
