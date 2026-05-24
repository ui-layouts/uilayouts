import { blocksDesign } from '../blocks-docs';

// Existing block structure from blocks-docs.ts
interface Block {
  id: string;
  name: string;
  des: string;
  tags: string[];
  componentSrc: any;
  filePath?: Array<{
    fileSrc: string;
    fileName: string;
    pathSrc: string;
  }>;
}

interface BlockCategory {
  id: string;
  name: string;
  url: string;
  des: string;
  imgclass: string;
  textClass: string;
  tags: string[];
  imgSrc: any;
  blocks: Block[];
}

// Target format
export interface BlockComponent {
  componentName: string;
  externalPreview?: string;
  isFree: boolean;
  isJson: boolean;
  jsonPath?: string;
  tags: string[];
  img: string;
  installationCode: {
    value: string;
    lang: string;
  };
  parentlink: string;
  parentName: string;
}

export interface BlockDesign {
  name: string;
  componentArray: BlockComponent[];
  type: string;
}

// Helper function to transform a single block to the target format
export function transformBlockToTargetFormat(
  block: Block,
  parentCategory: BlockCategory,
  options?: {
    baseUrl?: string;
    isFree?: boolean;
    isJson?: boolean;
    installationCode?: string;
  }
): BlockComponent {
  const baseUrl = options?.baseUrl || 'https://www.ui-layouts.com';
  const isFree = options?.isFree ?? true;
  const isJson = options?.isJson ?? true;
  
  return {
    componentName: block.id,
    externalPreview: `${baseUrl}/preview/${parentCategory.id}/${block.id}`,
    isFree,
    isJson,
    jsonPath: isJson ? `${baseUrl}/r/${block.id}.json` : undefined,
    tags: block.tags,
    img: `images/blocks/${parentCategory.id}/${block.id}.png`,
    installationCode: options?.installationCode 
      ? { value: options.installationCode, lang: "bash" }
      : { value: "npm install motion framer-motion", lang: "bash" },
    parentlink: parentCategory.id,
    parentName: parentCategory.name,
  };
}

// Main function to transform blocksDesign to target format
export function transformBlocksDesign(
  categoryId?: string,
  options?: {
    baseUrl?: string;
    isFree?: boolean;
    isJson?: boolean;
    installationCode?: string;
  }
): BlockDesign[] {
  const filteredCategories = categoryId 
    ? blocksDesign.filter(category => category.id === categoryId)
    : blocksDesign;

  return filteredCategories.map(category => ({
    name: category.name,
    type: category.id,
    componentArray: category.blocks.map(block => 
      transformBlockToTargetFormat(block, category, options)
    ),
  }));
}

// Get specific category by ID
export function getCategoryById(categoryId: string): BlockDesign | null {
  const category = blocksDesign.find(cat => cat.id === categoryId);
  if (!category) return null;

  return {
    name: category.name,
    type: category.id,
    componentArray: category.blocks.map(block => 
      transformBlockToTargetFormat(block, category)
    ),
  };
}

// Get all categories in target format
export function getAllCategoriesInTargetFormat(
  options?: {
    baseUrl?: string;
    isFree?: boolean;
    isJson?: boolean;
    installationCode?: string;
  }
): BlockDesign[] {
  return transformBlocksDesign(undefined, options);
}

// Example usage - Get Hero Section blocks
export const heroSectionBlocks = getCategoryById('hero-section');

// Example usage - Get all blocks with custom options
export const allBlocksCustom = getAllCategoriesInTargetFormat({
  baseUrl: 'https://www.ui-layouts.com',
  isFree: true,
  isJson: true,
  installationCode: 'npm install motion vaul lucide-react'
});

// Filter blocks by specific tags
export function filterBlocksByTags(
  tags: string[],
  categoryId?: string
): BlockDesign[] {
  const categories = transformBlocksDesign(categoryId);
  
  return categories.map(category => ({
    ...category,
    componentArray: category.componentArray.filter(component =>
      tags.some(tag => component.tags.includes(tag))
    )
  })).filter(category => category.componentArray.length > 0);
}

// Example: Get all blocks with "hero" tag
export const heroBlocks = filterBlocksByTags(['hero']);

// Example: Get all blocks with "modern" and "cta" tags
export const modernCTABlocks = filterBlocksByTags(['modern', 'cta']);
