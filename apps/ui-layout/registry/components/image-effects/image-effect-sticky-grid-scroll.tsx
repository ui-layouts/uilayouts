'use client';
import {StickyGridScroll} from '@/components/ui/image-effect-sticky-grid-scroll';
const images=Array.from({length:12},(_,i)=>'https://raw.githubusercontent.com/theoplawinski/codrops-sticky-grid-scroll/6015d6c7e66d371618c82b5fb0126d278f88e42d/public/'+(i+1)+'.webp');
export default function Demo() {
  return <StickyGridScroll style={{ background: 'transparent' }} images={images}/>;
}
