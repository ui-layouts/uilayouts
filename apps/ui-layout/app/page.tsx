import { HeroSectionImg, PricingSectionImg } from '@repo/blocks/assets/index';
import { ArrowRight } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import buttonsPreview from '@/assets/preview/buttons.svg';
import tabsPreview from '@/assets/preview/tabs.svg';
import { StructuredData } from '@/components/seo/structured-data';
import HomeFooter from '@/components/website/home/home-footer';
import HomeHeader from '@/components/website/home/home-header';
import { buttonVariants } from '@/components/website/ui/button';
import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/utils';
import styles from './home.module.css';

export const metadata = pageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
});

const galleries = [
  {
    title: 'Blocks',
    href: '/blocks',
    examples: [
      { name: 'Hero sections', href: '/blocks/hero-section', image: HeroSectionImg },
      { name: 'Pricing sections', href: '/blocks/pricing-section', image: PricingSectionImg },
    ],
  },
  {
    title: 'Components',
    href: '/components',
    examples: [
      { name: 'Buttons', href: '/components/buttons', image: buttonsPreview },
      { name: 'Tabs', href: '/components/tabs', image: tabsPreview },
    ],
  },
] satisfies {
  title: string;
  href: string;
  examples: { name: string; href: string; image: StaticImageData }[];
}[];

export default function Home() {
  return (
    <>
      <StructuredData type='homepage' />
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-3'
      >
        Skip to content
      </a>
      <HomeHeader compact />
      <div className={styles.container}>
        <main id='main-content' tabIndex={-1}>
          <section className={styles.hero} aria-labelledby='home-title'>
            <h1 id='home-title'>React components and blocks</h1>
            <p>Copy and customize ready-to-use UI built with Tailwind CSS.</p>
            <Link className={buttonVariants({ size: 'sm', className: 'gap-2' })} href='/components'>
              Browse components <ArrowRight size={16} aria-hidden />
            </Link>
          </section>
          {galleries.map(({ title, href, examples }) => (
            <section
              key={href}
              className={styles.gallery}
              aria-labelledby={`${href.slice(1)}-title`}
            >
              <div className={styles.galleryHeading}>
                <h2 id={`${href.slice(1)}-title`}>{title}</h2>
                <Link
                  href={href}
                  aria-label={`View all ${title.toLowerCase()}`}
                  className={styles.viewAll}
                >
                  View all <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
              <ul className={styles.grid}>
                {examples.map((example) => (
                  <li key={example.href}>
                    <Link href={example.href} className={styles.card}>
                      <div className={styles.preview}>
                        <Image
                          src={example.image}
                          alt=''
                          fill
                          sizes='(max-width: 784px) calc((100vw - 44px) / 2), 367px'
                        />
                      </div>
                      <span>{example.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
        <HomeFooter className='mt-8 w-full gap-x-5 gap-y-3 py-5' />
      </div>
    </>
  );
}
