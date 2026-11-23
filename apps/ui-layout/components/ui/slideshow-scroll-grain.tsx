'use client';

import { ScrollGrain as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function ScrollGrain(props: SlideshowProps) {
  return <Scene {...props} />;
}
