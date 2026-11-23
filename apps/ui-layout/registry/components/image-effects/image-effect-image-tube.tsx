'use client';

import { ImageTube } from '@/components/ui/image-effect-image-tube';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/matdn/helmet/74a99abf8fa1f12bb23ceb4522251093ba2a03a9/';
const photographs = ["public/tube/img1.jpg", "public/tube/img2.jpg", "public/tube/img3.jpg", "public/tube/img4.jpg", "public/tube/img5.jpg", "public/tube/img6.jpg", "public/tube/img7.jpg", "public/tube/img8.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/matdn/helmet/tree/74a99abf8fa1f12bb23ceb4522251093ba2a03a9' effect={ImageTube} kind='gallery' label='Image Tube' />;
}
