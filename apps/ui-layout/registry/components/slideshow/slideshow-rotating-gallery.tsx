'use client';

import { RotatingGallery } from '@/components/ui/slideshow-rotating-gallery';
import { photos } from './photos';

export default function Demo() {
  return <RotatingGallery images={photos} label='Rotating Gallery preview' className='w-full' />;
}
