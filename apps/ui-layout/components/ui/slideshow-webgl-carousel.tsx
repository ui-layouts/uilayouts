'use client';

import { WebGLCarousel as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function WebGLCarousel(props: SlideshowProps) {
  return <Scene {...props} />;
}
