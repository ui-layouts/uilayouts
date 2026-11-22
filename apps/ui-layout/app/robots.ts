import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/utils';

export default function robots(): MetadataRoute.Robots {
  return {
    // Utility pages use noindex metadata; keep them crawlable so robots can read it.
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
