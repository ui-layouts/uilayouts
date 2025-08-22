import { notFound } from 'next/navigation';
import { absoluteUrl, cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import Footer from '@/components/website/footer';

import { Metadata } from 'next';
import { blocksDesign } from '@/configs/blocks-docs'; // Update path
import Link from 'next/link';
import Image from 'next/image';
import HomeHeader from '@/components/website/home/home-header';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const sectionData = blocksDesign.find((b) => b.id === section);

  if (!sectionData) return {};

  return {
    title: `${sectionData.name} | UI Layouts`,
    description: sectionData.des,
    keywords: sectionData.tags || [],
  };
}

export default async function SectionPage(props: {
  params: Promise<{ section?: string }>;
}) {
  const { section } = await props.params;
  const sectionData = blocksDesign.find((s) => s.id === section);

  if (!sectionData) return notFound();
  console.log(sectionData);
  return (
    <>
      <HomeHeader className='max-w-screen-xl dark:bg-neutral-900 dark:border-neutral-800 bg-neutral-200 border-neutral-300' />
      <div className='lg:container lg:px-0 px-3 mx-auto mt-0 '>
        <div className='flex w-full lg:gap-3'>
          <section className='xl:mr-0 mr-3 prose mt-[4.34rem] w-full prose-zinc min-w-0 max-w-full pb-5 pt-4 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:my-4  prose-h2:py-1  prose-h2:border-b prose-h3:py-1  prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-4'>
            <article className='flex justify-between mb-4 mt-0 rounded-lg bg-gradient-to-r dark:from-black/40 to-blue-100 to-100% from-zinc-100  border backdrop-blur-md p-6 2xl:w-[90%] mx-auto relative'>
              <div className='absolute bottom-0 left-0 right-0 top-0 z-10 w-full h-full bg-[repeating-linear-gradient(135deg,#475aff33_0px_1px,transparent_1px_15px)] [mask-image:radial-gradient(ellipse_50%_135%_at_93%_0%,#000_55%,transparent_100%)]'></div>
              <div className='space-y-2 rounded-md dark:text-white text-black'>
                <span className=''>
                  <a href='/blocks'>blocks</a>/{sectionData.id}
                </span>
                <h1
                  className={cn(
                    'mb-0 flex scroll-m-20  not-prose items-center lg:text-3xl text-2xl gap-2 font-medium tracking-tight'
                  )}
                >
                  <div className='lg:w-10  w-8 lg:h-10  h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg'>
                    <Component />
                  </div>
                  {sectionData.name}
                </h1>
                <p className='sm:text-sm text-xs'>{sectionData.des}</p>
              </div>
              <div className='text-right max-w-lg z-20 space-y-2'>
                <p className='text-sm text-primary font-medium'>
                  Get access to all premium blocks, lifetime updates, <br /> and
                  faster workflow — all in a single upgrade.
                </p>
                <a href="https://pro.ui-layouts.com/" target="_blank" className='bg-blue-600 w-fit ml-auto text-primary-foreground shadow-md shadow-blue-500 px-4 py-2 rounded-lg hover:shadow-blue-600 transition flex items-center justify-center gap-2'>
                  Get the Pro{' '}
                  <img
                    src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif'
                    alt='🔥'
                    width='24'
                    height='24'
                  />
                </a>
                <p className='text-xs text-muted-foreground mt-1'>
                  One-time payment. No subscriptions.
                </p>
              </div>
            </article>
            <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 py-16'>
              {sectionData.blocks?.map((block) => (
                <Link
                  key={block.id}
                  href={`/blocks/${sectionData.id}/${block.id}`}
                  className='relative group no-underline dark:bg-neutral-900 bg-neutral-200 sm:p-4 p-2 rounded-lg border dark:border-neutral-800 border-neutral-300'
                >
                  <Image
                    src={block.imgSrc}
                    alt={block.name}
                    width={400}
                    height={400}
                    className='rounded-lg w-full object-cover'
                  />
                  <h3 className='mt-2  md:text-lg text-xs font-medium'>
                    {block.name}
                  </h3>
                </Link>
              ))}
            </div>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
