'use client';

import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Footer from '@/components/website/footer';
import { blocksDesign } from '@/blocks-docs';

export default function BlocksHome() {
  return (
    <>
      <div className='pt-36 pb-5 max-w-screen-2xl mx-auto min-h-screen border-x'>
        <article className='w-fit mx-auto max-w-4xl text-center space-y-4 pb-10'>
          <h1 className='text-6xl leading-[100%]'>
            Build Faster with{' '}
            <span className='font-semibold bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>
              Premium
            </span>{' '}
            Quality{' '}
            <span className='font-semibold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
              Blocks
            </span>{' '}
            For Free.
          </h1>
          <p className='text-xl max-w-2xl mx-auto'>
            Beautifully designed Sections that you can copy and paste into your
            apps. Accessible. Customizable. Open Source.
          </p>
        </article>
        <div
          className={cn(
            'border-y dark:border-neutral-800 dark:bg-neutral-900 bg-white h-10',
            'dark:bg-[repeating-linear-gradient(135deg,#1f1f1f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
          )}
        ></div>
        <div className='grid md:grid-cols-3 grid-cols-2'>
          {blocksDesign.map((component, index) => {
            // console.log(
            //   'checking blocks data',
            //   component?.blocks?.length,
            //   component.name
            // );

            return (
              <>
                <Link
                  href={component?.url}
                  className='relative transition-all p-4 hover:bg-neutral-100
                  '
                >
                  <>
                    {component?.imgSrc && (
                      <AspectRatio.Root ratio={16 / 9}>
                        <Image
                          src={component.imgSrc}
                          alt='hero-sec'
                          width={400}
                          height={400}
                          className={cn(
                            'w-full object-cover h-full rounded-md absolute top-0 left-0',
                            component.imgclass
                          )}
                        />
                      </AspectRatio.Root>
                    )}
                  </>
                  <div className='sm:py-2 py-1'>
                    <h1 className='2xl:text-3xl xl:text-2xl md:text-xl text-lg font-medium leading-[140%] capitalize'>
                      {component.name}*
                    </h1>
                    <h1 className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize opacity-70'>
                      {component?.blocks?.length} Blocks
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
