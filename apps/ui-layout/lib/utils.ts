import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_CLIENT_URL}${path}`;
}

export function debounce(
  func: (...args: any[]) => any,
  wait: number,
  immediate: boolean = false
) {
  let timeout: number | undefined;

  return function executedFunction(this: any, ...args: any[]) {
    const context: any = this;

    const later = () => {
      timeout = undefined;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow: boolean = immediate && !timeout;

    clearTimeout(timeout);

    timeout = window.setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}

export const siteConfig = {
  name: 'Ui-Layouts | Your Frontend Universe',
  blocksName: 'Blocks | Ship faster with ready blocks',
  url: 'https://ui-layouts.com',
  blocksUrl: 'https://ui-layouts.com/blocks',
  ogImage: 'https://www.ui-layouts.com/og.jpg',
  BlocksOgImage: 'https://www.ui-layouts.com/blocks-og.jpg',
  workWithUsOgImage: 'https://www.ui-layouts.com/work-with-usog.jpg',
  description:
    'Beautifully designed React + Next.js + TailwindCSS components. 60+ ready-to-use, accessible, and customizable UI pieces — open source and free.',
  blocksDescription:
    'Creatively crafted blocks built with Tailwind CSS and shadcn/ui, ready to drop into real-world React and Next.js projects.  Clean, responsive, and easy to customize',
  links: {
    twitter: 'https://twitter.com/naymur_dev',
    linkedin: 'https://www.linkedin.com/in/naymur-rahman',
    github: 'https://github.com/naymurdev',
  },
};

export type SiteConfig = typeof siteConfig;

export const transition = {
  type: 'spring',
  duration: 0.4,
} as const;
