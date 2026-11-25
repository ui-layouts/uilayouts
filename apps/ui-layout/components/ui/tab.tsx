'use client';

import { Tabs, TabsTab } from '@ui-sdk/react/tabs';
export { TabsList } from '@ui-sdk/react/tabs';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, {
  createContext,
  isValidElement,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

// Improved TypeScript interfaces with more specific types
interface TabContextType {
  id: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
  wobbly: boolean;
  hover: boolean;
  defaultValue: string;
  prevIndex: number;
  setPrevIndex: (value: number) => void;
  tabsOrder: string[];
}

const TabContext = createContext<TabContextType | undefined>(undefined);

// Custom hook with memoization
export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

// Props interfaces with more specific types
interface TabsProviderProps {
  children: ReactNode;
  defaultValue: string;
  wobbly?: boolean;
  hover?: boolean;
}

interface TabsBtnProps {
  children: ReactNode;
  className?: string;
  value: string;
}

interface TabsContentProps {
  children: ReactNode;
  className?: string;
  value: string;
  yValue?: boolean;
}

export const TabsProvider: React.FC<TabsProviderProps> = React.memo(
  ({ children, defaultValue, wobbly = true, hover = false }) => {
    // Use useCallback to memoize state setters
    const [activeTab, setActiveTab] = useState(defaultValue);
    const [prevIndex, setPrevIndex] = useState(0);
    const id = React.useId();

    // Memoize tabs order to prevent unnecessary recalculations
    const tabsOrder = useMemo(() => {
      return React.Children.toArray(children)
        .filter((child) => isValidElement(child) && child.type === TabsContent)
        .map((child) => (child as React.ReactElement<any>).props.value);
    }, [children]);

    const selectTab = useCallback(
      (value: string | null) => {
        if (value === null || value === activeTab) return;
        setPrevIndex(tabsOrder.indexOf(activeTab));
        setActiveTab(value);
      },
      [activeTab, tabsOrder]
    );

    // Memoize context value to prevent unnecessary re-renders
    const contextValue = useMemo(
      () => ({
        activeTab,
        id,
        setActiveTab: selectTab,
        wobbly,
        hover,
        defaultValue,
        setPrevIndex,
        prevIndex,
        tabsOrder,
      }),
      [activeTab, id, selectTab, wobbly, hover, defaultValue, prevIndex, tabsOrder]
    );

    return (
      <TabContext.Provider value={contextValue}>
        <Tabs
          className='contents'
          value={activeTab}
          onValueChange={selectTab}
          activation={hover ? 'automatic' : 'manual'}
        >
          {children}
        </Tabs>
      </TabContext.Provider>
    );
  }
);

// Memoized TabsBtn component
export const TabsBtn: React.FC<TabsBtnProps> = React.memo(({ children, className, value }) => {
  const { id, activeTab, setActiveTab, defaultValue, hover, wobbly } = useTabs();

  return (
    <TabsTab
      value={value}
      id={`${id}-tab-${value}`}
      aria-controls={`${id}-panel-${value}`}
      className={cn(`cursor-pointer 2xl:p-2 p-2 2xl:px-4 px-2 rounded-md relative`, className)}
      onMouseEnter={() => hover && setActiveTab(value)}
    >
      {children}

      <AnimatePresence mode='wait'>
        {activeTab === value && (
          <>
            <motion.div
              transition={{
                layout: {
                  duration: 0.2,
                  ease: 'easeInOut',
                  delay: 0.2,
                },
              }}
              layoutId={defaultValue}
              className='absolute w-full h-full left-0 top-0 bg-card dark:bg-secondary rounded-md z-1'
            />

            {wobbly && (
              <>
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: 'easeInOut',
                      delay: 0.04,
                    },
                  }}
                  layoutId={defaultValue}
                  className='absolute w-full h-full left-0 top-0 bg-card rounded-md z-1 tab-shadow'
                />
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: 0.2,
                    },
                  }}
                  layoutId={`${defaultValue}b`}
                  className='absolute w-full h-full left-0 top-0 bg-card rounded-md z-1 tab-shadow'
                />
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </TabsTab>
  );
});

// Memoized TabsContent component
export const TabsContent: React.FC<TabsContentProps> = React.memo(
  ({ children, className, value, yValue }) => {
    const { id, activeTab, tabsOrder, prevIndex } = useTabs();

    // Memoize direction calculation
    const isForward = useMemo(
      () => tabsOrder.indexOf(activeTab) > prevIndex,
      [tabsOrder, activeTab, prevIndex]
    );

    return (
      <AnimatePresence mode='popLayout'>
        {activeTab === value && (
          <motion.div
            role='tabpanel'
            id={`${id}-panel-${value}`}
            aria-labelledby={`${id}-tab-${value}`}
            tabIndex={0}
            initial={{ opacity: 0, y: yValue ? (isForward ? 10 : -10) : 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: yValue ? (isForward ? -50 : 50) : 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className={cn('p-2 px-4 rounded-md relative', className)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

// Add display names for better debugging
TabsProvider.displayName = 'TabsProvider';
TabsBtn.displayName = 'TabsBtn';
TabsContent.displayName = 'TabsContent';
