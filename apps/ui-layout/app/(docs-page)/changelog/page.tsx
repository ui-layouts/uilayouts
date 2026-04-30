import { cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Changelog | UI Layouts',
  description:
    'Track major UI Layouts updates. We only include meaningful additions and improvements, not every small commit.',
};

type ChangeDetail = {
  label: string;
  href?: string;
};

type ChangeItem = {
  date: string;
  title: string;
  description: string;
  details: ChangeDetail[];
};

const changes: ChangeItem[] = [
  {
    date: 'April 30, 2026',
    title: 'CLI and registry support expanded for components',
    description:
      'Improved install/distribution flow by shipping CLI support for base components and broader registry coverage.',
    details: [
      {
        label: 'Base component CLI support merged (PR #106).',
      },
      {
        label: 'Registered all registry components for shadcn build integration.',
      },
      {
        label: 'Added CLI registry support for code-focused components.',
      },
    ],
  },
  {
    date: 'April 27, 2026',
    title: 'New developer-focused component set',
    description:
      'Shipped a high-impact wave of code and developer UI patterns used in docs and app examples.',
    details: [
      { label: 'Code Block page', href: '/components/code-block' },
      { label: 'Terminal UI page', href: '/components/terminal-ui' },
      { label: 'Shimmer Loader page', href: '/components/shimmer-loader' },
      {
        label: 'Tree Code Viewer page',
        href: '/components/tree-code-viewer',
      },
      { label: 'Code Tabs page', href: '/components/code-tabs' },
      { label: 'Code Tabs MDX page', href: '/components/code-tabs-mdx' },
    ],
  },
  {
    date: 'April 18, 2026',
    title: 'Animation systems refresh',
    description:
      'Upgraded major animation sections and fixed registry reliability around newer visual components.',
    details: [
      {
        label: 'Updated timeline-animation and scroll-animation component docs.',
        href: '/components/timeline-animation',
      },
      {
        label: 'Resolved liquid-glass registry issues for smoother usage.',
        href: '/components/liquid-glass',
      },
    ],
  },
  {
    date: 'March 31, 2026',
    title: 'SEO and sitemap quality improvements',
    description:
      'Improved canonical behavior, breadcrumb URL consistency, and sitemap normalization for better indexing quality.',
    details: [
      {
        label: 'Canonical URL and structured data refinements for docs pages.',
      },
      {
        label: 'Breadcrumb URL fixes and sitemap base URL normalization.',
      },
      {
        label: 'SEO schema warmup improvements informed by article updates.',
      },
    ],
  },
  {
    date: 'March 1, 2026',
    title: 'AI discovery surface added',
    description:
      'Added machine-readable discovery files and robots exposure to improve AI/readability integration.',
    details: [
      {
        label: 'Added AI discovery files (llms-full and ai.txt) and exposed via robots.',
        href: '/llms.txt',
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <section className='mx-auto w-full'>
      <article className='relative overflow-hidden p-10 py-12 border-b'>
        <div className='absolute inset-0 -z-10 h-full w-full  dark:bg-[radial-gradient(#181a38_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]'></div>
        <div className='absolute inset-0 -z-2 h-full w-full items-center px-5 dark:[background:radial-gradient(45%_85%_at_80%_50%,#05050542_0%,#050505_140%)] [background:radial-gradient(45%_85%_at_80%_50%,#ffffff37_0%,#ffffff_140%)]'></div>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(135deg,#115cffd1_0px_1px,transparent_1px_19px)] mask-[radial-gradient(ellipse_60%_80%_at_100%_50%,#000_0%,transparent_110%)]'></div>
        <div className='relative z-10 mb-3 flex items-center sm:text-sm text-xs font-medium gap-1 xl:mb-4 xl:gap-1'>
          <a href='/'>home</a>
          <span>/</span>
          <span className='font-semibold dark:text-white text-black'>Changelog</span>
        </div>
        <div className='flex flex-wrap gap-2 justify-between items-center relative z-10 w-fit'>
          <div className='space-y-2 dark:text-white text-black'>
            <h1
              className={cn(
                'mb-0 flex font-medium items-center md:text-3xl sm:text-2xl text-xl sm:gap-3 gap-2 tracking-tight capitalize'
              )}
            >
              <div className='sm:w-9 w-7 sm:h-9 h-7 bg-base-orange grid place-content-center  text-white rounded-lg'>
                <Component />
              </div>
              Changelog
            </h1>
            <p className='md:w-140 sm:text-sm text-xs pt-2'>
              We publish <strong>major updates only</strong> here, so the changelog stays concise
              and helpful.
            </p>
          </div>
        </div>

        <a
          href='https://pro.ui-layouts.com/pricing'
          target='_blank'
          className='absolute xl:-top-16 xl:-right-2 -top-10 -right-12 md:block hidden'
          rel='noreferrer noopener'
        >
          <Image
            src='/20perc.png'
            alt='20-off'
            className='xl:w-96 w-72 h-full object-cover'
            width={600}
            height={600}
          />
        </a>
      </article>
      <div className='p-10'>
        <div className='mt-8 space-y-6'>
          {changes.map((change) => (
            <article
              key={change.title}
              className='rounded-xl border bg-neutral-100 dark:bg-neutral-900 p-5'
            >
              <p className='text-lg uppercase tracking-wide text-muted-foreground'>{change.date}</p>
              <div className='pl-5'>
                <h2 className='mt-1 text-xl font-medium'>{change.title}</h2>
                <p className='mt-2 text-sm text-muted-foreground'>{change.description}</p>
                <ul className='mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                  {change.details.map((detail) => (
                    <li key={detail.label}>
                      {detail.href ? (
                        <Link
                          href={detail.href}
                          className='underline underline-offset-4 hover:text-foreground'
                        >
                          {detail.label}
                        </Link>
                      ) : (
                        detail.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
