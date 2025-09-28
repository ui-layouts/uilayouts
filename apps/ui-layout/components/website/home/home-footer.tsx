'use client';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import useNewsLetter, { ClientData } from '@/hooks/useNewsLetter';
import { toast } from 'sonner';
import { SearchDialog } from '../searchbar';
import ThemeSwitch from '../theme-switch';
import HomeGitHubButton from './github-repo-button';

const pathArr = [
  'M1700.03 150.053V93.2598H1813.22V150.053H1756.62V206.847H1643.44V150.053H1700.03ZM1813.22 263.64L1756.62 249.442V206.847H1813.22V263.64ZM1756.62 249.442L1813.22 263.64H1756.62V320.434H1643.44V249.442H1756.62Z',
  'M1553.17 220.023H1631.48V294.536C1631.48 301.503 1628.91 307.561 1623.78 312.71C1618.65 317.859 1612.47 320.434 1605.23 320.434H1500.21C1492.97 320.434 1486.78 317.859 1481.65 312.71C1476.52 307.561 1473.96 301.503 1473.96 294.536V262.732C1473.96 255.462 1471.39 249.253 1466.26 244.104C1461.13 238.652 1454.94 235.925 1447.7 235.925H1420.54C1413.6 235.925 1407.57 233.502 1402.44 228.656C1397.31 223.507 1394.74 217.297 1394.74 210.028V2.39062H1473.05V119.158H1538.68C1540.8 119.158 1542.61 119.915 1544.12 121.43C1545.63 122.944 1546.38 124.762 1546.38 126.882V195.943C1546.38 198.063 1545.63 199.88 1544.12 201.395C1542.61 202.909 1540.8 203.667 1538.68 203.667H1473.05V227.747C1473.05 229.867 1473.8 231.685 1475.31 233.199C1476.82 234.714 1478.63 235.471 1480.74 235.471H1545.47C1547.59 235.471 1549.4 234.714 1550.91 233.199C1552.42 231.685 1553.17 229.867 1553.17 227.747V220.023Z',
  'M1356.53 119.564C1363.77 119.564 1369.96 122.14 1375.09 127.29C1380.22 132.441 1382.78 138.5 1382.78 145.468V294.53C1382.78 301.498 1380.22 307.558 1375.09 312.708C1369.96 317.859 1363.77 320.434 1356.53 320.434H1171.85C1164.91 320.434 1158.87 317.859 1153.74 312.708C1148.61 307.558 1146.04 301.498 1146.04 294.53V145.468C1146.04 138.5 1148.61 132.441 1153.74 127.29C1158.87 122.14 1164.91 119.564 1171.85 119.564H1356.53ZM1304.47 228.179V211.819C1304.47 209.698 1303.72 207.88 1302.21 206.366C1300.7 204.851 1298.89 204.093 1296.78 204.093H1227.52C1225.41 204.093 1223.6 204.851 1222.09 206.366C1220.58 207.88 1219.83 209.698 1219.83 211.819V228.179C1219.83 230.3 1220.58 232.118 1222.09 233.633C1223.6 235.148 1225.41 235.905 1227.52 235.905H1296.78C1298.89 235.905 1300.7 235.148 1302.21 233.633C1303.72 232.118 1304.47 230.3 1304.47 228.179Z',
  'M1055.78 119.564H1134.09V327.201C1134.09 334.471 1131.52 340.68 1126.39 345.83C1121.26 350.979 1115.08 353.554 1107.83 353.554H1081.13C1073.89 353.554 1067.55 356.128 1062.12 361.277C1056.99 366.427 1054.42 372.636 1054.42 379.906V411.71C1054.42 418.98 1051.86 425.038 1046.73 429.884C1041.9 435.033 1035.86 437.608 1028.62 437.608H897.35V352.645H1048.08C1050.2 352.645 1052.01 351.888 1053.52 350.373C1055.02 348.859 1055.78 347.041 1055.78 344.921V320.841H1002.82C995.576 320.841 989.39 318.266 984.26 313.117C979.129 307.967 976.564 301.909 976.564 294.943V272.225C976.564 265.864 975.056 259.958 972.038 254.506C969.02 249.054 964.795 244.813 959.363 241.784C954.233 238.452 948.5 236.635 942.163 236.332H923.151C916.21 236.332 910.175 233.909 905.045 229.062C899.915 223.913 897.35 217.704 897.35 210.434V119.564H977.017V228.154C977.017 230.274 977.621 232.091 978.828 233.606C980.337 235.12 982.147 235.877 984.26 235.877H1048.08C1050.2 235.877 1052.01 235.12 1053.52 233.606C1055.02 232.091 1055.78 230.274 1055.78 228.154V119.564Z',
  'M863.921 119.564C868.749 119.564 873.125 120.776 877.048 123.2C880.971 125.321 884.139 128.502 886.553 132.744C888.968 136.682 890.175 140.924 890.175 145.468V320.434H679.237C672.296 320.434 666.261 317.859 661.131 312.708C656.001 307.558 653.436 301.498 653.436 294.53V229.997C653.436 222.726 656.001 216.667 661.131 211.819C666.261 206.669 672.296 204.093 679.237 204.093H706.849C714.091 204.093 720.278 201.518 725.408 196.368C730.538 191.217 733.103 185.006 733.103 177.735V145.468C733.103 138.5 735.517 132.441 740.346 127.29C745.476 122.14 751.662 119.564 758.904 119.564H863.921ZM811.865 235.905V204.093H734.914C732.801 204.093 730.991 204.851 729.482 206.366C727.973 207.88 727.218 209.698 727.218 211.819V228.179C727.218 230.3 727.973 232.118 729.482 233.633C730.991 235.148 732.801 235.905 734.914 235.905H811.865Z',
  'M526.466 235.471H646.262V320.434H535.153C532.105 320.434 529.514 319.374 527.38 317.254C525.246 315.133 524.18 312.559 524.18 309.53V262.278C524.18 255.008 521.589 248.799 516.407 243.649C511.224 238.5 505.128 235.925 498.117 235.925H464.281C457.27 235.925 451.174 233.502 445.992 228.656C440.81 223.507 438.219 217.297 438.219 210.028V2.39062H518.693V227.747C518.693 228.959 518.998 230.17 519.607 231.382C520.217 232.594 521.131 233.654 522.351 234.562C523.57 235.168 524.942 235.471 526.466 235.471Z',
  'M0.614283 112.21V29.99C0.614283 21.8295 4.34064 14.689 11.7934 8.56859C18.7492 2.85622 27.1957 0 37.1326 0H216.743C228.668 0 238.853 3.46826 247.3 10.4047C255.746 17.3412 259.969 25.5016 259.969 34.8863V65.4883C259.969 74.0568 262.453 82.0133 267.422 89.3578C272.39 96.7023 279.346 102.415 288.29 106.495C296.736 110.983 306.176 113.431 316.61 113.839H347.911C359.339 113.839 369.276 117.104 377.722 123.632C386.169 130.568 390.392 138.933 390.392 148.726V313.017C390.392 313.379 390.39 313.74 390.387 314.101V409.199C390.387 417.581 386.661 424.914 379.208 431.2C372.252 437.067 363.806 440 353.869 440H174.258C162.334 440 152.148 436.438 143.702 429.314C135.255 422.19 131.032 413.809 131.032 404.171V372.742C131.032 363.942 128.548 355.77 123.579 348.227C118.611 340.684 111.655 334.817 102.712 330.627C94.2653 326.017 84.8252 323.503 74.3914 323.084H43.0899C31.6624 323.084 21.7254 319.731 13.279 313.026C4.83259 305.903 0.609375 297.312 0.609375 287.255V113.143C0.609375 112.832 0.611014 112.521 0.614283 112.21ZM259.224 317.826V124.856C259.224 122 258.23 119.552 256.243 117.512C253.759 115.472 250.778 114.451 247.3 114.451H142.216C138.738 114.451 135.757 115.472 133.273 117.512C132.891 117.825 132.539 118.148 132.216 118.48L131.777 311.769C131.777 314.703 132.771 317.217 134.759 319.312C137.243 321.408 140.224 322.455 143.702 322.455H248.785C252.263 322.455 255.244 321.408 257.729 319.312C258.291 318.838 258.789 318.343 259.224 317.826Z',
];

function HomeFooter() {
  const [Send, cilentData] = useNewsLetter();

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get('newsletter_email')!;

    const data: ClientData = {
      email: clientEmail.toString(),
    };

    Send(data);
    toast.success('Thanks to subscribe to our newsletter');
  };

  return (
    <footer className='relative -mt-24 md:px-0 px-4'>
      <div className='max-w-6xl mx-auto relative pb-10'>
        <div className='h-full w-full rounded-lg bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] px-5'>
          <div className='w-full mx-auto py-10'>
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
                      Got a Project?
                    </h3>
                    <p className='text-primary/90 text-sm font-medium'>
                      Book a free discovery call.
                    </p>
                  </div>
                </div>

                {/* Right side - Action buttons */}
                <div className='flex items-center gap-2 shrink-0'>
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
            <span className='text-primary/90 sm:w-[94%] w-[85%] mx-auto flex gap-1 sm:text-sm text-xs items-center font-medium border px-4 bg-neutral-100 dark:bg-neutral-800 py-1.5 rounded-b-xl'>
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
        </div>
        <article className='py-2 mx-auto max-w-xl space-y-2 pt-20 text-center'>
          <p className='sm:text-4xl text-2xl py-2'>
            Sign up for our newsletter
          </p>
          <div className='hover-button relative bg-neutral-100 dark:bg-neutral-950 flex justify-between items-center border-2 overflow-hidden dark:border-neutral-900 border-neutral-300 rounded-lg'>
            <form
              onSubmit={(e) => handleNewsLetterData(e)}
              className='relative z-2 flex w-full'
            >
              <input
                type='email'
                name='newsletter_email'
                className='border-none bg-transparent h-14 px-4 w-full outline-none focus:outline-none'
                placeholder='Your Email * '
                required
              />{' '}
              <button
                type='submit'
                className='cursor-pointer hover:bg-primaryColor bg-white text-white shrink-0 w-fit px-4'
              >
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  className='w-10 h-10 '
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                    fill='#000'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </article>

        <div className='flex flex-col justify-center items-center gap-6 pt-16 relative z-10'>
          <div className='flex items-center gap-4'>
            <div className='sm:flex hidden gap-4 items-center'>
              <SearchDialog
                classname='sm:w-14 xl:w-12 sm:pr-0 sm:pl-2.5 dark:bg-neutral-900 bg-neutral-200 border dark:border-neutral-80 border-white/20'
                searchBar={true}
              />
              <ThemeSwitch className='dark:bg-neutral-900 bg-neutral-200 border dark:border-neutral-800 border-neutral-300 w-12 rounded-md h-11 flex-shrink-0' />
            </div>
            <HomeGitHubButton />
          </div>
          <div className='flex flex-wrap justify-center sm:gap-4 gap-2 items-center'>
            <a
              href='/components/image-reveal'
              className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
              after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
            >
              Image Reveal
            </a>
            <a
              href='/components/accordion'
              className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
              after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
            >
              Accordion
            </a>
            <a
              href='/components/buttons'
              className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
              after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
            >
              Buttons
            </a>

            <a
              href='/components/clip-path'
              className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white 
              after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100'
            >
              Clip Path Image
            </a>
            <a
              href='/components/magnified-doc'
              className='relative block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
              after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
            >
              Magnified Doc
            </a>
          </div>
          <span className='font-normal'>
            &copy; 2025 UI-Layouts. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className=' md:py-4 '>
        <motion.svg
          width='1814'
          height='440'
          viewBox='0 0 1814 440'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='sm:h-fit h-20 md:px-8 px-2 relative sm:z-0 z-10 footer-logo w-full'
        >
          {pathArr.map((path, index) => {
            return <path key={path} d={path} fill='#324aff' />;
          })}
        </motion.svg>
      </div>
      <div
        className='
        absolute
    w-full 
    h-[630px] 
    left-0 
    -bottom-10 
    bg-[radial-gradient(108.09%_118.89%_at_50%_-23.55%,#1b98ff_20.88%,#5c9dff_31.25%,rgba(0,0,0,0)_51.21%,rgba(0,0,0,0)_100%)] 
    dark:bg-[radial-gradient(108.09%_118.89%_at_50%_-23.55%,#1b98ff_20.88%,#0c4eb0_31.25%,rgba(0,0,0,0)_51.21%,rgba(0,0,0,0)_100%)] 
    rotate-180
  '
      ></div>
    </footer>
  );
}

export default HomeFooter;
