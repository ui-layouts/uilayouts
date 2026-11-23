'use client';

import { DomCloth } from '@/components/ui/slideshow-dom-cloth';
import { photos } from './photos';

export default function Demo() {
  return <DomCloth images={photos} label='DOM Cloth preview' className='w-full' />;
}
