import { defineDesignSystem } from '../types';

export const footer_heroDesign = defineDesignSystem({
  name: 'Footer Hero',
  sourceFiles: [
    {
      path: 'packages/blocks/src/footer-section/hero-footer.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
    {
      path: 'packages/ui/src/index.tsx',
      role: 'the open-source workspace UI primitive barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
    {
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
    },
    {
      name: '@repo/ui',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
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
    'Footer as final hero defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `text-6xl`, `font-bold`, `font-semibold`, `text-4xl`, `tracking-tighter`, `text-2xl`, `text-sm`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-100`, `from-gray-200`, `to-gray-300`, `bg-black/20`, `text-white`, `bg-violet-600`, `bg-violet-700`, `bg-white`, `text-violet-600`, `bg-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.',
  background:
    'Treat the footer as a second conversion hero: oversized statement, violet CTA, grayscale metallic text gradient and a large black panel with 2xl depth.',
  effects: [
    {
      name: 'Footer as final hero',
      recipe:
        'Treat the footer as a second conversion hero: oversized statement, violet CTA, grayscale metallic text gradient and a large black panel with 2xl depth.',
      usage: 'ending the page with the same energy as its opening',
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
    'Carry the **Footer as final hero** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
