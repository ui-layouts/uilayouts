'use client';

import { InteractiveGrid as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function InteractiveGrid(props: SlideshowProps) {
  return <Scene {...props} />;
}
