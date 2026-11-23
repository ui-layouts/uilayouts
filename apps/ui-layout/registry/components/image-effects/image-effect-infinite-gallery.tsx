'use client';

import { InfiniteGallery } from '@/components/ui/image-effect-infinite-gallery';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/bizarro/infinite-webl-gallery/7cb03cc6ee9c0de34a364ef2f74444d00c8f7643/';
const photographs = ["images/demo-1/1.jpg", "images/demo-1/2.jpg", "images/demo-1/3.jpg", "images/demo-1/4.jpg", "images/demo-1/5.jpg", "images/demo-1/6.jpg", "images/demo-1/7.jpg", "images/demo-1/8.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/bizarro/infinite-webl-gallery/tree/7cb03cc6ee9c0de34a364ef2f74444d00c8f7643' effect={InfiniteGallery} kind='gallery' label='Infinite Gallery' />;
}
