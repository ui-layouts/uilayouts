import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  BlogContentsProvider,
  BlogTableOfContents,
} from '@/components/website/blog/blog-table-of-contents';
import BlogCover from '@/components/website/blog/blog-cover';
import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data';
import { blogPosts, getBlogPost, relatedBlogPosts } from '@/lib/blog';
import { blogContent } from '@/lib/blog-content';
import { pageMetadata, serializeJsonLd } from '@/lib/seo';
import { getTableOfContents } from '@/lib/toc';
import { absoluteUrl } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  const metadata = pageMetadata({
    title: `${post.title} | UI Layouts`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: `/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}`,
  });
  return {
    ...metadata,
    authors: [{ name: 'UI Layouts' }],
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: post.date,
      section: post.category,
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const loadContent = blogContent[post.slug as keyof typeof blogContent];
  if (!loadContent) notFound();
  const [{ default: Content }, markdown] = await Promise.all([
    loadContent(),
    readFile(join(process.cwd(), 'content', 'blog', `${post.slug}.mdx`), 'utf8'),
  ]);
  const { items } = await getTableOfContents(markdown);
  const path = `/blog/${post.slug}`;
  const image = absoluteUrl(
    `/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}`
  );
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: absoluteUrl('/') },
          { name: 'Blog', url: absoluteUrl('/blog') },
          { name: post.title, url: absoluteUrl(path) },
        ]}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'UI Layouts', url: absoluteUrl('/') },
            publisher: { '@type': 'Organization', name: 'UI Layouts' },
            mainEntityOfPage: absoluteUrl(path),
            image,
            articleSection: post.category,
          }),
        }}
      />
      <div className='mx-auto max-w-[66rem]'>
        <Link
          href='/blog'
          className='mb-8 inline-block text-sm text-muted-foreground hover:underline'
        >
          ← All articles
        </Link>
        <BlogContentsProvider items={items}>
          <div className='grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_13rem]'>
            <article className='mx-auto w-full min-w-0 max-w-[48rem]'>
              <header className='mb-6'>
                <p className='mb-3 text-sm text-muted-foreground'>
                  {post.category} · <time dateTime={post.date}>{post.date}</time>
                </p>
                <h1 className='text-3xl font-medium leading-tight tracking-tight sm:text-4xl'>
                  {post.title}
                </h1>
                <p className='mt-4 text-sm text-muted-foreground'>UI Layouts</p>
              </header>
              {items.length > 0 && (
                <details className='mb-6 rounded-lg border border-border px-4 py-3 lg:hidden'>
                  <summary className='cursor-pointer text-sm font-medium'>On this page</summary>
                  <div className='mt-3'>
                    <BlogTableOfContents />
                  </div>
                </details>
              )}
              {post.showArticleCover !== false && (
                <BlogCover slug={post.slug} hero className='mb-6 aspect-[16/9] max-h-96 w-full' />
              )}
              {post.preview && (
                <figure className='mb-8'>
                  <iframe
                    title={`Live preview: ${post.title}`}
                    src={post.preview}
                    loading='lazy'
                    className='h-[480px] w-full rounded-xl border border-border bg-background'
                  />
                  <figcaption className='mt-2 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground'>
                    <Link className='underline' href={post.href}>
                      View block and source
                    </Link>
                    <a className='underline' href={post.preview} target='_blank' rel='noreferrer'>
                      Open full preview
                    </a>
                  </figcaption>
                </figure>
              )}
              <div className='prose prose-theme max-w-none prose-headings:scroll-mt-24 prose-headings:font-medium prose-h2:text-xl prose-h2:tracking-tight prose-p:leading-7 prose-a:font-medium prose-pre:overflow-x-auto dark:prose-invert'>
                <Content />
              </div>
              <aside aria-labelledby='related-title' className='mt-16 border-t border-border pt-8'>
                <h2 id='related-title' className='text-xl font-medium'>
                  Related articles
                </h2>
                <div className='mt-4 divide-y divide-border'>
                  {relatedBlogPosts(post).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className='flex items-center gap-4 py-4 text-sm hover:underline'
                    >
                      <BlogCover slug={item.slug} className='aspect-[16/10] w-28 shrink-0' />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </aside>
            </article>
            {items.length > 0 && (
              <aside className='sticky top-24 hidden max-h-[calc(100dvh-7rem)] overflow-y-auto border-l border-border pl-5 lg:block'>
                <p className='mb-3 text-sm font-medium'>On this page</p>
                <BlogTableOfContents />
              </aside>
            )}
          </div>
        </BlogContentsProvider>
      </div>
    </>
  );
}
