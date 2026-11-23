'use client';

import { DepthGallery as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function DepthGallery(props: SlideshowProps) {
  return <Scene {...props} />;
}
