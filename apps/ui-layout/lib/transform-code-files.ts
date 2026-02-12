import { highlightCode } from '@/lib/shiki-highlighter';

export type TransformedCodeFile = {
  id: string;
  fileName: string;
  virtualPath: string[];
  ext: string;
  raw: string;
  html: string;
};

export const VIRTUAL_LIB_FILE = {
  fileName: 'utils.tsx',
  folder: 'lib',
  ext: 'tsx',
  raw: `
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`.trim(),
};

export const VIRTUAL_PACKAGE_JSON = {
  fileName: 'package.json',
  ext: 'json',
  raw: JSON.stringify(
    {
      name: 'ui-layouts',
      private: true,
      dependencies: {
        next: '15.x',
        react: '19.x',
        'react-dom': '19.x',
        tailwindcss: '^4',
        'tailwind-merge': '^2',
        clsx: '^2',
        motion: '^12',
        'lucide-react': '^0.4',
        '@radix-ui/react-dialog': '^1',
        '@radix-ui/react-tabs': '^1',
      },
    },
    null,
    2
  ),
};

function resolveVirtualPath(pathSrc: string, blockId: string): string[] {
  // main block file (hero section, pricing, etc.)
  if (pathSrc.includes('/hero-section/') || pathSrc.includes(`/blocks/src/`)) {
    return [blockId];
  }

  if (pathSrc.includes('/hooks/')) return ['hooks'];
  if (pathSrc.includes('/components/ui/')) return ['ui'];
  if (pathSrc.includes('/components/')) return ['components'];
  if (pathSrc.includes('/lib/')) return ['lib'];

  // fallback
  return ['ui'];
}

export async function transformCodeFiles(
  filePath: any[],
  blockId: string
): Promise<TransformedCodeFile[]> {
  const files: TransformedCodeFile[] = [];

  // ---- block files
  for (const file of filePath) {
    const { fileName, fileSrc, pathSrc } = file;
    const ext = fileName.split('.').pop() || 'txt';

    const raw =
      typeof fileSrc === 'object' && fileSrc !== null && 'default' in fileSrc
        ? fileSrc.default
        : fileSrc;
        
    // console.log('fileSrc', fileSrc);

    const html = await highlightCode(raw, ext);

    const virtualPath = resolveVirtualPath(pathSrc, blockId);

    files.push({
      id: `${virtualPath.join('/')}/${fileName}`,
      fileName,
      virtualPath,
      ext,
      raw,
      html,
    });
  }

  // ---- inject lib/utils.ts
  {
    const VirtualLibhtml = await highlightCode(
      VIRTUAL_LIB_FILE.raw,
      VIRTUAL_LIB_FILE.ext
    );

    files.push({
      id: `lib/${VIRTUAL_LIB_FILE.fileName}`,
      fileName: VIRTUAL_LIB_FILE.fileName,
      virtualPath: ['lib'],
      ext: VIRTUAL_LIB_FILE.ext,
      raw: VIRTUAL_LIB_FILE.raw,
      html: VirtualLibhtml,
    });
  }

  // ---- inject package.json (root)
  {
    const VirtualPackageJsonhtml = await highlightCode(
      VIRTUAL_PACKAGE_JSON.raw,
      'json'
    );

    files.push({
      id: 'package.json',
      fileName: 'package.json',
      virtualPath: [],
      ext: 'json',
      raw: VIRTUAL_PACKAGE_JSON.raw,
      html: VirtualPackageJsonhtml,
    });
  }

  return files;
}
