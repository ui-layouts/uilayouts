'use client';

import { items, type GalleryItem } from '@/components/website/constant';
import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const VISIBLE_ITEMS = items.slice(5, 14);

function preloadImage(src: string): void {
  const img = new window.Image();
  img.src = src;
}

function UnsplashGrid() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [loadedIds, setLoadedIds] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((id: number) => {
    setLoadedIds((prev) => new Set(prev).add(id));
  }, []);

  return (
    <>
      <div className="container mx-auto sm:p-4 px-0">
        <div className="columns-2 md:columns-3 2xl:columns-4 gap-4">
          {VISIBLE_ITEMS.map((item, index) => (
            <ImageItem
              key={item.id}
              item={item}
              index={index}
              setSelected={setSelected}
              isLoaded={loadedIds.has(item.id)}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </>
  );
}

interface ImageItemProps {
  item: GalleryItem;
  index: number;
  setSelected: (item: GalleryItem | null) => void;
  isLoaded: boolean;
  onLoad: (id: number) => void;
}

function ImageItem({ item, index, setSelected, isLoaded, onLoad }: ImageItemProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [imgError, setImgError] = useState(false);

  const handleClick = useCallback(() => setSelected(item), [item, setSelected]);
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSelected(item);
      }
    },
    [item, setSelected]
  );

  return (
    <motion.figure
      initial="hidden"
      animate={isInView && 'visible'}
      ref={ref}
      className="inline-block group w-full rounded-md relative dark:bg-black bg-white before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-linear-to-t dark:before:from-neutral-900 before:from-neutral-200/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {!isLoaded && !imgError && (
        <div className="w-full aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-md" />
      )}
      {imgError ? (
        <div className="w-full aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 text-sm rounded-md">
          Failed to load
        </div>
      ) : (
        <motion.img
          layoutId={`card-${item.id}`}
          whileHover={{ scale: isLoaded ? 1.025 : 1 }}
          src={item.url}
          alt={item.title}
          className={`w-full bg-base-100 shadow-xl image-full cursor-pointer ${isLoaded ? 'block' : 'hidden'}`}
          onLoad={() => onLoad(item.id)}
          onError={() => setImgError(true)}
        />
      )}
      <div className="flex flex-wrap mt-2 absolute bottom-0 left-0 p-2 group-hover:opacity-100 opacity-0 font-semibold transition-opacity">
        <h1>{item.title}</h1>
      </div>
    </motion.figure>
  );
}

interface ModalProps {
  selected: GalleryItem | null;
  setSelected: (item: GalleryItem | null) => void;
}

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.2 },
  },
  exit: { opacity: 0, y: 20 },
};

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  }),
};

function trapFocus(element: HTMLElement, event: KeyboardEvent) {
  const focusable = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function Modal({ selected, setSelected }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [[activeId, direction], setSlideState] = useState<[number | null, number]>([null, 0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedIndex = selected ? VISIBLE_ITEMS.findIndex((i) => i.id === selected.id) : -1;

  const handleClose = useCallback(() => setSelected(null), [setSelected]);

  const navigate = useCallback(
    (delta: number) => {
      const nextIndex = selectedIndex + delta;
      if (nextIndex < 0 || nextIndex >= VISIBLE_ITEMS.length) return;
      setSlideState([VISIBLE_ITEMS[nextIndex].id, delta]);

      const next = VISIBLE_ITEMS[nextIndex];
      setSelected(next);
      if (nextIndex + 1 < VISIBLE_ITEMS.length) preloadImage(VISIBLE_ITEMS[nextIndex + 1].url);
      if (nextIndex - 1 >= 0) preloadImage(VISIBLE_ITEMS[nextIndex - 1].url);

      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [selectedIndex, setSelected]
  );

  const goNext = useCallback(() => navigate(1), [navigate]);
  const goPrev = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    if (selected) setSlideState([selected.id, 0]);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    document.body.classList.add('overflow-hidden');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
      else if (event.key === 'ArrowRight') goNext();
      else if (event.key === 'ArrowLeft') goPrev();
      if (dialogRef.current) trapFocus(dialogRef.current, event);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected, handleClose, goNext, goPrev]);

  if (!selected) return null;

  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex < VISIBLE_ITEMS.length - 1;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 cursor-pointer overflow-y-scroll"
        role="dialog"
        aria-modal="true"
        aria-label={selected.title}
        ref={dialogRef}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-${selected.id}`}
          className="w-full max-w-[1000px] relative overflow-x-hidden mx-auto my-8 cursor-default dark:bg-[#202020] bg-[#ebebeb]"
        >
          <div className="flex items-center justify-between absolute top-2 right-2 gap-1 z-10">
            {hasPrev && (
              <button
                className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
            )}
            {hasNext && (
              <button
                className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
                onClick={goNext}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            )}
            <button
              className="p-2 mix-blend-multiply dark:mix-blend-normal dark:bg-black/30 dark:hover:bg-black/50 dark:text-white rounded-full transition-colors"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <X />
            </button>
          </div>

          <div className="relative p-2 h-[70vh] rounded-md overflow-hidden" ref={scrollRef}>
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={selected.id}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-2"
              >
                <Image
                  width={400}
                  height={400}
                  alt={selected.title}
                  src={selected.url}
                  className="w-full h-full object-contain rounded-md dark:bg-black bg-white"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
              {selectedIndex + 1} / {VISIBLE_ITEMS.length}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white dark:bg-black dark:text-white text-black p-4 rounded-md px-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-2">
              {selected.title}
            </motion.h3>
            <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
              {selected.tags?.map((tag: string) => (
                <div
                  className="bg-base-300 border dark:bg-neutral-100 bg-neutral-50 text-zinc-600 px-2 py-1 rounded-md"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </motion.div>
            <motion.p variants={itemVariants} className="my-4">
              {selected.description}
            </motion.p>
            <motion.a
              variants={itemVariants}
              className="flex w-fit gap-2 cursor-pointer px-4 py-2 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-colors border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Download
              <Download />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UnsplashGrid;
