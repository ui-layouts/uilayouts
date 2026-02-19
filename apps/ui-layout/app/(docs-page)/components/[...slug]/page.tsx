import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { absoluteUrl, cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import TableOfContents from '@/components/website/tableof-compoents';
import { ComponentPagination } from '@/components/website/code-components/pagination';
import Footer from '@/components/website/footer';
import CopyPage from '@/components/website/copy-page';
import { GapPattern } from '@/components/ui/gap-pattern';
import { StructuredData } from '@/components/seo/structured-data';

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

  return {
    metadataBase: md.metadataBase,
    title: `${title} | UI Layouts`,
    description,
    keywords: md.keywords ?? [],
    authors: [{ name: 'Naymur Rahman', url: 'https://twitter.com/naymur_dev' }],
    creator: '@naymur_dev',
    publisher: 'UI Layouts',
    category: 'technology',
    openGraph: {
      title: `${title} | UI Layouts`,
      description: description,
      url: absoluteUrl(doc.slug),
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

  return (
    <>
      <StructuredData
        type='component'
        componentData={{
          name: doc.content.metadata.title,
          description: doc.content.metadata.description,
        }}
      />
      <div className='lg:px-0 lg:pt-0 pt-6 px-3 mt-0 flex w-full lg:gap-10 '>
        <div className='w-full relative xl:pl-0 lg:pl-4 pl-0'>
          <section className='3xl:max-w-5xl 2xl:max-w-210 xl:max-w-190 lg:max-w-140 max-w-5xl mx-auto prose prose-zinc pb-5 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-3xl prose-h2:my-4 prose-h2:pt-12 prose-h2:pb-4 prose-h3:py-1 prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-4'>
            <article className='mb-4 mt-0'>
              <div className='space-y-2 rounded-md dark:text-white text-black'>
                <div className='flex items-center gap-2 justify-between'>
                  <h1
                    className={cn(
                      'mb-0 flex scroll-m-20 not-prose items-center lg:text-3xl text-2xl gap-2 font-medium tracking-tight'
                    )}
                  >
                    <div className='lg:w-9 w-8 lg:h-9 h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg'>
                      <Component size={20} />
                    </div>
                    {doc.content.metadata.title}
                  </h1>
                  <CopyPage />
                </div>
                <p className='sm:text-sm text-xs pt-2'>
                  {doc.content.metadata.description}
                </p>
              </div>
            </article>
            <Content />
            <ComponentPagination doc={doc} />
          </section>
          <Footer />
          <GapPattern className='2xl:h-full lg:h-full h-full lg:block hidden 2xl:w-10 lg:w-7 w-5 border-x border-y-0 absolute -right-8 top-0' />
        </div>
        <TableOfContents toc={doc.toc} />
      </div>
    </>
  );
}
