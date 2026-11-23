'use client';

import { WebGLCarousel } from '@/components/ui/slideshow-webgl-carousel';
import { photos } from './photos';

export default function Demo() {
  return <WebGLCarousel images={photos} label='WebGL Carousel preview' className='w-full' />;
}
