'use client';

import {WebGLCarousel} from '@/components/ui/image-effect-webgl-carousel';

const base='https://raw.githubusercontent.com/supahfunk/webgl-carousel/d6f72f2c194dda9d1777bccfe52928825393652f/public/img';
const images=Array.from({length:12},(_,i)=>base+'/'+(i+1)+'.jpg');

export default function Demo(){
  return <figure className="m-0 w-full">
    <WebGLCarousel images={images} />
    <figcaption className="px-3 py-2 text-xs">Drag or scroll to browse. Click a photograph to expand or close it. <a data-original-credit className="underline" href="https://github.com/supahfunk/webgl-carousel">Original carousel</a></figcaption>
  </figure>;
}
