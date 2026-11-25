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
import DocsSidebar from './sidebar';
import { SearchDialog } from './searchbar';
import { useEffect, useRef, useState } from 'react';
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

function NavigationDrawer({ navigation }: Pick<ShowcaseToolbarProps, 'navigation'>) {
  const [open, setOpen] = useState(false);
  const toggle = <span><PanelLeft size={20} strokeWidth={1.55} aria-hidden /></span>;
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className={styles.launcher} aria-label="Open component navigation">{toggle}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.drawer} aria-describedby={undefined}>
          <header className={styles.drawerHeader}>
            <Dialog.Title><Link href="/components" onClick={() => setOpen(false)}><img src="/showcase-wordmark.svg" alt="UI Layouts" width={144} /></Link></Dialog.Title>
            <Dialog.Close asChild>
              <button type="button" className={styles.launcher} aria-label="Close component navigation">{toggle}</button>
            </Dialog.Close>
          </header>
          <DocsSidebar floating childSelected={navigation.index > 0} onSelectDefault={() => navigation.select(0)} onNavigate={() => setOpen(false)} exampleTree={navigation.examples.length > 1 && (
            <div className={styles.tree} aria-label="Examples" role="group">
              {navigation.examples.map((example, index) => index > 0 && (
                <button key={example.name} type="button" aria-current={index === navigation.index ? 'page' : undefined}
                  onClick={() => { navigation.select(index); setOpen(false); }}>{example.label}</button>
              ))}
            </div>
          )} />
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
      <svg aria-hidden="true">
        <rect x="1" y="1"
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
      <NavigationDrawer navigation={navigation} />
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
