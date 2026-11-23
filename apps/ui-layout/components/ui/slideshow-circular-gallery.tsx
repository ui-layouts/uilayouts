'use client';

import { CircularGallery as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function CircularGallery(props: SlideshowProps) {
  return <Scene {...props} />;
}
