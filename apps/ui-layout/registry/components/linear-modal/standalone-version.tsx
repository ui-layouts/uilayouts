'use client';
import { motion, AnimatePresence, MotionConfig, Transition } from 'motion/react';
import { Plus, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Card item type
interface CardItem {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
}

// Animation config
const transition: Transition = {
  type: 'spring',
  bounce: 0.05,
  duration: 0.3
};

const LinearCardDialog: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  // Default items (standalone, fixed)
  const items: CardItem[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1757672242146-a6a7897bcc80?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Accordion',
      description:
        'Immerse yourself in our cutting-edge interactive gallery...',
      tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1756806983725-977bb2308d4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Globe Section',
      description:
        'Embark on a virtual journey around the world with our state-of-the-art 3D globe feature...',
      tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1756806983832-1f056cf24182?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image Mouse Trail',
      description:
        'Transform your browsing experience with our mesmerizing Image Mouse Trail feature...',
      tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        handleCloseDialog();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setCarouselWidth(scrollWidth - offsetWidth);
    }
  }, [items]);

  const handleCardClick = (itemIndex: number): void => {
    setIndex(itemIndex);
    setIsOpen(true);
  };

  const handleCloseDialog = (): void => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleCloseDialog();
    }
  };

  const currentItem = items[index];

  return (
    <div className="relative h-full p-4">
      <MotionConfig transition={transition}>
        <motion.div
          ref={carousel}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          dragTransition={{ bounceDamping: 30 }}
          className="flex w-full gap-4 py-10"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 flex relative flex-col overflow-hidden border dark:bg-black bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer transition-colors"
              layoutId={`dialog-${item.id}`}
              style={{ width: '250px', borderRadius: '12px' }}
              tabIndex={i}
              onClick={() => handleCardClick(i)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(i);
                }
              }}
              role="button"
              aria-label={`Open ${item.title} details`}
            >
              <motion.div layoutId={`dialog-img-${item.id}`}>
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex flex-grow flex-row items-end justify-between p-4">
                <div className="flex-1">
                  <motion.h3
                    layoutId={`dialog-title-${item.id}`}
                    className="dark:text-white text-black font-semibold text-sm truncate"
                  >
                    {item.title}
                  </motion.h3>
                </div>
                <button
                  className="absolute bottom-2 right-2 p-2 dark:bg-neutral-800 bg-neutral-300 hover:bg-neutral-400 dark:hover:bg-neutral-700 rounded-xl transition-colors"
                  aria-label={`Open ${item.title}`}
                  tabIndex={-1}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isOpen && currentItem && createPortal(
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={`backdrop-${currentItem.id}`}
              className="fixed inset-0 h-full w-full dark:bg-black/50 bg-black/25 backdrop-blur-sm z-40"
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={handleBackdropClick}
            />
            <motion.div
              key="dialog"
              className="pointer-events-none fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                className="pointer-events-auto relative flex h-auto w-full max-w-[500px] flex-col overflow-hidden dark:bg-neutral-900 bg-white border shadow-2xl max-h-[90vh] overflow-y-auto"
                layoutId={`dialog-${currentItem.id}`}
                tabIndex={-1}
                style={{ borderRadius: '24px' }}
                role="dialog"
                aria-labelledby={`dialog-title-${currentItem.id}`}
                aria-describedby={`dialog-description-${currentItem.id}`}
              >
                <motion.div layoutId={`dialog-img-${currentItem.id}`}>
                  <img
                    src={currentItem.url}
                    alt={currentItem.title}
                    className="h-64 w-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <motion.h2
                    layoutId={`dialog-title-${currentItem.id}`}
                    className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-4"
                    id={`dialog-title-${currentItem.id}`}
                  >
                    {currentItem.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    id={`dialog-description-${currentItem.id}`}
                  >
                    {currentItem.description}
                  </motion.div>
                  {currentItem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {currentItem.tags.map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleCloseDialog}
                  className="absolute right-4 top-4 p-2 bg-black dark:bg-white rounded-lg text-primary-foreground border cursor-pointer transition-colors"
                  type="button"
                  aria-label={`Close ${currentItem.title} dialog`}
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
      </MotionConfig>
    </div>
  );
};

export default LinearCardDialog;
