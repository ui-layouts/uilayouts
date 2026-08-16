import { defineDesignSystem } from '../types';

export const team_troopsDesign = defineDesignSystem({
  name: 'Troops',
  sourceFiles: [
    {
      path: 'packages/blocks/src/team-section/team-troops.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/components/ui/timeline-animation.tsx',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
  ],
  dependencies: [
    {
      name: '@/components/ui/timeline-animation',
      kind: 'local',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Graphic monochrome roster defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-6xl`, `font-semibold`, `font-spaceGrotesk`, `text-lg`, `text-base`, `text-2xl`, `font-bold`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-[#4B70F5]`, `text-neutral-500`, `text-blue-600`, `text-neutral-400`, `border-white`, `border-black`, `shadow-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Use strong black borders and shadows on white cards, grayscale portraits that develop into color, and #4B70F5/blue for role or action cues.',
  effects: [
    {
      name: 'Graphic monochrome roster',
      recipe:
        'Use strong black borders and shadows on white cards, grayscale portraits that develop into color, and #4B70F5/blue for role or action cues.',
      usage: 'making a team feel like a bold collection of profile cards',
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
    'Carry the **Graphic monochrome roster** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
