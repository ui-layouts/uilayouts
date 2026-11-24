'use client';

import { useEffect, useState, type ReactNode } from 'react';
import ShowcaseToolbar, { type ShowcaseToolbarProps } from '@/components/website/showcase-toolbar';
import styles from './showcase.module.css';

type Example = Omit<ShowcaseToolbarProps, 'slug' | 'title' | 'navigation'> & { label: string };

export default function ExampleShowcase({ slug, title, examples, children }: {
  slug: string; title: string; examples: Example[]; children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const sync = () => {
      const name = new URLSearchParams(location.search).get('example');
      setIndex(Math.max(0, examples.findIndex(example => example.name === name)));
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [examples]);
  const current = examples[index];
  if (!current) return children;
  function select(next: number) {
    if (!examples[next]) return;
    const url = new URL(location.href);
    url.hash = '';
    if (next) url.searchParams.set('example', examples[next].name);
    else url.searchParams.delete('example');
    history.pushState(null, '', url);
    setIndex(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  const name = examples.length > 1 ? title + ' / ' + current.label : title;
  return <>
    <a className={styles.skip} href="#component-title">Skip to documentation</a>
    <section className={styles.stage} data-demo={current.name} aria-label={name + ' preview'}>
      <iframe key={current.name} data-showcase-preview scrolling="no" className={styles.frame} src={current.expandUrl} title={name + ' interactive preview'} />
      <nav className={styles.cue} aria-label="Component details"><strong>{name}</strong><a href="#component-title">Scroll for details <span aria-hidden>↓</span></a></nav>
    </section>
    <ShowcaseToolbar slug={slug} title={name} {...current} navigation={{ index, examples, select }} />
    {index === 0 ? children : <article className={styles.details} aria-labelledby="component-title">
      <p>{title}</p><h1 id="component-title" tabIndex={-1}>{current.label}</h1>
      <h2 className="mt-8 mb-3 text-xl font-semibold">Usage</h2>
      <pre className="overflow-x-auto rounded-md bg-muted p-5" tabIndex={0}><code>{current.sourceCode}</code></pre>
    </article>}
  </>;
}
