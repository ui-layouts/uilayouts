import { defineDesignSystem } from '../types';

export const hero_share_appDesign = defineDesignSystem({
  name: 'Share App',
  sourceFiles: [
    {
      path: 'packages/blocks/src/hero-section/hero-share-app.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/components/ui/timeline-animation.tsx',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      path: 'apps/ui-layout/hooks/use-media-query.tsx',
      role: 'the breakpoint hook that switches the mobile composition',
    },
    {
      path: 'apps/ui-layout/components/ui/motion-drawer.tsx',
      role: 'the responsive navigation drawer used by this block',
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
      name: '@/components/ui/timeline-animation',
      kind: 'local',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      name: '@/hooks/use-media-query',
      kind: 'local',
      role: 'the breakpoint hook that switches the mobile composition',
    },
    {
      name: '@/components/ui/motion-drawer',
      kind: 'local',
      role: 'the responsive navigation drawer used by this block',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Radial sharing orbit defines the identity. The section should feel immersive and launch-ready.',
  typography:
    'A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-sm`, `font-semibold`, `text-7xl`, `text-9xl`, `font-black`, `tracking-tighter`, `text-xl`, `text-2xl`, `text-lg`.',
  palette:
    'The implementation anchors its palette with `bg-red-50`, `text-neutral-900`, `bg-neutral-800`, `border-neutral-900`, `text-white`, `bg-white`, `border-neutral-200`, `text-black`, `bg-neutral-200`, `bg-red-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.',
  background:
    'Anchor a red gradient share control in the center, then absolutely orbit rotated user/file cards around it; use red haze, hard white cards, and opposing ±15° tilts to imply outward distribution.',
  effects: [
    {
      name: 'Radial sharing orbit',
      recipe:
        'Anchor a red gradient share control in the center, then absolutely orbit rotated user/file cards around it; use red haze, hard white cards, and opposing ±15° tilts to imply outward distribution.',
      usage: 'visualizing content radiating from a single action',
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
    'Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.',
  interactions:
    'Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.',
  imagery:
    'Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.',
  extensionRules: [
    'Carry the **Radial sharing orbit** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
