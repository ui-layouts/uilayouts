import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { absoluteUrl, cn } from '@/lib/utils';
import { ChevronDown, Component } from 'lucide-react';
import TableOfContents from '@/components/website/tableof-compoents';
import { ComponentPagination } from '@/components/website/code-components/pagination';
import Footer from '@/components/website/footer';
import { DocsNavigationCategories } from '@/configs/docs';
import CopyPage from '@/components/website/copy-page';

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
  const matchedComponent = DocsNavigationCategories.find(
    (comp) => comp.href === `/components/${slug}`
  );
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
      type: 'article',
      url: absoluteUrl(doc.slug),
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.content.metadata.title,
      description: doc.content.metadata.description,
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
  // console.log(doc);

  if (!doc) {
    notFound();
  }

  const { default: Content } = doc.content;

  return (
    <>
      <div className='lg:container lg:px-0 px-3 mx-auto mt-0'>
        <div className='flex w-full lg:gap-3'>
          <div className='w-full'>
            <section className='xl:max-w-5xl lg:max-w-[44rem] max-w-5xl mx-auto prose mt-[5rem] w-full prose-zinc min-w-0 pb-5 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-3xl prose-h2:my-4 prose-h2:pt-12 prose-h2:pb-4 prose-h3:py-1 prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-4'>
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
              <Footer />
            </section>
          </div>
          <TableOfContents toc={doc.toc} />
        </div>
      </div>
    </>
  );
}
