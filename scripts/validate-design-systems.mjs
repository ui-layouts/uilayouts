import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const registry = readFileSync('apps/ui-layout/blocks-docs.ts', 'utf8');
const loaderPath = 'apps/ui-layout/lib/block-design-documents.ts';
const loader = readFileSync(loaderPath, 'utf8');
const blockIds = [
  ...registry.matchAll(
    /\{\s*id: '([^']+)',\s*name: '[^']+',\s*des: '[^']*',[\s\S]*?fileSrc: require\(/g
  ),
].map((match) => match[1]);
const documents = [...loader.matchAll(/'([^']+)':\s+'(packages\/[^']+\/design\.md)'/g)].map(
  ([, id, path]) => ({ id, path: resolve(path) })
);
const documentIds = documents.map(({ id }) => id);
const missing = blockIds.filter((id) => !documentIds.includes(id));
const orphaned = documentIds.filter((id) => !blockIds.includes(id));
const duplicates = documentIds.filter((id, index) => documentIds.indexOf(id) !== index);
const missingFiles = documents.filter(({ path }) => !existsSync(path));
const requiredSections = [
  '## Source of truth',
  '## Required libraries and primitives',
  '## Typography',
  '## Palette and contrast',
  '## Composition and rhythm',
  '## Background construction',
  '## Unique components and signature effects',
  '## Buttons',
  '## Motion and interaction states',
  '## AI implementation instruction',
];
const incomplete = documents.flatMap(({ id, path }) => {
  if (!existsSync(path)) return [];
  const markdown = readFileSync(path, 'utf8');
  const absent = requiredSections.filter((section) => !markdown.includes(section));
  const sourceReferences = [...markdown.matchAll(/^- `([^`]+\.(?:ts|tsx))`/gm)].map(
    (match) => match[1]
  );
  const brokenSources = sourceReferences.filter((source) => !existsSync(source));
  return !markdown.trim() || absent.length || !sourceReferences.length || brokenSources.length
    ? [{ id, empty: !markdown.trim(), absent, brokenSources }]
    : [];
});

if (
  missing.length ||
  orphaned.length ||
  duplicates.length ||
  missingFiles.length ||
  incomplete.length
) {
  console.error({ missing, orphaned, duplicates, missingFiles, incomplete });
  process.exit(1);
}

console.log(`Validated ${documents.length} adjacent block design documents and their sources.`);
