import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blocksDesign } from '@/blocks-docs'; // Update path
import { Suspense } from 'react';
import PreviewHeightReporter from '../../../../components/website/blocks-components/preview-height-reporter';

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

export default async function BlocksPage(props: {
  params: Promise<{ section?: string; block: string }>;
}) {
  const { section, block } = await props.params;
  const sectionData = blocksDesign.find((s) => s.id === section);
  const blockData = sectionData?.blocks?.find((b) => b.id === block);

  if (!blockData) return notFound();

  return (
    <>
      <PreviewHeightReporter>
        <Suspense fallback={<div>Loading...</div>}>
          <blockData.componentSrc />
        </Suspense>
      </PreviewHeightReporter>
    </>
  );
}
