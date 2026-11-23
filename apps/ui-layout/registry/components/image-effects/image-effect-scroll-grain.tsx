'use client';

import { ScrollGrain } from '@/components/ui/image-effect-scroll-grain';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/jankohlbach/codrops-shader-on-scroll/8120ad43def74a1243761a3f5f064cc1262afc2a/';
const photographs = ["assets/1.webp", "assets/2.webp", "assets/3.webp", "assets/4.webp", "assets/5.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/jankohlbach/codrops-shader-on-scroll/tree/8120ad43def74a1243761a3f5f064cc1262afc2a' effect={ScrollGrain} kind='gallery' label='Scroll Grain' />;
}
