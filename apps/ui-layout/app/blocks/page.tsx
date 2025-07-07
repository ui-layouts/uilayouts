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
import {Card} from "@repo/ui"
export default function Home() {
  return (
    <>
      <HomeHeader className='max-w-screen-xl' />
      <div className='pt-36 pb-5 max-w-screen-2xl mx-auto'>
        <article className='w-fit mx-auto max-w-3xl text-center space-y-4'>
          <h1 className='text-6xl leading-[100%]'>
            Build Faster with Premium-Quality Blocks For Free
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
