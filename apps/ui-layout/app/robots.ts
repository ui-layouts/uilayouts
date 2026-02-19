import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/components',
          '/blocks',
          '/api/og',
          '/og',
          '/_next/static',
          '/favicon.ico',
          '/robots.txt',
          '/llms.txt',
          '/sitemap.xml',
        ],
        disallow: [
          '/admin',
          '/api/admin',
          '/_next',
          '/static',
          '/temp',
          '/cache',
          '/logs',
          '/.env',
          '/.git',
          '/node_modules',
          '/src',
          '/public/temp',
          '/*.json$',
          '/search?q=*',
          '/preview',
          '/draft',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/components', '/blocks', '/api/og', '/og'],
        disallow: ['/admin', '/api/admin', '/search', '/preview'],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/components', '/blocks'],
        disallow: ['/admin', '/api', '/search'],
        crawlDelay: 1,
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/components', '/blocks'],
        disallow: ['/admin', '/api', '/search', '/preview'],
        crawlDelay: 2,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
      {
        userAgent: 'CCBot',
        allow: ['/', '/components', '/blocks'],
        disallow: ['/admin', '/api', '/search'],
        crawlDelay: 3,
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/', '/components', '/blocks'],
        disallow: ['/admin', '/api', '/search'],
        crawlDelay: 2,
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/components', '/blocks'],
        disallow: ['/admin', '/api/admin', '/search'],
      },
      {
        userAgent: 'GoogleOther',
        allow: ['/', '/components', '/blocks', '/og'],
        disallow: ['/admin', '/api/admin', '/search'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/og', '/components', '/blocks', '/public'],
        disallow: ['/admin', '/temp'],
      },
      {
        userAgent: 'Googlebot-Video',
        allow: ['/'],
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: 'https://ui-layouts.com/sitemap.xml',
    host: 'https://ui-layouts.com',
  };
}
