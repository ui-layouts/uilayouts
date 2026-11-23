'use client';

import { Bulge } from '@/components/ui/slideshow-bulge';
import { photos } from './photos';

export default function Demo() {
  return <Bulge images={photos} label='Bulge preview' className='w-full' />;
}
