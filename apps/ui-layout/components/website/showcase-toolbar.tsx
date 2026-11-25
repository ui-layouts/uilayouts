'use client';

import * as Dialog from '@radix-ui/react-dialog';
import {
  Check,
  ChevronsUpDown,
  Copy,
  Expand,
  FolderCode,
  PanelLeft,
} from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import { basePath } from './sidebar';
import { SearchDialog } from './searchbar';
import { useEffect, useRef, useState } from 'react';
import type { DocsNavigationCategory } from '@/types/docs';
import { Bun, NPM, Pnpm, Yarn } from './icons';
import styles from './showcase-toolbar.module.css';

export interface ShowcaseToolbarProps {
  slug: string;
  name: string;
  title: string;
  sourcePath: string;
  installUrl: string;
  sourceCode: string;
  expandUrl: string;
  pager: React.ReactNode;
  navigation: { index: number; examples: { name: string; label: string }[]; select: (index: number) => void };
}

const managers = {
  npm: { Icon: NPM, run: 'npx shadcn@latest add' },
  pnpm: { Icon: Pnpm, run: 'pnpm dlx shadcn@latest add' },
  yarn: { Icon: Yarn, run: 'yarn dlx shadcn@latest add' },
  bun: { Icon: Bun, run: 'bunx shadcn@latest add' },
};
type Manager = keyof typeof managers;

function NavigationDrawer({ slug, navigation }: Pick<ShowcaseToolbarProps, 'slug' | 'navigation'>) {
  const [open, setOpen] = useState(false);
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const viewport = matchMedia('(min-width: 1440px)');
    const sync = () => {
      setWide(viewport.matches);
      setOpen(viewport.matches && sessionStorage.getItem('showcase-sidebar') === 'open');
    };
    sync();
    viewport.addEventListener('change', sync);
    return () => viewport.removeEventListener('change', sync);
  }, []);
  function changeOpen(value: boolean) {
    setOpen(value);
    if (wide) sessionStorage.setItem('showcase-sidebar', value ? 'open' : 'closed');
  }
  const [catalog, setCatalog] = useState<Record<
    string,
    DocsNavigationCategory[]
  > | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  useEffect(() => {
    if (!open || catalog) return;
    let active = true;
    setLoadFailed(false);
    import('@/lib/grouped-docs').then(
      ({ groupedDocsNavigationCategories }) => {
        if (active) setCatalog(groupedDocsNavigationCategories);
      },
      () => {
        if (active) setLoadFailed(true);
      }
    );
    return () => {
      active = false;
    };
  }, [open, catalog]);
  const groups = Object.entries(catalog ?? {}).map(([label, items]) => ({ label, items }));
  return (
    <Dialog.Root
      open={open}
      modal={!wide}
      onOpenChange={changeOpen}
    >
      <Dialog.Trigger asChild>
        <button
          type='button'
          className={styles.launcher}
          aria-label={open ? 'Close component navigation' : 'Open component navigation'}
          title={open ? 'Close navigation' : 'Open navigation'}
        >
          <PanelLeft size={22} strokeWidth={1.55} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {!wide && <Dialog.Overlay className={styles.overlay} />}
        <Dialog.Content className={styles.drawer} aria-describedby={undefined}
          data-docked={wide || undefined}
          onInteractOutside={event => { if (wide) event.preventDefault(); }}>
          <header className={styles.drawerHeader}>
            {!wide && <Dialog.Close asChild>
              <button type="button" className={styles.launcher} aria-label="Close component navigation" aria-expanded={open} title="Close navigation">
                <PanelLeft size={22} strokeWidth={1.55} />
              </button>
            </Dialog.Close>}
            <Dialog.Title><Link href="/components"><img src="/showcase-wordmark.svg" alt="UI Layouts" width={144} /></Link></Dialog.Title>

          </header>
          <nav className={styles.links} aria-label='Component navigation'>
            {basePath.map(link => <Link key={link.href} href={link.href} className={styles.sectionLink}>{link.icon}{link.name}</Link>)}
            {groups.map(({ label, items }) => (
              <section key={label}>
                <h3>{label}</h3>
                {items.map((item) => (
                  <Fragment key={item.href}><Link
                    href={item.href}
                    prefetch={false}
                    aria-current={
                      item.href === '/components/' + slug ? 'page' : undefined
                    }
                    onClick={() => {
                      if (!wide) setOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.href === '/components/' + slug && navigation.examples.length > 1 && <div className={styles.tree}>
                    {navigation.examples.map((example, index) => <button key={example.name} type="button" aria-current={index === navigation.index ? 'page' : undefined} onClick={() => { navigation.select(index); if (!wide) setOpen(false); }}>{example.label}</button>)}
                  </div>}</Fragment>
                ))}
              </section>
            ))}
            {!groups.length && (
              <p role='status'>
                {catalog
                  ? 'No matching components.'
                  : loadFailed
                    ? 'Could not load the component list.'
                    : 'Loading components…'}
              </p>
            )}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ReadingProgress({ slug }: { slug: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>(
      '[data-showcase-scroll]'
    );
    const target = scroller ?? window;
    const measure = () => {
      const height = scroller ? scroller.clientHeight : window.innerHeight;
      const extent =
        (scroller ?? document.documentElement).scrollHeight - height;
      const offset = scroller ? scroller.scrollTop : window.scrollY;
      setProgress(
        extent > 0
          ? Math.max(0, Math.min(100, Math.round((100 * offset) / extent)))
          : 100
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(scroller ?? document.body);
    if (scroller?.firstElementChild)
      observer.observe(scroller.firstElementChild);
    target.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    measure();
    return () => {
      observer.disconnect();
      target.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [slug]);
  return (
    <div
      className={styles.progress}
      role='progressbar'
      aria-label='Reading progress'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      {progress}%
      <svg aria-hidden="true" viewBox="0 0 42 38" preserveAspectRatio="none">
        <path d="M9 37 H33 Q41 37 41 29 V9 Q41 1 33 1 H9 Q1 1 1 9 V29 Q1 37 9 37 Z"
          pathLength="100" strokeDasharray="100" strokeDashoffset={100 - progress} />
      </svg>
    </div>
  );
}

export function ShowcaseToolbar({
  slug,
  name,
  title,
  sourcePath,
  installUrl,
  sourceCode,
  expandUrl,
  navigation,
  pager,
}: ShowcaseToolbarProps) {
  const [manager, setManager] = useState<Manager>('npm');
  const [feedback, setFeedback] = useState<{
    action: 'command' | 'prompt';
    success: boolean;
  } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  const { Icon, run } = managers[manager];
  const installName =
    installUrl
      .split('/')
      .pop()
      ?.replace(/\.json(?:\?.*)?$/, '') || name;
  const command = installUrl ? run + ' ' + installUrl : '';
  const branch =
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    'feat/webgl-image-components';
  const github =
    sourcePath &&
    'https://github.com/ui-layouts/uilayouts/blob/' +
      branch +
      '/' +
      sourcePath.split('/').map(encodeURIComponent).join('/');
  async function copy(action: 'command' | 'prompt') {
    let success = true;
    const text =
      action === 'command'
        ? command || sourceCode
        : [
            'Integrate the ' +
              title +
              ' example from UI Layouts into my project. Include the complete selected example and its reusable component implementation. Preserve the interactions and adapt the layout to my project.',
            'Documentation: https://www.ui-layouts.com/components/' + slug +
              (navigation.index ? '?example=' + encodeURIComponent(name) : ''),
            github && 'Source: ' + github,
            command && 'Install: ' + command,
            sourceCode && 'Implementation:\n\n' + sourceCode,
          ]
            .filter(Boolean)
            .join('\n\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      success = false;
    }
    clearTimeout(timer.current);
    setFeedback({ action, success });
    timer.current = setTimeout(() => setFeedback(null), 2100);
  }
  const copied = (action: 'command' | 'prompt') =>
    feedback?.action === action && feedback.success;
  return (
    <div className={styles.toolbar} aria-label='Component tools' role='group'>
      <NavigationDrawer slug={slug} navigation={navigation} />
      {pager}
      <div className={styles.center}>
        <SearchDialog searchBar classname={styles.searchTrigger} />
        <div className={styles.install}>
          {installUrl && (
            <label className={styles.manager} title='Select package manager'>
              <Icon width={17} height={17} aria-hidden />
              <ChevronsUpDown size={12} aria-hidden />
              <select
                value={manager}
                aria-label='Package manager'
                onChange={(event) => setManager(event.target.value as Manager)}
              >
                {Object.keys(managers).map((id) => (
                  <option value={id} key={id}>
                    {id}
                  </option>
                ))}
              </select>
            </label>
          )}
          <button
            type='button'
            className={styles.command}
            aria-label={
              command ? 'Copy install command' : 'Copy component source'
            }
            title={command || 'Copy component source'}
            disabled={!command && !sourceCode}
            onClick={() => copy('command')}
          >
            <span>
              {copied('command') ? (
                'Copied'
              ) : installUrl ? (
                <>
                  <span className={styles.prefix}>@ui-layouts/</span>
                  {installName}
                </>
              ) : (
                'Copy source'
              )}
            </span>
            {copied('command') ? <Check size={13} /> : <Copy size={13} />}
          </button>
        </div>
        <ReadingProgress slug={slug} />
      </div>
      <div className={styles.actions}>
        <button
          type='button'
          className={styles.prompt}
          aria-label='Copy prompt'
          onClick={() => copy('prompt')}
          title='Copy prompt'
        >
          <span>{copied('prompt') ? 'Copied' : 'Copy Prompt'}</span>
          {copied('prompt') ? <Check size={16} /> : <Copy size={16} />}
        </button>
        {github && (
          <a
            className={styles.icon}
            href={github}
            target='_blank'
            rel='noreferrer'
            aria-label='View source on GitHub'
            title='View source on GitHub'
          >
            <FolderCode size={18} />
          </a>
        )}
        {expandUrl && (
          <a
            className={styles.icon}
            href={expandUrl}
            aria-label='Expand preview'
            title='Expand preview'
          >
            <Expand size={18} />
          </a>
        )}
      </div>
      <span
        className={feedback && !feedback.success ? styles.error : 'sr-only'}
        role='status'
      >
        {feedback
          ? feedback.success
            ? 'Copied to clipboard.'
            : 'Could not copy. Check clipboard access and try again.'
          : ''}
      </span>
    </div>
  );
}

export default ShowcaseToolbar;
