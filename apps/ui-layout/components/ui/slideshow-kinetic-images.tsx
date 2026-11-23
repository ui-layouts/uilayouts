'use client';

import { KineticImages as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function KineticImages(props: SlideshowProps) {
  return <Scene {...props} />;
}
