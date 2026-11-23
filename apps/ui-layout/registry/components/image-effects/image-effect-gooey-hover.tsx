'use client';

import { GooeyHover } from '@/components/ui/image-effect-gooey-hover';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/Aqro/gooey-hover-codrops/a00f90715347eb3cd28e6820fb8007d6649f8160/';
const photographs = ["src/img/tiles/woods/base.jpg", "src/img/tiles/woods/hover.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/Aqro/gooey-hover-codrops/tree/a00f90715347eb3cd28e6820fb8007d6649f8160' effect={GooeyHover} kind='gooey' label='Gooey Hover' />;
}
