import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { absoluteUrl, cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import TableOfContents from '@/components/website/tableof-compoents';
import { ComponentPagination } from '@/components/website/code-components/pagination';
import Footer from '@/components/website/footer';
import { MainComponents, SpecialComponents } from '@/configs/docs';

import { Metadata } from 'next';
import { blocksDesign } from '@/configs/blocks-docs'; // Update path
import { Suspense } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ section: string; block: string }> }): Promise<Metadata> {
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
  params: Promise<{ section?: string, block: string }>;
}) {
  const {section, block} = await props.params;
  const sectionData = blocksDesign.find((s) => s.id === section);
  const blockData = sectionData?.blocks?.find((b) => b.id === block);

  if (!blockData) return notFound();

  return (
    <>
   <div className="container py-10 mx-auto">
      <h1 className="text-3xl font-bold">{blockData.name}</h1>
      <p className="text-muted-foreground mb-4">{blockData.des}</p>


      {/* Dynamically render the block component if needed */}
      <Suspense fallback={<div>Loading...</div>}>
        <blockData.componentSrc />
      </Suspense>
    </div>
    </>
  );
}
