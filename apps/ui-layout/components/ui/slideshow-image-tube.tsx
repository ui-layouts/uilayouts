'use client';

import { ImageTube as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function ImageTube(props: SlideshowProps) {
  return <Scene {...props} />;
}
