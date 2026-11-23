'use client';

import { InfiniteGallery } from '@/components/ui/slideshow-infinite-gallery';
import { photos } from './photos';

export default function Demo() {
  return <InfiniteGallery images={photos} label='Infinite Gallery preview' className='w-full' />;
}
