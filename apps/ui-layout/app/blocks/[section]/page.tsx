import { Code, Component, Expand, Eye, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blocksDesign, getBlocksDesignMeta } from '@/blocks-docs';
import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data';
import { StructuredData } from '@/components/seo/structured-data';

import { BlockTabContent } from '@/components/website/blocks-components/block-tab-content';
import CliCopyBtn from '@/components/website/blocks-components/cli-copy-btn';
import DynamicPreviewIframe from '@/components/website/blocks-components/dynamic-preview-Iframe';
import { TableOfContents } from '@/components/website/blocks-components/table-of-contents';
import CarbonAd from '@/components/website/carbon-ads';
import HomeFooter from '@/components/website/home/home-footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/website/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/website/ui/tooltip';
import { pageMetadata } from '@/lib/seo';
import { absoluteUrl, cn } from '@/lib/utils';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return blocksDesign.map((s) => ({ section: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const meta = getBlocksDesignMeta();
  const sectionData = meta.find((b) => b.id === section);

  if (!sectionData) return {};

  const title = `Free React ${sectionData.name}s | UI Layouts`;
  const description = sectionData.des;

  return pageMetadata({
    title,
    description,
    path: sectionData.url,
    image: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
  });
}

export default async function SectionPage(props: { params: Promise<{ section?: string }> }) {
  const { section } = await props.params;
  const sectionData = blocksDesign.find((s) => s.id === section);

  if (!sectionData) return notFound();

  return (
    <section className='dark:prose-invert max-w-full'>
      <StructuredData
        type='component'
        componentData={{
          name: sectionData.name,
          description: sectionData.des,
          path: sectionData.url,
          itemType: 'block',
          items: sectionData.blocks.map((block) => ({
            name: block.name,
            path: `${sectionData.url}#${block.id}`,
          })),
        }}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: absoluteUrl('/') },
          { name: 'Blocks', url: absoluteUrl('/blocks') },
          {
            name: sectionData.name,
            url: absoluteUrl(sectionData.url),
          },
        ]}
      />
      <TableOfContents />
      <div className="mx-auto w-[94%] max-w-[1280px] py-10">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Link href="/blocks" className="text-sm text-muted-foreground hover:underline">Blocks</Link>
            <h1 className="mt-2 text-4xl font-medium tracking-tight">{sectionData.name}</h1>
            <p className="mt-3 max-w-prose text-muted-foreground">{sectionData.des}</p>
          </div>
          <CarbonAd />
        </header>
      </div>
      {/* BLOCKS */}
      <div className="mx-auto w-[94%] max-w-[1280px]">
        <div className='space-y-5 pb-10 prose max-w-full relative'>
          {sectionData.blocks.map((block, index) => (
            <div key={block.id} id={block.id} className='relative'>
              <div
                className={cn(
                  'border-y dark:border-neutral-800 mb-3 dark:bg-neutral-800 bg-white',
                  index % 2
                    ? 'dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
                    : 'dark:bg-[repeating-linear-gradient(45deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(45deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
                )}
              >
                <div className='2xl:container 2xl:px-20 lg:px-14 sm:px-10 px-5 mx-auto items-center gap-2 p-2.5'>
                  <h2 className='text-2xl font-medium dark:text-neutral-200 flex items-center gap-1'>
                    <div className='h-8 w-8 lg:h-8 lg:w-8 text-primary grid place-content-center'>
                      <Component className='w-6 h-6' />
                    </div>{' '}
                    {block.name}
                  </h2>
                </div>
              </div>
              <div className='2xl:container mx-auto 2xl:px-20 lg:px-14 sm:px-10 px-5 relative'>
                <Tabs defaultValue='preview'>
                  <TabsList className='p-0 h-auto justify-between w-full bg-transparent shadow-none dark:bg-transparent border-none'>
                    <div className='flex p-1 h-10 dark:bg-neutral-700 bg-white rounded-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.05)]'>
                      <TabsTrigger
                        value='preview'
                        className='flex gap-1 h-8 px-2 text-md items-center cursor-pointer rounded-none'
                      >
                        <Eye className='w-4 h-4' />
                        Preview
                      </TabsTrigger>
                      <TabsTrigger
                        value='design'
                        className='flex gap-1 px-2 h-8 text-md items-center cursor-pointer rounded-none'
                      >
                        <FileText className='w-4 h-4' />
                        Design.md
                      </TabsTrigger>
                      <TabsTrigger
                        value='code'
                        className='flex gap-1 px-2 h-8 text-md items-center cursor-pointer rounded-none'
                      >
                        <Code className='w-4 h-4' />
                        Code
                      </TabsTrigger>
                    </div>
                    <div className='flex justify-between items-center gap-2 pr-0'>
                      {/* cli copy button */}
                      <CliCopyBtn id={block.id} />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`/preview/${section}/${block.id}`}
                            target='_blank'
                            className='h-10 md:grid hidden place-items-center p-2 text-primary dark:bg-neutral-700 bg-neutral-100 border'
                            rel='noreferrer noopener'
                          >
                            <Expand className='w-6 h-6' />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Expand</p>
                        </TooltipContent>
                      </Tooltip>
                      {/* <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          target='_blank'
                          href={finalUrl}
                          className='px-1.5 h-10 grid place-items-center dark:bg-neutral-700 bg-neutral-100 border'
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
                    </Tooltip> */}
                    </div>
                  </TabsList>
                  {/* PREVIEW */}
                  <TabsContent value='preview'>
                    <DynamicPreviewIframe
                      src={`/preview/${section}/${block.id}`}
                      blockId={block.id}
                      section={section || ''}
                    />
                  </TabsContent>
                  {/* PORTABLE DESIGN SYSTEM */}
                  <TabsContent value='design'>
                    <BlockTabContent section={sectionData.id} block={block.id} tab='design' />
                  </TabsContent>
                  <TabsContent value='code'>
                    <BlockTabContent section={sectionData.id} block={block.id} tab='code' />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          ))}
        </div>
        <HomeFooter isHideCollaboration />
      </div>
    </section>
  );
}
