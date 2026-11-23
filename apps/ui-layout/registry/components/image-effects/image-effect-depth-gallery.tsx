'use client';

import { DepthGallery } from '@/components/ui/image-effect-depth-gallery';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/houmahani/codrops-depth-gallery/28190e0920df887f069524c3863db397af34c1c8/';
const photographs = ["src/assets/flower-01.webp", "src/assets/flower-02.webp", "src/assets/flower-03.webp", "src/assets/flower-04.webp", "src/assets/flower-05.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/houmahani/codrops-depth-gallery/tree/28190e0920df887f069524c3863db397af34c1c8' effect={DepthGallery} kind='gallery' label='Depth Gallery' />;
}
