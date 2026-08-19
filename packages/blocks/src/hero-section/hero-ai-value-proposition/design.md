# AI Value Proposition — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-ai-value-proposition` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-ai-value-proposition.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

An editorial border grid divides the page into deliberate horizontal bands and a shared centered column. Inside that frame, a softly elevated product mockup uses stacked shells, restrained shadows, translucent borders, and blurred color pools to feel dimensional without leaving the near-white system.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-xl`, `font-bold`, `tracking-tight`, `text-sm`, `text-5xl`, `text-7xl`, `font-semibold`, `text-lg`, `font-medium`, `leading-relaxed`.

## Palette and contrast

The implementation anchors its palette with `bg-[#f9f9f9]`, `text-[#111]`, `border-zinc-200`, `text-slate-900`, `bg-white`, `border-neutral-100`, `text-neutral-500`, `text-black`, `border-neutral-300`, `text-neutral-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Build the page on `#f9f9f9`. Repeat `border-x border-zinc-200` on the shared `max-w-7xl` column and `border-y`/`border-b` on section bands so every region aligns to the same rails. The product frame then adds a custom low-alpha shadow, two offset shells, pink/orange 100px blurs, and bordered white content cards.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Continuous editorial border rails.** Every major band owns a horizontal divider while its `max-w-7xl` child repeats `border-x border-zinc-200`. The header, headline, CTA/social-proof band, and mockup all share those exact vertical rails.
   - **Use it for:** aligning any new page section to the same invisible column system.
   - **Do not:** wrap each section in unrelated rounded cards; the continuous rails are the page skeleton.

2. **Low, broad mockup elevation.** The preview frame uses `shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]`, a `border-zinc-200` edge, and only `p-2`. This produces depth without a dark floating-card shadow.
   - **Use it for:** the single dominant product preview or another primary artifact.

3. **Stacked paper shells and color pools.** Two neutral shells sit behind the internal mockup at `-top-8`/`-top-4` with progressively wider widths. Pink and orange 300px circles blurred by 100px soften the otherwise monochrome frame.
   - **Use it for:** layered product surfaces; keep the pools at `opacity-40` so borders remain the primary structure.

4. **Selected-versus-dormant option cards.** The selected card uses `border-2 border-blue-500 shadow-2xl`; alternatives use `bg-white/80 border-neutral-100 opacity-80 grayscale` and restore color/opacity on hover.
   - **Use it for:** clearly separating the current AI choice from available options.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Custom elevation recipe

**Location:** `packages/blocks/src/hero-section/hero-ai-value-proposition.tsx:134-145`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
            once={true}
            animationNum={8}
            timelineRef={timelineRef}
            className="relative bg-white backdrop-blur-xl rounded-4xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-zinc-200 p-2"
          >
            <div className="bg-linear-to-b from-neutral-200 from-50% to-blue-400/80 rounded-4xl pt-32">
              {/* Background decorative glows inside the frame */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-100 rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-100 rounded-full blur-[100px] opacity-40"></div>

              {/* Internal Mockup Shell */}
              <TimelineAnimation
```

### 2. Translucent glass layer

**Location:** `packages/blocks/src/hero-section/hero-ai-value-proposition.tsx:165-171`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
                  once={true}
                  animationNum={10}
                  timelineRef={timelineRef}
                  className="flex flex-col gap-12 bg-white backdrop-blur-md border border-neutral-100/50 rounded-t-4xl p-12"
                >
                  {/* Breadcrumbs & Profile */}
                  <div className="flex items-center justify-between">
```

### 3. Low-opacity icon pattern

**Location:** `packages/blocks/src/hero-section/hero-ai-value-proposition.tsx:259-265`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
                            once={true}
                            animationNum={15}
                            timelineRef={timelineRef}
                            className="bg-white/80 p-5 rounded-2xl border border-neutral-100 flex flex-col gap-4 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                          >
                            <div className="w-10 h-10 bg-neutral-100 text-neutral-400 rounded-xl flex items-center justify-center">
                              <PenTool size={20} />
```
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **continuous editorial border rails and restrained mockup elevation** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **AI Value Proposition**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
