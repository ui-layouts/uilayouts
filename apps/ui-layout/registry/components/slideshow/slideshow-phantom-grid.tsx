'use client';

import { PhantomGrid } from '@/components/ui/slideshow-phantom-grid';
import { photos } from './photos';

export default function Demo() {
  return <PhantomGrid images={photos} label='Phantom Grid preview' className='w-full' />;
}
