import React from 'react';
import HomeMouseTrail from './home-mousetrail';
import HomeBtn from './home-btn';
import HomeDialog from './home-image-modal';
import HomeTab from './home-tab';
import NewItemsLoading from './new-items-loading';
import HomeClipPath from './home-clippath';
import Image from 'next/image';
import HomePasswordInput from './home-password';
import HomePhoneInput from './home-phone-input';
import HomeDateTimePicker from './home-datetime-picker';
import HomeYouutbTags from './home-youtube-tags';
import HomeFileUpload from './home-file-upload';
import HomeTextMarquee from './home-text-marque';
import Link from 'next/link';
import SidebarMenu from '@/registry/components/liquid-glass/sidebar-menu';
import { Marquee } from '@/components/ui/marquee';
import HomeImageReveal from './home-image-reveal';
import { ArrowRight } from 'lucide-react';
const homeComponents = [
  {
    id: 111,
    link: '/components/liquid-glass',
    componentSrc: <SidebarMenu className='py-20 p-4' />,
    className: 'lg:col-span-4 sm:col-span-5 col-span-14  row-span-4',
  },

  {
    id: 2,
    link: '/components/image-mousetrail',

    componentSrc: <HomeMouseTrail />,
    className:
      ' lg:col-start-5  sm:inline-block hidden col-span-9  lg:col-end-11  lg:row-start-2  row-start-1 2xl:row-end-7 lg:row-end-6 row-end-9 row-span-4',
  },
  {
    id: 3,
    link: '/components/tabs',

    componentSrc: <HomeTab />,
    className: 'lg:col-span-4 sm:col-span-5 col-span-14  row-span-4 ',
  },

  {
    id: 4,
    link: '/components/clip-path',

    componentSrc: <HomeClipPath />,
    className:
      '2xl:col-span-4 md:col-span-4 sm:col-span-5 col-span-14 lg:col-start-1 lg:col-end-5 lg:row-start-5 2xl:row-end-9 lg:row-end-7 row-span-4',
  },
  {
    id: 5,
    link: '/components/tabs',

    componentSrc: <HomePasswordInput />,
    className:
      ' lg:col-start-5 md:col-span-10 sm:col-span-9 col-span-14   xl:col-end-9 lg:col-end-10  2xl:row-start-7 lg:row-start-6 2xl:row-end-9 lg:row-end-7 lg:row-span-4 row-span-2',
  },
  {
    id: 6,
    link: '/components/password',

    componentSrc: <HomePhoneInput />,
    className:
      ' xl:col-start-9 lg:col-start-10 md:col-span-10 sm:col-span-9 col-span-14  xl:col-end-13 lg:col-end-15 2xl:row-start-7 lg:row-start-6 2xl:row-end-9   lg:row-end-7 lg:row-span-4 row-span-2',
  },
  {
    id: 7,
    link: '/components/media-modal',

    componentSrc: <HomeDialog />,
    className:
      'lg:col-start-11 sm:col-span-5 col-span-7  lg:col-end-15 lg:row-start-5 2xl:row-end-7 lg:row-end-6 row-span-4',
  },
  {
    id: 8,
    link: '/components/buttons',

    componentSrc: <HomeBtn />,
    className:
      'xl:col-start-13 lg:col-start-6  lg:col-end-15  2xl:row-start-7 lg:row-start-20 xl:row-start-6 lg:row-span-4 2xl:row-end-11  xl:row-end-10  lg:row-end-21 sm:col-span-9 col-span-7 sm:row-span-2 row-span-4',
  },
  {
    id: 9,
    link: '/components/datetime-picker',

    componentSrc: <HomeDateTimePicker />,
    className:
      'xl:col-span-4 lg:col-span-7 sm:col-span-9 col-span-14 lg:row-auto row-span-2 ',
  },
  {
    id: 10,
    link: '/components/tags-input',

    componentSrc: <HomeYouutbTags />,
    className: 'xl:col-span-4 sm:col-span-7 col-span-14 lg:row-auto row-span-2',
  },
  {
    id: 11,
    link: '/components/file-upload',

    componentSrc: <HomeFileUpload />,
    className:
      'xl:col-start-9 lg:col-start-9  xl:col-end-13 lg:col-end-15 2xl:row-start-9 xl:row-start-7 lg:row-start-8 2xl:row-end-11  xl:row-end-10  lg:row-end-9 row-span-2 sm:col-span-7 col-span-14',
  },
  {
    id: 12,
    link: '/components/scroll-text-marquee',

    componentSrc: <HomeTextMarquee />,
    className:
      'lg:col-start-1 lg:col-end-9 col-span-14 lg:row-span-4 2xl:row-start-10 lg:row-start-8 2xl:row-end-13 xl:row-end-12 lg:row-end-11',
  },

  {
    id: 13,
    link: '/components/image-reveal',

    componentSrc: <HomeImageReveal />,
    className:
      'lg:col-span-6 lg:inline-block hidden sm:col-span-6 col-span-14 lg:row-span-4 2xl:row-start-11 xl:row-start-10 lg:row-start-9 2xl:row-end-13 xl:row-end-12 lg:row-end-11',
  },
];

function AllComponents() {
  return (
    <>
      <section className='relative'>
        <h1
          className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl  font-medium text-center pt-44 pb-10 flex gap-2 items-start justify-center
        '
        >
          <img
            src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif'
            alt='🔥'
            className='w-12 h-12 sm:block hidden'
          />
          Supercharge Your Projects with <br className='md:block hidden' />{' '}
          Ready-to-Use Components.
        </h1>
        <div className='relative grid grid-cols-14  gap-4 lg:container xl:px-0 px-3 mx-auto'>
          {homeComponents?.slice(0, 13).map((component, index) => {
            return (
              <div className={`${component.className}`} key={index}>
                <div
                  className={`relative group  h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline`}
                >
                  <Link
                    href={component.link}
                    className='absolute top-1 transition-all group-hover:opacity-100 opacity-0 text-[0.85rem] px-2 py-0.5 dark:bg-gray-800  bg-gray-200 right-2 z-10 rounded-md grid place-content-center cursor-pointer'
                  >
                    Preview
                  </Link>
                  <>{component?.componentSrc && component.componentSrc}</>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href='/components'
          target='_blank'
          className='flex sm:text-base text-sm absolute bottom-0 sm:w-fit w-60 left-[50%] translate-x-[-50%] py-2 px-3 dark:bg-neutral-900 bg-neutral-100 z-[10] justify-center group mx-auto font-medium items-center gap-2 rounded-md border dark:border-[#1d1d1d]'
        >
          {' '}
          <span>Browse all </span>
          <span className='flex items-center gap-2'>
            <span className='dark:text-zinc-400 text-zinc-500'>Components</span>{' '}
            <ArrowRight className=' group-hover:translate-x-1 transition-all' />
          </span>
        </a>
        <div className='absolute -bottom-5 -left-0 w-[100%] h-40 bg-gradient-to-t dark:from-black from-zinc-50 dark:via-black via-zinc-50 '></div>
      </section>
    </>
  );
}

export default AllComponents;
