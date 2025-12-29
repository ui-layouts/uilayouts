'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import preview from '@/assets/preview/Preview';
import { cn } from '@/lib/utils';
import Footer from '@/components/website/footer';
import HomeHeader from '@/components/website/home/home-header';
import { blocksDesign } from '@/configs/blocks-docs';
export default function Home() {
  return (
    <>
      <HomeHeader className='max-w-screen-xl dark:bg-neutral-900 dark:border-neutral-800 bg-neutral-200 border-neutral-300' />
      <div className='pt-36 pb-5 max-w-screen-2xl mx-auto min-h-screen'>
        <article className='w-fit mx-auto max-w-4xl text-center space-y-4'>
          <h1 className='text-6xl leading-[100%]'>
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
          <p className='text-xl max-w-2xl mx-auto'>
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
                  className='border p-2    transition-all rounded-lg dark:bg-black/40 bg-primary-foreground backdrop-blur-sm'
                >
                  <>
                    {component.imgSrc && (
                      <AspectRatio.Root ratio={16 / 9}>
                        <Image
                          src={component.imgSrc}
                          alt='hero-sec'
                          width={400}
                          height={400}
                          className={cn(
                            'w-full h-full rounded-md',
                            component.imgclass
                          )}
                        />
                      </AspectRatio.Root>
                    )}
                  </>
                  <div className='sm:py-2 py-1 sm:px-4 px-2'>
                    <h1 className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize'>
                      {component.name}
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
