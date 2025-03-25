import React from 'react';
import ComponentSection from '@/components/website/labs/component-section';

async function page() {
  return (
    <>
      <div className='absolute top-0 z-[-2] h-screen w-full dark:bg-[#000000] bg-gray-100 dark:bg-[radial-gradient(#ffffff33_1px,#0c0c0c_1px)] bg-[radial-gradient(#c0c8df_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      <main>
        <ComponentSection />
      </main>
    </>
  );
}

export default page;
