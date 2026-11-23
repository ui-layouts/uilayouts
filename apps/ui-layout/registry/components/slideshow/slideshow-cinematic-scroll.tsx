'use client';

import { CinematicScroll } from '@/components/ui/slideshow-cinematic-scroll';
import { photos } from './photos';

export default function Demo() {
  return <CinematicScroll images={photos} label='Cinematic Scroll preview' className='w-full' />;
}
