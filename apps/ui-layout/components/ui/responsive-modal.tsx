'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { Drawer as VaulDrawer } from 'vaul';
import { cn } from '@/lib/utils';

interface DrawerContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useResponsiveModal = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error(
      'useResponsiveModal must be used within a ResponsiveModalProvider'
    );
  }
  return context;
};

interface ResponsiveModalProps {
  children: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  classname?: string;
  clsBtnClassname?: string;
}

export function ResponsiveModal({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  classname,
  clsBtnClassname,
}: ResponsiveModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledSetOpen || setInternalOpen;

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const trigger = React.Children.toArray(children).find(
    (child: any) => child.type === ResponsiveModalTrigger
  );
  const content = React.Children.toArray(children).filter(
    (child: any) => child.type !== ResponsiveModalTrigger
  );

  const desktopModal =
    isDesktop && mounted
      ? createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs cursor-zoom-out'
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    'relative w-full max-w-md border bg-white dark:bg-neutral-900 rounded-lg cursor-default',
                    classname
                  )}
                >
                  <button
                    className={cn(
                      'absolute top-2 right-2 bg-primary text-background p-2 border z-1 rounded-md',
                      clsBtnClassname
                    )}
                    onClick={() => setOpen(false)}
                    aria-label='Close'
                  >
                    <X />
                  </button>
                  {content}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {trigger}

      {desktopModal}

      {!isDesktop && (
        <VaulDrawer.Root
          shouldScaleBackground
          open={open}
          onOpenChange={setOpen}
        >
          <VaulDrawer.Portal>
            <VaulDrawer.Overlay className='fixed inset-0 z-50 bg-white/50 dark:bg-black/50 backdrop-blur-xs' />
            <VaulDrawer.Content className='fixed bottom-0 left-0 z-50 w-full max-h-[96%] bg-white dark:bg-neutral-900'>
              <div className='mx-auto w-16 h-[0.30rem] shrink-0 rounded-full bg-neutral-600 my-4' />
              <div className='w-full mx-auto max-h-[96vh] overflow-auto px-4 pb-2'>
                {content}
              </div>
            </VaulDrawer.Content>
          </VaulDrawer.Portal>
        </VaulDrawer.Root>
      )}
    </DrawerContext.Provider>
  );
}

export function ResponsiveModalContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('', className)}>{children}</div>;
}

interface ResponsiveModalTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export function ResponsiveModalTrigger({
  children,
  asChild = false,
}: ResponsiveModalTriggerProps) {
  const { setOpen } = useResponsiveModal();

  if (asChild) {
    // Clone the child element and add onClick handler
    const child = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(child, {
      ...child.props,
      onClick: (e: React.MouseEvent) => {
        setOpen(true);
        // Call original onClick if it exists
        child.props.onClick?.(e);
      },
    } as any);
  }

  return <div onClick={() => setOpen(true)}>{children}</div>;
}
