# Feature Hero — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-hero` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/feature-section/feature-hero.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@/lib/utils** (local) — the class-merging utility.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Masked blue horizon defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-xl`, `leading-relaxed`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_8px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(50,97,237,1)_100%)]`, `text-slate-900`, `text-slate-600`, `bg-blue-600`, `text-white`, `shadow-blue-200`, `bg-blue-50`, `text-blue-600`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Combine a fine diagonal hatch with a bottom blue radial gradient, then mask it to fade before the content; raise the central product frame with a blue-tinted-xl shadow and a slight desktop scale.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Masked blue horizon.** Combine a fine diagonal hatch with a bottom blue radial gradient, then mask it to fade before the content; raise the central product frame with a blue-tinted-xl shadow and a slight desktop scale.
   - **Use it for:** making one feature feel like a product launch moment
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Source-specific visual behavior

**Location:** `packages/blocks/src/feature-section/feature-hero.tsx:1-5`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
'use client'
import { Settings, Users, BarChart3, Lightbulb, Target } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/feature-section/feature-hero.tsx:16-22`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
    highlight: true,
  },
  {
    icon: BarChart3,
    title: 'AI Ad Budget Allocation',
    desc: 'Automatically manages and allocates ad budgets based on campaign performance',
  },
```

### 3. Radial background field

**Location:** `packages/blocks/src/feature-section/feature-hero.tsx:35-45`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
export const FeatureHero = () => {
  return (
    <section className="py-24 bg-white px-6 font-dmSans relative min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(50,97,237,1)_100%)]"></div>

      <div className="py-24 px-6 max-w-7xl mx-auto text-center font-dmSans relative">
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true }}
```
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Masked blue horizon** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Feature Hero**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
