import type { ReactNode } from 'react';

export function isCurrentSection(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavigationIcon({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden='true'
      className='grid size-7 shrink-0 place-items-center rounded-md bg-foreground/5 ring-1 ring-foreground/10 ring-inset transition-colors group-hover:bg-theme-highlight group-hover:text-white group-focus-visible:bg-theme-highlight group-focus-visible:text-white group-data-[active=true]:bg-theme-highlight group-data-[active=true]:text-white [&_svg]:size-[18px]'
    >
      {children}
    </span>
  );
}
