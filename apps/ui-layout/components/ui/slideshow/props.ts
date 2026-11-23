import type { CSSProperties } from 'react';

export interface SlideshowProps {
  images: readonly string[];
  className?: string;
  style?: CSSProperties;
  label?: string;
  time?: number;
  secondsPerImage?: number;
  pointer?: readonly [number, number];
  playing?: boolean;
  background?: string;
}
