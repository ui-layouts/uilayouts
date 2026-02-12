import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import { AllComponents } from '@/configs/docs';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const safe = AllComponents.filter(
    (c: any) => c && typeof c.componentName === 'string'
  );

  return safe.map((c: any) => ({
    componentName: c.componentName,
  }));
}

export default async function SectionPage(props: {
  params: Promise<{ componentName: string }>;
}) {
  const params = await props.params;
  const componentName = params.componentName;

  if (!componentName) notFound();

  const component =
    AllComponents.find(
      (c: any) =>
        c?.slug === componentName || c?.componentName === componentName
    ) ?? null;

  if (!component || !component.componentSrc) notFound();

  const isFramerScrolling = componentName === 'framerhorizontalscroll';
  const ComponentPreview = component.componentSrc;

  return (
    <section
      className={`${
        isFramerScrolling ? '' : 'flex justify-center items-center h-full'
      } min-h-screen rounded-md bg-codebg`}
    >
      <div className='px-4 w-full'>
        <Suspense
          fallback={
            <div className='bg-neutral-200 dark:bg-neutral-900 w-full min-h-screen animate-pulse' />
          }
        >
          <ComponentPreview />
        </Suspense>
      </div>
    </section>
  );
}
