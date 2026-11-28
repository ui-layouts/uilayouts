'use client';

import type { TableOfContents } from '@/lib/toc';
import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';

const BlogContentsContext = createContext<TableOfContents & { activeHref?: string }>({ items: [] });

export function BlogContentsProvider({
  items,
  children,
}: TableOfContents & { children: ReactNode }) {
  const [activeHref, setActiveHref] = useState<string | undefined>(items[0]?.url);

  useEffect(() => {
    const headings = items
      .flatMap((item) => [item, ...(item.items ?? [])])
      .map(({ url }) => ({ url, element: document.getElementById(url.slice(1)) }));
    let frame: number | undefined;
    let hashScrollTimeout: number | undefined;

    function readPosition() {
      frame = undefined;
      const pageHeight = document.scrollingElement?.scrollHeight ?? window.innerHeight;
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= pageHeight - 1) {
        setActiveHref(headings.at(-1)?.url);
        return;
      }

      let current = headings[0]?.url;
      for (const { url, element } of headings) {
        if (!element) continue;
        const scrollMargin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
        if (element.getBoundingClientRect().top > scrollMargin + 8) break;
        current = url;
      }
      setActiveHref(current);
    }

    function holdHashDuringScroll() {
      window.clearTimeout(hashScrollTimeout);
      // Keep the selected link active while the browser scrolls past earlier headings.
      hashScrollTimeout = window.setTimeout(() => {
        hashScrollTimeout = undefined;
      }, 150);
    }

    function schedulePosition() {
      if (hashScrollTimeout !== undefined) {
        holdHashDuringScroll();
        return;
      }
      frame ??= requestAnimationFrame(readPosition);
    }

    function readHash() {
      const hash = window.location.hash;
      const target = headings.find(({ url }) => url === hash || encodeURI(url) === hash);
      if (target) {
        if (frame !== undefined) {
          cancelAnimationFrame(frame);
          frame = undefined;
        }
        setActiveHref(target.url);
        holdHashDuringScroll();
      } else {
        window.clearTimeout(hashScrollTimeout);
        hashScrollTimeout = undefined;
        schedulePosition();
      }
    }

    readHash();
    window.addEventListener('hashchange', readHash);
    window.addEventListener('scroll', schedulePosition, { passive: true });
    window.addEventListener('resize', schedulePosition);
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      window.clearTimeout(hashScrollTimeout);
      window.removeEventListener('hashchange', readHash);
      window.removeEventListener('scroll', schedulePosition);
      window.removeEventListener('resize', schedulePosition);
    };
  }, [items]);

  return (
    <BlogContentsContext.Provider value={{ items, activeHref }}>
      {children}
    </BlogContentsContext.Provider>
  );
}

const linkClass =
  'block rounded-sm border-l-2 border-transparent py-0.5 pl-2.5 text-muted-foreground hover:text-foreground aria-[current=location]:border-primary aria-[current=location]:font-medium aria-[current=location]:text-foreground';

export function BlogTableOfContents() {
  const { items, activeHref } = useContext(BlogContentsContext);

  return (
    <nav aria-label='On this page' className='text-sm leading-snug'>
      <ul className='space-y-2'>
        {items.map(({ title, url, items: subheadings }) => (
          <li key={url}>
            <a
              href={url}
              aria-current={activeHref === url ? 'location' : undefined}
              className={linkClass}
            >
              {title}
            </a>
            {subheadings && subheadings.length > 0 && (
              <ul className='mt-1 space-y-1 pl-3'>
                {subheadings.map((heading) => (
                  <li key={heading.url}>
                    <a
                      href={heading.url}
                      aria-current={activeHref === heading.url ? 'location' : undefined}
                      className={linkClass}
                    >
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
