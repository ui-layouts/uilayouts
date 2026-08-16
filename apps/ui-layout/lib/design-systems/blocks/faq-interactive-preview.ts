import { defineDesignSystem } from '../types';

export const faq_interactive_previewDesign = defineDesignSystem({
  name: 'Interactive Preview',
  sourceFiles: [
    {
      path: 'packages/blocks/src/faq-section/faq-interactive-preview.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
    },
    {
      path: 'apps/ui-layout/components/ui/timeline-animation.tsx',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
  ],
  dependencies: [
    {
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
    {
      name: '@/components/ui/timeline-animation',
      kind: 'local',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      name: 'clsx',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add clsx',
    },
    {
      name: 'tailwind-merge',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add tailwind-merge',
    },
  ],
  personality:
    'Preview-on-hover FAQ defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-2xl`, `text-3xl`, `font-medium`, `text-lg`, `font-semibold`, `font-spaceGrotesk`, `text-xs`, `tracking-widest`, `leading-tight`, `leading-relaxed`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-neutral-900`, `text-black`, `text-slate-600`, `bg-slate-50`, `bg-neutral-100`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.05),0px_2px_4px_0px_rgba(0,0,0,0.05)]`, `text-slate-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.',
  background:
    'Pair the question list with a changing visual preview; selected content scales to 1.02 with 2xl depth, while hidden affordances slide from -x-4 and fade in.',
  effects: [
    {
      name: 'Preview-on-hover FAQ',
      recipe:
        'Pair the question list with a changing visual preview; selected content scales to 1.02 with 2xl depth, while hidden affordances slide from -x-4 and fade in.',
      usage: 'showing the answer’s outcome before the user commits',
    },
    {
      name: 'Layer discipline',
      recipe:
        'Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.',
      usage:
        'all new sections that reuse the signature treatment without obscuring text or controls',
    },
  ],
  buttons:
    'Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.',
  interactions:
    'Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.',
  imagery:
    'Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.',
  extensionRules: [
    'Carry the **Preview-on-hover FAQ** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
    'Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.',
    'On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.',
    'Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.',
  ],
  avoid: [
    'Listing raw utility classes as a substitute for design intent.',
    'Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.',
    'Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.',
  ],
});
