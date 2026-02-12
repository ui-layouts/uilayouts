import type React from 'react';
import { AllComponents } from '@/configs/docs';

type FilesArrayItem = {
  name: string;
  filesrc: any; // string | { default: string }
};

export type ComponentPreviewEntry = {
  componentName: string;
  componentSrc: React.LazyExoticComponent<React.ComponentType<any>>;
};

export type ComponentCodeEntry = {
  componentName: string;
  // if single file exists
  filesrc?: string;
  // if multi file exists
  filesArray?: { name: string; filesrc: string }[];
};

const getRaw = (v: any) => v?.default ?? v ?? '';

export function getComponentPreview(
  name: string
): ComponentPreviewEntry | null {
  //   console.log('componentPreviewName', name);

  const c = AllComponents.find(
    (c) => c?.componentName === name || c?.slug === name
  ) as (typeof AllComponents)[number] | undefined;

  if (!c?.componentSrc) return null;

  return {
    componentName: c.componentName,
    componentSrc: c.componentSrc,
  };
}

export function getComponentCode(name: string): ComponentCodeEntry | null {
  const c = AllComponents.find(
    (c) => c?.componentName === name || c?.slug === name
  ) as (typeof AllComponents)[number] | undefined;
  if (!c) return null;

  // single file
  if (c.filesrc) {
    return {
      componentName: c.componentName,
      filesrc: getRaw(c.filesrc),
    };
  }

  // multi files
  if (Array.isArray(c.filesArray) && c.filesArray.length) {
    const normalized = (c.filesArray as FilesArrayItem[]).map((f) => ({
      name: f.name,
      filesrc: getRaw(f.filesrc),
    }));

    return {
      componentName: c.componentName,
      filesArray: normalized,
    };
  }

  return {
    componentName: c.componentName,
  };
}

/**
 * Optional: if you need ONE string for CopyButton always
 */
export function getComponentCodeAsString(name: string): string | null {
  const data = getComponentCode(name);
  if (!data) return null;

  if (data.filesrc) return data.filesrc;

  if (data.filesArray?.length) {
    return data.filesArray
      .map((f) => `// ===== ${f.name} =====\n\n${f.filesrc}\n`)
      .join('\n');
  }

  return '';
}
