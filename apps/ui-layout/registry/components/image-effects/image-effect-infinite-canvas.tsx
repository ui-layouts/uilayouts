'use client';

import { InfiniteCanvas } from '@/components/ui/image-effect-infinite-canvas';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/edoardolunardi/infinite-canvas/528d811a39eafe574917ed45f697f51c62942758/';
const photographs = ["public/artworks/0a991ed0-5816-1fbe-33d2-a12c384334ab.jpg", "public/artworks/0b0b5c15-0633-376b-278e-2660f09b582a.jpg", "public/artworks/0f1d3bfb-cbd3-80cb-dfb9-d157e77d1542.jpg", "public/artworks/0f16b763-7dd4-8c2f-3fde-321729f6c552.jpg", "public/artworks/0f951635-312c-0829-451b-553f461c5518.jpg", "public/artworks/1b09b81c-d793-e6f9-7862-8770be502f7b.jpg", "public/artworks/1b605198-afe5-1052-3c7b-0c08734238e1.jpg", "public/artworks/1dae4ac9-d33c-56e4-06d5-985b6be3898c.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/edoardolunardi/infinite-canvas/tree/528d811a39eafe574917ed45f697f51c62942758' effect={InfiniteCanvas} kind='grid' label='Infinite Canvas' />;
}
