import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UI Layouts',
    short_name: 'UI Layouts',
    description: 'Open-source React, Next.js, and Tailwind CSS components and blocks.',
    start_url: '/',
    display: 'standalone',
    icons: [{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  };
}
