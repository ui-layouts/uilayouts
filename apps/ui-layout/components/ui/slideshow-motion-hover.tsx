'use client';

import { MotionHover as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function MotionHover(props: SlideshowProps) {
  return <Scene {...props} />;
}
