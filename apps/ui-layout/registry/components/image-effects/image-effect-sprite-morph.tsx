'use client';
import { SpriteMorph } from '@/components/ui/image-effect-sprite-morph';

const directory = '/image-effects/portraits/';
const names = ['daylight', 'blue-hour', 'after-dark'];
const images = names.map((name) => directory + name + '.webp');
const atlases = names.map(
  (name, i) => directory + name + '-' + names[(i + 1) % names.length] + '.webp'
);

export default function Demo() {
  return (
    <SpriteMorph
      style={{ background: '#111318', color: '#f1f0ed' }}
      label='Portrait lighting study'
      labels={['Daylight', 'Blue hour', 'Chrome']}
      images={images}
      atlases={atlases}
    />
  );
}
