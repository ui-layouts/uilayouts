'use client';

import { SdfLensBlur as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function SdfLensBlur(props: SlideshowProps) {
  return <Scene {...props} />;
}
