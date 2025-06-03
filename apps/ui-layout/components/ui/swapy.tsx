'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';
import { createSwapy, type SlotItemMapArray } from 'swapy';
import { cn } from '@/lib/utils';

type AnimationType = 'dynamic' | 'spring' | 'none';
type SwapMode = 'hover' | 'drop';

type Config = {
  animation: AnimationType;
  continuousMode: boolean;
  manualSwap: boolean;
  swapMode: SwapMode;
  autoScrollOnDrag: boolean;
};

type SwapyLayoutProps = {
  id: string;
  enable?: boolean;
  onSwap?: (event: { newSlotItemMap: { asArray: SlotItemMapArray } }) => void;
  config?: Partial<Config>;
  className?: string;
  children: React.ReactNode;
};

export const SwapyLayout = ({
  id,
  onSwap,
  config = {},
  className,
  children,
}: SwapyLayoutProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const swapyRef = useRef<ReturnType<typeof createSwapy> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    swapyRef.current = createSwapy(container, config);

    if (onSwap) {
      swapyRef.current.onSwap(onSwap);
    }

    return () => {
      swapyRef.current?.destroy();
    };
  }, [config, onSwap]);

  return (
    <div id={id} ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export const DragHandle = ({ className }: { className?: string }) => {
  return (
    <div
      data-swapy-handle
      className={cn(
        'absolute top-2 left-2 cursor-grab  text-gray-500  rounded-md bg-transparent  active:cursor-grabbing  ',
        className
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='lucide lucide-grip-vertical-icon lucide-grip-vertical opacity-80'
      >
        <circle cx='9' cy='12' r='1' />
        <circle cx='9' cy='5' r='1' />
        <circle cx='9' cy='19' r='1' />
        <circle cx='15' cy='12' r='1' />
        <circle cx='15' cy='5' r='1' />
        <circle cx='15' cy='19' r='1' />
      </svg>
    </div>
  );
};

export const SwapySlot = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'data-[swapy-highlighted]:bg-neutral-200 data-[swapy-highlighted]:dark:bg-neutral-800',
        className
      )}
      data-swapy-slot={id}
    >
      {children}
    </div>
  );
};

const dragOpacityClassMap: Record<number, string> = {
  10: 'data-[swapy-dragging]:opacity-10',
  20: 'data-[swapy-dragging]:opacity-20',
  30: 'data-[swapy-dragging]:opacity-30',
  40: 'data-[swapy-dragging]:opacity-40',
  50: 'data-[swapy-dragging]:opacity-50',
  60: 'data-[swapy-dragging]:opacity-60',
  70: 'data-[swapy-dragging]:opacity-70',
  80: 'data-[swapy-dragging]:opacity-80',
  90: 'data-[swapy-dragging]:opacity-90',
  100: 'data-[swapy-dragging]:opacity-100',
};

export const SwapyItem = ({
  id,
  className,
  children,
  dragItemOpacity = 100, // default to 100
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  dragItemOpacity?: number;
}) => {
  const opacityClass =
    dragOpacityClassMap[dragItemOpacity] ?? 'data-[swapy-dragging]:opacity-50';
  return (
    <div className={cn(opacityClass, className)} data-swapy-item={id}>
      {children}
    </div>
  );
};
