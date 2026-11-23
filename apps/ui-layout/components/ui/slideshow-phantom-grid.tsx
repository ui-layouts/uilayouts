'use client';

import { PhantomGrid as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function PhantomGrid(props: SlideshowProps & { depthMaps?: readonly string[] }) {
  return <Scene {...props} />;
}
