import BlogCover from '@/components/website/blog/blog-cover';
import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data';
import { blogPosts, getBlogPost, relatedBlogPosts } from '@/lib/blog';
import { blogContent } from '@/lib/blog-content';
import { pageMetadata, serializeJsonLd } from '@/lib/seo';
import { absoluteUrl } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  const metadata = pageMetadata({ title: `${post.title} | UI Layouts`, description: post.description, path: `/blog/${post.slug}`, image: `/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}` });
  return { ...metadata, authors: [{ name: 'UI Layouts' }], openGraph: { ...metadata.openGraph, type: 'article', publishedTime: post.date, section: post.category } };
}

export default async function BlogArticle({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const Content = blogContent[post.slug as keyof typeof blogContent];
  if (!Content) notFound();
  const path = `/blog/${post.slug}`;
  const image = absoluteUrl(`/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}`);
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Home', url: absoluteUrl('/') }, { name: 'Blog', url: absoluteUrl('/blog') }, { name: post.title, url: absoluteUrl(path) }]} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: serializeJsonLd({ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description, datePublished: post.date, author: { '@type': 'Organization', name: 'UI Layouts', url: absoluteUrl('/') }, publisher: { '@type': 'Organization', name: 'UI Layouts' }, mainEntityOfPage: absoluteUrl(path), image, articleSection: post.category }) }} />
      <Link href='/blog' className='mb-8 inline-block text-sm text-neutral-600 hover:underline dark:text-neutral-400'>← All articles</Link>
      <article>
        <header className='mb-8'><p className='mb-3 text-sm text-neutral-600 dark:text-neutral-400'>{post.category} · <time dateTime={post.date}>{post.date}</time></p><h1 className='text-3xl font-medium leading-tight tracking-tight sm:text-4xl'>{post.title}</h1><p className='mt-4 text-sm text-neutral-500'>UI Layouts</p></header>
        <BlogCover slug={post.slug} hero className='mb-8 aspect-[16/9] max-h-96 w-full' />
        {post.preview && <figure className='mb-8'><iframe title={`Live preview: ${post.title}`} src={post.preview} loading='lazy' className='h-[480px] w-full rounded-xl border border-border bg-background' /><figcaption className='mt-2 flex flex-wrap justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400'><Link className='underline' href={post.href}>View block and source</Link><a className='underline' href={post.preview} target='_blank' rel='noreferrer'>Open full preview</a></figcaption></figure>}
        <div className='prose prose-theme max-w-none prose-headings:font-medium prose-h2:text-xl prose-h2:tracking-tight prose-p:leading-7 prose-a:font-medium prose-pre:overflow-x-auto dark:prose-invert'><Content /></div>
      </article>
      <aside aria-labelledby='related-title' className='mt-16 border-t border-border pt-8'><h2 id='related-title' className='text-xl font-medium'>Related articles</h2><div className='mt-4 divide-y divide-border'>{relatedBlogPosts(post).map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className='flex items-center gap-4 py-4 text-sm hover:underline'><BlogCover slug={item.slug} className='aspect-[16/10] w-28 shrink-0' /><span>{item.title}</span></Link>)}</div></aside>
    </>
  );
}
