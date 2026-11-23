'use client';

import { DomCloth as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function DomCloth(props: SlideshowProps) {
  return <Scene {...props} />;
}
