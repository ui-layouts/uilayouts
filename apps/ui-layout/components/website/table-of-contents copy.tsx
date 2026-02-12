// @ts-nocheck
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/shadcn';
import { Button } from './ui/button';
interface TableOfContentsProps {
  blocks: Array<{ id: string; name: string }>;
}

export function TableOfContents({ blocks }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    observerRef.current = observer;

    // Observe all block elements
    blocks.forEach((block) => {
      const element = document.getElementById(block.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [blocks]);

  const handleClick = (blockId: string) => {
    const element = document.getElementById(blockId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='fixed 2xl:right-3 right-0 top-1/2 -translate-y-1/2 z-999 hidden lg:block'>
      <div className='flex flex-col gap-1.5 p-1.5 2xl:w-18 w-14 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800'>
        {blocks.map((block) => {
          const isActive = activeId === block.id;

          return (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  key={block.id}
                  onClick={() => handleClick(block.id)}
                  className={cn(
                    'h-2 transition-all cursor-pointer duration-300 relative',
                    isActive
                      ? '2xl:w-15 w-10 bg-blue-500'
                      : '2xl:w-12 w-8 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                  )}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{block.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
