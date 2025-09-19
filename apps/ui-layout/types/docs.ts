import { DOCS_CATEGORY } from '@/const/docs';

export interface DocsFileRef {
  name: string;
  filesrc: string;
}

export interface DocsComponentItem {
  componentName: string;
  filesrc?: string;
  iframeSrc?: string;
  iframelink?: string;
  iframeLink?: string;
  filesArray?: DocsFileRef[];
}

export interface DocsSection {
  name: DocsCategory;
  componentArray: DocsComponentItem[];
  type: DocsCategory;
}

export interface DocsRoot {
  dataArray: DocsSection[];
}

export type DocsCategory = (typeof DOCS_CATEGORY)[keyof typeof DOCS_CATEGORY];
