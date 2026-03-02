import type { MetadataRoute } from 'next';
import { getAllComponentsArray } from '@/configs/docs';
import { getBlocksDesignMeta } from '@/blocks-docs';

const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://www.ui-layouts.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const allBlocks = getBlocksDesignMeta();
  const allComponents = getAllComponentsArray();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...allComponents.map((component) => ({
      url: `${baseUrl}${component.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...allBlocks.map((component) => ({
      url: `${baseUrl}${component.url}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
