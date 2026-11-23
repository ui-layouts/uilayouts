'use client';

import { CurveGallery } from '@/components/ui/slideshow-curve-gallery';
import { photos } from './photos';

export default function Demo() {
  return <CurveGallery images={photos} label='Curve Gallery preview' className='w-full' />;
}
