'use client';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];

type TabItem = {
  title: string;
  description: string;
  imageUrl: string;
};

function SingleLayout() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeItem, setActiveItem] = useState<TabItem | undefined>(tabs[0]);

  const handleClick = (index: number) => {
    const isCurrentActive = activeIndex === index;

    if (isCurrentActive) {
      // If clicking the active tab, close it and clear the active item
      setActiveIndex(null);
      setActiveItem(undefined);
    } else {
      // If clicking a new tab, open it and set the active item cleanly using index matching
      setActiveIndex(index);
      setActiveItem(tabs[index]);
    }
  };

  return (
    <div className='container mx-auto pb-10 pt-2'>
      <h1 className='uppercase text-center text-4xl font-bold pt-2 pb-4'>
        FAQ
      </h1>
      <div className='h-fit border rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]'>
        {tabs.map((tab, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={tab.title}
              className={`overflow-hidden ${index !== tabs.length - 1 ? 'border-b' : ''}`}
            >
              {/* Accessible button - handle click here instead of the wrapping div */}
              <button
                onClick={() => handleClick(index)}
                className='p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black flex gap-2'
              >
                <Plus
                  className={`${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  } transition-transform duration-300 ease-in-out w-5 h-5 dark:text-neutral-200 text-neutral-600`}
                />
                {tab.title}
              </button>

              <AnimatePresence mode='sync'>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    <p className='dark:text-neutral-300 text-neutral-700 p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]'>
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleLayout;
