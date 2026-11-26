'use client';

import Link from 'next/link';
import { ScrollArea } from '@/components/website/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import toolbarStyles from '@/components/website/showcase-toolbar.module.css';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import ShowcaseToolbar, { type ShowcaseToolbarProps } from '@/components/website/showcase-toolbar';
import { ClientPreCode } from '@/components/website/code-components/client-pre-code';
import styles from './showcase.module.css';
import documentation from './example-documentation.module.css';

type Example = Omit<ShowcaseToolbarProps, 'slug' | 'title' | 'navigation' | 'pager' | 'splitOpen' | 'onToggleSplit'> & { label: string; usageFile: string; usageCode: string; usageHtml: string; description?: string };

export default function ExampleShowcase({ slug, title, examples, neighbors, children }: {
  neighbors: { previousComponent: { href: string; name: string } | null; nextComponent: { href: string; name: string } | null };
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

  const layout = useRef<HTMLDivElement>(null);
  const [docsWidth, setDocsWidth] = useState(50);
  const [splitOpen, setSplitOpen] = useState(false);

  useEffect(() => {
    const element = layout.current;
    if (!element) return;
    const scroller = element.closest<HTMLElement>('[data-showcase-scroll]');
    const target = scroller ?? window;
    const desktop = window.matchMedia('(min-width: 900px)');
    const sync = () => {
      const offset = (scroller?.getBoundingClientRect().top ?? 0) - element.getBoundingClientRect().top;
      if (desktop.matches) {
        if (location.hash === '#component-details') setSplitOpen(true);
      } else {
        setSplitOpen(offset >= element.querySelector('section')!.offsetHeight - 72);
      }
    };
    sync();
    target.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('hashchange', sync);
    desktop.addEventListener('change', sync);
    return () => {
      target.removeEventListener('scroll', sync);
      window.removeEventListener('hashchange', sync);
      desktop.removeEventListener('change', sync);
    };
  }, [current?.name]);

  function toggleSplit() {
    const target = layout.current?.closest<HTMLElement>('[data-showcase-scroll]') ?? window;
    if (splitOpen) {
      if (location.hash === '#component-details') history.replaceState(null, '', location.pathname + location.search);
      target.scrollTo({ top: 0, behavior: 'instant' });
    } else if (!window.matchMedia('(min-width: 900px)').matches) {
      document.getElementById('component-details')?.scrollIntoView();
    }
    setSplitOpen(!splitOpen);
  }

  function resize(width: number) {
    if (width <= 15) {
      setDocsWidth(50);
      toggleSplit();
      return;
    }
    setDocsWidth(Math.min(70, Math.max(15, Math.round(width))));
  }

  function select(next: number) {
    if (!examples[next]) return;
    const url = new URL(location.href);
    url.hash = '';
    if (next) url.searchParams.set('example', examples[next].name);
    else url.searchParams.delete('example');
    history.pushState(null, '', url);
    setSplitOpen(false);
    setIndex(next);
    const scroller = layout.current?.closest<HTMLElement>('[data-showcase-scroll]');
    (scroller ?? window).scrollTo({ top: 0, behavior: 'instant' });
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
  const name = index === 0 ? title : title + ' / ' + current.label;
  const usage = <section className={documentation.source} aria-label="Example source">
    <ClientPreCode raw={current.usageCode} html={current.usageHtml} />
  </section>;
  return <>
    <a className={styles.skip} href="#component-details" onClick={() => setSplitOpen(true)}>Skip to documentation</a>
    <div ref={layout} onScroll={event => {
      const view = event.currentTarget;
      if (!splitOpen && view.scrollTop > 0 && window.matchMedia('(min-width: 900px)').matches) {
        view.scrollTop = 0;
        setSplitOpen(true);
      }
    }} className={styles.split} data-open={splitOpen} style={{ '--docs-width': docsWidth + '%' } as CSSProperties}>
      <section className={styles.stage} data-demo={current.name} aria-label={name + ' preview'}>
        <iframe key={current.name} data-showcase-preview scrolling="no" className={styles.frame} src={current.expandUrl} title={name + ' interactive preview'} />
        <div role="separator" aria-label="Documentation width" aria-orientation="vertical"
          aria-controls="component-details" aria-valuemin={15} aria-valuemax={70} aria-valuenow={docsWidth}
          aria-valuetext={docsWidth + '% documentation width'} hidden={!splitOpen} tabIndex={0}
          className={styles.divider}
          onPointerDown={event => {
            if (event.button !== 0) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.focus({ preventScroll: true });
          }}
          onPointerMove={event => {
            if (!event.currentTarget.hasPointerCapture(event.pointerId) || !layout.current) return;
            const bounds = layout.current.getBoundingClientRect();
            const width = (event.clientX - bounds.left) * 100 / bounds.width;
            if (width <= 15) event.currentTarget.releasePointerCapture(event.pointerId);
            resize(width);
          }}
          onKeyDown={event => {
            const values: Record<string, number> = {
              ArrowLeft: docsWidth - 5, ArrowRight: docsWidth + 5, Home: 15, End: 70,
            };
            if (!(event.key in values)) return;
            event.preventDefault();
            resize(values[event.key]);
          }}
        />
      </section>
      <div className={styles.notes} data-showcase-notes>
        <ScrollArea type="hover" className={styles.notesScroll}>
          {index === 0 ? children : <article id="component-details" tabIndex={-1} className={styles.details} aria-labelledby="component-title">
            <h1 id="component-title">{name}</h1>
            <p className={styles.description}>{current.description}</p>
            {usage}
          </article>}
        </ScrollArea>
      </div>
      <ShowcaseToolbar splitOpen={splitOpen} onToggleSplit={toggleSplit} slug={slug} title={name} {...current} navigation={{ index, examples, select }} pager={pager} />
    </div>
  </>;
}
