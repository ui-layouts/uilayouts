import path from 'node:path';
import fs from 'node:fs/promises';

export async function getComponentCode(componentName: string): Promise<string> {
  try {
    return await fs.readFile(path.join(process.cwd(), 'components/ui', componentName + '.tsx'), 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
  }

  // Some install names differ from the source filename or include several files.
  const registry = JSON.parse(await fs.readFile(
    path.join(process.cwd(), 'public/r', componentName + '.json'), 'utf8'
  )) as { files: { path: string; content: string }[] };
  return registry.files.map(file => '// ' + file.path + '\n' + file.content).join('\n\n');
}
