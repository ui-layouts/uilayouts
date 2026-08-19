# Tabbed Explorer FAQ — Design System

> Use this file as the complete visual and implementation brief for extending the `faq-tabbed-explorer` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/faq-section/faq-tabbed-explorer.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/lib/utils** (local) — the class-merging utility.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Neumorphic topic explorer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-sm`, `font-semibold`, `font-spaceGrotesk`, `tracking-widest`, `font-medium`, `text-2xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-slate-50`, `border-slate-200`, `text-slate-400`, `bg-neutral-100`, `text-black`, `border-neutral-200`, `shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)]`, `text-slate-600`, `bg-slate-200/50`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.

## Background construction

Use slate-50 panels and a six-layer light/dark shadow recipe to create a deeply extruded navigation card; tabs change topic while the reading surface remains quiet.

## Imagery and iconography

Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.

## Unique components and signature effects

1. **Neumorphic topic explorer.** Use slate-50 panels and a six-layer light/dark shadow recipe to create a deeply extruded navigation card; tabs change topic while the reading surface remains quiet.
   - **Use it for:** turning a large FAQ set into a soft tactile explorer
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border treatment

**Location:** `packages/blocks/src/faq-section/faq-tabbed-explorer.tsx:182-188`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-72 bg-slate-50 p-6 border-b md:border-b-0 md:border-r border-slate-200 pt-10 rounded-l-3xl">
          <h3 className="text-sm font-semibold font-spaceGrotesk text-slate-400 uppercase tracking-widest mb-4 px-2">
            Knowledge Base
          </h3>
```

### 2. Custom elevation recipe

**Location:** `packages/blocks/src/faq-section/faq-tabbed-explorer.tsx:194-201`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
                className={cn(
                  'w-full flex items-center font-spaceGrotesk cursor-pointer gap-3 px-2 py-3 border rounded-xl transition-all font-medium',
                  activeTab === cat.id
                    ? 'bg-neutral-100 text-black border-neutral-200 shadow-primary-500/30 shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)]'
                    : 'text-slate-600 hover:bg-slate-200/50  border-slate-50'
                )}
              >
                <cat.icon size={18} />
```

### 3. Structural border treatment

**Location:** `packages/blocks/src/faq-section/faq-tabbed-explorer.tsx:222-230`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-neutral-200 bg-transparent mb-4"
                >
                  <AccordionHeader className="rounded-xl hover:bg-slate-50 bg-white py-4 px-3 font-semibold font-spaceGrotesk">
                    <span className="text-slate-900">{item.question}</span>
                  </AccordionHeader>
                  <AccordionPanel className="px-0 bg-white  data-active:bg-white">
```
<!-- source-audit:end -->

## Buttons

Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.

## Motion and interaction states

Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.

## Rules for extending this design

1. Carry the **Neumorphic topic explorer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Tabbed Explorer FAQ**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
