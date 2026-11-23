'use client';

import { GooeyHover } from '@/components/ui/slideshow-gooey-hover';
import { photos } from './photos';

export default function Demo() {
  return <GooeyHover images={photos} label='Gooey Hover preview' className='w-full' />;
}
