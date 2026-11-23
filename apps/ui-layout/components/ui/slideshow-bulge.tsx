'use client';

import { Bulge as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function Bulge(props: SlideshowProps) {
  return <Scene {...props} />;
}
