'use client';

import { ExperimentalCarousel } from '@/components/ui/image-effect-experimental-carousel';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/colindmg/r3f-experimental-carousel/4cd418877366f54835bb35c29bc9e9ea7e85eadd/';
const photographs = ["public/images/img1.webp", "public/images/img2.webp", "public/images/img3.webp", "public/images/img4.webp", "public/images/img5.webp", "public/images/img6.webp", "public/images/img7.webp", "public/images/img8.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/colindmg/r3f-experimental-carousel/tree/4cd418877366f54835bb35c29bc9e9ea7e85eadd' effect={ExperimentalCarousel} kind='gallery' label='Experimental Carousel' />;
}
