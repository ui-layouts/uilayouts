import { readFileSync, writeFileSync } from 'node:fs';

const loader = readFileSync('apps/ui-layout/lib/block-design-documents.ts', 'utf8');
const documents = [...loader.matchAll(/'([^']+)':\s+'(packages\/[^']+\/design\.md)'/g)].map(
  ([, id, designPath]) => ({ id, designPath })
);
const checkOnly = process.argv.includes('--check');
let stale = 0;
const START = '<!-- source-audit:start -->';
const END = '<!-- source-audit:end -->';
const GITHUB_BLOB = 'https://github.com/ui-layouts/uilayouts/blob/main/';
const patterns = [
  [/ShaderGradient|Canvas|recharts|AreaChart|LineChart|BarChart|Carousel|motion\./, 12],
  [/radial-gradient|linear-gradient|repeating-linear-gradient|bg-linear|from-\[|to-\[/, 10],
  [/shadow-\[|mask-|clipPath|clip-path|backdrop-blur|blur-\[/, 9],
  [/perspective|rotate-|translate-|scale-|grayscale|mix-blend|opacity-\d+/, 6],
  [/border-[xy]|border-[trbl]|border-2|border-4|border-zinc|border-neutral/, 4],
  [/group-hover|hover:|whileHover|whileTap|drag=|variants=|animate=/, 2],
];
const labels = [
  [
    'ShaderGradient',
    'Configured shader field',
    'This library component and its exact uniforms generate the block’s atmospheric field.',
  ],
  [
    'radial-gradient',
    'Radial background field',
    'The gradient’s focal point, stops, and layer position establish the block’s backdrop.',
  ],
  [
    'repeating-linear-gradient',
    'Patterned background layer',
    'The repeated line recipe gives the surface its recognizable texture.',
  ],
  [
    'shadow-[',
    'Custom elevation recipe',
    'The nonstandard shadow values create the block’s characteristic depth.',
  ],
  [
    'clipPath',
    'Custom clipping geometry',
    'The explicit clip geometry—not a generic rounded card—defines the image treatment.',
  ],
  [
    'mask-',
    'Masked decorative field',
    'The mask controls where the decorative layer appears and where it dissolves.',
  ],
  [
    'backdrop-blur',
    'Translucent glass layer',
    'Blur, transparency, border, and stacking work together as one glass treatment.',
  ],
  [
    'opacity-10',
    'Low-opacity icon pattern',
    'Repeated icons at low opacity create a branded texture without competing with foreground content.',
  ],
  [
    'rotate-',
    'Overlapping transformed composition',
    'Rotation and offset create the intentionally physical, layered arrangement.',
  ],
  [
    'border-x',
    'Structural border grid',
    'Shared border rails divide the page into aligned editorial bands.',
  ],
  [
    'border-zinc',
    'Border-led structure',
    'Hairline borders establish grouping and rhythm without relying on filled cards.',
  ],
  [
    'Carousel',
    'Carousel interaction primitive',
    'This component supplies the block’s distinctive navigation and content motion.',
  ],
  [
    'motion.',
    'Motion-driven behavior',
    'The motion configuration controls the effect’s timing, position, and interaction response.',
  ],
];
function describe(code) {
  for (const [needle, title, why] of labels) if (code.includes(needle)) return { title, why };
  if (/shadow-|blur-/.test(code))
    return {
      title: 'Depth and glow treatment',
      why: 'These exact shadows and blur layers distinguish foreground from atmosphere.',
    };
  if (/border/.test(code))
    return {
      title: 'Structural border treatment',
      why: 'The border placement creates the block’s visual grouping and alignment.',
    };
  return {
    title: 'Source-specific visual behavior',
    why: 'This source fragment contains a high-signal visual or interaction decision unique to the block.',
  };
}
function candidates(lines) {
  const forced = [];
  const shaderStart = lines.findIndex((line) => line.includes('<ShaderGradientCanvas'));
  if (shaderStart >= 0) {
    const shaderEnd = lines.findIndex(
      (line, index) => index > shaderStart && line.includes('</ShaderGradientCanvas>')
    );
    if (shaderEnd > shaderStart) forced.push({ start: shaderStart, end: shaderEnd, score: 100 });
  }
  const hits = [];
  lines.forEach((line, index) => {
    let score = 0;
    for (const [p, w] of patterns) if (p.test(line)) score += w;
    if (score) hits.push({ index, score });
  });
  const groups = [];
  for (const hit of hits) {
    const last = groups.at(-1);
    if (last && hit.index - last.end <= 4) {
      last.end = hit.index;
      last.score = Math.max(last.score, hit.score);
    } else groups.push({ start: hit.index, end: hit.index, score: hit.score });
  }
  const ranked = [
    ...forced,
    ...groups.map((g) => ({
      ...g,
      start: Math.max(0, g.start - 3),
      end: Math.min(lines.length - 1, g.end + 3),
    })),
  ].sort((a, b) => b.score - a.score);
  return ranked
    .filter((g, i, all) => all.slice(0, i).every((x) => g.end < x.start || g.start > x.end))
    .slice(0, 3)
    .sort((a, b) => a.start - b.start);
}
for (const { id, designPath } of documents) {
  let markdown = readFileSync(designPath, 'utf8');
  const sourcePath = markdown.match(
    /^- \[`([^`]+\.(?:ts|tsx))`\]\(https:\/\/github\.com\/ui-layouts\/uilayouts\/blob\/main\/[^)]+\)/m
  )?.[1];
  if (!sourcePath) throw new Error(`No canonical source in ${designPath}`);
  const lines = readFileSync(sourcePath, 'utf8').split('\n');
  const groups = candidates(lines);
  if (!groups.length) throw new Error(`No distinguishing implementation found for ${id}`);
  const items = groups
    .map((g, i) => {
      const code = lines
        .slice(g.start, g.end + 1)
        .join('\n')
        .trimEnd();
      const { title, why } = describe(code);
      return `### ${i + 1}. ${title}\n\n[Open the exact implementation (lines ${g.start + 1}–${g.end + 1})](${GITHUB_BLOB}${sourcePath}#L${g.start + 1}-L${g.end + 1}) — ${why}`;
    })
    .join('\n\n');
  const audit = `${START}\n## Audited source implementation\n\nThese linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.\n\n${items}\n${END}`;
  if (markdown.includes(START))
    markdown = markdown.replace(new RegExp(`${START}[\\s\\S]*?${END}`), audit);
  else markdown = markdown.replace('\n## Buttons', `\n${audit}\n\n## Buttons`);
  const current = readFileSync(designPath, 'utf8');
  if (checkOnly) {
    if (markdown !== current) {
      console.error(`Stale source audit: ${designPath}`);
      stale += 1;
    }
  } else {
    writeFileSync(designPath, markdown);
  }
}
if (stale) process.exit(1);
console.log(
  checkOnly
    ? `Verified ${documents.length} source-derived block effect audits.`
    : `Audited and updated ${documents.length} block design documents.`
);
