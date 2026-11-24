'use client';

import { Bulge } from '@/components/ui/image-effect-bulge';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/Robpayot/webgl-distortion-bulge-effect/f5fd2420f989d5e25a14b53ba04d380f262076bc/';
const photographs = ["public/img/image-1.jpg", "public/img/image-2.jpg", "public/img/image-3.jpg", "public/img/image-4.jpg", "public/img/image-5.jpg", "public/img/image-6.jpg", "public/img/image-7.jpg", "public/img/image-8.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/Robpayot/webgl-distortion-bulge-effect/tree/f5fd2420f989d5e25a14b53ba04d380f262076bc' effect={Bulge} kind='hover' label='Bulge' />;
}
