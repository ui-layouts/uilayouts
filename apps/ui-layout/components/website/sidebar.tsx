'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@/components/website/ui/scroll-area';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Atom,
  ChevronsDown,
  Component,
  MousePointerClick,
  PenTool,
  Rocket,
  X,
} from 'lucide-react';
import { IRecentPage, useRecentPagesStore } from '@/hooks/useZustStore';
import { useTheme } from 'next-themes';
import { DocsNavigationCategories } from '@/configs/docs';
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { useMediaQuery } from '@/hooks/use-media-query';
import { DOCS_CATEGORY_GROUP } from '@/const/docs';

export const basePath = [
  {
    href: '/get-started',
    name: 'Get Started',
    icon: <Rocket />,
  },
  {
    href: '/components',
    name: 'Components',
    icon: <Component />,
  },
];

function DocsSidebar() {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 992px)');

  const { addVisitedPage, getRecentPages, removeAllRecentPages } =
    useRecentPagesStore();
  const [recentPages, setRecentPages] = useState<IRecentPage[]>([]);
  const groupedComponents = DocsNavigationCategories.reduce(
    (acc: Record<string, any[]>, component) => {
      const group = component.group || null;
      // @ts-ignore
      if (!acc[group]) {
        // @ts-ignore
        acc[group] = [];
      }
      // @ts-ignore
      acc[group].push(component);
      return acc;
    },
    {}
  );

  const handleRemoveAllRecentData = () => {
    removeAllRecentPages();
    setRecentPages([]);
  };

  useEffect(() => {
    const recentPage = getRecentPages();
    setRecentPages(recentPage);
  }, [getRecentPages]);

  return (
    <>
      {isDesktop && (
        <aside className='h-full'>
          <div className='sticky top-0 h-screen w-full pt-[4.5em]'>
            <ScrollArea className='h-[98%] px-3 py-3'>
              <ul className='pb-1'>
                {basePath?.map((link, index) => (
                  <li key={`id-${index}`}>
                    <Link
                      href={link.href}
                      onClick={() => addVisitedPage(link.href, link.name)}
                      className={`flex gap-2 group font-medium items-center py-1 transition-all ${
                        link.href === pathname
                          ? 'active-nav'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      {React.cloneElement(link?.icon, {
                        className: `${
                          link.href === pathname
                            ? 'dark:text-black dark:bg-white bg-black text-white'
                            : 'dark:bg-zinc-900 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black'
                        } h-7 w-7 border transition-all rounded-md p-1`,
                      })}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {recentPages.length > 0 && (
                <div className='relative'>
                  <div className='flex justify-between items-center'>
                    <h1 className='xl:text-lg text-[1.05rem] font-semibold pb-1'>
                      Recent Visited
                    </h1>
                    <TooltipProvider>
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={handleRemoveAllRecentData}
                            className='xl:h-7 h-5 xl:w-7 w-5 rounded-md border dark:bg-zinc-900 bg-gray-100 grid place-content-center'
                          >
                            <X className={`h-5 w-5 transition-all`} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className='border px-1 z-10 bg-primary-foreground'>
                          <p>Remove</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <ul>
                    {recentPages.map((page) => (
                      <li
                        key={page.id}
                        className={`font-normal 2xl:text-sm xl:text-[0.81em] text-xs flex items-center dark:hover:text-white py-1 pl-2 border-l transition-all ${
                          page.id === pathname
                            ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                            : 'dark:text-slate-400 border-neutral-800 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Link
                          href={page.id}
                          onClick={() => addVisitedPage(page.id, page.name)}
                        >
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Object.entries(groupedComponents).map(
                ([group, items], index) => (
                  <ItemsWithName
                    group={group}
                    items={items}
                    key={index}
                    pathname={pathname}
                    addVisitedPage={addVisitedPage}
                  />
                )
              )}
            </ScrollArea>
          </div>
        </aside>
      )}
    </>
  );
}

export const ItemsWithName = ({
  group,
  items,
  pathname,
  addVisitedPage,
}: {
  group: string | null;
  items: any[];
  pathname: string;
  addVisitedPage: (href: string, name: string) => void;
}) => {
  const [expandedItems, setExpandedItems] = useState<boolean>(true);

  const groupRef = useRef<HTMLDivElement>(null);
  const showExpandButton = items.length > 2;
  const itemsToShow =
    expandedItems || !showExpandButton ? items : items.slice(0, 2);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const activeItemIndex = items.findIndex(
      (item: { href: string }) => item.href === pathname
    );

    if (activeItemIndex !== -1 && itemRefs.current[activeItemIndex]) {
      itemRefs.current[activeItemIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [pathname, items]);

  return (
    <div ref={groupRef} key={group}>
      <div
        className={`text-lg relative flex w-full items-center justify-between pr-4 cursor-pointer  dark:text-gray-100 font-medium capitalize my-1`}
      >
        {group}
        {/* {showExpandButton && (
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <button
                  className='h-7 w-7 rounded-md dark:bg-zinc-900 border bg-gray-100 grid place-content-center absolute top-0 right-3'
                  onClick={() => setExpandedItems(!expandedItems)}
                >
                  <ChevronsDown
                    className={`h-5 w-5 transition-all ${
                      !expandedItems && showExpandButton
                        ? 'rotate-180'
                        : 'rotate-0'
                    }`}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent className='dark:bg-primary-base bg-gray-50 text-primary border 2xl:text-base text-sm rounded-md px-2 py-1 -translate-y-1'>
                <p className='capitalize'>
                  {expandedItems ? 'Collapse' : 'Expand'}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )} */}
      </div>

      <ul className='relative'>
        {/* {!expandedItems && showExpandButton && (
          <div className='absolute w-full bottom-0 left-0 h-7 bg-gradient-to-t dark:from-neutral-950 from-zinc-50 from-20%' />
        )} */}
        {itemsToShow.map((link, index) => (
          <li
            key={link.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`2xl:text-base xl:text-base text-xs flex items-center gap-1 dark:hover:text-white py-[1px] pl-2 border-l transition-all ${
              link.href === pathname
                ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                : 'dark:text-slate-400 2xl:font-normal font-medium dark:border-neutral-800 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
            }`}
          >
            <Link
              href={link.href}
              onClick={() => addVisitedPage(link.href, link.name)}
            >
              {link.name}
            </Link>
            {link?.updated && (
              <span className='2xl:text-xs italic text-[0.74em]  text-blue-500'>
                (Updated)
              </span>
            )}
            {link?.new && (
              <span className='2xl:text-xs text-[0.74em] text-green-500'>
                (New)
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocsSidebar;
