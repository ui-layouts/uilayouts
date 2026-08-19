# Advanced Stats — Design System

> Use this file as the complete visual and implementation brief for extending the `advanced-stats` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/stats-section/advanced-stats/index.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/blocks/src/stats-section/advanced-stats/charts.tsx` — a supporting module imported by the canonical block
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.
- **recharts** (external) — renders the chart geometry and data visualization. Install with `pnpm add recharts`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Analytical chart cockpit defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-dmSans`, `font-bold`, `text-xl`, `tracking-tight`, `text-3xl`, `font-semibold`, `tracking-tighter`, `text-xs`, `font-medium`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-zinc-50`, `border-zinc-200`, `bg-zinc-900`, `text-white`, `text-zinc-500`, `text-zinc-400`, `bg-zinc-800`, `border-zinc-100`, `text-zinc-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Use restrained white data cards, zinc labels and red exception states; animate Recharts lines/areas with SVG masks so charts draw into view and keep axes secondary.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Analytical chart cockpit.** Use restrained white data cards, zinc labels and red exception states; animate Recharts lines/areas with SVG masks so charts draw into view and keep axes secondary.
   - **Use it for:** turning dense operational data into a legible instrument panel
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Source-specific visual behavior

**Location:** `packages/blocks/src/stats-section/advanced-stats/index.tsx:1-7`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
'use client'
import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
import { ClippedAreaChart } from './charts'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

const kpis = [
```

### 2. Border-led structure

**Location:** `packages/blocks/src/stats-section/advanced-stats/index.tsx:35-43`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
          <TimelineAnimation
            animationNum={1}
            timelineRef={timelineRef}
            className="lg:col-span-2 p-8 rounded-3xl bg-zinc-50 border border-zinc-200"
          >
            <ClippedAreaChart />
          </TimelineAnimation>

          {/* Breakdown Section */}
```

### 3. Border-led structure

**Location:** `packages/blocks/src/stats-section/advanced-stats/index.tsx:117-126`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
              timelineRef={timelineRef}
              key={kpi.label}
              className={cn(
                'p-6 rounded-2xl border bg-zinc-50 border-zinc-200 transition-colors',
                kpi.status === 'up'
                  ? 'hover:border-emerald-400 hover:bg-emerald-50'
                  : 'hover:border-rose-400 hover:bg-rose-50'
              )}
            >
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
```
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Analytical chart cockpit** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Advanced Stats**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
