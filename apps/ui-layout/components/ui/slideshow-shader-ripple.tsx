'use client';

import { ShaderRipple as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function ShaderRipple(props: SlideshowProps) {
  return <Scene {...props} />;
}
