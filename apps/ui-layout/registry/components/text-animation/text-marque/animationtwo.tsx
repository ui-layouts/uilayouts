'use client';

import ScrollBaseAnimation from '@/components/ui/scroll-text-marque';
import React, { useEffect, useRef, useState } from 'react';

type AnimationPreset = 'default' | 'slow' | 'fast' | 'subtle';
type Direction = 'forward' | 'reverse';

interface AnimationtwoProps {
  text?: string;
  preset?: AnimationPreset;
  baseVelocity?: number;
  direction?: Direction;
  scrollDependent?: boolean;
  pauseOnScroll?: boolean;
  clampName?: string;
  containerHeight?: string;
  ariaLabel?: string;
}

const PRESETS: Record<AnimationPreset, { baseVelocity: number; clampName: string }> = {
  default: {
    baseVelocity: 3,
    clampName:
      'font-bold tracking-[-0.07em] leading-[90%] text-4xl sm:text-6xl lg:text-8xl',
  },
  slow: {
    baseVelocity: 1,
    clampName:
      'font-bold tracking-[-0.05em] leading-[90%] text-4xl sm:text-6xl lg:text-8xl',
  },
  fast: {
    baseVelocity: 6,
    clampName:
      'font-bold tracking-[-0.1em] leading-[90%] text-4xl sm:text-6xl lg:text-8xl',
  },
  subtle: {
    baseVelocity: 2,
    clampName:
      'font-semibold tracking-normal leading-[110%] text-3xl sm:text-5xl lg:text-7xl',
  },
};

function Animationtwo({
  text = 'Best Component library For Developer',
  preset = 'default',
  baseVelocity,
  direction = 'forward',
  scrollDependent = true,
  pauseOnScroll = false,
  clampName,
  containerHeight = 'h-[500px]',
  ariaLabel,
}: AnimationtwoProps) {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pauseOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [pauseOnScroll]);

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const resolved = PRESETS[preset];
  const velocity =
    prefersReducedMotion ? 0 : baseVelocity ?? resolved.baseVelocity;
  const adjustedVelocity =
    direction === 'reverse' && velocity !== 0 ? -velocity : velocity;
  const finalVelocity = isVisible ? adjustedVelocity : 0;
  const className = clampName ?? resolved.clampName;

  return (
    <section
      ref={containerRef}
      aria-label={ariaLabel ?? text}
      className={`${containerHeight} grid place-content-center overflow-hidden will-change-transform`}
    >
      <ScrollBaseAnimation
        baseVelocity={finalVelocity}
        scrollDependent={scrollDependent}
        clasname={className}
      >
        {text}
      </ScrollBaseAnimation>
    </section>
  );
}

export default Animationtwo;
