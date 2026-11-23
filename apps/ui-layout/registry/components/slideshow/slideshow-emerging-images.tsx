'use client';

import { EmergingImages } from '@/components/ui/slideshow-emerging-images';
import { photos } from './photos';

export default function Demo() {
  return <EmergingImages images={photos} label='Emerging Images preview' className='w-full' />;
}
