import BlogList from '@/components/website/blog/blog-list';
import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data';
import { blogPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/lib/utils';

export const metadata = pageMetadata({ title: 'Blog — React UI tutorials and design guides | UI Layouts', description: 'Learn to build expressive React components, Tailwind CSS website blocks, animations and accessible interfaces with practical tutorials from UI Layouts.', path: '/blog' });

export default function BlogPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Home', url: absoluteUrl('/') }, { name: 'Blog', url: absoluteUrl('/blog') }]} />
      <header><p className='mb-3 text-sm text-neutral-500'>UI Layouts / Blog</p><h1 className='text-3xl font-medium tracking-tight sm:text-4xl'>Notes on building interfaces.</h1><p className='mt-4 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400'>Practical tutorials, design engineering and website block guides. Learn the techniques behind our components, then explore the source.</p></header>
      <BlogList posts={blogPosts} />
    </>
  );
}
