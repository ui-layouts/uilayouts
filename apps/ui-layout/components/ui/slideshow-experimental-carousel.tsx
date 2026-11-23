'use client';

import { ExperimentalCarousel as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function ExperimentalCarousel(props: SlideshowProps) {
  return <Scene {...props} />;
}
