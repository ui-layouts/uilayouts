import fs from 'node:fs';
import path from 'node:path';
import { AllComponents, type IAllComponents } from '@/configs/docs';
import { getPreviewUrl } from './preview-url';

function getInstallName(candidates: (string | undefined)[]) {
  for (const candidate of candidates) {
    const key = candidate?.replace(/\.json$/, '');
    if (
      key &&
      /^[\w-]+$/.test(key) &&
      fs.existsSync(path.join(process.cwd(), 'public/r', key + '.json'))
    )
      return key;
  }
}

type Example = Pick<
  IAllComponents,
  'componentName' | 'description' | 'sourcePath' | 'filesrc' | 'filesArray'
> & {
  expandUrl: string;
  jsonName?: string;
};

function getExamples(
  slug: string,
  markdown: string
): Example[] {
  const examples: Example[] = [];
  const tags = markdown.matchAll(
    /<(?:ComponentCodePreview|IframeComponentPrieview|BoxComponentPreview)\b([^>]*?)>/g
  );
  for (const [, attributes] of tags) {
    const name = attributes.match(/\bname\s*=\s*['"]([^'"]+)['"]/)?.[1];
    const item =
      AllComponents.find((entry) => entry.componentName === name) ??
      AllComponents.find((entry) => entry.slug === name);
    if (!item || (!item.componentSrc && !item.iframelink)) continue;
    const expandUrl = getPreviewUrl(
      'live-components/' + item.componentName,
      item.iframelink
    );
    if (expandUrl && !examples.some(example => example.componentName === item.componentName))
      examples.push({
        ...item,
        description: attributes.match(/\bdata-description\s*=\s*['"]([^'"]+)['"]/)?.[1] ?? item.description,
        expandUrl,
        jsonName: attributes.match(/\bjsonName\s*=\s*['"]([^'"]+)['"]/)?.[1],
      });
  }
  if (examples.length) return examples;
  // MDX-native components can supply a standalone demo without a client registry entry.
  const sourcePath = 'app/live-components/' + slug + '/page.mdx';
  if (fs.existsSync(path.join(process.cwd(), sourcePath))) {
    return [{
      componentName: slug,
      description: '',
      sourcePath,
      expandUrl: '/live-components/' + slug,
    }];
  }
  return [];
}

export function getShowcase(slug: string, markdown: string) {
  return getExamples(slug, markdown).map((item, index) => ({
    ...describeExample(slug, markdown, item),
    label: index === 0 ? 'Overview' : item.componentName.replace(slug + '-', '').replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase()),
  }));
}

function describeExample(slug: string, markdown: string, item: Example) {
  const installName = getInstallName([
    item.jsonName,
    slug,
    item.componentName,
    markdown.match(/ui-layouts\.com\/r\/([\w-]+)\.json/)?.[1],
  ]);
  const sourcePath = item.sourcePath ?? 'content/components/' + slug + '.mdx';
  const files = new Map<string, string>();
  function add(filename: string, raw: unknown) {
    const content =
      typeof raw === 'string' ? raw : (raw as { default?: string })?.default;
    if (content?.trim() && !files.has(content.trim()))
      files.set(content.trim(), filename);
  }
  if (item.sourcePath)
    add(
      item.sourcePath,
      fs.readFileSync(path.join(process.cwd(), item.sourcePath), 'utf8')
    );
  for (const file of item.filesArray ?? []) add(file.name, file.filesrc);
  if (installName) {
    const registry = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'public/r', installName + '.json'),
        'utf8'
      )
    );
    for (const file of registry.files ?? [])
      add(file.target || file.path, file.content);
  }
  add(item.componentName + '.tsx', item.filesrc);
  if (!item.sourcePath && !item.filesrc && !item.filesArray?.length)
    add(sourcePath, markdown);
  const [usageCode, usagePath] = files.entries().next().value ?? ['', sourcePath];
  return {
    description: item.description,
    usageCode,
    usageFile: path.basename(usagePath),
    name: item.componentName,
    expandUrl: item.expandUrl,
    sourceCode: Array.from(
      files,
      ([content, file]) => '// ' + file + '\n' + content
    ).join('\n\n'),
    sourcePath: 'apps/ui-layout/' + sourcePath,
    installUrl: installName
      ? 'https://www.ui-layouts.com/r/' + installName + '.json'
      : '',
  };
}
