'use client';

import { Unwoven as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function Unwoven(props: SlideshowProps) {
  return <Scene {...props} />;
}
