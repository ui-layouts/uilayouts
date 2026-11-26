import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data';
import { StructuredData } from '@/components/seo/structured-data';
import { ClientPreCode } from '@/components/website/code-components/client-pre-code';
import { highlightCode } from '@/lib/shiki-highlighter';
import { getAdjacentComponents } from '@/components/website/code-components/pagination';
import ExampleShowcase from './example-showcase';
import { getShowcase } from '@/lib/showcase';
import Link from 'next/link';
import styles from './showcase.module.css';
import documentation from './example-documentation.module.css';
import { getAllDocs, getDocBySlug } from '@/lib/docs';
import { absoluteUrl } from '@/lib/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug === 'index' ? [] : doc.slug.split('/'),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug?.join('/') || '';

  const doc = await getDocBySlug(slug);
  if (!doc?.content?.metadata) return {};

  const md = doc.content.metadata;

  const title = md?.title ?? '';

  const description = md.description ?? '';
  const canonicalPath = `/components/${doc.slug.replace(/^\/+/, '')}`;

  return {
    metadataBase: md.metadataBase,
    title: `${title} | UI Layouts`,
    description,
    keywords: md.keywords ?? [],
    authors: [{ name: 'Naymur Rahman', url: 'https://twitter.com/naymur_dev' }],
    creator: '@naymur_dev',
    publisher: 'UI Layouts',
    category: 'technology',
    alternates: {
      canonical: absoluteUrl(canonicalPath),
    },
    openGraph: {
      title: `${title} | UI Layouts`,
      description: description,
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'UI Layouts',
      locale: 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      site: '@naymur_dev',
      title: `${title} | UI Layouts`,
      description: description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          alt: title,
        },
      ],
      creator: '@naymur_dev',
    },
  };
}

export default async function DocPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);

  if (!doc) notFound();

  const { default: Content } = doc.content;

  const examples = await Promise.all(getShowcase(slug, doc.markdown, doc.content.metadata.title).map(async example => ({
    ...example,
    usageHtml: await highlightCode(example.usageCode, example.usageFile.split('.').pop()),
  })));
  const showcase = examples[0];
  const { title, description } = doc.content.metadata;
  return (
    <main className={styles.page + ' ' + documentation.page}>
      <StructuredData
        type='component'
        componentData={{
          name: doc.content.metadata.title,
          description: doc.content.metadata.description,
          path: `/components/${doc.slug.replace(/^\/+/, '')}`,
          itemType: 'component',
        }}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: absoluteUrl('/') },
          { name: 'Components', url: absoluteUrl('/components') },
          {
            name: doc.content.metadata.title,
            url: absoluteUrl(`/components/${doc.slug.replace(/^\/+/, '')}`),
          },
        ]}
      />
      <ExampleShowcase key={slug} slug={slug} title={title} examples={examples} neighbors={getAdjacentComponents(slug)}>
      <article id="component-details" tabIndex={-1} className={styles.details} aria-labelledby='component-title'>
        {!showcase && <Link href='/components'>← Components</Link>}
        <h1 id='component-title'>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className='prose prose-zinc dark:prose-invert max-w-none prose-table:block prose-table:overflow-x-auto'>
          <Content components={{
            h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
            ...(showcase ? {
            ShowcaseExampleSection: () => null,
            ComponentCodePreview: () => null,
            BoxComponentPreview: () => null,
            IframeComponentPrieview: () => null,
          } : {}),
          }} />
        </div>
        {showcase && <section className={documentation.source} aria-label="Example source">
          <ClientPreCode raw={showcase.usageCode} html={showcase.usageHtml} />
        </section>}
      </article>
      </ExampleShowcase>
    </main>
  );
}
