'use client';

import { ObjectFit as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function ObjectFit(props: SlideshowProps) {
  return <Scene {...props} />;
}
