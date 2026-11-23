'use client';

import { SquareLens as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function SquareLens(props: SlideshowProps) {
  return <Scene {...props} />;
}
