'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';
import React from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';
type AsTag =
  | 'div'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'a'
  | 'p'
  | 'section'
  | 'figure'
  | 'button'
  | 'article';

const generateVariants = (direction: Direction) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'right' || direction === 'down' ? 20 : -20;

  return {
    hidden: { filter: 'blur(10px)', opacity: 0, [axis]: value },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };
};

const defaultViewport = {
  once: true,
  amount: 0.3,
  margin: '0px 0px -200px 0px',
};

interface ScrollElementProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden?: any;
    visible?: any;
  };
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  delay?: number;
  direction?: Direction;
  as?: AsTag;
  [key: string]: any; // Allow any additional props
}

export function ScrollAnimation({
  children,
  className,
  variants,
  viewport = defaultViewport,
  delay = 0,
  direction = 'down',
  as: Component = 'div',
  ...props
}: ScrollElementProps) {
  const baseVariants = variants || generateVariants(direction);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...baseVariants.visible.transition,
        delay,
      },
    },
  };

  const MotionComponent = motion[Component] as typeof motion.div;

  return (
    <MotionComponent
      whileInView='visible'
      initial='hidden'
      variants={modifiedVariants}
      viewport={viewport as any}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
