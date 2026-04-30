import type { Metadata } from 'next';
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
        label:
          'Registered all registry components for shadcn build integration.',
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

const includeList = [
  'New component families or major UI patterns.',
  'Big improvements to existing components (API changes, accessibility upgrades, performance wins).',
  'Important docs/platform updates that affect how people use UI Layouts.',
];

const skipList = [
  'Tiny refactors and typo fixes.',
  'Routine dependency bumps without user-facing changes.',
  'Very small style tweaks that do not change behavior.',
];

export default function ChangelogPage() {
  return (
    <div className='mx-auto w-full max-w-3xl py-12'>
      <p className='text-sm text-muted-foreground'>UI Layouts</p>
      <h1 className='mt-2 text-3xl font-bold tracking-tight'>Changelog</h1>
      <p className='mt-3 text-muted-foreground'>
        We publish <strong>major updates only</strong> here, so the changelog
        stays concise and helpful.
      </p>

      <div className='mt-8 grid gap-4 rounded-xl border p-5'>
        <h2 className='text-lg font-semibold'>What gets listed</h2>
        <ul className='list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
          {includeList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className='text-base font-semibold'>What we intentionally skip</h3>
        <ul className='list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
          {skipList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='mt-8 space-y-6'>
        {changes.map((change) => (
          <article key={change.title} className='rounded-xl border p-5'>
            <p className='text-xs uppercase tracking-wide text-muted-foreground'>
              {change.date}
            </p>
            <h2 className='mt-1 text-xl font-semibold'>{change.title}</h2>
            <p className='mt-2 text-sm text-muted-foreground'>
              {change.description}
            </p>
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
          </article>
        ))}
      </div>

      <p className='mt-8 text-sm text-muted-foreground'>
        Looking for everything in detail? Check the{' '}
        <Link
          href='https://github.com/intentui/ui-layouts/commits/main/'
          className='underline underline-offset-4 hover:text-foreground'
        >
          commit history
        </Link>{' '}
        for full granular changes.
      </p>
    </div>
  );
}
