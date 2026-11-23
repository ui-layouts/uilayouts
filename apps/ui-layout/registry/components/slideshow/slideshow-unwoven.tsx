'use client';

import { Unwoven } from '@/components/ui/slideshow-unwoven';
import { photos } from './photos';

export default function Demo() {
  return <Unwoven images={photos} label='Unwoven preview' className='w-full' />;
}
