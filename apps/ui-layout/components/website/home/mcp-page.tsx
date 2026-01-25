'use client';
import React, { useState } from 'react';
import { profiles } from '@/components/website/home/hero-sec';
import HomeFooter from '@/components/website/home/home-footer';
import HomeHeader from '@/components/website/home/home-header';
import { ArrowUpRight, Component, LayoutPanelTop } from 'lucide-react';
import Image from 'next/image';
import { Banner } from '@/components/website/ui/banner';
import { Github, Star } from 'lucide-react';
import { Colors, Liquid } from '@/components/ui/liquid-gradient';

const COLORS: Colors = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};
function McpPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <HomeHeader />
      <main className='relative pb-8'>
        <section className='2xl:py-16 xl:py-20 sm:pb-24 pb-16 pt-6 relative'>
          <div className='w-full absolute h-[113.625vh] z-0 overflow-hidden left-0 -top-32'>
            <div className='hero-gradient1 ' data-border='true'></div>
            <div className='hero-gradient2' data-border='true'></div>
          </div>
          <div className='2xl:container 2xl:px-0 px-4 mx-auto relative z-10'>
            <article className='grid gap-6 2xl:pt-14 pt-10 xl:pb-0 pb-6 sm:px-0 px-4'>
              <a
                href={'https://github.com/ui-layouts/mcp'}
                className='inline-flex w-fit mx-auto items-center gap-1 rounded-full  bg-[#334cec] border-4 shadow-[#6175f8] py-0.5 px-2 text-xs'
              >
                <p className='text-white sm:text-base text-xs inline-block'>
                  ✨<span className='px-1 font-semibold'>UI-Layouts MCP</span>
                </p>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                  data-slot='icon'
                  className='h-3 w-3 text-white'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <h1 className='2xl:text-6xl xl:text-6xl md:text-5xl sm:text-4xl text-[1.9rem] text-center font-semibold'>
                Real UI Components
                <br />
                <span className='bg-linear-to-t from-blue-400 to-blue-600 bg-clip-text text-transparent'>
                  for AI Code Editors
                </span>
              </h1>

              <p className='mx-auto 2xl:w-[680px] lg:w-[520px] text-center sm:text-base text-sm text-neutral-600 dark:text-neutral-400'>
                UI-Layouts MCP lets AI assistants like Cursor, Claude, and other
                AI IDEs search real UI components, read documentation, extract
                metadata, and retrieve actual React/TypeScript source code,
                instead of guessing UI.
              </p>

              <div className='flex gap-3 justify-center items-center pt-6'>
                <a
                  href='https://www.npmjs.com/package/@ui-layouts/mcp'
                  className='flex items-center gap-2 rounded-md shadow-lg shadow-blue-600 text-white bg-linear-to-b from-blue-500 to-blue-600 px-4 py-3 text-sm sm:text-base'
                >
                  Get Started via npx <ArrowUpRight className='w-5 h-5' />
                </a>

                {/* <a
                  href='https://ui-layouts.com'
                  className='flex items-center gap-2 rounded-md border dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm sm:text-base'
                >
                  Explore Components
                              </a> */}
                <a
                  href='https://github.com/ui-layouts/mcp'
                  target='_blank'
                  className='relative inline-block md:w-40 w-12 h-[3em] group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg'
                >
                  <div className='absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70'>
                    <span className='absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]'></span>
                    <div className='relative w-full h-full overflow-hidden rounded-lg'>
                      <Liquid isHovered={isHovered} colors={COLORS} />
                    </div>
                  </div>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]'></div>
                  <div className='relative w-full h-full overflow-hidden rounded-lg'>
                    <span className='absolute inset-0 rounded-lg bg-[#d9d9d9]'></span>
                    <span className='absolute inset-0 rounded-lg bg-black'></span>
                    <Liquid isHovered={isHovered} colors={COLORS} />
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
                          i <= 2
                            ? 'blur-[3px]'
                            : i === 3
                              ? 'blur-[5px]'
                              : 'blur-xs'
                        }`}
                      ></span>
                    ))}
                    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]'></span>
                  </div>
                  <button
                    className='absolute inset-0 rounded-lg bg-transparent cursor-pointer'
                    aria-label='Get Started'
                    type='button'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className='md:flex hidden items-center justify-center px-2 gap-2 rounded-lg group-hover:text-yellow-400 text-white text-2xl font-semibold tracking-wide whitespace-nowrap'>
                      <span>Explore</span>
                      <Github className='inline-block group-hover:fill-yellow-400 fill-white w-6 h-6 shrink-0' />
                    </span>
                    <span className='md:hidden flex items-center justify-center px-2 gap-2 rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap'>
                      <Github className='inline-block group-hover:fill-yellow-400 fill-white w-6 h-6 shrink-0' />
                    </span>
                  </button>
                </a>
              </div>

              <div className='flex w-fit mx-auto sm:items-center justify-center mt-2 lg:pb-0 pb-10 sm:translate-x-8'>
                <div className='flex w-fit sm:translate-x-0 translate-x-8'>
                  {profiles.map((profile, index) => (
                    <a
                      key={index}
                      href={profile.href}
                      target='_block'
                      className={`dark:bg-neutral-800 bg-neutral-50 p-1 shrink-0 rounded-full relative z-1 hover:z-2 ${profile.translateX}`}
                    >
                      <Image
                        src={profile.src}
                        alt={profile.alt}
                        width={300}
                        height={300}
                        className='2xl:w-12 2xl:h-12 xl:w-10 w-8 h-8 xl:h-10 rounded-full'
                      />
                    </a>
                  ))}
                </div>
                <div className='sm:-translate-x-12 sm:pt-0 pt-2'>
                  <div className='flex 2xl:gap-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5 w-5 text-amber-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5 w-5 text-amber-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5 w-5 text-amber-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5 w-5 text-amber-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5 w-5 text-amber-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <div className='sm:text-sm text-xs font-medium'>
                    Trusted by 1000+ users
                  </div>
                </div>
              </div>
              {/* Feature grid */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-4xl mx-auto'>
                {[
                  {
                    title: 'Search Components',
                    desc: 'Find UI by name, tag, or intent',
                  },
                  {
                    title: 'Read Docs',
                    desc: 'AI understands usage before coding',
                  },
                  {
                    title: 'Fetch Metadata',
                    desc: 'Context-aware component reasoning',
                  },
                  {
                    title: 'Get Source Code',
                    desc: 'Real React / TypeScript, not guesses',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className='rounded-xl border shadow-2xl dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4 text-center'
                  >
                    <div className='font-semibold'>{item.title}</div>
                    <div className='text-xs dark:text-neutral-300 text-neutral-500 mt-2'>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default McpPage;
