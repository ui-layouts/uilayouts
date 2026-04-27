import { ShimmerLoader } from '@/components/ui/shimmer-loader';

export default function ShimmerLoaderDemo() {
  return (
    <div className='p-10 flex flex-col gap-5 max-w-3xl mx-auto bg-black'>
      <ShimmerLoader
        labels={['Analysing.', 'Analysing..', 'Analysing...']}
        icons={['✦', '◆', '✶', '❋', '✸']}
        duration={3000}
        tokenTarget={0.16}
        showPercent={true}
        fontSize={14}
        paddingY={4}
        cellPadding={2}
        textClassName='text-purple-200/90'
        onComplete={() => console.log('Animation complete')}
      />
      <ShimmerLoader
        labels={['Booting…', 'Loading…', 'Preparing…', 'Initializing…']}
        icons={['✦', '◆', '✶', '❋', '✸']}
        duration={3000}
        tokenTarget={0.8}
        showPercent={true}
        fontSize={14}
        paddingY={4}
        cellPadding={2}
        textClassName='text-purple-200/90'
        onComplete={() => console.log('Animation complete')}
      />
      <ShimmerLoader
        labels={['Syncing…', 'Configuring…', 'Setting up…', 'Onboarding…']}
        icons={['◈', '◉', '⬡', '⬢', '◍']}
        duration={3000}
        tokenTarget={0.92}
        showPercent={true}
        fontSize={14}
        paddingY={4}
        cellPadding={2}
        textClassName='text-purple-200/90'
        onComplete={() => console.log('Animation complete')}
      />
    </div>
  );
}
