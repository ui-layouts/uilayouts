import React from 'react';
import HomeHeader from '@/components/website/home/home-header';

export default async function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader className='max-w-screen-xl' />
      <main className='dark:bg-zinc-950 bg-zinc-50 '>{children}</main>
    </>
  );
}
