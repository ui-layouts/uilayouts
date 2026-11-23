'use client';

import { ProgressiveBlur } from '@/components/ui/image-effect-progressive-blur';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/JorgeCapillo/webgl-progressive-blur/90e712c747081f22ded2f6dcebe554d24149ae5b/';
const photographs = ["static/img/0.webp", "static/img/1.webp", "static/img/2.webp", "static/img/3.webp", "static/img/4.webp", "static/img/5.webp", "static/img/6.webp", "static/img/7.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/JorgeCapillo/webgl-progressive-blur/tree/90e712c747081f22ded2f6dcebe554d24149ae5b' effect={ProgressiveBlur} kind='hover' label='Progressive Blur' />;
}
