import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { StructuredData } from '@/components/seo/structured-data';
import { BlurVignette, BlurVignetteArticle } from '@/components/ui/blur-vignette';
import HomeFooter from '@/components/website/home/home-footer';
import HomeHeader from '@/components/website/home/home-header';
import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/utils';
import styles from './home.module.css';

export const metadata = pageMetadata({ title: siteConfig.name, description: siteConfig.description, path: '/' });

const collections = [
  { name: 'Components', href: '/components', detail: 'Inputs, navigation, cards, and more' },
  { name: 'Image effects', href: '/components/image-effect-motion-hover', detail: 'Motion, shaders, and image reveals' },
  { name: 'Blocks', href: '/blocks', detail: 'Ready-to-use page sections' },
];

export default function Home() {
  return (
    <>
      <StructuredData type="homepage" />
      <HomeHeader />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="home-title">
          <div>
            <h1 id="home-title">A library of<br />UI in motion.</h1>
            <p>Explore React components and Tailwind layouts. Open a live example, copy the code, and make it yours.</p>
            <Link className={styles.cta} href="/components">Browse components <ArrowRight size={17} /></Link>
          </div>
          <Link href="/components/blur-vignette" className={styles.feature}>
            <BlurVignette classname="aspect-[3/2]" radius="16px" inset="10px" transitionLength="72px" blur="10px">
              <img src="/image-effects/forest.webp" alt="" className={styles.photo} />
              <BlurVignetteArticle />
            </BlurVignette>
            <span className={styles.caption}>Blur Vignette <ArrowUpRight size={17} /></span>
          </Link>
        </section>
        <section aria-labelledby="collections-title" className={styles.collections}>
          <h2 id="collections-title">Explore the library</h2>
          <div>{collections.map(({ name, href, detail }) => (
            <Link href={href} key={name} className={styles.row}>
              <strong>{name}</strong><span>{detail}</span><ArrowUpRight size={18} />
            </Link>
          ))}</div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
