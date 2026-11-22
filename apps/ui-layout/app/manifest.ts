import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UI Layouts',
    short_name: 'UI Layouts',
    description: 'Open-source React, Next.js, and Tailwind CSS components and blocks.',
    start_url: '/',
    display: 'standalone',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
