'use client';
import { SpriteMorph } from '@/components/ui/image-effect-sprite-morph';

const directory = '/image-effects/ages/';
const names = ['baby', 'teen', 'adult', 'old', 'elder'];
const images = names.map((name) => directory + name + '.webp');
const atlases = names.map(
  (name, i) => directory + name + '-' + names[(i + 1) % names.length] + '.webp'
);

export default function Demo() {
  return (
    <SpriteMorph
      style={{ background: '#fff', color: '#191919' }}
      label='Five ages of one face'
      labels={['Baby', 'Teen', 'Adult', 'Old', 'Elder']}
      images={images}
      atlases={atlases}
    />
  );
}
