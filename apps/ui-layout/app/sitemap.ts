import { blogPosts } from '@/lib/blog';
import { getBlocksDesignMeta } from '@/blocks-docs';
import { DocsNavigationCategories } from '@/configs/docs';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/utils';

const normalizedBaseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const allBlocks = getBlocksDesignMeta();
  const componentPaths = [...new Set(DocsNavigationCategories.map((component) => component.href))];
  const staticPages = [
    '/',
    '/components',
    '/blocks',
    '/get-started',
    '/work-with-us',
    '/mcp',
    '/changelog',
    '/blog',
  ];

  return [
    ...staticPages.map((path, index) => ({
      url: `${normalizedBaseUrl}${path === '/' ? '' : path}`,
      changeFrequency: index === 0 ? ('weekly' as const) : ('monthly' as const),
      priority: index === 0 ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${normalizedBaseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...componentPaths.map((path) => ({
      url: `${normalizedBaseUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...allBlocks.map((component) => ({
      url: `${normalizedBaseUrl}${component.url}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
