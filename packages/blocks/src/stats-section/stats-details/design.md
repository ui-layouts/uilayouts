# Stats Details — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-details` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/stats-section/stats-details.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Orange detail rail defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-lg`, `font-bold`, `text-xs`, `tracking-widest`, `text-4xl`, `font-semibold`, `tracking-tight`, `text-sm`, `leading-relaxed`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-zinc-50`, `border-zinc-100`, `border-zinc-200`, `bg-orange-600`, `text-zinc-900`, `text-white`, `text-zinc-100`, `text-zinc-400`, `text-zinc-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Keep the main grid white with orange-600 as the section marker; reveal contextual actions by opacity on card hover rather than moving the entire surface.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Orange detail rail.** Keep the main grid white with orange-600 as the section marker; reveal contextual actions by opacity on card hover rather than moving the entire surface.
   - **Use it for:** pairing bold totals with readable supporting explanations
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Border-led structure

**Location:** `packages/blocks/src/stats-section/stats-details.tsx:30-48`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-8 rounded-2xl relative overflow-hidden bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors"
            >
              <article className="relative z-10">
                <div className="size-8 rounded-lg bg-white group-hover:bg-orange-600 border border-zinc-200 flex items-center justify-center text-lg font-bold text-zinc-900 mb-6 group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest group-hover:text-zinc-100 text-zinc-400 mb-2">
                  {stat.label}
                </h3>
                <p className="text-4xl font-semibold tracking-tight group-hover:text-white text-zinc-900 mb-4 ">
                  {stat.value}
                </p>
                <p className="text-sm group-hover:text-zinc-100 text-zinc-500 text-pretty leading-relaxed">
                  {stat.description}
                </p>
              </article>
```

### 2. Low-opacity icon pattern

**Location:** `packages/blocks/src/stats-section/stats-details.tsx:49-55`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
              <img
                src="https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="supportive img"
                className="absolute top-0 left-0 w-full object-fill opacity-0 group-hover:opacity-100 pointer-events-none"
              />
            </div>
          ))}
```
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Orange detail rail** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Stats Details**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
