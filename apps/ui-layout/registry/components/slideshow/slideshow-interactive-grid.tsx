'use client';

import { InteractiveGrid } from '@/components/ui/slideshow-interactive-grid';
import { photos } from './photos';

export default function Demo() {
  return <InteractiveGrid images={photos} label='Interactive Grid preview' className='w-full' />;
}
