import { existsSync, readdirSync, readFileSync } from 'node:fs';

const registry = readFileSync('apps/ui-layout/blocks-docs.ts', 'utf8');
const blockIds = [
  ...registry.matchAll(
    /\{\s*id: '([^']+)',\s*name: '[^']+',\s*des: '[^']*',[\s\S]*?fileSrc: require\(/g
  ),
].map((match) => match[1]);
const specDirectory = 'apps/ui-layout/lib/design-systems/blocks';
const specIds = readdirSync(specDirectory)
  .filter((file) => file.endsWith('.ts'))
  .map((file) => file.slice(0, -3));

const missing = blockIds.filter((id) => !specIds.includes(id));
const orphaned = specIds.filter((id) => !blockIds.includes(id));
const duplicates = blockIds.filter((id, index) => blockIds.indexOf(id) !== index);
const incomplete = specIds.filter((id) => {
  const source = readFileSync(`${specDirectory}/${id}.ts`, 'utf8');
  return ![
    'sourceFiles:',
    'dependencies:',
    'personality:',
    'typography:',
    'palette:',
    'composition:',
    'background:',
    'effects:',
    'buttons:',
    'interactions:',
    'imagery:',
    'extensionRules:',
    'avoid:',
  ].every((field) => source.includes(field));
});
const brokenReferences = specIds.flatMap((id) => {
  const source = readFileSync(`${specDirectory}/${id}.ts`, 'utf8');
  return [...source.matchAll(/path: '([^']+)'/g)]
    .map((match) => match[1])
    .filter((path) => !existsSync(path))
    .map((path) => `${id}: ${path}`);
});

if (
  missing.length ||
  orphaned.length ||
  duplicates.length ||
  incomplete.length ||
  brokenReferences.length
) {
  console.error({ missing, orphaned, duplicates, incomplete, brokenReferences });
  process.exit(1);
}

console.log(`Validated ${blockIds.length} authored block design systems.`);
