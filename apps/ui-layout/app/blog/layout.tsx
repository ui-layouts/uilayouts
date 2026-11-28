import Header from '@/components/website/header';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href='#blog-main' className='sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-3'>Skip to content</a>
      <Header />
      <main id='blog-main' className='mx-auto w-full max-w-[750px] px-5 pb-20 pt-12 sm:px-8 sm:pt-20'>{children}</main>
      <footer className='mx-auto flex max-w-[750px] flex-wrap gap-6 border-t border-border px-5 py-8 text-sm text-neutral-600 dark:text-neutral-400 sm:px-8'>
        <Link href='/'>UI Layouts</Link><Link href='/components'>Components</Link><Link href='/blocks'>Blocks</Link><Link href='/blog'>Blog</Link>
      </footer>
    </>
  );
}
