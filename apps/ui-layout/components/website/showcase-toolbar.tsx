'use client';

import * as Dialog from '@radix-ui/react-dialog';
import {
  Check,
  ChevronsUpDown,
  Copy,
  Expand,
  FolderCode,
} from 'lucide-react';
import Link from 'next/link';
import HomeGitHubButton from './home/github-repo-button';
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
  originalUrl?: string;
  splitOpen: boolean;
  onToggleSplit: () => void;
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

function PanelIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
      <path d="M12 2.5V21.5" strokeWidth="1.5" strokeLinecap="round" stroke="currentColor" />
      {open && <path d="M3 7C3 4.79086 4.79086 3 7 3H12V21H7C4.79086 21 3 19.2091 3 17V7Z" fill="currentColor" fillOpacity=".72" />}
    </svg>
  );
}

function NavigationIcon({ open }: { open: boolean }) {
  const outline = 'M13.5556 2H11.4444C7.46369 2 5.47332 2 4.23666 3.23666C3 4.47332 3 6.46369 3 10.4444V12.5556C3 16.5363 3 18.5267 4.23666 19.7633C5.47332 21 7.46369 21 11.4444 21H13.5556C17.5363 21 19.5267 21 20.7633 19.7633C22 18.5267 22 16.5363 22 12.5556V10.4444C22 6.46369 22 4.47332 20.7633 3.23666C19.5267 2 17.5363 2 13.5556 2Z';
  const leftPanel = 'M3 6C3 3.79086 4.79086 2 7 2H9V21H7C4.79086 21 3 19.2091 3 17V6Z';
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
      {open && <path d={leftPanel} fill="#484848" />}
      <path d={outline} stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 3V21" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function NavigationDrawer({ navigation }: Pick<ShowcaseToolbarProps, 'navigation'>) {
  const [open, setOpen] = useState(false);
  const toggle = <span><NavigationIcon open={open} /></span>;
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className={styles.launcher} aria-label="Open component navigation">{toggle}</button>
      </Dialog.Trigger>
      <Link className={styles.wordmark} href="/" aria-label="UI Layouts home"><img src="/showcase-wordmark.svg" alt="" width={154} /></Link>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.drawer} aria-describedby={undefined}>
          <header className={styles.drawerHeader}>
            <Dialog.Title><Link href="/" onClick={() => setOpen(false)}><img src="/showcase-wordmark.svg" alt="UI Layouts" width={154} /></Link></Dialog.Title>
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

function ReadingProgress({ slug, splitOpen }: { slug: string; splitOpen: boolean }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const page = document.querySelector<HTMLElement>('[data-showcase-scroll]');
    const notes = document.querySelector<HTMLElement>('[data-showcase-notes] [data-radix-scroll-area-viewport]');
    const desktop = window.matchMedia('(min-width: 900px)');
    const measure = () => {
      const scroller = desktop.matches ? notes : page;
      if (desktop.matches && !splitOpen) {
        setProgress(0);
        return;
      }
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
    observer.observe(page ?? document.body);
    if (notes) observer.observe(notes);
    if (notes?.firstElementChild) observer.observe(notes.firstElementChild);
    const target = page ?? window;
    target.addEventListener('scroll', measure, { passive: true });
    notes?.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    measure();
    return () => {
      observer.disconnect();
      notes?.removeEventListener('scroll', measure);
      target.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [slug, splitOpen]);
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

function CopyLabel({ copied, children, size }: {
  copied: boolean; children: React.ReactNode; size: number;
}) {
  return <span className={styles.copyLabel} data-copied={copied} aria-hidden="true">
    <span className={styles.copyDefault}><span>{children}</span><Copy size={size} /></span>
    <span className={styles.copySuccess}><span>Copied</span><Check size={size} /></span>
  </span>;
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
  splitOpen,
  onToggleSplit,
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
    <div className={styles.toolbar} data-split-open={splitOpen} aria-label='Component tools' role='group'>
      <span className={styles.topBlur} aria-hidden="true" />
      <NavigationDrawer navigation={navigation} />
      <div className={styles.headerLinks}>
        <HomeGitHubButton iconOnly className={styles.github} />
        <a href="https://pro.ui-layouts.com/blocks" className={styles.pro} aria-label="Explore UI Layouts Pro"><em>Pro<sup>+</sup></em></a>
      </div>
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
            <CopyLabel copied={copied('command')} size={13}>
              {installUrl ? <><span className={styles.prefix}>@ui-layouts/</span>{installName}</> : 'Copy source'}
            </CopyLabel>
          </button>
        </div>
        <ReadingProgress slug={slug} splitOpen={splitOpen} />
      </div>
      <div className={styles.actions}>
        <button
          type='button'
          className={styles.prompt}
          aria-label='Copy prompt'
          onClick={() => copy('prompt')}
          title='Copy prompt'
        >
          <CopyLabel copied={copied('prompt')} size={16}>Copy Prompt</CopyLabel>
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
        <button type="button" className={styles.icon} aria-label="Documentation view"
          aria-pressed={splitOpen} aria-controls="component-details" onClick={onToggleSplit}>
          <PanelIcon open={splitOpen} />
        </button>
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
