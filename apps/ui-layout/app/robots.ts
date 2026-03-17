import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://www.ui-layouts.com/sitemap.xml',
    host: 'https://www.ui-layouts.com',
  };
}
