'use client';

import { Unwoven } from '@/components/ui/image-effect-unwoven';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/clementgrellier/unwoven/32c4bfcd623058d92095ffbafe44a1fad6a6d4c1/';
const photographs = ["img/motion_blur_portrait_01.jpg", "img/motion_blur_portrait_02.jpg", "img/motion_blur_portrait_03.jpg", "img/motion_blur_portrait_04.jpg", "img/motion_blur_portrait_05.jpg", "img/motion_blur_portrait_06.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/clementgrellier/unwoven/tree/32c4bfcd623058d92095ffbafe44a1fad6a6d4c1' effect={Unwoven} kind='gallery' label='Unwoven' />;
}
