'use client';

import { KineticImages } from '@/components/ui/image-effect-kinetic-images';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/DGFX/codrops-kinetic-images/965dda362a8f9e5d522ed675493897200d273e49/';
const photographs = ["public/images/img1.webp", "public/images/img2.webp", "public/images/img3.webp", "public/images/img4.webp", "public/images/img5.webp", "public/images/img6.webp", "public/images/img7.webp", "public/images/img8.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/DGFX/codrops-kinetic-images/tree/965dda362a8f9e5d522ed675493897200d273e49' effect={KineticImages} kind='gallery' label='Kinetic Images' />;
}
