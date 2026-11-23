'use client';

import { InteractiveGrid } from '@/components/ui/image-effect-interactive-grid';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/samueljarry/codrops-tutorial-grid/c610d025497a159b754bf3dd40a309d3a0e934b5/';
const photographs = ["final/public/textures/img1.webp", "final/public/textures/img2.webp", "final/public/textures/img3.webp", "final/public/textures/img4.webp", "final/public/textures/img5.webp", "final/public/textures/img6.webp", "final/public/textures/img7.webp", "final/public/textures/img8.webp"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/samueljarry/codrops-tutorial-grid/tree/c610d025497a159b754bf3dd40a309d3a0e934b5' effect={InteractiveGrid} kind='grid' label='Interactive Grid' />;
}
