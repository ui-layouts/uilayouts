import React from 'react';
import HomeHeader from '@/components/website/home/home-header';

export default async function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader className='max-w-screen-xl dark:bg-neutral-900 dark:border-neutral-800 bg-neutral-200 border-neutral-300' />
      <main className='dark:bg-zinc-950 bg-zinc-50 not-prose'>{children}</main>
    </>
  );
}
