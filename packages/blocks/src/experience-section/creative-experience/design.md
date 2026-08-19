# Creative Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `creative-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/experience-section/creative-experience.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Expandable creative accordion defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-7xl`, `text-5xl`, `font-manrope`, `font-semibold`, `text-base`, `text-sm`, `text-xs`, `text-xl`, `font-normal`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-zinc-100`, `border-neutral-300`, `bg-zinc-200`, `text-black`, `text-neutral-600`, `text-zinc-800`, `bg-neutral-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use neutral paper panels and data-active icon rotations; blur/scale content from 95% into clarity, reveal supporting imagery and controls only for the active row.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Expandable creative accordion.** Use neutral paper panels and data-active icon rotations; blur/scale content from 95% into clarity, reveal supporting imagery and controls only for the active row.
   - **Use it for:** turning a timeline into an exploratory editorial interaction
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border treatment

**Location:** `packages/blocks/src/experience-section/creative-experience.tsx:90-100`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
                animationNum={index}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="border-t border-neutral-300"
              >
                <AccordionHeader
                  customIcon
                  className="hover:no-underline px-4 gap-4 py-2 relative data-active:bg-zinc-200 hover:bg-transparent text-black sm:text-base text-sm"
                >
                  <div className="flex items-center space-x-2 sm:gap-5 gap-2 sm:justify-between justify-end">
                    <span className="flex flex-col space-y-2">
```

### 2. Low-opacity icon pattern

**Location:** `packages/blocks/src/experience-section/creative-experience.tsx:102-109`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
                        ({item.year})
                      </span>
                    </span>
                    <span className="relative opacity-0 scale-95 group-data-active:opacity-100 group-data-active:scale-100 group-hover:scale-100 group-hover:opacity-100 transition-opacity group-data-active:rotate-90 text-neutral-600 p-2 -translate-x-1 rounded-xl">
                      <Plus className="group-data-active:rotate-45 transition-all duration-300" />
                    </span>
                  </div>
                  <p className="flex flex-col">
```
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Expandable creative accordion** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Creative Experience**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
