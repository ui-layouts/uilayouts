'use client';

import { KineticImages } from '@/components/ui/slideshow-kinetic-images';
import { photos } from './photos';

export default function Demo() {
  return <KineticImages images={photos} label='Kinetic Images preview' className='w-full' />;
}
