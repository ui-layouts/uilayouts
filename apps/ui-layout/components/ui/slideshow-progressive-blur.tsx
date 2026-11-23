'use client';

import { ProgressiveBlur as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function ProgressiveBlur(props: SlideshowProps) {
  return <Scene {...props} />;
}
