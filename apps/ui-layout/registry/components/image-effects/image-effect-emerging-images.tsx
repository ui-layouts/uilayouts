'use client';

import { EmergingImages } from '@/components/ui/image-effect-emerging-images';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/akella/CodropsEmergingImages/e866c0287be4e1e3eb7a2bcfadf93ff731440f35/';
const photographs = ["public/img/1.jpg", "public/img/2.jpg", "public/img/3.jpg", "public/img/4.jpg", "public/img/5.jpg", "public/img/6.jpg", "public/img/7.jpg", "public/img/8.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/akella/CodropsEmergingImages/tree/e866c0287be4e1e3eb7a2bcfadf93ff731440f35' effect={EmergingImages} kind='hover' label='Emerging Images' />;
}
