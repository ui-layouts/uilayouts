'use client';

import { ShaderRipple } from '@/components/ui/image-effect-shader-ripple';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/biazo/codrops-animate-shaders-with-gsap/bdd17aa4cf4b1464f4bcf526a863ed8dd46d394d/';
const photographs = ["public/images/01.webp", "public/images/01_x.webp", "public/images/02.webp", "public/images/02_x.webp", "public/images/03.webp", "public/images/03_x.webp", "public/images/04.webp", "public/images/04_x.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/biazo/codrops-animate-shaders-with-gsap/tree/bdd17aa4cf4b1464f4bcf526a863ed8dd46d394d' effect={ShaderRipple} kind='hover' label='Shader Ripple' />;
}
