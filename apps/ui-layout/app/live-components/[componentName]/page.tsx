import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { AllComponents } from '@/configs/docs';

export async function generateStaticParams() {
  const paths = AllComponents.map((component) => ({
    componentName: component.componentName,
  }));
  return paths;
}

export default async function SectionPage(props: {
  params: Promise<{ componentName: string }>;
}) {
  const params = await props.params;
  const { componentName } = params;
  console.log('component', componentName);

  // Find the component data based on componentName
  const component =
    AllComponents.find((comp) => comp.componentName === componentName) || null;
  // console.log(component);

  // console.log(component, !component?.iframeSrc);

  if (!component) {
    notFound();
  }
  const isFramerScrolling = componentName === 'framerhorizontalscroll';

  const ComponentPreview = component?.filesrc
    ? dynamic(() => import(`../../../registry/${component.filesrc}`), {
        loading: () => <div>Loading preview...</div>,
      })
    : null;

  return (
    <section
      className={`${
        isFramerScrolling ? '' : 'flex justify-center items-center h-full'
      } min-h-screen rounded-md dark:bg-neutral-900 bg-neutral-200`}
    >
      <div className='px-4 w-full'>
        {ComponentPreview ? (
          <Suspense fallback={<div>Loading preview...</div>}>
            <ComponentPreview />
          </Suspense>
        ) : (
          <div>Component not found</div>
        )}
      </div>
    </section>
  );
}
