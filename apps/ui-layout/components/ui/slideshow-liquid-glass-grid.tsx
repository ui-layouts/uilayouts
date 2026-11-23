'use client';

import { LiquidGlassGrid as Scene } from './slideshow/index.js';
import type { SlideshowProps } from './slideshow/props';

export function LiquidGlassGrid(props: SlideshowProps) {
  return <Scene {...props} />;
}
