# Feature Highlights — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-highlights` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/feature-section/feature-highlights.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Black spotlight strip defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-bold`, `tracking-widest`, `text-5xl`, `tracking-tight`, `text-2xl`, `leading-relaxed`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-black`, `text-pink-500`, `text-white`, `border-neutral-800`, `bg-neutral-900`, `bg-neutral-950`, `text-slate-400`, `text-slate-300`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Keep the surface nearly black, typography white/slate, and use pink as the only high-energy accent; crop product visuals aggressively and scale the active highlight rather than decorating every item.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Black spotlight strip.** Keep the surface nearly black, typography white/slate, and use pink as the only high-energy accent; crop product visuals aggressively and scale the active highlight rather than decorating every item.
   - **Use it for:** directing attention through strong contrast and one accent
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border treatment

**Location:** `packages/blocks/src/feature-section/feature-highlights.tsx:35-41`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
          {darkFeatures.map((f, i) => (
            <div
              key={i}
              className="group p-8 border border-neutral-800 rounded-xl hover:bg-neutral-900 bg-neutral-950 transition-all duration-300"
            >
              <div className="size-10 flex items-center justify-center mb-10 text-pink-500">
                <f.icon className="size-8" />
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/feature-section/feature-highlights.tsx:46-52`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
              <p className="text-slate-400 leading-relaxed mb-10 text-pretty">
                {f.desc}
              </p>
              <button className="flex items-center gap-2 text-slate-300 group-hover:text-pink-500 transition-colors font-medium">
                Learn more <ArrowRight className="size-4" />
              </button>
            </div>
```
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Black spotlight strip** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Feature Highlights**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
