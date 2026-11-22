'use client';
import preview from '@/assets/preview/Preview';
import ImageMouseTrail from '@/components/ui/mousetrail';

export const items = [
  {
    id: 1,
    url: preview.tabs,
  },
  {
    id: 2,
    url: preview.Timeline,
  },
  {
    id: 3,
    url: preview.carousel,
  },
  {
    id: 4,
    url: preview.faqs,
  },
  {
    id: 5,
    url: preview.galleryNew,
  },
  {
    id: 6,
    url: preview.globe,
  },
  {
    id: 7,
    url: preview.grid,
  },
  {
    id: 8,
    url: preview.image_masking,
  },
  {
    id: 9,
    url: preview.image_mousetrail,
  },
  {
    id: 10,
    url: preview.tabs,
  },
  {
    id: 11,
    url: preview.heroSec,
  },
  {
    id: 12,
    url: preview.gallery,
  },
  {
    id: 13,
    url: preview.heroSec,
  },
];
export default function HomeMouseTrail() {
  return (
    <ImageMouseTrail
      items={items.map((item) => (typeof item.url === 'string' ? item.url : item.url.src))}
      threshold={45}
      fadeAnimation
      imgClass='h-32 w-32 rounded-lg border bg-card object-contain'
      className='h-full rounded-xl bg-transparent'
    >
      <h2 className='pointer-events-none text-center text-3xl font-semibold'>
        Experience Mouse Trails
      </h2>
    </ImageMouseTrail>
  );
}
