'use client';

import { ExperimentalCarousel } from '@/components/ui/slideshow-experimental-carousel';
import { photos } from './photos';

export default function Demo() {
  return <ExperimentalCarousel images={photos} label='Experimental Carousel preview' className='w-full' />;
}
