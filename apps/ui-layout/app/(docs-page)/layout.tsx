import React from 'react';
import Header from '@/components/website/header';
import DocsSidebar from '@/components/website/sidebar';
import { Container } from '@/components/ui/container';
import Footer from '@/components/website/footer';
import { GapPattern } from '@/components/ui/gap-pattern';

export default async function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header />
      <main className='relative'>
        <div className='mx-auto w-full lg:grid 2xl:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[170px_minmax(0,1fr)] grid-cols-1 lg:gap-3'>
          <div className='lg:sticky top-14 lg:h-[calc(100vh-6rem)]'>
            <div className='absolute -bottom-5 left-0 z-2 w-full h-20 bg-linear-to-t dark:from-neutral-950 from-white dark:via-neutral-950 via-white'></div>
            <DocsSidebar />
            <div className='absolute -top-5 left-0 w-full h-20 bg-linear-to-b dark:from-neutral-950 from-white dark:via-neutral-950 via-white'></div>
          </div>
          <div className='min-w-0 max-w-full 2xl:px-4 px-2 relative'>
            <GapPattern className='2xl:h-full lg:h-full h-full lg:block hidden 2xl:w-10 lg:w-7 w-5 border-x border-y-0 absolute -left-2 top-0' />
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </main>
    </Container>
  );
}
