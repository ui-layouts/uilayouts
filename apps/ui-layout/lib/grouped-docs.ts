import { DocsNavigationCategories } from '@/configs/docs';
import { DOCS_CATEGORY_GROUP } from '@/const/docs';
import type { DocsNavigationCategory } from '@/types/docs';

const groups = DocsNavigationCategories.reduce(
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

// Keep these featured groups first without changing the remaining category order.
const priority: Record<string, number> = {
  [DOCS_CATEGORY_GROUP.AppleUI]: 0,
  [DOCS_CATEGORY_GROUP.VisualEffects]: 1,
};

export const groupedDocsNavigationCategories = Object.fromEntries(
  Object.entries(groups).sort(([a], [b]) => (priority[a] ?? 2) - (priority[b] ?? 2))
);
