'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-media-query';
import BuyMeCoffee from '@/registry/components/buy-me-coffee';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ScrollArea } from './ui/scroll-area';
import Image from 'next/image';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Bug } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { Pencil } from 'lucide-react';

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  toc: Promise<{ items: TocItem[] }>;
}
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    return {
      pathLength: 1,
      opacity: 1,
    };
  },
};

const matchPath = [
  '/docs/get-started',
  '/docs/components',
  '/docs/templates',
  '/docs/introduction',
];

export default function TableOfContents({ toc }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const pathname = usePathname();

  const issueUrl =
    `https://github.com/ui-layouts/uilayouts/issues/new?` +
    `title=${encodeURIComponent(`[bug]: ${pathname}`)}` +
    `&labels=bug&labels=documentation` +
    `&template=bug_report.md`;

  const featureUrl =
    `https://github.com/ui-layouts/uilayouts/issues/new?` +
    `title=${encodeURIComponent(`[feature]: ${pathname}`)}` +
    `&labels=enhancement,documentation&template=feature_request.md`;

  const editUrl = `https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/content${pathname}.mdx`;

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const { scrollYProgress } = useScroll();

  // Use a spring for smooth animation
  const progress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 10,
  });

  // Transform progress for circle stroke-dashoffset animation
  const circumference = 2 * Math.PI * 36; // radius of 36px for the circle
  const strokeDashoffset = useTransform(progress, [0, 1], [circumference, 0]);
  // Resolving the TOC promise and setting the toc items
  useEffect(() => {
    console.log(toc);

    toc.then((resolvedToc) => {
      setTocItems(resolvedToc.items);
    });
  }, [toc]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    const headers = document.querySelectorAll('h2, h3');
    headers.forEach((header) => observer.observe(header));

    return () => {
      headers.forEach((header) => observer.unobserve(header));
    };
  }, []);
  const checkpath = matchPath.find((path) => path === pathname);
  if (checkpath) {
    return;
  }

  const contribute = [
    {
      label: 'Report an issue',
      icon: <Bug size={17} />,
      href: issueUrl,
    },
    {
      label: 'Request a feature',
      icon: <Lightbulb size={17} />,
      href: featureUrl,
    },
    {
      label: 'Edit this page',
      icon: <Pencil size={17} />,
      href: editUrl,
    },
  ];

  return (
    <>
      {isDesktop ? (
        <>
          <aside className='hidden lg:block w-[170px] shrink-0'>
            <div className='sticky top-0 h-screen pt-[5.2em]'>
              <ScrollArea className='h-[98%] px-3 py-3 rounded-md'>
                <div className='flex flex-col h-full'>
                  <style jsx global>{`
                    [data-radix-scroll-area-viewport] > div {
                      display: block;
                      height: 100%;
                    }
                  `}</style>
                  {tocItems?.length !== 0 && (
                    <div>
                      <span className='text-sm px-1 text-primary font-semibold pb-1 inline-block'>
                        On This Page
                      </span>
                      <hr className='dark:border-neutral-800' />
                      <ul className=' list-none m-0 ml-0  text-[0.8em] space-y-0.5 pt-2 pl-0'>
                        {tocItems?.map((item) => {
                          return (
                            <li key={item.url}>
                              <a
                                href={item.url}
                                className={`${
                                  activeId === item.url.slice(1)
                                    ? ' font-semibold  text-primary py-1'
                                    : ''
                                } no-underline rounded-sm px-1 hover:text-primary text-muted-foreground `}
                              >
                                {item.title}
                              </a>
                              {item.items && item.items.length > 0 && (
                                <ul className='list-none  pl-4 space-y-2 pt-0.5'>
                                  {item.items.map((subItem) => (
                                    <li key={subItem.url}>
                                      <a
                                        href={subItem.url}
                                        className={`${
                                          activeId === subItem.url.slice(1)
                                            ? ' font-semibold text-primary'
                                            : ' '
                                        } no-underline  hover:text-primary text-muted-foreground`}
                                      >
                                        {subItem.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  <div className='pt-4'>
                    <span className='text-sm px-1 text-primary font-semibold pb-1 inline-block'>
                      Contribute
                    </span>
                    <hr className='dark:border-neutral-800' />
                    <div className='m-0  text-[0.8em] space-y-2 pt-2 pl-0'>
                      {contribute?.map((nav) => (
                        <a
                          href={nav?.href}
                          key={nav?.label}
                          target='_blank'
                          className='hover:text-primary text-muted-foreground flex items-center gap-1'
                        >
                          {nav?.icon}
                          {nav?.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className='space-y-4 pt-5 mt-auto'>
                    <BuyMeCoffee
                      classname='mt-10 w-36 h-32 my-0'
                      iconClassName='w-full h-full group-hover:translate-y-14'
                      textSvgClassName='group-hover:scale-[1.5] top-[0.8rem]'
                    />
                  </div>
                </div>
              </ScrollArea>
            </div>
          </aside>
        </>
      ) : (
        <>
          {/* {tocItems?.length !== 0 && (
            <div
              className='left-0 fixed border bottom-0  dark:shadow-[0px_0px_20px_10px_#141414] shadow-[0px_0px_20px_10px_#dadada] z-10 bg-primary-foreground/50 backdrop-blur-xl rounded-t-lg  p-2 w-full shrink-0 border-x overflow-hidden
            '
            >
              <>
                <span className='text-sm px-1 text-primary font-semibold pb-1 inline-block'>
                  On This Page
                </span>
                <hr />
                <ul className=' flex flex-wrap list-none m-0 ml-0  text-[0.8em] space-y-0.5 pt-2 pl-0'>
                  {tocItems?.map((item) => {
                    return (
                      <>
                        <li key={item.url}>
                          <a
                            href={item.url}
                            className={`${
                              activeId === item.url.slice(1)
                                ? ' font-semibold  text-primary py-1'
                                : ''
                            } no-underline rounded-sm px-1 hover:text-primary text-muted-foreground `}
                          >
                            {item.title}
                          </a>
                          {item.items && item.items.length > 0 && (
                            <ul className=' flex flex-wrap gap-2 list-none  pl-4 space-y-0.5 pt-0.5'>
                              {item.items.map((subItem) => (
                                <li key={subItem.url}>
                                  <a
                                    href={subItem.url}
                                    className={`${
                                      activeId === subItem.url.slice(1)
                                        ? ' font-semibold text-primary'
                                        : ' '
                                    } no-underline  hover:text-primary text-muted-foreground`}
                                  >
                                    {subItem.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </>
            </div>
          )} */}
        </>
      )}
    </>
  );
}
