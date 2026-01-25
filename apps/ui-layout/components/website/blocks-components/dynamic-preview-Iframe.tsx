'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  type ImperativePanelGroupHandle,
} from 'react-resizable-panels';
import { useOptimizedIframe } from '@/hooks/useOptimizedIframe';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/website/ui/tooltip';
import { RefreshCcw } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

type Props = {
  src: string;
  fallbackHeight?: number;
  maxHeight?: number;
  blockId: string;
  section?: string;
};

const DEFAULTSIZE = 100;

export default function DynamicPreviewIframe({
  src,
  fallbackHeight = 800,
  maxHeight = 2200,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelGroupRef = useRef<ImperativePanelGroupHandle>(null);

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const [refreshKey, setRefreshKey] = useState(0);

  const { iframeRef, shouldLoadIframe } = useOptimizedIframe({
    previewUrl: src,
    containerRef,
  });

  const [height, setHeight] = useState<number>(fallbackHeight);
  const [hasMeasured, setHasMeasured] = useState(false);

  const expectedId = useMemo(() => {
    try {
      return new URL(src, window.location.origin).pathname;
    } catch {
      return src.split('?')[0];
    }
  }, [src]);

  // reset on src change
  useEffect(() => {
    setHeight(fallbackHeight);
    setHasMeasured(false);
  }, [src, fallbackHeight]);

  // listen for iframe height
  useEffect(() => {
    if (!shouldLoadIframe) return;

    const handler = (e: MessageEvent) => {
      if (e.data?.type !== 'IFRAME_HEIGHT') return;
      if (e.data.id !== expectedId) return;

      const next = Math.min(
        Math.ceil(Number(e.data.height) || fallbackHeight),
        maxHeight
      );

      setHeight((prev) => (Math.abs(prev - next) < 2 ? prev : next));
      setHasMeasured(true);
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [shouldLoadIframe, expectedId, fallbackHeight, maxHeight]);

  const handleRefresh = () => {
    setHasMeasured(false);
    setHeight(fallbackHeight);
    setRefreshKey((k) => k + 1);
  };

  return (
    <>
      {/* HEIGHT-LOCKED CONTAINER */}
      <div
        ref={containerRef}
        className='relative w-full border bg-background h-[calc(100vh-12rem)]'
        // style={{ height }}
      >
        {/* LOADING STATES */}
        {!shouldLoadIframe && (
          <div className='flex h-full items-center justify-center bg-neutral-200 dark:bg-neutral-800 animate-pulse' />
        )}

        {/* {shouldLoadIframe && !hasMeasured && (
          <div className='absolute inset-0 z-10 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 animate-pulse' />
        )} */}

        {/* PANEL GROUP MUST LIVE INSIDE HEIGHT */}
        {shouldLoadIframe && (
          <PanelGroup
            ref={panelGroupRef}
            direction={isLargeScreen ? 'horizontal' : 'vertical'}
            className='h-full'
          >
            {/* MAIN PREVIEW — FULL WIDTH */}
            <Panel
              id='preview'
              defaultSize={DEFAULTSIZE}
              minSize={30}
              className='relative'
            >
              <iframe
                key={refreshKey}
                ref={iframeRef}
                src={src}
                frameBorder={0}
                sandbox='allow-scripts allow-same-origin'
                className='h-full w-full'
              />
            </Panel>

            {/* RESIZE HANDLE */}
            {isLargeScreen && (
              <PanelResizeHandle className='relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 hover:before:h-16 dark:before:bg-zinc-600' />
            )}

            {/* SECOND PANEL — COLLAPSED BY DEFAULT */}
            {isLargeScreen && (
              <Panel
                id='secondary'
                defaultSize={0}
                minSize={0}
                collapsible
                className='dark:bg-neutral-900 bg-background'
              />
            )}
          </PanelGroup>
        )}
      </div>

      {/* TOOLBAR */}
      <div className='absolute top-0 left-[12.5rem] flex gap-2'>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleRefresh}
              className='grid h-10 w-10 cursor-pointer place-items-center border bg-neutral-100 text-primary dark:bg-neutral-800'
            >
              <RefreshCcw className='h-5 w-5' />
            </button>
          </TooltipTrigger>
          <TooltipContent>Refresh</TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
