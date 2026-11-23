'use client';

import { CinematicScroll as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function CinematicScroll(props: SlideshowProps) {
  return <Scene {...props} />;
}
