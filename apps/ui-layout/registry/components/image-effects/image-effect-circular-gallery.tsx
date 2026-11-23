'use client';

import { CircularGallery } from '@/components/ui/image-effect-circular-gallery';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/bizarro/infinite-circular-webgl-gallery/3db485819df63550f9872b0ca5e6961a9fe517e4/';
const photographs = ["app/images/1.jpg", "app/images/2.jpg", "app/images/3.jpg", "app/images/4.jpg", "app/images/5.jpg", "app/images/6.jpg", "app/images/7.jpg", "app/images/8.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/bizarro/infinite-circular-webgl-gallery/tree/3db485819df63550f9872b0ca5e6961a9fe517e4' effect={CircularGallery} kind='gallery' label='Circular Gallery' />;
}
