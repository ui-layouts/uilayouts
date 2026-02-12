'use client';
import { cn } from '@/lib/utils';
import {
  Check,
  Copy,
  Expand,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
} from 'lucide-react';
import React, { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { getComponentPreview } from '@/lib/component-projections';

type ComponentPreviewProps = {
  hasReTrigger?: boolean;
  className?: string;
  code?: string;
  iframeSrc?: string;
  responsive?: boolean;
  isFitheight?: boolean;
  isFit?: boolean;
  jsonName?: string;
  hideDeviceOpt?: boolean;
  previewComp?: boolean;
  isNotCopy?: boolean;
  iframeComponent?: string;
  componentName?: string;
};
type DynamicComponentType = React.ComponentType<any>;
export default function ComponentPreview({
  hasReTrigger = false,
  className,
  code,
  iframeSrc,
  componentName,
  responsive,
  isFitheight,
  jsonName,
  isNotCopy,
  hideDeviceOpt,
  isFit,
  iframeComponent,
  previewComp,
}: ComponentPreviewProps) {
  const [reTriggerKey, setReTriggerKey] = useState<number>(0);
  const [hasCheckIcon, setHasCheckIcon] = useState(false);
  const [width, setWidth] = useState('100%');
  const [mode, setMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const ComponentPreview = getComponentPreview(componentName || '');

  const handleReTrigger = () => {
    if (hasReTrigger) {
      setReTriggerKey((prevKey) => prevKey + 1);
    }
  };

  const onCopy = () => {
    navigator.clipboard.writeText(code || '');
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <>
      <div className='absolute right-1 top-0 z-10 flex h-12 items-center gap-2 not-prose'>
        {responsive && (
          <>
            {!hideDeviceOpt && (
              <div className='flex items-center gap-2 rounded-lg border dark:bg-primary-base bg-neutral-200 p-1'>
                <TooltipProvider>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger
                      className={`rounded-md p-1 ${
                        mode === 'desktop'
                          ? 'bg-primary text-primary-foreground'
                          : ''
                      }`}
                      onClick={() => {
                        setMode('desktop');
                        setWidth('100%');
                      }}
                    >
                      <Monitor className='h-5 w-5' />
                    </TooltipTrigger>
                    <TooltipContent className='dark:bg-primary-base bg-neutral-200 text-primary border px-2 py-1 rounded-md -translate-y-1'>
                      <p className='capitalize'>Desktop</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger
                      className={`rounded-md p-1 ${
                        mode === 'tablet'
                          ? 'bg-primary text-primary-foreground'
                          : ''
                      }`}
                      onClick={() => {
                        setMode('tablet');

                        setWidth('50%');
                      }}
                    >
                      <Tablet className='h-5 w-5' />
                    </TooltipTrigger>
                    <TooltipContent className='dark:bg-primary-base bg-neutral-200 text-primary border px-2 py-1 rounded-md -translate-y-1'>
                      <p className='capitalize'>Tab</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger
                      className={`rounded-md p-1 ${
                        mode === 'mobile'
                          ? 'bg-primary text-primary-foreground'
                          : ''
                      }`}
                      onClick={() => {
                        setMode('mobile');
                        setWidth('32%');
                      }}
                    >
                      <Smartphone className='h-4 w-4' />
                    </TooltipTrigger>
                    <TooltipContent className='dark:bg-primary-base bg-neutral-200 text-primary border px-2 py-1 rounded-md -translate-y-1'>
                      <p className='capitalize'>Mobile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
          </>
        )}

        {!isNotCopy && (
          <button
            className='relative grid cursor-pointer -translate-y-[0.05rem] place-content-center rounded-lg border dark:bg-primary-base bg-neutral-200 dark:hover:shadow-[0px_1px_10px_5px_#3f7ef3] hover:shadow-[0px_1px_10px_5px_#9abaf7] dark:hover:border-blue-500 hover:border-blue-300 p-2 px-2.5'
            onClick={onCopy}
          >
            <div
              className={`transform transition-all duration-300 ${
                hasCheckIcon ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <Copy className='h-5 w-5' />
            </div>
            <div
              className={`absolute inset-0 left-0 top-0 grid h-full w-full transform place-content-center transition-all duration-300 ${
                hasCheckIcon ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            >
              <Check className='h-5 w-5' />
            </div>
          </button>
        )}

        {hasReTrigger && (
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger
                className='relative grid  group cursor-pointer place-content-center rounded-lg border dark:bg-primary-base bg-neutral-200 p-2 px-2'
                onClick={handleReTrigger}
              >
                <RotateCw className='h-5 w-5 group-hover:rotate-180 transition-transform' />
              </TooltipTrigger>
              <TooltipContent className='dark:bg-primary-base bg-neutral-200 text-primary border rounded-md px-2 py-1 -translate-y-1'>
                <p className='capitalize '>Reload</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {jsonName && (
          <a
            href={`https://v0.dev/chat/api/open?url=https://ui-layouts.com/r/${jsonName}`}
            target='_blank'
            rel='noreferrer'
            data-slot='button'
            className='inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm py-2 h-8 gap-1 rounded-[6px] bg-black px-2 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black '
            aria-label='Open in v0'
          >
            <svg
              viewBox='0 0 40 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='size-5 text-current'
            >
              <path
                d='M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z'
                fill='currentColor'
              ></path>
              <path
                d='M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z'
                fill='currentColor'
              ></path>
            </svg>
          </a>
        )}

        {previewComp && (
          <>
            {iframeComponent ? (
              <>
                <a
                  href={`${process.env.NEXT_PUBLIC_ANIMATION_URL}/${iframeComponent}`}
                  target='_blank'
                  className='relative flex cursor-pointer  items-center  gap-1 rounded-lg border dark:bg-neutral-700 text-primary bg-neutral-200 p-1 px-2.5'
                >
                  Open <Expand size={20} />
                </a>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>

      {responsive ? (
        <>
          {iframeComponent ? (
            <>
              <div
                className={cn(
                  `lg:h-[600px] sm:h-[500px] h-[400px] w-full rounded-lg bg-codebg border dark:border-neutral-800 overflow-hidden pt-16 p-0`,
                  className
                )}
              >
                <div
                  className='h-full not-prose mx-auto'
                  style={{ width: width }}
                >
                  <iframe
                    src={`${process.env.NEXT_PUBLIC_ANIMATION_URL}/${iframeComponent}`}
                    className='h-full w-full'
                    style={{ maxWidth: '100%' }}
                    loading='lazy'
                    key={reTriggerKey}
                  />
                </div>
              </div>
            </>
          ) : (
            <div
              className={cn(
                `${
                  isFitheight
                    ? 'h-fit py-4'
                    : 'lg:h-[600px] sm:h-[500px] h-[400px]'
                }  w-full rounded-lg bg-codebg border dark:border-neutral-800 overflow-hidden p-0`,
                className
              )}
            >
              <div
                className='h-full not-prose mx-auto'
                style={{ width: width }}
              >
                <>
                  <iframe
                    src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${iframeSrc}`}
                    className='h-full w-full'
                    style={{ maxWidth: '100%' }}
                    loading='lazy'
                    key={reTriggerKey}
                  />
                </>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className={cn(
              `w-full rounded-lg flex flex-col justify-center items-center bg-codebg border dark:border-neutral-800 overflow-hidden`,
              isFitheight
                ? 'h-fit lg:p-6 p-2'
                : isFit
                  ? 'h-fit p-0'
                  : '2xl:h-[600px] xl:h-[550px] h-fit overflow-auto lg:p-6 p-2'
            )}
          >
            {ComponentPreview ? (
              React.createElement(
                ComponentPreview?.componentSrc as unknown as DynamicComponentType,
                {
                  key: reTriggerKey,
                }
              )
            ) : (
              <>Component Not Found</>
            )}
          </div>
        </>
      )}
    </>
  );
}
