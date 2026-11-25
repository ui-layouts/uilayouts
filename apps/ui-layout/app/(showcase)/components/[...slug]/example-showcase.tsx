'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import toolbarStyles from '@/components/website/showcase-toolbar.module.css';
import { useEffect, useState, type ReactNode } from 'react';
import ShowcaseToolbar, { type ShowcaseToolbarProps } from '@/components/website/showcase-toolbar';
import { ClientPreCode } from '@/components/website/code-components/client-pre-code';
import styles from './showcase.module.css';
import documentation from './example-documentation.module.css';

type Example = Omit<ShowcaseToolbarProps, 'slug' | 'title' | 'navigation' | 'pager'> & { label: string; usageFile: string; usageCode: string; usageHtml: string; description?: string };

export default function ExampleShowcase({ slug, title, examples, neighbors, children }: {
  neighbors: { previousComponent: { href: string; name: string } | null; nextComponent: { href: string; name: string } | null };
  slug: string; title: string; examples: Example[]; children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const sync = () => {
      const pager = (
    <nav className={toolbarStyles.pager} aria-label="Browse examples and components">
      {[-1, 1].map(step => {
        const previous = step < 0;
        const direction = previous ? 'Previous' : 'Next';
        const Icon = previous ? ChevronLeft : ChevronRight;
        const icon = <Icon size={18} aria-hidden />;
        const nextIndex = index + step;
        if (examples[nextIndex]) {
          const label = direction + ' example: ' + examples[nextIndex].label;
          return <button key={step} type="button" aria-label={label} title={label} onClick={() => select(nextIndex)}>{icon}</button>;
        }
        const neighbor = previous ? neighbors.previousComponent : neighbors.nextComponent;
        const label = direction + ' component' + (neighbor ? ': ' + neighbor.name : '');
        return neighbor
          ? <Link key={step} href={neighbor.href} aria-label={label} title={label}>{icon}</Link>
          : <button key={step} type="button" disabled aria-label={label}>{icon}</button>;
      })}
    </nav>
  );
  if (!current) return <>{children}<div className={toolbarStyles.toolbar}>{pager}</div></>;
  const name = new URLSearchParams(location.search).get('example');
      setIndex(Math.max(0, examples.findIndex(example => example.name === name)));
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [examples]);
  const current = examples[index];

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
  const pager = (
    <nav className={toolbarStyles.pager} aria-label="Browse examples and components">
      {[-1, 1].map(step => {
        const previous = step < 0;
        const direction = previous ? 'Previous' : 'Next';
        const Icon = previous ? ChevronLeft : ChevronRight;
        const icon = <Icon size={18} aria-hidden />;
        const nextIndex = index + step;
        if (examples[nextIndex]) {
          const label = direction + ' example: ' + examples[nextIndex].label;
          return <button key={step} type="button" aria-label={label} title={label} onClick={() => select(nextIndex)}>{icon}</button>;
        }
        const neighbor = previous ? neighbors.previousComponent : neighbors.nextComponent;
        const label = direction + ' component' + (neighbor ? ': ' + neighbor.name : '');
        return neighbor
          ? <Link key={step} href={neighbor.href} aria-label={label} title={label}>{icon}</Link>
          : <button key={step} type="button" disabled aria-label={label}>{icon}</button>;
      })}
    </nav>
  );
  if (!current) return <>{children}<div className={toolbarStyles.toolbar}>{pager}</div></>;
  const name = examples.length > 1 ? title + ' / ' + current.label : title;
  const usage = <section className={documentation.source} aria-label="Example source">
    <h2 className="mb-3 text-xl font-semibold">Example source</h2>
    <div className={documentation.filename}>{current.usageFile}</div>
    <ClientPreCode raw={current.usageCode} html={current.usageHtml} />
  </section>;
  return <>
    <a className={styles.skip} href="#component-details">Skip to documentation</a>
    <section className={styles.stage} data-demo={current.name} aria-label={name + ' preview'}>
      <iframe key={current.name} data-showcase-preview scrolling="no" className={styles.frame} src={current.expandUrl} title={name + ' interactive preview'} />
      <div aria-hidden="true" className={styles.edgeBlur}>
        <i /><i /><i /><i />
      </div>
    </section>
    <ShowcaseToolbar slug={slug} title={name} {...current} navigation={{ index, examples, select }} pager={pager} />
    {index === 0 ? children : <article id="component-details" tabIndex={-1} className={styles.details} aria-labelledby="component-title">
      <h1 id="component-title">{name}</h1>
      <p className={styles.description}>{current.description}</p>
      {usage}
    </article>}
  </>;
}
