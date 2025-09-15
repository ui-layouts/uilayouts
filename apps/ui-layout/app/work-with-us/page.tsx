import HomeFooter from '@/components/website/home/home-footer';
import HomeHeader from '@/components/website/home/home-header';
import { siteConfig } from '@/lib/utils';
import React from 'react';

export const metadata = {
  title: 'Work With Us | UI Layouts',
  description:
    'We’re open-source, but now we’re taking on custom projects. Partner with UI Layouts Pro to build bespoke websites, premium UI designs, and tailored digital solutions — crafted with Tailwind CSS and React.',
  keywords: [
    'UI Layouts Pro work with us',
    'hire UI developers',
    'custom Tailwind UI',
    'React custom components',
    'bespoke website design',
    'hire UI Layouts team',
    'custom UI solutions',
    'Tailwind UI experts',
    'React design services',
    'UI consulting and development',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url + '/work-with-us',
    title: 'Work With Us | UI Layouts Pro',
    description:
      'We’re open-source, but we also create tailored UI and web solutions. Work with UI Layouts Pro for high-quality, custom web experiences built with Tailwind and React.',
    siteName: 'UI Layouts',
    images: [
      {
        url:
          siteConfig.workWithUsOgImage ||
          'https://ui-layouts.com/work-with-us-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Work With Us | UI Layouts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work With Us | UI Layouts Pro',
    description:
      'Partner with UI Layouts Pro for custom UI design, bespoke web solutions, and React + Tailwind expertise.',
    images: [
      siteConfig.workWithUsOgImage ||
        'https://pro.ui-layouts.com/work-with-us-og.jpg',
    ],
    creator: '@naymur_dev',
  },
};

const WorkWithUs = () => {
  return (
    <>
      <HomeHeader />
      <section className='pt-32 font-poppins relative xl:px-0 px-4 pb-40'>
        <article className='text-center max-w-3xl mx-auto space-y-3 relative z-[2]'>
          {/* 🔥 */}
          <span className='text-center md:text-base sm:text-sm text-xs w-full flex items-center justify-center'>
            We’re Open-Source but now taking custom projects
            <picture className='shrink-0'>
              <source
                srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp'
                type='image/webp'
              />
              <img
                src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif'
                alt='🔥'
                width={24}
                className='sm:w-6 w-5 sm:h-6 h-5 shrink-0'
                height={24}
              />
            </picture>
          </span>
          <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-medium !leading-[130%] '>
            <span className=']'>
              {' '}
              Got an{' '}
              <span className='text-blue-600 text-shadow-lg dark:text-shadow-blue-950 text-shadow-blue-200 capitalize'>
                Idea
              </span>
              , Have a{' '}
              <span className='text-blue-600 text-shadow-lg dark:text-shadow-blue-950 text-shadow-blue-200 capitalize'>
                Project?
              </span>
            </span>{' '}
            <br className='sm:inline-block hidden' />{' '}
            <span className='dark:bg-zinc-900 bg-zinc-100 text-blue-600 py-0 px-2 rounded-lg inline-block lg:h-[4.2rem] border relative text-shadow-lg dark:text-shadow-blue-900 text-shadow-blue-200'>
              {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#86868633_0px_1px,transparent_1px_10px)]"></div> */}
              We’re Ready
            </span>{' '}
            <span>to Bring It to Life.</span>
          </h1>
          <p className='md:w-[86%] sm:w-[75%] w-[90%] lg:text-base text-xs mx-auto'>
            Ui-Layouts isn’t just about components library, we help businesses
            craft stunning, high-performing web experiences. Whether you need a
            custom UI, a full-scale project, or tailored solutions, our team is
            ready to make it happen.
          </p>
        </article>
        <div className=' max-w-4xl mx-auto my-10'>
          <div className='w-full dark:bg-zinc-950 bg-zinc-50 border rounded-3xl relative'>
            <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-4 py-6 px-4'>
              <div className='flex items-center gap-0'>
                {/* Left side - Avatar and You label */}
                <div className='flex items-center gap-3'>
                  <div className='relative'>
                    <img
                      className='h-12 w-12 rounded-full border border-gray-800'
                      src='/naymur.png'
                      alt='Founder'
                    />
                    <div className='h-10 w-10 rounded-full absolute bottom-1 -right-4 grid place-items-center bg-purple-100 text-blue-600 border border-blue-300 text-xs px-2 py-0.5 font-medium'>
                      You
                    </div>
                  </div>
                </div>

                {/* Center - Content */}
                <div className='flex-1 pl-7'>
                  <h3 className='font-librecaslon text-xl font-medium text-pirmary mb-1'>
                    Got questions?
                  </h3>
                  <p className='text-primary/90 text-sm font-medium'>
                    Book a free discovery call with{' '}
                    <span className='text-blue-600 text-shadow-lg dark:text-shadow-none text-sh'>
                      Me.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right side - Action buttons */}
              <div className='flex items-center gap-2'>
                <a
                  href='mailto:naymur@ui-layouts.com'
                  className='flex items-center bg-zinc-900 text-white border shadow-none h-14 rounded-full px-5'
                >
                  Email us
                </a>
                <a
                  href='https://cal.com/ui-layouts'
                  target='_blank'
                  className='flex items-center bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-full px-6 gap-2'
                >
                  Book a free call
                  <span className='relative flex size-3'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75'></span>
                    <span className='relative inline-flex size-3 rounded-full bg-gray-100'></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <span className='text-primary/90 sm:w-[94%] w-[85%] mx-auto flex gap-1 sm:text-sm text-xs items-center font-medium border px-4 bg-zinc-100 dark:bg-zinc-900 py-1.5 rounded-b-xl'>
            We believe in people, not forms. Book a call and let’s talk
            directly.
            <picture className='shrink-0'>
              <source
                srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp'
                type='image/webp'
              />
              <img
                src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif'
                alt='🔥'
                className='sm:w-6 w-5 sm:h-6 h-5 shrink-0'
                width={24}
                height={24}
              />
            </picture>
          </span>
        </div>
        <div className='absolute left-0 -z-10 w-full h-full -top-28 dark:bg-[repeating-linear-gradient(45deg,#1b1b1b_0px_1px,transparent_1px_8px)] bg-[repeating-linear-gradient(45deg,#f0f0f0_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'></div>
      </section>
      <HomeFooter />
    </>
  );
};

export default WorkWithUs;
