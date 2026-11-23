'use client';

import { LiquidGlassGrid } from '@/components/ui/slideshow-liquid-glass-grid';
import { photos } from './photos';

export default function Demo() {
  return <LiquidGlassGrid images={photos} label='Liquid Glass Grid preview' className='w-full' />;
}
