'use client';
import React, { useEffect, useState } from 'react';

const newComponent = [
  {
    href: '/components/mac-genie',
    title: 'Mac Genie',
  },
  {
    href: '/components/tree-code-viewer',
    title: 'Tree code Viewer',
  },
  {
    href: '/components/code-block',
    title: 'Code Block',
  },
  {
    href: '/components/shimmer-loader',
    title: 'SHIMMER LOADER',
  },
  {
    href: '/components/type-writer',
    title: 'TYPE WRITER',
  },
  {
    href: '/components/terminal-ui',
    title: 'TERMINAL UI',
  },
];

function NewItemsLoading() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % newComponent.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {newComponent.map((item, index) => {
        return (
          <React.Fragment key={item.href}>
            {activeIndex === index && (
              <a
                key={item.href}
                href={item?.href}
                className='inline-flex w-fit mx-auto items-center gap-1 rounded-full bg-theme-highlight px-2.5 py-1.5 text-xs text-white sm:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
              >
                <span>Introducing <strong>{item.title}</strong></span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                  data-slot='icon'
                  className='size-3 shrink-0'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default NewItemsLoading;
