import { defineDesignSystem } from '../types';

export const footer_bentoDesign = defineDesignSystem({
  name: 'Footer Bento',
  sourceFiles: [
    {
      path: 'packages/blocks/src/footer-section/footer-bento.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
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
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
  ],
  personality:
    'Utility bento footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-2xl`, `font-bold`, `tracking-tight`, `leading-relaxed`, `text-sm`, `font-semibold`, `text-xs`, `tracking-widest`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-neutral-900`, `border-neutral-200`, `border-neutral-800`, `bg-neutral-100`, `text-neutral-950`, `text-neutral-50`, `text-neutral-500`, `text-neutral-400`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.',
  background:
    'Segment navigation, newsletter and identity into mixed neutral tiles; alternate light/dark surfaces instead of using one horizontal footer band.',
  effects: [
    {
      name: 'Utility bento footer',
      recipe:
        'Segment navigation, newsletter and identity into mixed neutral tiles; alternate light/dark surfaces instead of using one horizontal footer band.',
      usage: 'making dense footer utilities scan like a dashboard',
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
    'Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.',
  interactions:
    'Keep footer motion minimal: link color/underline and button press states are sufficient.',
  imagery:
    'Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.',
  extensionRules: [
    'Carry the **Utility bento footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
