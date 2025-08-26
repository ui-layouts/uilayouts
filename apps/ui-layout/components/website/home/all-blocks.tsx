import React from 'react';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { ArrowRight } from 'lucide-react';

const allBlocks = [
  {
    id: '01',
    link: 'https://pro.ui-layouts.com/blocks/hero',
    imgSrc: [
      {
        img: '/blocks/hero2.png',
        className:
          ' top-[40%] left-[55%]  group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/hero3.png',
        className:
          'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },

  {
    id: '03',
    link: 'https://pro.ui-layouts.com/blocks/experience',
    imgSrc: [
      {
        img: '/blocks/experience2.png',
        className:
          ' top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/experience1.png',
        className: 'h-fit scale-95 group-hover:scale-[1.15]',
      },
    ],
  },
  {
    id: '04',
    link: 'https://pro.ui-layouts.com/blocks/testimonial',
    imgSrc: [
      {
        img: '/blocks/testimonial2.png',
        className:
          ' top-[40%] left-[55%] scale-100 group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/testimonial3.png',
        className:
          'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '02',
    link: 'https://pro.ui-layouts.com/blocks/hero',
    imgSrc: [
      {
        img: '/blocks/hero5.png',
        className:
          ' top-[40%] left-[55%]  group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/hero4.png',
        className:
          'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '05',
    link: 'https://pro.ui-layouts.com/blocks/about',
    imgSrc: [
      {
        img: '/blocks/about3.png',
        className:
          ' top-[40%] left-[43%]  group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/about2.png',
        className:
          'top-[58%] left-[55%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '06',
    link: 'https://pro.ui-layouts.com/blocks/feature',
    imgSrc: [
      {
        img: '/blocks/feature2.png',
        className:
          'top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/feature1.png',
        className:
          'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '07',
    link: 'https://pro.ui-layouts.com/blocks/pricing',
    imgSrc: [
      {
        img: '/blocks/pricing6.png',
        className:
          'top-[40%] left-[43%] group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/pricing7.png',
        className:
          'top-[58%] left-[55%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '08',
    link: 'https://pro.ui-layouts.com/blocks/newsletter',
    imgSrc: [
      {
        img: '/blocks/newsletter5.png',
        className:
          ' top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/newsletter6.png',
        className:
          'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '09',
    link: 'https://pro.ui-layouts.com/blocks/faqs',
    imgSrc: [
      {
        img: '/blocks/faqs2.png',
        className:
          ' top-[40%] left-[55%] group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/faqs.png',
        className:
          'top-[58%] left-[43%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
  {
    id: '10',
    link: 'https://pro.ui-layouts.com/blocks/pricing',
    imgSrc: [
      {
        img: '/blocks/pricing2.png',
        className:
          'top-[40%] left-[43%] group-hover:scale-90 group-hover:left-[50%]',
      },
      {
        img: '/blocks/pricing5.png',
        className:
          'top-[58%] left-[55%] group-hover:left-[50%]  group-hover:top-[60%]',
      },
    ],
  },
];

function AllBlocks() {
  return (
    <>
      <section className='py-10'>
        <article className='space-y-4 pb-10'>
          <h1 className='xl:text-5xl md:text-4xl sm:text-3xl text-4xl font-medium text-center flex items-start sm:gap-2 justify-center'>
            <img
              src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif'
              alt='🚀'
              width='32'
              className='sm:w-10 sm:h-10 sm:block hidden w-6 h-6'
              height='32'
            />
            30+ Free Ready-to-Use Blocks.
          </h1>
          <p className='lg:max-w-2xl max-w-xl mx-auto lg:px-0 px-5 text-center'>
            Ready-to-use blocks are pre-built components that you can use to
            build your website or application. They are designed to be easy to
            use and can be customized to fit your needs.
          </p>
          <a
            href='https://pro.ui-layouts.com/blocks'
            target='_blank'
            className='flex sm:text-xl w-fit py-2 px-3 dark:bg-neutral-900 bg-neutral-100 z-[10] justify-center group mx-auto font-medium items-center gap-2  rounded-md border dark:border-[#1d1d1d]'
          >
            <span>Browse all </span>
            <span className='flex items-center gap-2'>
              <span className='dark:text-zinc-400 text-zinc-500'>Blocks</span>{' '}
              <ArrowRight className=' group-hover:translate-x-1 transition-all' />
            </span>
          </a>
        </article>
        <Marquee className='[--duration:30s]' pauseOnHover>
          {allBlocks.map((section, index) => (
            <a
              key={section?.id}
              href={section?.link}
              target='_blank'
              className='2xl:w-[28rem] md:w-[25rem] sm:w-72 w-60 rounded-md 2xl:h-72 md:h-64 sm:h-48 h-42 p-2 backdrop-blur-lg bg-primary/10'
            >
              <Image
                src={section?.imgSrc[0].img}
                alt={section?.id}
                width={400}
                className='w-full h-full object-cover rounded-md'
                height={400}
              />
            </a>
          ))}
        </Marquee>
        <Marquee className='[--duration:30s]' pauseOnHover reverse>
          {allBlocks.map((section, index) => (
            <a
              key={section?.id}
              href={section?.link}
              target='_blank'
              className='2xl:w-[28rem] md:w-[25rem] sm:w-72 w-60 rounded-md 2xl:h-72 md:h-64 sm:h-48 h-42 p-2 backdrop-blur-lg bg-primary/10'
            >
              <Image
                src={section?.imgSrc[1].img}
                alt={section?.id}
                width={400}
                className='w-full h-full object-cover rounded-md'
                height={400}
              />
            </a>
          ))}
        </Marquee>
      </section>
    </>
  );
}

export default AllBlocks;
