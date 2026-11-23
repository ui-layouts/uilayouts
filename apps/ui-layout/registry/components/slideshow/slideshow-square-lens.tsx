'use client';

import { SquareLens } from '@/components/ui/slideshow-square-lens';
import { photos } from './photos';

export default function Demo() {
  return <SquareLens images={photos} label='Square Lens preview' className='w-full' />;
}
