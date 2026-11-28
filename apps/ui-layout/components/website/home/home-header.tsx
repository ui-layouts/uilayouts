'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { PanelLeft, SearchIcon, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { SearchDialog } from '../searchbar';
import { ThemeCustomizer } from '../theme-customizer';
import ThemeSwitch from '../theme-switch';
import HomeGitHubButton from './github-repo-button';
import styles from './site-navigation.module.css';

const destinations = [
  ['Home', '/'], ['Components', '/components'], ['Blocks', '/blocks'],
  ['Getting started', '/get-started'], ['MCP', '/mcp'], ['Labs', '/labs'],
  ['Changelog', '/changelog'], ['Work with us', '/work-with-us'],
];

export default function HomeHeader({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchAfterNavigation = useRef(false);

  const changeSearchOpen = useCallback((nextOpen: boolean) => {
    if (nextOpen && open) {
      searchAfterNavigation.current = true;
      setOpen(false);
      return;
    }
    setSearchOpen(nextOpen);
  }, [open]);

  function handleNavigationClose(event: Event) {
    if (searchAfterNavigation.current) {
      event.preventDefault();
      searchAfterNavigation.current = false;
      setSearchOpen(true);
    }
  }

  return (
    <header className={compact ? `${styles.header} ${styles.compact}` : styles.header}>
      <div className={styles.bar}>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className={styles.menu} aria-label="Open site navigation">
            <PanelLeft size={20} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.drawer} aria-describedby={undefined} onCloseAutoFocus={handleNavigationClose}>
              <div className={styles.drawerHead}>
                <Dialog.Title>Navigation</Dialog.Title>
                <Dialog.Close aria-label="Close navigation"><X size={18} /></Dialog.Close>
              </div>
              <nav aria-label="Site">
                {compact && (
                  <button type="button" className={styles.drawerSearch} onClick={() => changeSearchOpen(true)}>
                    <SearchIcon size={16} aria-hidden /> Search components
                  </button>
                )}
                {destinations.map(([label, href]) => (
                  <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
                    onClick={() => setOpen(false)}>{label}</Link>
                ))}
              </nav>
              <div className={styles.resources}>
                <a href="https://tools.ui-layouts.com/">Tools</a>
                <a href="https://cursify.ui-layouts.com">Cursify</a>
                <a href="https://discord.gg/4bySmj75">Discord</a>
              </div>
              <div className={styles.settings}><ThemeSwitch /><ThemeCustomizer /></div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <Link href="/" aria-label="UI Layouts home">
          <img src="/showcase-wordmark.svg" width="154" height="34" alt="UI Layouts" className={styles.logo} />
        </Link>
        <div className={styles.actions}>
          {compact ? (
            <SearchDialog hideTrigger open={searchOpen} onOpenChange={changeSearchOpen} />
          ) : (
            <SearchDialog searchBar classname={styles.search} />
          )}
          <HomeGitHubButton iconOnly className={styles.github} />
          <a className={styles.pro} href="https://pro.ui-layouts.com/blocks" aria-label="UI Layouts Pro">Pro<sup>+</sup></a>
        </div>
      </div>
    </header>
  );
}
