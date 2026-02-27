// inspired by tom is loading
'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useInView,
} from 'motion/react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import { Download, X } from 'lucide-react';
import { items } from '@/components/website/constant';

function UnsplashGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className='container mx-auto sm:p-4 px-0 '>
        <div className='columns-2 md:columns-3 2xl:columns-4 gap-4'>
          <>
            {items.slice(5, 14)?.map((item, index) => (
              <ImageItem
                key={item.id}
                item={item}
                index={index}
                setSelected={setSelected}
              />
            ))}
          </>
        </div>
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </>
  );
}
interface Item {
  id: number;
  url: string;
  title: string;
}

interface ImageItemProps {
  item: Item;
  index: number | string;
  setSelected: any;
}

function ImageItem({ item, index, setSelected }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <m.figure
      initial='hidden'
      animate={isInView && 'visible'}
      ref={ref}
      className="inline-block group w-full rounded-md  relative dark:bg-black bg-white  before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-linear-to-t dark:before:from-neutral-900  before:from-neutral-200/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <m.img
        layoutId={`card-${item.id}`}
        whileHover={{ scale: 1.025 }}
        src={item.url}
        className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
      />
      <div className='flex flex-wrap mt-2 absolute bottom-0 left-0 p-2 group-hover:opacity-100 opacity-0 font-semibold '>
        <h1>{item.title}</h1>
      </div>
    </m.figure>
  );
}

interface ItemType {
  id: number;
  url: string;
  title: string;
  tags: any[];
  description: string;
}

interface ModalProps {
  selected: ItemType | null;
  setSelected: any;
}
function Modal({ selected, setSelected }: ModalProps) {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  };
  useEffect(() => {
    if (selected) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);
  return (
    <AnimatePresence>
      {selected && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className='fixed inset-0 bg-black/50 backdrop-blur-xs z-50 cursor-pointer overflow-y-scroll'
        >
          <m.div
            onClick={(e) => e.stopPropagation()}
            layoutId={`card-${selected.id}`}
            className='w-full max-w-[1000px] relative overflow-x-hidden mx-auto my-8 cursor-default dark:bg-[#202020] bg-[#ebebeb] '
          >
            <button
              className='absolute top-2 right-2  p-2 mix-blend-multiply'
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <m.div className=' p-2 h-[70vh]  rounded-md'>
              <Image
                width={400}
                height={400}
                alt='img'
                src={selected.url}
                className='w-full h-full object-contain rounded-md dark:bg-black bg-white'
              />
            </m.div>
            <m.div
              variants={itemVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='bg-white dark:bg-black dark:text-white text-black p-4  rounded-md  px-8'
            >
              <m.h3 variants={itemVariants} className='text-2xl font-bold mb-2'>
                {selected.title}
              </m.h3>
              <m.div variants={itemVariants} className='flex gap-2'>
                {selected.tags.map((tag) => {
                  return (
                    <div
                      className='bg-base-300 border  dark:bg-neutral-100 bg-neutral-50 text-zinc-600 px-2 py-1 rounded-md'
                      key={tag}
                    >
                      {tag}
                    </div>
                  );
                })}
              </m.div>
              <m.p variants={itemVariants} className='my-4'>
                {selected.description}
              </m.p>
              <m.a
                variants={itemVariants}
                className='flex  w-fit gap-2 cursor-pointer px-4 py-2 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-colors border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold'
                href='#'
              >
                Download
                <Download />
              </m.a>
            </m.div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default UnsplashGrid;
