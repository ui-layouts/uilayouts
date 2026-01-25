import React from 'react';
import HomeHeader from '@/components/website/home/home-header';

export default async function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader
        className='2xl:max-w-6xl max-w-5xl dark:bg-zinc-800 bg-zinc-200 rounded-none'
        headerClassName='absolute top-3'
      />
      <main className='dark:bg-zinc-950 bg-zinc-50 not-prose'>{children}</main>
    </>
  );
}
