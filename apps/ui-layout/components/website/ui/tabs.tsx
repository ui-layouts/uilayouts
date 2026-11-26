'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { LayoutGroup, MotionConfig } from 'motion/react';
import { TabIndicator } from '@/components/ui/tab';
import { cn } from '@/lib/utils';

const InstallationTab = React.createContext<string | undefined>(undefined);

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ defaultValue, value, onValueChange, ...props }, ref) => {
  const [selected, setSelected] = React.useState(defaultValue);
  const group = React.useId();
  if (defaultValue !== 'cli') {
    return <InstallationTab.Provider value={undefined}><TabsPrimitive.Root ref={ref} defaultValue={defaultValue} value={value} onValueChange={onValueChange} {...props} /></InstallationTab.Provider>;
  }
  return (
    <InstallationTab.Provider value={value ?? selected}>
      <MotionConfig reducedMotion="user">
        <LayoutGroup id={group}>
          <TabsPrimitive.Root {...props} ref={ref} value={value ?? selected} onValueChange={(next) => {
            setSelected(next);
            onValueChange?.(next);
          }} />
        </LayoutGroup>
      </MotionConfig>
    </InstallationTab.Provider>
  );
});
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-input p-1 text-muted-foreground border',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const selected = React.useContext(InstallationTab);
  return (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap  px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-xs rounded-md',
      className,
      selected !== undefined && "relative data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0"
    )}
    {...props}
  >
    {selected === undefined ? children : <>
      <TabIndicator active={selected === props.value} />
      <span className="relative z-10">{children}</span>
    </>}
  </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  manualType?: boolean;
}

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, manualType, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
      manualType && 'p-3 bg-muted border rounded-lg'
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
