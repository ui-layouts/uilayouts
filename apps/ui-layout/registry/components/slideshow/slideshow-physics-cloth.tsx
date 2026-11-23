'use client';

import { PhysicsCloth } from '@/components/ui/slideshow-physics-cloth';
import { photos } from './photos';

export default function Demo() {
  return <PhysicsCloth images={photos} label='Physics Cloth preview' className='w-full' />;
}
