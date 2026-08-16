import type { DesignSystemSpec } from './types';

export function renderDesignSystem(id: string, spec: DesignSystemSpec) {
  const sourceFiles = spec.sourceFiles
    .map(({ path, role }) => `- \`${path}\` — ${role}`)
    .join('\n');
  const dependencies = spec.dependencies
    .map(({ name, kind, role, install }) => {
      const installation = install ? ` Install with \`${install}\`.` : '';
      return `- **${name}** (${kind}) — ${role}.${installation}`;
    })
    .join('\n');
  const effects = spec.effects
    .map(
      ({ name, recipe, usage }, index) =>
        `${index + 1}. **${name}.** ${recipe}\n   - **Use it for:** ${usage}`
    )
    .join('\n');

  return `# ${spec.name} — Design.md

> **Purpose:** Give this file to an AI before asking it to add a page or section that must match the \`${id}\` block. This is an authored visual specification, not a dump of the component's CSS classes.

## Where the implementation lives

Read these open-source files before recreating the effect:

${sourceFiles}

### Libraries and project primitives

${dependencies || '- No effect library is required; the effect is implemented directly with React and CSS/Tailwind.'}

## Design thesis

${spec.personality}

## Visual language

### Typography
${spec.typography}

### Palette and contrast
${spec.palette}

### Composition and rhythm
${spec.composition}

### Background treatment
${spec.background}

### Imagery and iconography
${spec.imagery}

## Signature effects — reproduce these deliberately

${effects}

## Controls and interaction

### Buttons
${spec.buttons}

### Motion and states
${spec.interactions}

## How to extend this design

${spec.extensionRules.map((rule, index) => `${index + 1}. ${rule}`).join('\n')}

## Do not

${spec.avoid.map((rule) => `- ${rule}`).join('\n')}

## AI implementation instruction

Build the requested interface as a sibling of **${spec.name}**. Preserve the design thesis, composition, typography, contrast, button construction, image treatment, and every applicable signature effect above. Effects are structural: reproduce their layering and placement, not merely a vaguely similar color. Use semantic HTML, keyboard-accessible controls, visible focus states, responsive reflow, and the project's existing React/Tailwind primitives. Do not copy the source section's content or layout verbatim; translate its visual grammar into the new section.
`;
}
