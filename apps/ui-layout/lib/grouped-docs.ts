import { DocsNavigationCategories } from '@/configs/docs';
import { DocsNavigationCategory } from '@/types/docs';

export const groupedDocsNavigationCategories = DocsNavigationCategories.reduce(
  (acc: Record<string, DocsNavigationCategory[]>, component: DocsNavigationCategory) => {
    const group = component.group || null;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(component);
    
    return acc;
  },
  {}
);
