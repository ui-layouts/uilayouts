'use client';
import { TreeCodeViewer } from '@/components/ui/tree-view-code';
import { type TransformedCodeFile, transformCodeFiles } from '@/lib/transform-code-files';
import React from 'react';

const sampleFileData = [
  {
    fileName: 'hero-ai-value-proposition.tsx',
    fileSrc: `'use client'
import React, { useRef } from 'react'
import {
  Layout,
  Monitor,
  Smartphone,
  PenTool,
  MousePointer2,
} from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

export const HeroAiValueProposition = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="relative min-h-screen bg-[#f9f9f9] text-[#111] overflow-hidden flex flex-col"
      ref={timelineRef}
    >
      {/* Header */}
      <TimelineAnimation
        once={true}
        as="header"
        animationNum={1}
        timelineRef={timelineRef}
        className="relative z-10 w-full max-w-7xl mx-auto p-6 flex items-center justify-between border-x border-zinc-200"
      >
        <div className="flex items-center gap-2">
          <svg
            className="fill-black w-8 h-8"
            width="97"
            height="108"
            viewBox="0 0 97 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            UI-Layout
          </span>
        </div>

        <button className="bg-white border border-neutral-100 text-neutral-500 px-4 py-2.5 rounded-full font-bold text-sm shadow-sm hover:text-black hover:border-neutral-300 transition-all cursor-pointer">
          Sign in
        </button>
      </TimelineAnimation>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6">
        <article className="border-y w-full border-zinc-200">
          <div className="flex flex-col items-center text-center space-y-4 max-w-7xl mx-auto border-x border-zinc-200 p-8">
            <TimelineAnimation
              once={true}
              as="h1"
              animationNum={2}
              timelineRef={timelineRef}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900 "
            >
              AI-generated project briefs <br className="hidden md:block" />{' '}
              built for designers
            </TimelineAnimation>
            <TimelineAnimation
              once={true}
              as="p"
              animationNum={3}
              timelineRef={timelineRef}
              className="text-neutral-400 text-lg md:text-xl max-w-4xl font-medium leading-relaxed"
            >
              Turn rough ideas into clear, structured project briefs in seconds.
              Let AI handle the planning so you can focus on design, creativity,
              and execution.
            </TimelineAnimation>
          </div>
        </article>
        <div className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto border-x border-zinc-200 flex flex-col justify-center gap-5 p-10">
            <TimelineAnimation
              once={true}
              as="button"
              animationNum={4}
              timelineRef={timelineRef}
              className="bg-neutral-900 cursor-pointer text-white px-10 py-4 rounded-full font-bold text-base shadow-2xl hover:bg-black transition-all w-fit mx-auto border-4 border-white/80"
            >
              Get started for free
            </TimelineAnimation>
            {/* Designer Proof */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <TimelineAnimation
                once={true}
                as="p"
                animationNum={5}
                timelineRef={timelineRef}
                className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]"
              >
                Join 80,000+ designers
              </TimelineAnimation>
              <div className="flex items-center gap-1">
                <TimelineAnimation
                  once={true}
                  as="div"
                  animationNum={7}
                  timelineRef={timelineRef}
                  className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                >
                  1,234+
                </TimelineAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>`,
    pathSrc: 'registry/components/hero-ai-value-proposition.tsx',
  },
  {
    fileName: 'timeline-animation.tsx',
    fileSrc: `import { type HTMLMotionProps, motion, useInView } from 'motion/react';
import type React from 'react';
import type { Variants } from 'motion/react';

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: React.RefObject<HTMLElement | null>;
  as?: T;
  customVariants?: Variants;
  once?: boolean;
} & HTMLMotionProps<T>;

export const TimelineAnimation = <
  T extends keyof HTMLElementTagNameMap = 'div',
>({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = true,
  ...props
}: TimelineContentProps<T>) => {
  const isInView = useInView(timelineRef, { once });
  const MotionComponent = motion[as || 'div'] as React.ElementType;

  return (
    <MotionComponent
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      custom={animationNum}
      variants={customVariants || defaultSequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};`,
    pathSrc: 'registry/components/timeline-animation.tsx',
  },
  {
    fileName: 'utils.tsx',
    fileSrc: `import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
    pathSrc: 'registry/components/utils.tsx',
  },
];

export default function TreeCodeViewerDemo() {
  const [files, setFiles] = React.useState<TransformedCodeFile[]>([]);

  React.useEffect(() => {
    const transformFiles = async () => {
      const transformedFiles = await transformCodeFiles(sampleFileData, 'tree-code-viewer');
      setFiles(transformedFiles);
    };
    transformFiles();
  }, []);

  if (files.length === 0) {
    return (
      <div className='p-6 w-full mx-auto h-[400px] bg-muted animate-pulse'></div>
    );
  }

  return (
    <div className='p-6 w-full mx-auto bg-background rounded'>
      <TreeCodeViewer files={files} />
    </div>
  );
}
