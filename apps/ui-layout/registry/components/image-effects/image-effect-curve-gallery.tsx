'use client';

import { CurveGallery } from '@/components/ui/image-effect-curve-gallery';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/gaspoorf/curve-gallery/51ac2f562b0af38624da939c7b4e39ba4e6e5b08/';
const photographs = Array.from({length:19}, (_, i) => source + 'public/img/' + (i + 1) + '.webp');

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/gaspoorf/curve-gallery/tree/51ac2f562b0af38624da939c7b4e39ba4e6e5b08' effect={CurveGallery} kind='path' label='Curve Gallery' />;
}
