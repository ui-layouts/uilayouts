'use client';

import { ShaderRipple } from '@/components/ui/slideshow-shader-ripple';
import { photos } from './photos';

export default function Demo() {
  return <ShaderRipple images={photos} label='Shader Ripple preview' className='w-full' />;
}
