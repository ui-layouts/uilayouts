# Journey — Design System

> Use this file as the complete visual and implementation brief for extending the `faq-journey` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/faq-section/faq-journey.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@/lib/utils** (local) — the class-merging utility.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Guided FAQ pathway defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-2xl`, `text-3xl`, `font-medium`, `text-xl`, `font-semibold`, `font-spaceGrotesk`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-neutral-900`, `bg-slate-200`, `border-slate-100`, `text-neutral-500`, `bg-black`, `text-white`, `bg-neutral-100`, `text-slate-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.

## Background construction

Use a bright question column beside a black destination card; advance arrows by 1px and animate panels as sequential journey steps with strong xl/2xl depth.

## Imagery and iconography

Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.

## Unique components and signature effects

1. **Guided FAQ pathway.** Use a bright question column beside a black destination card; advance arrows by 1px and animate panels as sequential journey steps with strong xl/2xl depth.
   - **Use it for:** framing help content as progression toward an outcome
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/faq-section/faq-journey.tsx:118-124`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
                  <TimelineAnimation
                    animationNum={idx + 1}
                    timelineRef={timelineRef}
                    className="shrink-0 w-14 h-14 translate-x-1 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xl font-semibold font-spaceGrotesk text-neutral-500 group-data-active:border-primary-500 group-data-active:bg-black group-data-active:text-white transition-all duration-500 shadow-xl sm:flex"
                  >
                    {(idx + 1).toString().padStart(2, '0')}
                  </TimelineAnimation>
```

### 2. Structural border treatment

**Location:** `packages/blocks/src/faq-section/faq-journey.tsx:131-137`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
                      {item.question}
                    </AccordionHeader>
                    <AccordionPanel className="data-active:bg-transparent">
                      <div className="text-slate-500  border-t border-slate-100 pt-4 mt-2">
                        {item.answer}
                      </div>
                    </AccordionPanel>
```
<!-- source-audit:end -->

## Buttons

Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.

## Motion and interaction states

Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.

## Rules for extending this design

1. Carry the **Guided FAQ pathway** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Journey**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
