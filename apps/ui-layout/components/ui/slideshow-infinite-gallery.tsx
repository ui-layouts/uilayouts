'use client';

import { InfiniteGallery as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function InfiniteGallery(props: SlideshowProps) {
  return <Scene {...props} />;
}
