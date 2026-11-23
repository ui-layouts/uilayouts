'use client';

import { ScrollGrain } from '@/components/ui/slideshow-scroll-grain';
import { photos } from './photos';

export default function Demo() {
  return <ScrollGrain images={photos} label='Scroll Grain preview' className='w-full' />;
}
