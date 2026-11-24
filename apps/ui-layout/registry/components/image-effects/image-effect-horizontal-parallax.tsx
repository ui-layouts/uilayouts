'use client';
import {HorizontalParallax} from '@/components/ui/image-effect-horizontal-parallax';
const images=Array.from({length:10},(_,i)=>'https://raw.githubusercontent.com/davidfaure/horizontal-parallax-gallery-codrops/49c3ead7b70bf9acfee9d73664c26971b2381a19/public/'+(i+1)+'.webp');
export default function Demo() {
  return <HorizontalParallax images={images}/>;
}
