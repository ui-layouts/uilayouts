'use client';

import { InfiniteCanvas } from '@/components/ui/slideshow-infinite-canvas';
import { photos } from './photos';

export default function Demo() {
  return <InfiniteCanvas images={photos} label='Infinite Canvas preview' className='w-full' />;
}
