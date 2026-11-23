'use client';

import { RotatingGallery as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function RotatingGallery(props: SlideshowProps) {
  return <Scene {...props} />;
}
