'use client';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import Footer from '@/components/website/footer';
import { blocksDesign } from '@/configs/blocks-docs';
import HomeHeader from '@/components/website/home/home-header';
import { ProgressiveBlur } from '@repo/ui';
export default function Home() {
  return (
    <>
      <HomeHeader className='max-w-screen-xl dark:bg-neutral-900 dark:border-neutral-800 bg-neutral-200 border-neutral-300' />
      <div className='pt-28 pb-5 max-w-screen-2xl mx-auto min-h-screen 2xl:px-0 px-4'>
      
        <article className='w-fit mx-auto 2xl:max-w-5xl xl:max-w-4xl max-w-2xl text-center space-y-6'>
        <a
          href={'/blocks'}
          className='flex w-fit mx-auto items-center gap-1 rounded-full  bg-[#334cec] border-4  shadow-[#6175f8]  py-0.5 pl-0.5 pr-3 text-xs '
        >
          <div className='rounded-full bg-[#fcfdff] px-2 py-1 text-xs text-black '>
            Update
          </div>
          <p className='text-white sm:text-base text-xs inline-block'>
            ✨ Introducing
            <span className='px-1 font-semibold'>New Blocks</span>
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
          <h1 className='2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl leading-[100%]'>
            Build Faster with{' '}
            <span className='font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>
              Premium
            </span>{' '}
            Quality{' '}
            <span className='font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
              Blocks
            </span>{' '}
            For Free.
          </h1>
          <p className='lg:text-xl sm:text-lg text-sm max-w-2xl mx-auto'>
            Beautifully designed Sections that you can copy and paste into your
            apps. Accessible. Customizable. Open Source.
          </p>
        </article>

        <div className='grid md:grid-cols-3 grid-cols-2 gap-6 pt-20'>
          {blocksDesign.map((component, index) => {
            return (
              <>
                <Link
                  href={component?.url}
                  className='transition-all aspect-video rounded-lg dark:bg-black/40 bg-primary-foreground backdrop-blur-sm overflow-hidden'
                >
                  <figure className='relative h-full w-full'>
                    {component.imgSrc && (
                      <Image
                        src={component.imgSrc}
                        alt='hero-sec'
                        width={400}
                        height={400}
                        className={cn(
                          'w-full h-full rounded-xl ',
                          component.imgclass
                        )}
                      />
                    )}
                  </figure>
                  <ProgressiveBlur
                    className='pointer-events-none absolute bottom-0 left-0 h-[25%] w-full'
                    blurIntensity={0.5}
                  />
                  <div
                    className={cn(
                      'sm:py-2 py-1 sm:px-4 px-2 absolute bottom-2 left-2',
                      component.textClass
                    )}
                  >
                    <h1 className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize'>
                      {component.name}{' '}
                      <span className='font-semibold'>
                        ({component.blocks.length})
                      </span>
                    </h1>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
