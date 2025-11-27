'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  ChevronRight,
  Component,
  CornerDownLeft,
  LaptopIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from 'lucide-react';
import { Command } from 'cmdk';
import { Dialog, DialogContent } from '@/components/website/ui/dialog';
import { ScrollArea } from '@/components/website/ui//scroll-area';
import { cn } from '@/lib/utils';
import { basePath } from './sidebar';
import { DocsNavigationCategories } from '@/configs/docs';
import {
  ResponsiveModal,
  ResponsiveModalContent,
} from '../ui/responsive-modal';

function highlightMatch(text: string, query: string) {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className='bg-yellow-200 dark:bg-yellow-600'>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export type SearchItem = {
  href: string;
  name: string;
  tags?: string[];
  icon?: React.ReactNode;
  new?: boolean;
  updated?: boolean;
  component?: string;
};

export function SearchDialog({
  classname,
  searchBar = false,
}: {
  classname?: string;
  searchBar?: boolean;
}) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const searchTerm = search.toLowerCase();

  const groupedItems = Object.entries(
    DocsNavigationCategories.reduce(
      (acc, item) => {
        const group = item.group || 'Others';
        if (!acc[group]) acc[group] = [];
        acc[group].push(item);
        return acc;
      },
      {} as Record<string, typeof DocsNavigationCategories>
    )
  );

  const filteredGroupedItems = groupedItems
    .map(([group, items]) => {
      const filtered = items
        .filter((item) => {
          const nameMatch = item.name.toLowerCase().includes(searchTerm);
          const tagsMatch = item.tags?.some((tag) =>
            tag.toLowerCase().includes(searchTerm)
          );
          return nameMatch || tagsMatch;
        })
        .sort((a, b) => {
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();
          // exact match first
          if (aName === searchTerm) return -1;
          if (bName === searchTerm) return 1;
          // startsWith match next
          if (aName.startsWith(searchTerm)) return -1;
          if (bName.startsWith(searchTerm)) return 1;
          return 0;
        });

      return { group, items: filtered };
    })
    .filter((group) => group.items.length > 0); // remove empty groups

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setSearchOpen((searchOpen) => !searchOpen);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  React.useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }
  }, [searchOpen]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setSearchOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        className={cn(
          'relative inline-flex w-full items-center justify-start gap-2 whitespace-nowrap rounded-lg border bg-neutral-200 px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:border-accent  hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-800 sm:pr-12',
          classname
        )}
        onClick={() => setSearchOpen(true)}
      >
        <SearchIcon className='shrink-0' size={20} />
        {!searchBar && (
          <>
            <span className='hidden sm:inline-flex'>Search...</span>
            <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-7 select-none items-center gap-1 rounded-sm border bg-primary-foreground px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex'>
              <span className='text-xs'>⌘</span>K
            </kbd>
          </>
        )}
      </button>
      <ResponsiveModal
        classname='rounded-lg border-2 dark:border-neutral-800 border-neutral-300 p-0 lg:max-w-lg xl:max-w-xl dark:bg-neutral-950 bg-white '
        open={searchOpen}
        setOpen={setSearchOpen}
        clsBtnClassname='top-1 right-1'
      >
        <ResponsiveModalContent>
          <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-4 [&_[cmdk-input-wrapper]_svg]:w-4 [&_[cmdk-input]]:h-14 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4'>
            <Command.Input
              ref={inputRef}
              value={search}
              onValueChange={setSearch}
              placeholder='Type a command or search...'
              className='w-full rounded-tl-lg rounded-tr-lg border-b dark:border-neutral-800 border-neutral-300 px-4 outline-hidden bg-primary/10'
            />
            <Command.List className='border-none'>
              <ScrollArea className='h-[350px]'>
                <Command.Empty className=' p-4'>
                  No results found.
                </Command.Empty>
                <Command.Group className='py-2'>
                  <span className='block p-2 text-xs font-semibold'>
                    Follow for more updates
                  </span>
                  <a
                    href='https://x.com/naymur_dev'
                    target='_blank'
                    className='flex w-full items-center gap-2 rounded-md dark:bg-neutral-800 bg-neutral-200 p-3'
                  >
                    <svg
                      width='120'
                      height='109'
                      viewBox='0 0 120 109'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-4 fill-primary'
                    >
                      <path d='M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z' />
                    </svg>{' '}
                    @naymur_dev
                  </a>
                </Command.Group>
                <Command.Group
                  heading='Getting Started'
                  className='py-2 text-sm'
                >
                  {basePath.map((item, index) => (
                    <Command.Item
                      key={index}
                      value={item.name}
                      onSelect={() => runCommand(() => router.push(item.href))}
                      className='relative flex select-none items-center gap-2 rounded-lg p-0 text-sm cursor-pointer aria-selected:bg-neutral-200 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-100'
                    >
                      <span>{item.icon}</span>
                      <span>{highlightMatch(item.name, search)}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Separator className='my-1 opacity-30' />

                {filteredGroupedItems.map(({ group, items }) => (
                  <Command.Group key={group} heading={group}>
                    {items.map((item, index) => (
                      <Command.Item
                        key={index}
                        value={`${item.name} ${item?.tags?.join(' ') || ''}`}
                        onSelect={() =>
                          runCommand(() => router.push(item.href))
                        }
                        className='relative flex select-none rounded-lg items-center gap-2 text-sm cursor-pointer aria-selected:bg-neutral-200 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-100 border border-transparent aria-selected:border-neutral-300 dark:aria-selected:border-neutral-600'
                      >
                        <svg
                          width='36'
                          height='40'
                          viewBox='0 0 36 40'
                          className='w-5 h-5 fill-primary/90'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          {' '}
                          <path d='M0.000453292 10.2009V2.72637C0.000453292 1.98449 0.344616 1.33536 1.03294 0.778962C1.67539 0.259656 2.45549 0 3.37326 0H19.962C21.0633 0 22.004 0.315296 22.7841 0.945883C23.5642 1.57647 23.9542 2.31833 23.9542 3.17148V5.95348C23.9542 6.73244 24.1837 7.45576 24.6426 8.12344C25.1014 8.79112 25.7439 9.31042 26.5699 9.68133C27.35 10.0894 28.2219 10.3119 29.1855 10.3491H32.0765C33.1319 10.3491 34.0497 10.6458 34.8298 11.2392C35.61 11.8698 36 12.6303 36 13.5205V28.4562C36 28.4889 35.9998 28.5218 35.9995 28.5546V37.1999C35.9995 37.9619 35.6554 38.6285 34.9671 39.2C34.3247 39.7333 33.5445 40 32.6268 40H16.038C14.9367 40 13.996 39.6762 13.2159 39.0286C12.4358 38.3809 12.0458 37.619 12.0458 36.7428V33.8856C12.0458 33.0856 11.8163 32.3427 11.3574 31.657C10.8986 30.9713 10.2561 30.4379 9.43009 30.057C8.64999 29.6379 7.77811 29.4093 6.81444 29.3713H3.92347C2.86804 29.3713 1.95027 29.0665 1.17015 28.4569C0.390052 27.8093 0 27.0284 0 26.1141V10.2857C0 10.2574 0.000151333 10.2292 0.000453292 10.2009ZM23.8854 28.8933V11.3506C23.8854 11.0909 23.7937 10.8683 23.6101 10.6828C23.3807 10.4974 23.1054 10.4047 22.7841 10.4047H13.0787C12.7575 10.4047 12.4821 10.4974 12.2527 10.6828C12.2175 10.7114 12.1849 10.7407 12.1551 10.7709L12.1146 28.3427C12.1146 28.6093 12.2063 28.8379 12.3899 29.0284C12.6193 29.2189 12.8946 29.3141 13.2159 29.3141H22.9213C23.2425 29.3141 23.5179 29.2189 23.7473 29.0284C23.7992 28.9853 23.8453 28.9402 23.8854 28.8933Z' />{' '}
                        </svg>
                        <span>{item.name}</span>
                        {item.new && (
                          <span className='ml-1 rounded-md bg-green-100 px-2 py-[2px] text-xs text-green-600 dark:bg-green-900/30'>
                            New
                          </span>
                        )}
                        {item.updated && (
                          <span className='ml-1 rounded-md bg-blue-100 px-2 py-[2px] text-xs text-blue-600 dark:bg-blue-900/30'>
                            Updated
                          </span>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}

                <Command.Separator />
                <Command.Group className='rounded-xl '>
                  <span className='block p-1 py-2'>Theme</span>
                  <Command.Item
                    className='relative flex cursor-default select-none items-center rounded-xs px-1 py-1 text-sm outline-hidden aria-selected:bg-neutral-200 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-100 data-disabled:opacity-75'
                    onSelect={() => runCommand(() => setTheme('light'))}
                  >
                    <SunIcon className='mr-2 h-4 w-4' />
                    Light
                  </Command.Item>
                  <Command.Item
                    className='relative flex cursor-default select-none items-center rounded-xs px-1 py-1 text-sm outline-hidden aria-selected:bg-neutral-200 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-100 data-disabled:opacity-75'
                    onSelect={() => runCommand(() => setTheme('dark'))}
                  >
                    <MoonIcon className='mr-2 h-4 w-4' />
                    Dark
                  </Command.Item>
                  <Command.Item
                    className='relative flex cursor-default select-none items-center rounded-xs px-1 py-1 text-sm outline-hidden aria-selected:bg-neutral-200 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-100 data-disabled:opacity-75'
                    onSelect={() => runCommand(() => setTheme('system'))}
                  >
                    <LaptopIcon className='mr-2 h-4 w-4' />
                    System
                  </Command.Item>
                </Command.Group>
              </ScrollArea>
            </Command.List>
          </Command>
          <div className='bg-primary/10 h-10 flex flex-col justify-center rounded-b-md'>
            <span className='text-xs flex items-center gap-2 p-2'>
              <CornerDownLeft size={14} />
              Go to Page
            </span>
          </div>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </>
  );
}
