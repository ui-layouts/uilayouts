'use client';

import { PhysicsCloth } from '@/components/ui/image-effect-physics-cloth';
import { WebsiteDemo } from './website-demo';

const source = 'https://raw.githubusercontent.com/Aqro/Physics-slideshow-threejs-cannonjs/9f934d42075033bd0b00e187bc89528b01866066/';
const photographs = ["src/img/portraits/01.jpg", "src/img/portraits/02.jpg", "src/img/portraits/03.jpg", "src/img/portraits/04.jpg", "src/img/portraits/05.jpg", "src/img/portraits/06.jpg"].map(path => source + path);

export default function Demo() {
  return <WebsiteDemo photographs={photographs} sourceUrl='https://github.com/Aqro/Physics-slideshow-threejs-cannonjs/tree/9f934d42075033bd0b00e187bc89528b01866066' effect={PhysicsCloth} kind='cloth' label='Physics Cloth' />;
}
