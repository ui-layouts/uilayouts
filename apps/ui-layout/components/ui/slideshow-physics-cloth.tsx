'use client';

import { PhysicsCloth as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function PhysicsCloth(props: SlideshowProps) {
  return <Scene {...props} />;
}
