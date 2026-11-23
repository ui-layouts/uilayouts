'use client';

import { MotionHover } from '@/components/ui/slideshow-motion-hover';
import { photos } from './photos';

export default function Demo() {
  return <MotionHover images={photos} label='Motion Hover preview' className='w-full' />;
}
