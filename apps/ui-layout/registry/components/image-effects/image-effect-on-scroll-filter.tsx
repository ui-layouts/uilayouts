'use client';

import { OnScrollFilter } from '@/components/ui/image-effect-on-scroll-filter';

const images = Array.from(
  { length: 7 },
  (_, i) => '/image-effects/on-scroll-filter/' + (i + 1) + '.webp'
);
const labels = [
  'Foot Print',
  'Storm Born',
  'Hind Sight',
  'Heart Ache',
  'Night Fall',
  'Fire Storm',
  'Star Light',
];
const descriptions = [
  'A survey crew reaches the edge of an abandoned city as daylight fades.',
  'High winds draw a veil of dust across the rock formations.',
  'Distant structures break the silence of a forbidden planet.',
  'At the edge of the storm, a single figure follows the last light on the horizon.',
  'Strange silhouettes emerge from the shadows.',
  'A world once teeming with life flickers beneath the sands.',
  'The desert closes over the last traces of an earlier expedition.',
];

export default function Demo() {
  return (
    <OnScrollFilter
      images={images}
      labels={labels}
      descriptions={descriptions}
      label='Seven photographic reveals'
    />
  );
}
