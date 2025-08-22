import { notFound } from 'next/navigation';


import { Metadata } from 'next';
import { blocksDesign } from '@/configs/blocks-docs'; // Update path
import { Suspense } from 'react';
import { extractCodeFromPackages } from '@/lib/code';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/website/ui/tabs';
import { PreCoded } from '@/components/website/code-components/pre-coded';
import { ChevronLeft, Code, Component } from 'lucide-react';
import Link from 'next/link';
import ThemeSwitch from '@/components/website/theme-switch';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; block: string }>;
}): Promise<Metadata> {
  const { section, block } = await params;
  const sectionData = blocksDesign.find((s) => s.id === section);
  const blockData = sectionData?.blocks?.find((b) => b.id === block);

  if (!blockData) return {};  

  return {
    title: `${blockData.name} | ${sectionData?.name} | UI Layouts`,
    description: blockData.des,
    keywords: blockData.tags || [],
  };
}

export default async function DocPage(props: {
  params: Promise<{ section?: string; block: string }>;
}) {
  const { section, block } = await props.params;
  const sectionData = blocksDesign.find((s) => s.id === section);
  const blockData = sectionData?.blocks?.find((b) => b.id === block);
  
  if (!blockData) return notFound();

  const codeFiles = extractCodeFromPackages(blockData?.filePath);
  console.log(codeFiles);
  
  const isMultiple = codeFiles.length > 1;
  return (
    <>
      <div className='pt-0 pb-10 relative min-h-screen not-prose' >
        <Tabs defaultValue="component">
          <TabsList className='px-1.5 h-14 w-fit mx-auto flex justify-center dark:bg-neutral-800 bg-neutral-50 '>
            <Link href={`/blocks/${section}`} className='mr-3 h-12 w-12 flex items-center justify-center dark:bg-neutral-900 bg-neutral-200 text-primary rounded-xl border' ><ChevronLeft /></Link>
            <TabsTrigger value="component" className='text-lg flex gap-1.5 items-center'><Component  size={20}/>Component</TabsTrigger>
            <TabsTrigger value="code" className='text-lg flex gap-1.5 items-center'><Code  size={20}/>Code</TabsTrigger>
            <ThemeSwitch className='dark:bg-black bg-white border w-12 rounded-md h-11 flex-shrink-0' />
          </TabsList>
          <TabsContent value="component" className='pt-10'>
            {/* Dynamically render the block component if needed */}
            <Suspense fallback={<div>Loading...</div>}>
              <blockData.componentSrc />
            </Suspense>
          </TabsContent>
          <TabsContent value="code" className=' max-w-screen-xl mx-auto'>
            {/* Dynamically render the block component if needed */}
          {isMultiple ? (
            <Tabs defaultValue={codeFiles[0].id} className='mt-10'>
              <TabsList className="mb-0 flex-wrap h-12 dark:bg-zinc-800 bg-zinc-50">
                {codeFiles.map(({ id, name }) => (
                  <TabsTrigger key={id} value={id} className='lowercase'>{name}</TabsTrigger>
                ))}
              </TabsList>
              {codeFiles.map(({ id, code }) => (
                <TabsContent className='p-0' key={id} value={id}>
                  <PreCoded codeblock={code} classname='p-0' />
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <PreCoded codeblock={codeFiles[0].code} />
          )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
