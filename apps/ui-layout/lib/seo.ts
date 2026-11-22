import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from './utils';

export const noIndexMetadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export function pageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'UI Layouts',
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@naymur_dev',
      creator: '@naymur_dev',
      title,
      description,
      images: [image],
    },
  };
}

/** Prevent HTML from ending the script element when content contains a less-than sign. */
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
