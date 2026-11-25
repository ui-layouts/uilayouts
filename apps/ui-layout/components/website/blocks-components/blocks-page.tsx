import Image from 'next/image';
import Link from 'next/link';
import type { getMinimalBlocksBySection } from '@/blocks-docs';
import HomeFooter from '../home/home-footer';

export default function BlocksHomeClient({ blocksData }: { blocksData: ReturnType<typeof getMinimalBlocksBySection> }) {
  return (
    <div className="mx-auto w-[94%] max-w-[1100px]">
      <header className="py-12 sm:py-16">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Blocks</h1>
        <p className="mt-3 text-muted-foreground">Browse ready-to-use sections for your next page.</p>
      </header>
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {blocksData.map(section => (
          <Link key={section.url} href={section.url} className="group">
            {section.imgSrc && <div className={`overflow-hidden rounded-xl ${section.imgclass || ''}`}>
              <Image src={section.imgSrc} alt="" width={480} height={270} className="aspect-video w-full object-contain" />
            </div>}
            <div className="mt-2 flex items-center justify-between gap-3">
              <h2 className="font-medium capitalize group-hover:underline">{section.name}</h2>
              <span className="text-sm text-muted-foreground">{section.blocks.length} blocks</span>
            </div>
          </Link>
        ))}
      </div>
      <HomeFooter isHideCollaboration />
    </div>
  );
}
