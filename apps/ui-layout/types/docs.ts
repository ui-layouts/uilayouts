import { COMPONENT_KEYS, DOCS_CATEGORY_GROUP } from '@/const/docs';

export interface DocsFileRef {
  name: string;
  filesrc: string;
}

export interface DocsNavigationCategory {
  href: string;
  name: string;
  group: DocsCategoryGroup;
  tags: string[];
  new?: boolean;
  updated?: boolean;
}


export type DocsCategoryGroup = (typeof DOCS_CATEGORY_GROUP)[keyof typeof DOCS_CATEGORY_GROUP];

export type ComponentKey = (typeof COMPONENT_KEYS)[keyof typeof COMPONENT_KEYS];