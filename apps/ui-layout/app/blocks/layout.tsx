import React from 'react';
import HomeHeader from '@/components/website/home/home-header';
import { cn } from '@/lib/utils';
import { Banner } from '@/components/website/ui/banner';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default async function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container>
        <div className='relative bg-black'>
          <div
            className={cn(
              'border-b dark:border-neutral-700 w-full dark:bg-neutral-900 bg-white h-12',
              'absolute top-0 left-0 ',
              'dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
            )}
          />
          <Banner
            variant='rainbow'
            className='h-11 md:text-base sm:text-sm text-xs dark:bg-transparent bg-transparent'
          >
            <p className='group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center'>
              <picture>
                <source
                  srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp'
                  type='image/webp'
                />
                <img
                  src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif'
                  alt='🚀'
                  className='w-6 h-6'
                  width='32'
                  height='32'
                />
              </picture>
              Ship faster with{' '}
              <span className='font-semibold'>UI-Layouts Pro</span>
              <span className='md:inline-block hidden'>
                – 100+ production-ready blocks waiting for you
              </span>
            </p>
            <ArrowUpRight
              className='size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0'
              strokeWidth={2}
            />
          </Banner>
        </div>
        <HomeHeader headerClassName='dark:bg-neutral-800 bg-neutral-200' />
      </Container>
      <main className='not-prose'>{children}</main>
    </>
  );
}
