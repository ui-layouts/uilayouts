'use client';

import { motion, MotionProps, Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

type TimelineAnimationProps<T extends keyof HTMLElementTagNameMap> = {
  children: React.ReactNode;
  className?: string;
  animationNum: number;
  as?: T;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  customVariants?: Variants;
} & MotionProps &
  ComponentPropsWithoutRef<T>;

export function TimelineAnimation<
  T extends keyof HTMLElementTagNameMap = 'div',
>({
  children,
  className,
  animationNum,
  as,
  viewport = { amount: 0.3, margin: '0px 0px -120px 0px', once: true },
  customVariants,
  ...props
}: TimelineAnimationProps<T>) {
  const MotionComponent = motion[as || 'div'] as React.ElementType;

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <MotionComponent
      custom={animationNum}
      initial='hidden'
      whileInView='visible'
      variants={customVariants || defaultVariants}
      viewport={viewport}
      className={cn('relative', className)}
      {...props} // ✅ now accepts href, target, rel, etc.
    >
      {children}
    </MotionComponent>
  );
}
