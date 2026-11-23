'use client';

import { GooeyHover as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function GooeyHover(props: SlideshowProps) {
  return <Scene {...props} />;
}
