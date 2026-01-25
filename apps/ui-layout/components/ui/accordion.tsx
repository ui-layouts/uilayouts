'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { ReactNode, useCallback } from 'react';

/**
 * Interface for AccordionContext values
 */
interface AccordionContextType {
  /**
   * Whether the accordion item is active
   */
  isActive?: boolean;
  /**
   * The value of the accordion item
   */
  value?: string;
  /**
   * Function to change the active index
   */
  onChangeIndex?: (value: string) => void;
}

/**
 * Context for accordion components
 */
const AccordionContext = React.createContext<AccordionContextType>({});
/**
 * Hook to use the accordion context
 */
const useAccordion = () => React.useContext(AccordionContext);

/**
 * Container component for accordion items
 */
export function AccordionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('grid grid-cols-2 gap-1', className)}>{children}</div>
  );
}

/**
 * Wrapper component for accordion items
 */
export function AccordionWrapper({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

/**
 * Interface for Accordion props
 */
interface AccordionProps {
  /**
   * Children components
   */
  children: ReactNode;
  /**
   * Whether multiple items can be active at the same time
   */
  multiple?: boolean;
  /**
   * Default active index
   */
  defaultValue?: string | string[];
}

/**
 * Accordion component
 */
export function Accordion({
  children,
  multiple,
  defaultValue,
}: AccordionProps) {
  /**
   * State for active index
   */
  const [activeIndex, setActiveIndex] = React.useState<
    string | string[] | null
  >(
    multiple
      ? Array.isArray(defaultValue)
        ? defaultValue
        : []
      : defaultValue || null
  );

  /**
   * Function to change the active index
   */
  const onChangeIndex = useCallback(
    (value: string) => {
      setActiveIndex((currentActiveIndex) => {
        if (!multiple) {
          return value === currentActiveIndex ? null : value;
        }

        if (Array.isArray(currentActiveIndex)) {
          if (currentActiveIndex.includes(value)) {
            return currentActiveIndex.filter((i) => i !== value);
          }
          return [...currentActiveIndex, value];
        }

        return [value];
      });
    },
    [multiple]
  );

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;

    const childProps = child.props as { value: string };
    const value = childProps.value;
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : activeIndex === value;

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

/**
 * Interface for AccordionItem props
 */
interface AccordionItemProps {
  /**
   * Children components
   */
  children: ReactNode;
  /**
   * Value of the accordion item
   */
  value: string;
  className?: string;
}

/**
 * Accordion item component
 */
export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {
  const { isActive } = useAccordion();

  return (
    <div
      data-active={isActive || undefined}
      className={cn('rounded-lg overflow-hidden mb-2 group', className)}
    >
      {children}
    </div>
  );
}

/**
 * Interface for AccordionHeader props
 */
interface AccordionHeaderProps {
  /**
   * Children components
   */
  children: ReactNode;
  /**
   * Icon component
   */
  customIcon?: boolean;
  className?: string;
}

/**
 * Accordion header component
 */
export function AccordionHeader({
  children,
  customIcon,
  className,
}: AccordionHeaderProps) {
  const { isActive, value, onChangeIndex } = useAccordion();

  const handleClick = useCallback(() => {
    if (value && onChangeIndex) {
      onChangeIndex(value);
    }
  }, [onChangeIndex, value]);

  return (
    <motion.button
      type='button'
      data-active={isActive || undefined}
      aria-expanded={isActive}
      className={cn(
        'p-4 cursor-pointer w-full transition-all font-semibold text-neutral-500 data-active:bg-neutral-100 hover:bg-neutral-100 hover:text-black flex justify-between gap-2 items-center text-left',
        className
      )}
      onClick={handleClick}
    >
      {children}
      {!customIcon && (
        <ChevronDown
          className={cn(
            'transition-transform shrink-0',
            isActive ? 'rotate-180' : 'rotate-0'
          )}
          aria-hidden='true'
        />
      )}
    </motion.button>
  );
}
/**
 * Interface for AccordionPanel props
 */
interface AccordionPanelProps {
  /**
   * Children components
   */
  children: ReactNode;
  /**
   * className
   */
  className?: string;
  /**
   * article className
   */
  articleClassName?: string;
}

/**
 * Accordion panel component
 */
export function AccordionPanel({
  children,
  className,
  articleClassName,
}: AccordionPanelProps) {
  const { isActive, value } = useAccordion();

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          data-active={isActive || undefined}
          role='region'
          id={`accordion-panel-${value}`}
          aria-labelledby={`accordion-header-${value}`}
          initial={{ height: 0, overflow: 'hidden' }}
          animate={{ height: 'auto', overflow: 'hidden' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className={cn(
            'bg-neutral-100 px-2 data-active:bg-neutral-100 text-black',
            className
          )}
        >
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            }}
            transition={{
              type: 'spring',
              duration: 0.4,
              bounce: 0,
            }}
            className={cn(
              'px-3 bg-transparent pb-4 space-y-2',
              articleClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
