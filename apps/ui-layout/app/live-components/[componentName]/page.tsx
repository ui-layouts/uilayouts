import ShowcaseFit from '@/components/website/showcase-fit';
import '../live-preview.css';
import { AllComponents } from '@/configs/docs';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const safe = AllComponents.filter((c) => c && typeof c.componentName === 'string');

  return safe.map((c) => ({
    componentName: c.componentName,
  }));
}

export default async function SectionPage(props: { params: Promise<{ componentName: string }> }) {
  const params = await props.params;
  const componentName = params.componentName;

  if (!componentName) notFound();

  const component = AllComponents.find(entry => entry.componentName === componentName)
    ?? AllComponents.find(entry => entry.slug === componentName);

  if (!component || !component.componentSrc) notFound();

  const isFramerScrolling = componentName === 'framerhorizontalscroll';
  const ComponentPreview = component.componentSrc;

  return (
    <section className="live-demo-stage">
      <ShowcaseFit documentScroll={isFramerScrolling}>
        <Suspense fallback={null}>
          <ComponentPreview />
        </Suspense>
      </ShowcaseFit>
    </section>
  );
}
