import { defineDesignSystem } from '../types';

export const team_magicDesign = defineDesignSystem({
  name: 'Magic',
  sourceFiles: [
    {
      path: 'packages/blocks/src/team-section/team-magic.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/components/ui/timeline-animation.tsx',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: '@/components/ui/timeline-animation',
      kind: 'local',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Cyan holographic profiles defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-6xl`, `font-spaceGrotesk`, `font-semibold`, `text-lg`, `leading-relaxed`, `text-2xl`, `font-bold`, `text-sm`, `text-xs`, `text-3xl`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-950`, `text-white`, `text-neutral-400`, `border-white/10`, `border-blue-500/50`, `border-white/20`, `bg-white/5`, `text-blue-600`, `border-white/30`, `bg-white/10`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Stage profiles on neutral-950 with white/5 glass, cyan #00D1FF edge light and backdrop blur; raise hidden profile details from y=4 while portraits zoom.',
  effects: [
    {
      name: 'Cyan holographic profiles',
      recipe:
        'Stage profiles on neutral-950 with white/5 glass, cyan #00D1FF edge light and backdrop blur; raise hidden profile details from y=4 while portraits zoom.',
      usage: 'creating a futuristic reveal around each person',
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
    'Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.',
  interactions:
    'Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.',
  imagery:
    'Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.',
  extensionRules: [
    'Carry the **Cyan holographic profiles** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
