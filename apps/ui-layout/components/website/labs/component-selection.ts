import type { IAllComponents } from '@/configs/docs';
import type { ISelectedComponent } from '@/hooks/useZustStore';

export function labComponentKey(component: Pick<IAllComponents, 'category' | 'componentName'>) {
  return `${component.category}:${component.componentName}`;
}

export function findLabComponent(components: IAllComponents[], selected?: ISelectedComponent) {
  if (!selected) return undefined;
  const matches = components.filter((item) => item.componentName === selected.componentName);
  if (selected.category) return matches.find((item) => item.category === selected.category);
  // Older persisted selections have no category. Prefer their documentation link.
  return matches.find((item) => item.href === selected.pagelink) ?? matches[0];
}
