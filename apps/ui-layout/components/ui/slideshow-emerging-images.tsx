'use client';

import { EmergingImages as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function EmergingImages(props: SlideshowProps) {
  return <Scene {...props} />;
}
