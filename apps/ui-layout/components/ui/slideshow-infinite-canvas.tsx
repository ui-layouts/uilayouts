'use client';

import { InfiniteCanvas as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function InfiniteCanvas(props: SlideshowProps) {
  return <Scene {...props} />;
}
