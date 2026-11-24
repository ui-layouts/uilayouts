import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data';
import { StructuredData } from '@/components/seo/structured-data';
import BoxComponentPreview from '@/components/website/code-components/box-preview';
import ComponentCodePreview from '@/components/website/code-components/component-code-preview';
import IframeComponentPreview from '@/components/website/code-components/iframe-component-preview';
import type { ComponentProps } from 'react';
import { ComponentPagination } from '@/components/website/code-components/pagination';
import ShowcaseToolbar from '@/components/website/showcase-toolbar';
import { getShowcase } from '@/lib/showcase';
import Link from 'next/link';
import styles from './showcase.module.css';
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

  const showcase = getShowcase(slug, doc.markdown);
  const { title, description } = doc.content.metadata;
  const featuredSource = showcase && (
    <details className='my-4'>
      <summary className='cursor-pointer font-medium'>
        View example source
      </summary>
      <pre tabIndex={0}>
        <code>{showcase.sourceCode}</code>
      </pre>
    </details>
  );
  return (
    <main className={styles.page}>
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
      {showcase && (
        <>
          <a className={styles.skip} href='#component-title'>
            Skip to documentation
          </a>
          <section
            className={styles.stage}
            aria-label={title + ' preview'}
            data-demo={showcase.name}
          >
            <Link
              className={styles.brand}
              href='/components'
              aria-label='UI Layouts component library'
            >
              <img
                src='/showcase-wordmark.svg'
                alt='UI Layouts'
                width={288}
                height={63}
              />
            </Link>
            <iframe
              data-showcase-preview
              scrolling="no"
              className={styles.frame}
              src={showcase.expandUrl}
              title={title + ' interactive preview'}
            />
            <nav className={styles.cue} aria-label='Component details'>
              <strong>{title}</strong>
              <a href='#component-title'>Scroll for details <span aria-hidden='true'>↓</span></a>
            </nav>
          </section>
          <ShowcaseToolbar slug={slug} title={title} {...showcase} />
        </>
      )}
      <article className={styles.details} aria-labelledby='component-title'>
        {!showcase && <Link href='/components'>← Components</Link>}
        <h1 id='component-title' tabIndex={-1}>
          {title}
        </h1>
        <p className={styles.description}>{description}</p>
        <div className='prose prose-zinc dark:prose-invert max-w-none prose-table:block prose-table:overflow-x-auto'>
          <Content
            components={{
              ComponentCodePreview: (
                props: ComponentProps<typeof ComponentCodePreview>
              ) =>
                props.name === showcase?.name ? (
                  featuredSource
                ) : (
                  <ComponentCodePreview {...props} />
                ),
              BoxComponentPreview: (
                props: ComponentProps<typeof BoxComponentPreview>
              ) =>
                props.name === showcase?.name ? (
                  featuredSource
                ) : (
                  <BoxComponentPreview {...props} />
                ),
              IframeComponentPrieview: (
                props: ComponentProps<typeof IframeComponentPreview> & {
                  name: string;
                }
              ) =>
                props.name === showcase?.name ? (
                  featuredSource
                ) : (
                  <IframeComponentPreview {...props} />
                ),
            }}
          />
        </div>
        <ComponentPagination doc={doc} />
      </article>
    </main>
  );
}
