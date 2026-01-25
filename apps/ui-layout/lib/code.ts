import fs from 'fs';
import path from 'path';
const REPO_ROOT = path.resolve(process.cwd(), '../..');

export const extractCodeFromFilePath = (filePath: string) => {
  try {
    // console.log("filePath",filePath);

    const absolutePath = path.join(process.cwd(), filePath);
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (e) {
    console.error('Failed to load code file:', filePath, e);
    return '// Code not found';
  }
};

export const extractCodeFromPackages = (filePaths: string[] | string) => {
  const paths = Array.isArray(filePaths) ? filePaths : [filePaths];
  console.log(paths);

  return paths.map((filePath) => {
    try {
      const absolutePath = path.join(REPO_ROOT, filePath);
      const code = fs.readFileSync(absolutePath, 'utf-8');
      const name = path.basename(filePath);
      return { id: name, name, code };
    } catch (e) {
      console.error('Failed to load code file:', filePath, e);
      return { id: filePath, name: filePath, code: '// Code not found' };
    }
  });
};

export function transformCodeFiles(filePath: any[]) {
  return filePath.map((file) => {
    const fileExtension = file.fileName.split('.').pop() || '';

    const langMap: Record<string, string> = {
      tsx: 'tsx',
      ts: 'tsx',
      jsx: 'jsx',
      js: 'jsx',
      css: 'css',
      scss: 'scss',
      html: 'html',
      json: 'json',
    };

    const rawContent =
      typeof file.fileSrc === 'object' &&
      file.fileSrc !== null &&
      'default' in file.fileSrc
        ? file.fileSrc.default
        : typeof file.fileSrc === 'string'
          ? file.fileSrc
          : `// ERROR: Code content not found for ${file.fileName}`;

    return {
      ...file,
      code: {
        value: rawContent,
        lang: langMap[fileExtension] || fileExtension,
        meta: '',
      },
    };
  });
}
