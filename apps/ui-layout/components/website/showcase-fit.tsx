'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

/** Scale oversized demo artwork only inside the featured preview. Expanded pages retain their native layout. */
export default function ShowcaseFit({
  children,
  documentScroll,
}: {
  children: ReactNode;
  documentScroll: boolean;
}) {
  const surface = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const content = surface.current;
    if (
      !content ||
      !window.frameElement?.hasAttribute('data-showcase-preview') ||
      documentScroll
    )
      return;
    const stage = content.parentElement!;
    stage.dataset.fitted = '';
    const fit = () => {
      const height = content.offsetHeight;
      const width = Math.max(content.offsetWidth, content.scrollWidth);
      const scale = Math.min(
        1,
        stage.clientHeight / (height || 1),
        stage.clientWidth / (width || 1)
      );
      content.style.transform = scale < 1 ? 'scale(' + scale + ')' : '';
    };
    const observer = new ResizeObserver(fit);
    observer.observe(content);
    observer.observe(stage);
    fit();
    return () => {
      observer.disconnect();
      delete stage.dataset.fitted;
      content.style.transform = '';
    };
  }, [documentScroll]);
  return (
    <div data-demo-surface className='live-demo-content' ref={surface}>
      {children}
    </div>
  );
}
