'use client';

import { RotatingGallery } from '@/components/ui/image-effect-rotating-gallery';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/oluwadareseyi/webgl-rotating-image-gallery/60048f1ba8c2a05471cdf5e3981c86befc033cc7/';
const photographs = ["src/public/img/1.webp", "src/public/img/2.webp", "src/public/img/3.webp", "src/public/img/4.webp", "src/public/img/5.webp", "src/public/img/6.webp", "src/public/img/7.webp", "src/public/img/8.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/oluwadareseyi/webgl-rotating-image-gallery/tree/60048f1ba8c2a05471cdf5e3981c86befc033cc7' effect={RotatingGallery} kind='gallery' label='Rotating Gallery' />;
}
