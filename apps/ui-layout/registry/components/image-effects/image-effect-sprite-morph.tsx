'use client';
import { SpriteMorph } from '@/components/ui/image-effect-sprite-morph';

const directory = '/image-effects/ages/';
const names = ['baby', 'teen', 'adult', 'old', 'elder'];
const photo = (name: string) => directory + name + '.webp?v=portrait-750-1';
const images = names.map(photo);
const atlases = names.map(
  (name, i) => photo(name + '-' + names[(i + 1) % names.length])
);

export default function Demo() {
  return (
    <SpriteMorph
      label='Five ages of one face'
      labels={['Baby', 'Teen', 'Adult', 'Old', 'Elder']}
      images={images}
      atlases={atlases}
    />
  );
}
