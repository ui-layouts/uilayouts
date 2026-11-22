import { serializeJsonLd } from '@/lib/seo';
import { absoluteUrl, siteConfig } from '@/lib/utils';

interface StructuredDataProps {
  type: 'homepage' | 'component' | 'organization' | 'website';
  componentData?: {
    name: string;
    description: string;
    image?: string;
    path?: string;
    itemType?: 'component' | 'block';
    items?: { name: string; path: string }[];
  };
}

export function StructuredData({ type, componentData }: StructuredDataProps) {
  const organization = {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: 'UI Layouts',
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: ['https://github.com/ui-layouts/uilayouts', siteConfig.links.twitter],
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: 'UI Layouts',
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en',
    publisher: { '@id': organization['@id'] },
  };
  let data: Record<string, unknown>;
  if (type === 'homepage') {
    data = { '@context': 'https://schema.org', '@graph': [organization, website] };
  } else if (type === 'organization') {
    data = { '@context': 'https://schema.org', ...organization };
  } else if (type === 'website') {
    data = { '@context': 'https://schema.org', '@graph': [organization, website] };
  } else {
    if (!componentData?.path) return null;
    const url = absoluteUrl(componentData.path);
    const isBlockCollection = componentData.itemType === 'block';
    data = {
      '@context': 'https://schema.org',
      '@type': isBlockCollection ? 'CollectionPage' : 'TechArticle',
      '@id': `${url}#page`,
      url,
      name: componentData.name,
      headline: componentData.name,
      description: componentData.description,
      inLanguage: 'en',
      isPartOf: {
        '@type': 'WebSite',
        '@id': website['@id'],
        url: siteConfig.url,
        name: 'UI Layouts',
      },
      publisher: {
        '@type': 'Organization',
        '@id': organization['@id'],
        name: 'UI Layouts',
        url: siteConfig.url,
      },
      ...(componentData.image ? { image: componentData.image } : {}),
      ...(isBlockCollection && componentData.items?.length
        ? {
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: componentData.items.map(({ name, path }, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name,
                url: absoluteUrl(path),
              })),
            },
          }
        : {}),
      ...(!isBlockCollection
        ? {
            about: {
              '@type': 'SoftwareSourceCode',
              name: componentData.name,
              description: componentData.description,
              codeRepository: 'https://github.com/ui-layouts/uilayouts',
              programmingLanguage: 'TypeScript',
              runtimePlatform: 'React',
            },
          }
        : {}),
    };
  }
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
