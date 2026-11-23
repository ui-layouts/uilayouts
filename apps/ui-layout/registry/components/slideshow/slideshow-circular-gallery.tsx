'use client';

import { CircularGallery } from '@/components/ui/slideshow-circular-gallery';
import { photos } from './photos';

export default function Demo() {
  return <CircularGallery images={photos} label='Circular Gallery preview' className='w-full' />;
}
