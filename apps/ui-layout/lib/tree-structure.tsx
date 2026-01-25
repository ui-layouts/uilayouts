import { Folder, FileJson, FileText, Braces } from 'lucide-react';

export type TreeNodeData =
  | {
      type: 'folder';
      name: string;
      children: TreeNodeData[];
    }
  | {
      type: 'file';
      id: string;
      name: string;
      ext: string;
    };

export function buildSimpleTree(files: any[]): TreeNodeData[] {
  const root: Record<string, any> = {};

  for (const file of files) {
    let current = root;

    for (const folder of file.virtualPath) {
      current[folder] ??= { __children: {} };
      current = current[folder].__children;
    }

    current[file.fileName] = file;
  }

  const toTree = (obj: any): TreeNodeData[] =>
    Object.entries(obj).map(([key, value]: any) => {
      if (value.__children) {
        return {
          type: 'folder',
          name: key,
          children: toTree(value.__children),
        };
      }

      return {
        type: 'file',
        id: value.id,
        name: value.fileName,
        ext: value.ext,
      };
    });

  return toTree(root);
}
const TypescriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={24}
    height={24}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <path
      d='M20 11C20 10.1825 20 9.4306 19.8478 9.06306C19.6955 8.69552 19.4065 8.40649 18.8284 7.82843L14.0919 3.09188C13.593 2.593 13.3436 2.34355 13.0345 2.19575C12.9702 2.165 12.9044 2.13772 12.8372 2.11401C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88607C5.26731 3.06508 5.06508 3.26731 4.88607 3.48933C4 4.58831 4 6.21082 4 9.45584V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H20M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></path>
    <path
      d='M10.5 14H12.5M12.5 14H14.5M12.5 14V19M20 14H18C17.4477 14 17 14.4477 17 15V15.5C17 16.0523 17.4477 16.5 18 16.5H19C19.5523 16.5 20 16.9477 20 17.5V18C20 18.5523 19.5523 19 19 19H17'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></path>
  </svg>
);

export function getFileIcon(
  type: 'folder' | 'file',
  ext?: string,
  name?: string
) {
  if (type === 'folder') {
    return <Folder className='h-4 w-4 text-blue-500' />;
  }

  if (name === 'package.json') {
    return <FileJson className='h-4 w-4 text-green-500' />;
  }

  switch (ext) {
    case 'ts':
    case 'tsx':
      return <TypescriptIcon className='h-4 w-4 text-blue-600' />;
    case 'json':
      return <FileJson className='h-4 w-4 text-orange-500' />;
    default:
      return <FileText className='h-4 w-4 text-muted-foreground' />;
  }
}
