import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { absoluteUrl, cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import TableOfContents from '@/components/website/tableof-compoents';
import { ComponentPagination } from '@/components/website/code-components/pagination';
import Footer from '@/components/website/footer';
import { MainComponents, SpecialComponents } from '@/configs/docs';

export async function generateStaticParams() {
  const docs = await getAllDocs();

  return docs.map((doc) => ({
    slug: doc.slug === 'index' ? [] : doc.slug.split('/'),
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug?: string[] }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);
  const allComponents = [...SpecialComponents, ...MainComponents];
  const matchedComponent = allComponents.find((comp) => comp.href === `/components/${slug}`);
  const tags = matchedComponent?.tags ?? [];

  if (!doc) {
    return {};
  }

  return {
    title: `${doc.content.metadata.title} | UI Layouts`,
    description: doc.content.metadata.description,
    keywords: tags,
    openGraph: {
      title: doc.content.metadata.title,
      description: doc.content.metadata.description,
      type: "article",
      url: absoluteUrl(doc.slug),
    },
    twitter: {
      card: "summary_large_image",
      title: doc.content.metadata.title,
      description: doc.content.metadata.description,
      creator: "@naymur_dev",
    },
  };

}

export default async function DocPage(
  props: {
    params: Promise<{ slug?: string[] }>;
  }
) {
  const params = await props.params;
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);
  // console.log(doc);

  if (!doc) {
    notFound();
  }

  const { default: Content } = doc.content;

  return (
    <>
      <div className='lg:container lg:px-0 px-3 mx-auto mt-0 '>
        <div className='flex w-full lg:gap-3'>
          <section className='xl:mr-0 mr-3 prose mt-2 w-full prose-zinc min-w-0 max-w-full pb-5 pt-0 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:my-4  prose-h2:py-1  prose-h2:border-b prose-h3:py-1  prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-1'>
            <article className='mb-4 mt-0 rounded-lg dark:bg-black/40  bg-zinc-100  border backdrop-blur-md p-6'>
              <div className='space-y-2 rounded-md dark:text-white text-black'>
                <h1
                  className={cn(
                    'mb-0 flex scroll-m-20  not-prose items-center lg:text-3xl text-2xl gap-2 font-medium tracking-tight'
                  )}
                >
                  <div className='lg:w-10  w-8 lg:h-10  h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg'>
                    <Component />
                  </div>
                  {doc.content.metadata.title}
                </h1>
                <p className='sm:text-sm text-xs'>
                  {doc.content.metadata.description}
                </p>
              </div>
            </article>
            <Content />
            <ComponentPagination doc={doc} />
            <Footer />
          </section>
          <TableOfContents toc={doc.toc} />
        </div>
      </div>
    </>
  );
}
