'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { ChevronsUpDown, MoveLeft } from 'lucide-react';
import { AnimatePresence, LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Scroll and intersection tracking
  useEffect(() => {
    const headers = Array.from(document.querySelectorAll('h2'));

    const newHeadings: Heading[] = headers.map((header, index) => {
      if (!header.id) {
        header.id = `heading-${index}`;
      }
      return {
        id: header.id,
        text: header.textContent || '',
        level: 2,
      };
    });

    setHeadings(newHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -60% 0%',
        threshold: 0,
      }
    );

    headers.forEach((h) => observer.observe(h));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // Navigate to specific heading
  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100; // adjust for sticky header height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsExpanded(false);
  };

  const strokeDashoffset = 440 - (440 * scrollProgress) / 100;

  return (
    <>
      {headings?.length !== 0 && (
        <nav className='sticky top-0 left-[50%] -translate-x-[50%] w-fit z-50  flex justify-end'>
          <>
            <div className='flex items-center gap-2 dark:bg-neutral-800 bg-neutral-200 pt-0 p-1 border-t-0 border relative h-12'>
              <Link
                href={pathname.startsWith('/blocks') ? '/blocks' : '/templates'}
                className='bg-white dark:bg-black px-3 grid place-content-center h-full'
              >
                <MoveLeft />
              </Link>
              <div className='relative font-semibold block text-sm w-fit h-fit'>
                <span className='absolute top-[50%] text-[0.72rem] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]'>
                  {Math.round(scrollProgress)}%
                </span>
                <svg
                  width='100%'
                  height='100%'
                  className='w-11  rounded-full'
                  viewBox='0 0 140 140'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='70'
                    cy='70'
                    r='60'
                    className='dark:stroke-primary/40 stroke-primary/20 backdrop-blur-xs'
                    strokeWidth='16'
                    fill='none'
                  />
                  <circle
                    cx='70'
                    cy='70'
                    r='60'
                    className='stroke-primary'
                    strokeWidth='16'
                    fill='none'
                    strokeDasharray='440'
                    strokeDashoffset={strokeDashoffset}
                    style={{
                      transition: 'stroke-dashoffset 0.5s ease',
                    }}
                  />
                </svg>
              </div>
              <button
                className='pt-1 hover:scale-125 cursor-pointer transition-transform'
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <ChevronsUpDown />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <m.nav
                    className='absolute top-16 rounded-md -left-16 w-72 dark:bg-neutral-800 bg-neutral-200 border'
                    initial={{
                      opacity: 0,
                      rotateX: -90,
                      transformPerspective: 1000,
                      transformOrigin: 'top',
                    }}
                    animate={
                      isExpanded
                        ? { opacity: 1, rotateX: 0 }
                        : { opacity: 0, rotateX: -90 }
                    }
                    exit={{ opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <ul className='font-manrope list-none m-0 ml-0 text-[0.8em] space-y-1 p-2'>
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <button
                            onClick={() => scrollToHeading(heading.id)}
                            className={`
                          w-full text-left 
                          ${activeId === heading.id ? 'text-primary' : 'text-neutral-600 dark:text-neutral-400'}
                          no-underline rounded-xs px-1 
                          hover:text-primary 
                          shrink-0 flex cursor-pointer
                          font-semibold
                        `}
                          >
                            {heading.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </m.nav>
                )}
              </AnimatePresence>
            </div>
          </>
        </nav>
      )}
    </>
  );
}
