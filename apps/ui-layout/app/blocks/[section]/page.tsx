import { notFound } from 'next/navigation';
import { Code, Component, Expand, Eye } from 'lucide-react';
import Footer from '@/components/website/footer';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/website/ui/tooltip';
import { Metadata } from 'next';
import { blocksDesign } from '@/blocks-docs';
import { TreeCodeViewer } from '@/components/website/code-components/tree-view-code';
import { transformCodeFiles } from '@/lib/transform-code-files';
import { ClientPreCode } from '@/components/website/code-components/client-pre-code';

import DynamicPreviewIframe from '@/components/website/blocks-components/dynamic-preview-Iframe';
import { cn } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const sectionData = blocksDesign.find((b) => b.id === section);

  if (!sectionData) return {};

  return {
    title: `${sectionData.name} | UI Layouts`,
    description: sectionData.des,
    keywords: sectionData.tags || [],
  };
}

export default async function SectionPage(props: {
  params: Promise<{ section?: string }>;
}) {
  const { section } = await props.params;
  const sectionData = blocksDesign.find((s) => s.id === section);

  if (!sectionData) return notFound();

  const blocksWithCode = await Promise.all(
    sectionData.blocks.map(async (block) => ({
      ...block,
      transformedCodeFiles: await transformCodeFiles(block.filePath, block.id),
    }))
  );

  return (
    <section className='dark:prose-invert max-w-full pt-24'>
      {/* HEADER (unchanged) */}
      <article
        className='2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl relative overflow-hidden
       mx-auto border dark:border-neutral-900 bg-linear-to-r from-zinc-100 to-zinc-50 dark:from-zinc-900/40 dark:to-zinc-900/60 p-6 2xl:w-[90%]'
      >
        <div className='absolute bottom-0 left-0 right-0 top-0 dark:bg-[radial-gradient(#ededed33_1px,#171717_1px)] bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_85%_55%_at_100%_0%,#000_70%,transparent_110%)]'></div>
        <div className='space-y-2 relative z-4'>
          <div className='flex items-center text-primary/70'>
            <a href='/blocks' className='hover:underline flex gap-1'>
              Blocks
            </a>
            /{sectionData.id}
          </div>
          <h1 className='not-prose flex items-center gap-2 text-2xl lg:text-3xl font-medium'>
            <div className='h-8 w-8 lg:h-10 lg:w-10 bg-primary text-primary-foreground grid place-content-center'>
              <Component />
            </div>
            {sectionData.name}
          </h1>
          <p className='text-xs sm:text-sm'>{sectionData.des}</p>
        </div>
        <a
          href='https://pro.ui-layouts.com/pricing'
          target='_blank'
          className='absolute -top-12 right-0'
        >
          <img src='/50off.png' className='w-72 h-full' alt='' />
        </a>
      </article>

      {/* <div className='container px-24 mx-auto h-10'>
        <div className='w-full h-10 bg-red-500'></div>
      </div> */}

      {/* BLOCKS */}
      <div className='space-y-5 py-10 prose max-w-full'>
        {blocksWithCode.map((block, index) => {
          const isMultiple = block.transformedCodeFiles.length > 1;
          console.log(
            'block.transformedCodeFiles',
            block.transformedCodeFiles.length
          );
          return (
            <div key={block.id} className='relative'>
              <div
                className={cn(
                  'border-y dark:border-neutral-800 mb-3 dark:bg-neutral-900 bg-white',
                  index % 2
                    ? ' dark:bg-[repeating-linear-gradient(135deg,#1f1f1f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
                    : ' dark:bg-[repeating-linear-gradient(45deg,#1f1f1f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(45deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
                )}
              >
                <div className='container mx-auto items-center gap-2 p-2.5 px-0'>
                  <h2 className='text-2xl font-medium dark:text-neutral-200 flex items-center gap-1'>
                    <div className='h-8 w-8 lg:h-8 lg:w-8 text-primary grid place-content-center'>
                      <Component className='w-6 h-6' />
                    </div>{' '}
                    {block.name}
                  </h2>
                </div>
              </div>
              <div className='container mx-auto relative'>
                <Tabs defaultValue='preview'>
                  <TabsList className='h-10 dark:bg-neutral-800 bg-white rounded-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.05)]'>
                    <TabsTrigger
                      value='preview'
                      className='flex gap-1 h-8 px-2 text-md items-center cursor-pointer rounded-none'
                    >
                      <Eye className='w-4 h-4' />
                      Preview
                    </TabsTrigger>
                    <TabsTrigger
                      value='code'
                      className='flex gap-1 px-2 h-8 text-md items-center cursor-pointer rounded-none'
                    >
                      <Code className='w-4 h-4' />
                      Code
                    </TabsTrigger>
                  </TabsList>
                  {/* PREVIEW */}
                  <TabsContent value='preview'>
                    <DynamicPreviewIframe
                      src={`/preview/${section}/${block.id}`}
                      blockId={block.id}
                      section={section || ''}
                    />
                  </TabsContent>
                  {/* CODE */}
                  <TabsContent value='code'>
                    {isMultiple ? (
                      // ✅ TREE ONLY FOR MULTIPLE FILES
                      <TreeCodeViewer files={block.transformedCodeFiles} />
                    ) : (
                      // ✅ SINGLE FILE → DIRECT PRECODE
                      <ClientPreCode
                        html={block.transformedCodeFiles[0].html}
                        raw={block.transformedCodeFiles[0].raw}
                      />
                    )}
                  </TabsContent>
                </Tabs>
                <div className='flex justify-between items-center absolute gap-3 top-0 right-0 px-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`/preview/${section}/${block.id}`}
                        target='_blank'
                        className='h-10 grid place-items-center p-2 text-primary dark:bg-neutral-800 bg-neutral-100 border'
                      >
                        <Expand className='w-6 h-6' />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Expand</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href='#'
                        className='px-1.5 h-10 grid place-items-center dark:bg-neutral-800 bg-neutral-100 border'
                      >
                        <svg
                          viewBox='0 0 40 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-7 h-7 text-primary'
                        >
                          <path
                            d='M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open in v0</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </section>
  );
}
