import type { MetadataRoute } from 'next';
import { getAllComponentsArray } from '@/configs/docs';
import { getBlocksDesignMeta } from '@/blocks-docs';

const baseUrl =
  process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://www.ui-layouts.com';
const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const allBlocks = getBlocksDesignMeta();
  const allComponents = getAllComponentsArray();
  const staticPages = [
    '/',
    '/components',
    '/blocks',
    '/get-started',
    '/work-with-us',
    '/mcp',
  ];

  return [
    ...staticPages.map((path, index) => ({
      url: `${normalizedBaseUrl}${path === '/' ? '' : path}`,
      lastModified: now,
      changeFrequency: index === 0 ? ('weekly' as const) : ('monthly' as const),
      priority: index === 0 ? 1 : 0.8,
    })),
    ...allComponents.map((component) => ({
      url: `${normalizedBaseUrl}${component.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...allBlocks.map((component) => ({
      url: `${normalizedBaseUrl}${component.url}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
