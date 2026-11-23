'use client';

import { ProgressiveBlur } from '@/components/ui/slideshow-progressive-blur';
import { photos } from './photos';

export default function Demo() {
  return <ProgressiveBlur images={photos} label='Progressive Blur preview' className='w-full' />;
}
