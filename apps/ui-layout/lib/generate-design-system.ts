type DesignSystemInput = {
  id: string;
  name: string;
  description: string;
  source: string;
};

const unique = (values: string[]) => [...new Set(values)].sort();

function tailwindTokens(source: string) {
  const strings = source.match(/(['"`])(?:\\.|(?!\1)[^\\])*\1/g) ?? [];
  return unique(
    strings
      .flatMap((value) => value.slice(1, -1).split(/\s+/))
      .filter((token) => /^[\w:[\]/.%#(),-]+$/.test(token) && token.includes('-'))
      .map((token) => token.replace(/[,'"`}]+$/, ''))
  );
}

function matching(tokens: string[], pattern: RegExp) {
  return tokens.filter((token) => pattern.test(token));
}

function line(label: string, values: string[], fallback: string) {
  return `- **${label}:** ${values.length ? `\`${values.join('`, `')}\`` : fallback}`;
}

/** Build a portable, block-specific prompt directly from the block's source code. */
export function generateDesignSystem({ id, name, description, source }: DesignSystemInput) {
  const tokens = tailwindTokens(source);
  const colors = matching(
    tokens,
    /(?:^|:)(?:bg|text|border|from|via|to|fill|stroke|ring|shadow)-(?!clip|center|left|right|top|bottom|transparent$)/
  );
  const typography = matching(
    tokens,
    /(?:^|:)(?:font-|text-(?:xs|sm|base|lg|xl|[2-9]xl|\[)|leading-|tracking-|uppercase|lowercase|capitalize)/
  );
  const spacing = matching(
    tokens,
    /(?:^|:)(?:p[trblxy]?|m[trblxy]?|gap|space-[xy]|max-w|w-|h-|min-h)-/
  );
  const shape = matching(tokens, /(?:^|:)(?:rounded|border(?:-|$)|shadow|ring-|outline)/);
  const effects = matching(
    tokens,
    /(?:gradient|blur|backdrop|opacity|shadow|mask|mix-blend|filter|perspective|rotate|scale|translate|skew|clip-|overflow)/
  );
  const interactions = matching(
    tokens,
    /(?:hover:|focus:|active:|group-hover:|peer-|cursor-|transition|duration-|ease-)/
  );
  const responsive = matching(tokens, /^(?:sm|md|lg|xl|2xl):/);
  const darkMode = matching(tokens, /^dark:/);
  const motion = unique(
    source.match(/(?:initial|animate|exit|whileHover|whileTap|transition|variants)=/g) ?? []
  );
  const imports = unique(
    [...source.matchAll(/from\s+['"]([^'"]+)['"]/g)]
      .map((match) => match[1])
      .filter((dependency) => !dependency.startsWith('.'))
  );

  return `# ${name} — Design System

> An implementation brief derived from the **${name}** block (${id}). Give this file to an AI when asking it to create new sections that must feel native to this design.

## Creative direction

${description} Preserve the block's visual hierarchy, density, geometry, color behavior, and motion language. New sections should look like siblings of the source block—not generic components with similar content.

## Design tokens found in the source

### Color and surfaces
${line('Exact Tailwind tokens', colors, 'Use the project theme foreground, background, border, primary, and muted semantic colors.')}
${line('Dark-mode overrides', darkMode, 'No explicit dark-mode overrides; inherit the surrounding theme.')}

### Typography
${line('Type scale and treatment', typography, 'Inherit the project font and use a restrained heading/body hierarchy.')}

### Spacing and composition
${line('Sizing and rhythm', spacing, 'Follow the existing section container and a consistent responsive spacing rhythm.')}
${line('Responsive changes', responsive, 'Keep the composition fluid and stack content on narrow screens.')}

### Shape and depth
${line('Edges, borders, and elevation', shape, 'Use restrained borders and elevation consistent with the source.')}

## Signature effects and behavior

${line('Visual effects', effects, 'The source relies on clean surfaces rather than a decorative effect layer.')}
${line('Interaction states', interactions, 'Keep feedback subtle, accessible, and consistent with adjacent controls.')}
${line('Motion API', motion, 'No explicit animation API is used; avoid adding ornamental motion.')}

## Implementation vocabulary

${line('Libraries and design primitives', imports, 'React and the existing project primitives.')}

## Rules for extending this block

1. Reuse the exact tokens above before inventing new values; semantic theme tokens must continue to work in light and dark themes.
2. Match the source's content width, whitespace, border radius, border weight, and heading-to-body contrast.
3. Repeat its signature gradients, masks, blur, shadows, and interaction timing only where they reinforce hierarchy.
4. Preserve responsive intent. Never shrink a desktop arrangement blindly; reflow it using the listed breakpoints.
5. Keep new UI accessible: semantic landmarks, logical heading order, keyboard-visible controls, meaningful alt text, and sufficient contrast.
6. Do not introduce a competing font, color palette, radius scale, illustration style, or animation language.

## AI handoff prompt

Create the requested section as an extension of **${name}**. Treat this document as the source of truth. Use the listed tokens and behaviors, keep the same visual voice and responsive strategy, and make the result production-ready React with Tailwind CSS. Preserve existing project primitives and dependencies instead of replacing them. Return the complete implementation, including any data structures and accessible interaction states.
`;
}
