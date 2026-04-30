'use client';
import { ShimmerLoader } from '@/components/ui/shimmer-loader';
import { useState } from 'react';

export default function ShimmerLoaderDemo() {
  const [key, setKey] = useState(0);

  const handleComplete = () => {
    console.log('Animation complete');
    setKey((prev) => prev + 1);
  };

  return (
    <div className='p-10 flex flex-col gap-5 max-w-3xl mx-auto bg-black'>
      <ShimmerLoader
        key={key}
        labels={['Analysing.', 'Analysing..', 'Analysing...']}
        icons={['✦', '◆', '✶', '❋', '✸']}
        duration={3000}
        tokenTarget={0.16}
        showPercent={true}
        fontSize={14}
        paddingY={4}
        cellPadding={2}
        textClassName='text-purple-200/90'
        onComplete={handleComplete}
      />
      <ShimmerLoader
        key={key + 1}
        labels={['Booting…', 'Loading…', 'Preparing…', 'Initializing…']}
        icons={['✦', '◆', '✶', '❋', '✸']}
        duration={3000}
        tokenTarget={0.8}
        showPercent={true}
        fontSize={14}
        paddingY={4}
        cellPadding={2}
        textClassName='text-purple-200/90'
        onComplete={handleComplete}
      />
      <ShimmerLoader
        key={key + 2}
        labels={['Syncing…', 'Configuring…', 'Setting up…', 'Onboarding…']}
        icons={['◈', '◉', '⬡', '⬢', '◍']}
        duration={3000}
        tokenTarget={0.92}
        showPercent={true}
        fontSize={14}
        paddingY={4}
        cellPadding={2}
        textClassName='text-purple-200/90'
        onComplete={handleComplete}
      />
    </div>
  );
}
