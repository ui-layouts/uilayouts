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

  const title =
    typeof md.title === 'string'
      ? md.title
      : ((md.title as any)?.absolute ??
        (md.title as any)?.default ??
        'UI Layouts');

  const description = md.description ?? '';

  return {
    metadataBase: md.metadataBase,
    title: title.includes('| UI Layouts') ? title : `${title} | UI Layouts`,
    description,
    keywords: md.keywords ?? [],
    authors: md.authors,
    creator: md.creator ?? '@naymur_dev',
    publisher: md.publisher ?? 'UI Layouts',
    category: md.category ?? 'technology',

    openGraph: {
      ...(md.openGraph ?? {}),
      title:
        md.openGraph?.title ??
        (title.includes('| UI Layouts') ? title : `${title} | UI Layouts`),
      description: md.openGraph?.description ?? description,
      url: md.openGraph?.url ?? absoluteUrl(doc.slug),
      images: md.openGraph?.images ?? [
        {
          url: 'https://ui-layouts.com/component-og.jpg',
          width: 1200,
          height: 630,
          alt: 'UI Layouts Components',
        },
      ],
      siteName: md.openGraph?.siteName ?? 'UI Layouts',
      locale: md.openGraph?.locale ?? 'en_US',
      type: md.openGraph?.type ?? 'website',
    },

    // Twitter
    twitter: {
      ...(md.twitter ?? {}),
      card: md.twitter?.card ?? 'summary_large_image',
      title:
        md.twitter?.title ??
        (title.includes('| UI Layouts') ? title : `${title} | UI Layouts`),
      description: md.twitter?.description ?? description,
      images: md.twitter?.images ?? ['https://ui-layouts.com/component-og.jpg'],
      creator: md.twitter?.creator ?? '@naymur_dev',
    },

    // Robots (Google uses this heavily)
    robots: {
      index: true,
      follow: true,
      ...md.robots,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
        ...md.robots?.googleBot,
      },
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
