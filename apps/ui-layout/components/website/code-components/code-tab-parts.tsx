'use client';

import { Tabs, TabsList as List, TabsTab, TabsPanel } from '@ui-sdk/react/tabs';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export { Tabs };

type StyledProps<T> = Omit<T, 'className'> & { className?: string };

export function TabsList({ className, ...props }: StyledProps<ComponentProps<typeof List>>) {
  return (
    <List
      {...props}
      aria-label='Code examples'
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-input p-1 text-muted-foreground border',
        className
      )}
    />
  );
}

export function TabsTrigger({ className, ...props }: StyledProps<ComponentProps<typeof TabsTab>>) {
  return (
    <TabsTab
      {...props}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap  px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-selected:bg-card data-selected:text-foreground data-selected:shadow-xs rounded-md',
        className
      )}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: StyledProps<ComponentProps<typeof TabsPanel>>) {
  return (
    <TabsPanel
      {...props}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
    />
  );
}
