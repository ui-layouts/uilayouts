import { COMPONENT_KEYS, DOCS_CATEGORY } from '@/const/docs';

export interface DocsFileRef {
  name: string;
  filesrc: string;
}

export type DocsCategory = (typeof DOCS_CATEGORY)[keyof typeof DOCS_CATEGORY];

export type ComponentKey = (typeof COMPONENT_KEYS)[keyof typeof COMPONENT_KEYS];