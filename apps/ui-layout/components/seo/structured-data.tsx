import { siteConfig } from '@/lib/utils';

interface StructuredDataProps {
  type: 'homepage' | 'component' | 'organization' | 'website';
  componentData?: {
    name: string;
    description: string;
    image?: string;
  };
}

export function StructuredData({ type, componentData }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'homepage':
        return {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: 'UI Layouts',
              url: siteConfig.url,
              logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/logo.png`,
                width: 512,
                height: 512,
              },
              description: siteConfig.description,
              sameAs: [
                siteConfig.links.twitter,
                siteConfig.links.linkedin,
                siteConfig.links.github,
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English'],
                url: siteConfig.links.twitter,
              },
              foundingDate: '2024',
              areaServed: 'Worldwide',
              knowsAbout: [
                'React Components',
                'Next.js Development',
                'Tailwind CSS',
                'UI/UX Design',
                'Frontend Development',
                'TypeScript',
                'Framer Motion',
                'Web Development',
              ],
            },
            {
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              inLanguage: 'en-US',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteConfig.url}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
              publisher: {
                '@type': 'Organization',
                name: 'UI Layouts',
              },
              about: [
                'UI Components',
                'React Library',
                'Frontend Development',
                'Web Design',
                'Component Library',
              ],
            },
            {
              '@type': 'SoftwareApplication',
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free open-source UI components and blocks',
                availability: 'https://schema.org/InStock',
                validFrom: '2024-01-01',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '1500',
                bestRating: '5',
                worstRating: '1',
                ratingExplanation: 'Based on user reviews and GitHub stars',
              },
              creator: {
                '@type': 'Person',
                name: 'Naymur Rahman',
                url: 'https://naymur.com/',
                jobTitle: 'Frontend Developer',
                knowsAbout: ['React', 'Next.js', 'TypeScript', 'UI Design'],
              },
              featureList: [
                '60+ Ready-to-use Components',
                '100+ Production-ready Blocks',
                'TypeScript Support',
                'Tailwind CSS Integration',
                'Framer Motion Animations',
                'Responsive Design',
                'Accessible Components',
                'Modern UI Patterns',
                'Easy Customization',
                'Open Source',
                'Regular Updates',
                'Community Support',
              ],
              screenshot: siteConfig.ogImage,
              downloadUrl: siteConfig.url,
              softwareVersion: '1.0.0',
              dateModified: new Date().toISOString(),
            },
            {
              '@type': 'ItemList',
              name: 'UI Components and Blocks',
              description:
                'Collection of modern UI components and blocks for React and Next.js',
              numberOfItems: 160,
              itemListElement: [
                {
                  '@type': 'SoftwareApplication',
                  name: 'Accordion Component',
                  description: 'Multi-expand accordion with smooth animations',
                  url: `${siteConfig.url}/components/accordion`,
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Carousel Component',
                  description: 'Interactive carousel with Embla Carousel',
                  url: `${siteConfig.url}/components/carousel`,
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Dialog Component',
                  description: 'Animated dialog with Framer Motion',
                  url: `${siteConfig.url}/components/dialog`,
                },
              ],
            },
          ],
        };

      case 'component':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: componentData?.name,
          description: componentData?.description,
          url: `${siteConfig.url}/components/${componentData?.name?.toLowerCase()}`,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free open-source UI component',
            availability: 'https://schema.org/InStock',
          },
          screenshot: componentData?.image || siteConfig.ogImage,
          creator: {
            '@type': 'Organization',
            name: 'UI Layouts',
            url: siteConfig.url,
          },
          isPartOf: {
            '@type': 'SoftwareApplication',
            name: siteConfig.name,
            url: siteConfig.url,
          },
          programmingLanguage: 'TypeScript',
          runtimePlatform: 'React',
          browserRequirements: 'Requires JavaScript. Requires HTML5.',
          softwareVersion: '1.0.0',
          dateModified: new Date().toISOString(),
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '100',
            bestRating: '5',
            worstRating: '1',
          },
          featureList: [
            'TypeScript Support',
            'Responsive Design',
            'Accessible',
            'Customizable',
            'Modern UI',
            'Well Documented',
            'Copy & Paste',
            'No Dependencies',
          ],
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'UI Layouts',
          url: siteConfig.url,
          logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/logo.png`,
            width: 512,
            height: 512,
          },
          description: siteConfig.description,
          sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
            siteConfig.links.github,
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['English'],
            url: siteConfig.links.twitter,
          },
          founder: {
            '@type': 'Person',
            name: 'Naymur Rahman',
            url: 'https://naymur.com/',
            jobTitle: 'Frontend Developer',
          },
          foundingDate: '2024',
          areaServed: 'Worldwide',
          knowsAbout: [
            'React Components',
            'Next.js Development',
            'Tailwind CSS',
            'UI/UX Design',
            'Frontend Development',
            'TypeScript',
            'Framer Motion',
            'Web Development',
          ],
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteConfig.url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@type': 'Organization',
            name: 'UI Layouts',
          },
          about: [
            'UI Components',
            'React Library',
            'Frontend Development',
            'Web Design',
            'Component Library',
          ],
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
