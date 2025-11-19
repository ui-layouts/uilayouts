import { type MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    { url: 'https://ui-layouts.com', lastModified: new Date() },
    // Add more pages here if needed
  ];
}
