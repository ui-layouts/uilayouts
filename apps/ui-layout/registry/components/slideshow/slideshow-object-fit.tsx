'use client';

import { ObjectFit } from '@/components/ui/slideshow-object-fit';
import { photos } from './photos';

export default function Demo() {
  return <ObjectFit images={photos} label='Object Fit preview' className='w-full' />;
}
