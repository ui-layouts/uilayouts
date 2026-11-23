'use client';

import { DepthGallery } from '@/components/ui/slideshow-depth-gallery';
import { photos } from './photos';

export default function Demo() {
  return <DepthGallery images={photos} label='Depth Gallery preview' className='w-full' />;
}
