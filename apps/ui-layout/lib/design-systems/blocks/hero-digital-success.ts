import { defineDesignSystem } from '../types';

export const hero_digital_successDesign = defineDesignSystem({
  name: 'Digital Success',
  sourceFiles: [
    {
      path: 'packages/blocks/src/hero-section/hero-digital-success.tsx',
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
      name: '@shadergradient/react',
      kind: 'external',
      role: 'renders the animated WebGL shader/gradient field; use its configured uniforms rather than a CSS approximation',
      install: 'pnpm add @shadergradient/react',
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
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
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
    'Volumetric red shader glow defines the identity. The section should feel immersive and launch-ready.',
  typography:
    'A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-lg`, `text-sm`, `font-medium`, `text-xl`, `font-light`, `leading-relaxed`, `text-xs`.',
  palette:
    'The implementation anchors its palette with `bg-black`, `text-white`, `bg-neutral-800`, `border-neutral-900`, `bg-white`, `text-black`, `bg-neutral-100`, `bg-red-500`, `from-white`, `via-red-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.',
  background:
    'Use the shader gradient as the canvas, overlay black for legibility, then reserve the white-to-red gradient and 20px red glow for the oversized display word and primary accent.',
  effects: [
    {
      name: 'Volumetric red shader glow',
      recipe:
        'Use the shader gradient as the canvas, overlay black for legibility, then reserve the white-to-red gradient and 20px red glow for the oversized display word and primary accent.',
      usage: 'the single emotional focal point, never every card',
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
    'Carry the **Volumetric red shader glow** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
