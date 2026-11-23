'use client';

import { ImageTube } from '@/components/ui/slideshow-image-tube';
import { photos } from './photos';

export default function Demo() {
  return <ImageTube images={photos} label='Image Tube preview' className='w-full' />;
}
