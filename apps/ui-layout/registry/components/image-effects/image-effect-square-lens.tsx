'use client';

import { SquareLens } from '@/components/ui/image-effect-square-lens';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/tomoyukinakata/mouse-following-square-lens-effect/423680b1322f7d984a5a9c2834fe7eaa3e697c84/';
const photographs = ["public/assets/img/texture1.webp", "public/assets/img/texture2.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/tomoyukinakata/mouse-following-square-lens-effect/tree/423680b1322f7d984a5a9c2834fe7eaa3e697c84' effect={SquareLens} kind='hover' label='Square Lens' />;
}
