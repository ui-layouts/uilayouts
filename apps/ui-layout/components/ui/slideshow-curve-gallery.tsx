'use client';

import { CurveGallery as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function CurveGallery(props: SlideshowProps) {
  return <Scene {...props} />;
}
