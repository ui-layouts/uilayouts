import { Container } from '@/components/ui/container';
import Header from '@/components/website/header';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <a href='#blog-main' className='sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-3'>
        Skip to content
      </a>
      <Header />
      <main id='blog-main' className='relative min-w-0 w-full pb-20 pt-12 sm:pt-20'>
        {children}
      </main>
      <footer className='relative flex flex-wrap gap-6 border-t border-border py-8 text-sm text-neutral-600 dark:text-neutral-400'>
        <Link href='/'>UI Layouts</Link>
        <Link href='/components'>Components</Link>
        <Link href='/blocks'>Blocks</Link>
        <Link href='/blog'>Blog</Link>
      </footer>
    </Container>
  );
}
