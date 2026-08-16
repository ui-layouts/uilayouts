import { defineDesignSystem } from '../types';

export const footer_minimalDesign = defineDesignSystem({
  name: 'Footer Minimal',
  sourceFiles: [
    {
      path: 'packages/blocks/src/footer-section/footer-minimal.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'packages/ui/src/index.tsx',
      role: 'the open-source workspace UI primitive barrel used by this block',
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
      name: '@repo/ui',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
  ],
  personality:
    'Centered minimal footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-sm`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `tracking-wider`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `border-zinc-200`, `bg-zinc-900`, `text-zinc-600`, `text-zinc-400`, `text-zinc-900`, `bg-zinc-50`, `text-white`, `bg-zinc-800`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.',
  background:
    'Use white/zinc-50 space, one dark capsule or icon and very few links; vertically center the floating mark with -50% translation and avoid decorative effects.',
  effects: [
    {
      name: 'Centered minimal footer',
      recipe:
        'Use white/zinc-50 space, one dark capsule or icon and very few links; vertically center the floating mark with -50% translation and avoid decorative effects.',
      usage: 'providing a quiet conclusion after visually rich content',
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
    'Carry the **Centered minimal footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
