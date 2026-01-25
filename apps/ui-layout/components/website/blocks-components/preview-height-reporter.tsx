'use client';

import React, { useEffect, useRef } from 'react';

export default function PreviewHeightReporter({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const isEmbedded = window.self !== window.top;

  //   // 🔑 ONLY disable scroll when embedded in iframe
  //   if (isEmbedded) {
  //     document.body.style.margin = '0';
  //     document.documentElement.style.margin = '0';
  //     document.body.style.overflow = 'hidden';
  //     document.documentElement.style.overflow = 'hidden';
  //   }

  //   if (!ref.current) return;

  //   const sendHeight = () => {
  //     const height = ref.current!.scrollHeight;

  //     window.parent.postMessage(
  //       {
  //         type: 'IFRAME_HEIGHT',
  //         id: window.location.pathname,
  //         height,
  //       },
  //       '*'
  //     );
  //   };

  //   // Multiple passes to handle fonts/images
  //   const t1 = setTimeout(sendHeight, 50);
  //   const t2 = setTimeout(sendHeight, 150);
  //   const t3 = setTimeout(sendHeight, 300);

  //   return () => {
  //     clearTimeout(t1);
  //     clearTimeout(t2);
  //     clearTimeout(t3);

  //     // Restore defaults (important for HMR / navigation)
  //     if (isEmbedded) {
  //       document.body.style.overflow = '';
  //       document.documentElement.style.overflow = '';
  //       document.body.style.margin = '';
  //       document.documentElement.style.margin = '';
  //     }
  //   };
  // }, []);

  return <div ref={ref}>{children}</div>;
}
