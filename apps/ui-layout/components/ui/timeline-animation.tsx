'use client';

import { motion, MotionProps, Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

type TimelineAnimationProps<T extends keyof HTMLElementTagNameMap> = {
  children: React.ReactNode;
  className?: string;
  animationNum?: number;
  as?: T;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  customVariants?: Variants;
  delay?: boolean;
} & MotionProps &
  ComponentPropsWithoutRef<T>;

export function TimelineAnimation<
  T extends keyof HTMLElementTagNameMap = 'div',
>({
  children,
  className,
  animationNum = 0,
  as,
  viewport = { amount: 0.3, margin: '0px 0px -120px 0px', once: true },
  customVariants,
  delay = true,
  ...props
}: TimelineAnimationProps<T>) {
  const MotionComponent = motion[as || 'div'] as React.ElementType;

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        ...(delay ? { delay: animationNum * 0.1 } : {}),
      },
    },
  };

  return (
    <MotionComponent
      initial='hidden'
      whileInView='visible'
      variants={customVariants || defaultVariants}
      viewport={viewport}
      className={cn('relative', className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
