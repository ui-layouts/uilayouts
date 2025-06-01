#!/usr/bin/env node
import { intro, outro, spinner, cancel, select } from '@clack/prompts';
import colors from 'picocolors';
import fs from 'fs';
import path from 'path';
import { execa } from 'execa';
import fetch from 'node-fetch';
import ts from 'typescript';

const registryPath = `https://raw.githubusercontent.com/ui-layouts/uilayouts/main/apps/ui-layout/registry.json`;
const basePath = `https://raw.githubusercontent.com/ui-layouts/uilayouts/main/apps/ui-layout`;

// CLI args
const [command, componentName] = process.argv.slice(2);

intro(colors.bold('Welcome to uilayouts CLI'));

if (command !== 'add' || !componentName) {
  cancel(colors.red('Usage: npx uilayouts add component-name'));
  process.exit(0);
}

let language = await select({
  message: 'Select the language of the component:',
  options: [
    { label: 'TypeScript (.tsx)', value: 'ts' },
    { label: 'JavaScript (.jsx)', value: 'js' },
  ],
});

function convertTsxToJsx(code) {
  const output = ts.transpileModule(code, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      allowJs: true,
    },
    fileName: 'component.tsx',
  });
  return output.outputText;
}

async function fetchRegistry() {
  const res = await fetch(registryPath);
  if (!res.ok) throw new Error('Failed to fetch registry.json');
  return await res.json();
}

async function downloadFileFromGitHub(filePath, localPath) {
  const rawUrl = `${basePath}/${filePath}`;
  const res = await fetch(rawUrl);
  if (!res.ok) throw new Error(`Failed to download ${filePath}`);
  const content = await res.text();

  const fileName = path.basename(filePath);
  const targetPath = path.join(localPath, fileName);

  if (language === 'js' && fileName.endsWith('.tsx')) {
    const jsx = convertTsxToJsx(content);
    const newPath = targetPath.replace(/\.tsx$/, '.jsx');
    await fs.promises.mkdir(path.dirname(newPath), { recursive: true });
    await fs.promises.writeFile(newPath, jsx, 'utf8');
  } else {
    await fs.promises.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.promises.writeFile(targetPath, content, 'utf8');
  }
}

function detectPackageManager() {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun';
  return 'npm';
}

// Main logic
const s = spinner();
s.start(colors.white(`Adding ${componentName}...`));

try {
  const registry = await fetchRegistry();
  const match = registry.items.find((item) => item.name === componentName);

  if (!match) {
    s.stop(
      colors.red(`❌ Component '${componentName}' not found in registry.`)
    );
    process.exit(1);
  }

  const destPath = path.join(
    process.cwd(),
    'components',
    'ui-layouts',
    componentName.toLowerCase()
  );

  for (const file of match.files) {
    await downloadFileFromGitHub(file.path, destPath);
  }

  s.stop(colors.green(`✅ ${componentName} downloaded successfully!`));

  if (match?.dependencies?.length) {
    const pm = detectPackageManager();
    const s2 = spinner();
    s2.start(
      `📦 Installing dependencies with ${pm}: ${match.dependencies.join(', ')}`
    );

    const cmd = ['add', ...match.dependencies];
    const fallback = ['install', ...match.dependencies];

    try {
      await execa(pm, pm === 'npm' ? fallback : cmd, { stdio: 'inherit' });
      s2.stop(colors.green('✅ Dependencies installed.'));
    } catch (err) {
      s2.stop(colors.red('❌ Failed to install dependencies.'));
      console.error(err);
    }
  }

  outro(colors.bold(colors.green('🎉 Done!')));
} catch (err) {
  s.stop(colors.red('❌ Failed.'));
  console.error(err);
  process.exit(1);
}