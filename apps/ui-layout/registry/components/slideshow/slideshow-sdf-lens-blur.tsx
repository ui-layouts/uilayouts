'use client';

import { SdfLensBlur } from '@/components/ui/slideshow-sdf-lens-blur';
import { photos } from './photos';

export default function Demo() {
  return <SdfLensBlur images={photos} label='SDF Lens Blur preview' className='w-full' />;
}
