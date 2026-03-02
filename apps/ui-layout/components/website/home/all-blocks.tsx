'use client';
import React from 'react';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// const allBlocks = [
//   {
//     id: '01',
//     link: 'https://pro.ui-layouts.com/blocks/hero',
//     imgSrc: [
//       {
//         img: '/blocks/hero2.png',
//         className:
//           ' top-[40%] left-[55%]  group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/hero3.png',
//         className:
//           'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
//   {
//     id: '03',
//     link: 'https://pro.ui-layouts.com/blocks/experience',
//     imgSrc: [
//       {
//         img: '/blocks/experience2.png',
//         className:
//           ' top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/experience1.png',
//         className: 'h-fit scale-95 group-hover:scale-[1.15]',
//       },
//     ],
//   },
//   {
//     id: '04',
//     link: 'https://pro.ui-layouts.com/blocks/testimonial',
//     imgSrc: [
//       {
//         img: '/blocks/testimonial2.png',
//         className:
//           ' top-[40%] left-[55%] scale-100 group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/testimonial3.png',
//         className:
//           'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
//   {
//     id: '05',
//     link: 'https://pro.ui-layouts.com/blocks/about',
//     imgSrc: [
//       {
//         img: '/blocks/about3.png',
//         className:
//           ' top-[40%] left-[43%]  group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/about2.png',
//         className:
//           'top-[58%] left-[55%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
//   {
//     id: '06',
//     link: 'https://pro.ui-layouts.com/blocks/feature',
//     imgSrc: [
//       {
//         img: '/blocks/feature2.png',
//         className:
//           'top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/feature1.png',
//         className:
//           'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
//   {
//     id: '07',
//     link: 'https://pro.ui-layouts.com/blocks/pricing',
//     imgSrc: [
//       {
//         img: '/blocks/pricing6.png',
//         className:
//           'top-[40%] left-[43%] group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/pricing7.png',
//         className:
//           'top-[58%] left-[55%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
//   {
//     id: '08',
//     link: 'https://pro.ui-layouts.com/blocks/newsletter',
//     imgSrc: [
//       {
//         img: '/blocks/newsletter5.png',
//         className:
//           ' top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/newsletter6.png',
//         className:
//           'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
//   {
//     id: '09',
//     link: 'https://pro.ui-layouts.com/blocks/faqs',
//     imgSrc: [
//       {
//         img: '/blocks/faqs2.png',
//         className:
//           ' top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
//       },
//       {
//         img: '/blocks/faqs.png',
//         className:
//           'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
//       },
//     ],
//   },
// ];

function AllBlocks({ blocksData }: { blocksData: any[] }) {
  console.log('blocksData', blocksData);

  return (
    <>
      <section className='xl:py-10 py-5 pb-5 relative mb-5'>
        <article className='space-y-4 pb-10 relative z-2'>
          <h2 className='xl:text-5xl md:text-4xl sm:text-3xl text-4xl font-medium text-center flex items-start sm:gap-2 justify-center'>
            <img
              src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif'
              alt='🚀'
              width='32'
              className='sm:w-10 sm:h-10 sm:block hidden w-6 h-6'
              height='32'
            />
            100+ Free Ready-to-Use Blocks.
          </h2>
          <p className='lg:max-w-2xl max-w-xl mx-auto lg:px-0 px-5 text-center'>
            Ready-to-use blocks are pre-built components that you can use to
            build your website or application. They are designed to be easy to
            use and can be customized to fit your needs.
          </p>
        </article>
        <div className='grid md:grid-cols-3 grid-cols-2'>
          {blocksData?.slice(0, 6)?.map((component: any, index: number) => {
            const isFirstItemOfRow = index % 3 === 0;
            return (
              <>
                <Link
                  href={component?.url}
                  className={cn(
                    'relative transition-all p-5 border-b border-l last:border-r dark:border-neutral-700',
                    isFirstItemOfRow && 'border-l-0'
                  )}
                >
                  <>
                    {component?.imgSrc && (
                      <div
                        className={cn(
                          'relative h-fit aspect-video px-6 pt-6',
                          component?.imgclass
                        )}
                      >
                        <svg
                          className='absolute inset-0 w-full h-full mix-blend-overlay opacity-50'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <defs>
                            <filter id='noise6'>
                              <feTurbulence
                                type='fractalNoise'
                                baseFrequency='0.6'
                                numOctaves='4'
                              />
                            </filter>
                          </defs>
                          <rect
                            width='100%'
                            height='100%'
                            filter='url(#noise6)'
                          />
                        </svg>
                        <Image
                          src={component.imgSrc}
                          alt='hero-sec'
                          width={400}
                          height={400}
                          className={cn('w-full object-cover')}
                        />
                      </div>
                    )}
                  </>
                  <div className='sm:py-2 py-1 mt-2'>
                    <h3 className='2xl:text-3xl xl:text-2xl md:text-xl text-lg font-medium leading-[140%] capitalize'>
                      {component.name}
                    </h3>
                    <p className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize opacity-70'>
                      {component?.blocks?.length} Blocks
                    </p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div className='absolute -bottom-5 left-0 w-full h-60 bg-linear-to-t dark:from-neutral-950 from-white dark:via-neutral-950 via-white '></div>
        <div className='absolute top-0 left-0 w-full h-96 bg-linear-to-b dark:from-neutral-950 from-white dark:via-neutral-950 via-white '></div>
        <a
          href='https://pro.ui-layouts.com/blocks'
          target='_blank'
          className='flex sm:text-xl relative z-2 w-fit py-2 px-3 dark:bg-neutral-900 bg-neutral-100 justify-center group mx-auto font-medium items-center gap-2  rounded-md border dark:border-[#1d1d1d]'
        >
          <span>Browse all </span>
          <span className='flex items-center gap-2'>
            <span className='dark:text-zinc-400 text-zinc-500'>Blocks</span>{' '}
            <ArrowRight className=' group-hover:translate-x-1 transition-all' />
          </span>
        </a>
      </section>
    </>
  );
}

export default AllBlocks;
