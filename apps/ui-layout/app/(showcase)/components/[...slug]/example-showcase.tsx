'use client';

import { useEffect, useState, type ReactNode } from 'react';
import ShowcaseToolbar, { type ShowcaseToolbarProps } from '@/components/website/showcase-toolbar';
import { ClientPreCode } from '@/components/website/code-components/client-pre-code';
import styles from './showcase.module.css';
import documentation from './example-documentation.module.css';

type Example = Omit<ShowcaseToolbarProps, 'slug' | 'title' | 'navigation'> & { label: string; usageFile: string; usageCode: string; usageHtml: string; description?: string };

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
  const usage = <section className={documentation.source} aria-label="Example source">
    <h2 className="mb-3 text-xl font-semibold">Example source</h2>
    <div className={documentation.filename}>{current.usageFile}</div>
    <ClientPreCode raw={current.usageCode} html={current.usageHtml} />
  </section>;
  return <>
    <a className={styles.skip} href="#component-title">Skip to documentation</a>
    <section className={styles.stage} data-demo={current.name} aria-label={name + ' preview'}>
      <iframe key={current.name} data-showcase-preview scrolling="no" className={styles.frame} src={current.expandUrl} title={name + ' interactive preview'} />
      <nav className={styles.cue} aria-label="Component details"><strong>{name}</strong><a href="#component-title">Scroll for details <span aria-hidden>↓</span></a></nav>
    </section>
    <ShowcaseToolbar slug={slug} title={name} {...current} navigation={{ index, examples, select }} />
    {index === 0 ? children : <article className={styles.details} aria-labelledby="component-title">
      <p>{title}</p><h1 id="component-title" tabIndex={-1}>{current.label}</h1>
      <p className={styles.description}>{current.description}</p>
      {usage}
    </article>}
  </>;
}
