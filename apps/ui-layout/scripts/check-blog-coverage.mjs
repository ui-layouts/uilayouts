import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = (file) => readFileSync(resolve(root, file), 'utf8');
const catalogSource = read('configs/docs.ts').split('export const AllComponents')[0];
const componentPaths = new Set([...catalogSource.matchAll(/href: '(\/components\/[^']+)'/g)].map(match => match[1]));
const meta = read('lib/blog.ts');
const begin = meta.indexOf('= [', meta.indexOf('export const blogPosts')) + 2;
const finish = meta.indexOf('\n];', begin) + 2;
const posts = JSON.parse(meta.slice(begin, finish));
const tutorials = new Set(posts.filter(post => post.category === 'Tutorials').map(post => post.href));
const missing = [...componentPaths].filter(path => !tutorials.has(path));
const loaders = read('lib/blog-content.ts');
const covers = read('components/website/blog/blog-cover.tsx');
const errors = [...missing.map(path => 'Missing tutorial: ' + path)];
const slugs = new Set();
for (const post of posts) {
  if (slugs.has(post.slug)) errors.push('Duplicate slug: ' + post.slug);
  slugs.add(post.slug);
  if (!existsSync(resolve(root, 'content/blog', post.slug + '.mdx'))) errors.push('Missing MDX: ' + post.slug);
  if (!loaders.includes("'" + post.slug + "':")) errors.push('Missing loader: ' + post.slug);
  if (!covers.includes("'" + post.slug + "':")) errors.push('Missing cover: ' + post.slug);
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log('Blog coverage: ' + componentPaths.size + '/' + componentPaths.size + ' component routes; ' + posts.length + ' articles.');
