'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { X } from 'lucide-react';
import { Drawer as VaulSidebar } from 'vaul';
import { cn } from '@/lib/utils';

interface DrawerContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useDirectionalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error(
      'useDirectionalDrawer must be used within a DirectionalDrawer'
    );
  }
  return context;
};

interface DirectionalDrawerProps {
  children: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  outsideClose?: boolean;
  className?: string;
}

export function DirectionalDrawer({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  direction = 'left',
  outsideClose = true,
  className,
}: DirectionalDrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledSetOpen || setInternalOpen;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const trigger = React.Children.toArray(children).find(
    (child: any) => child.type === DrawerTrigger
  );
  const content = React.Children.toArray(children).filter(
    (child: any) => child.type !== DrawerTrigger
  );

  // Helper function to get positioning and sizing classes
  const getDirectionClasses = () => {
    switch (direction) {
      case 'right':
        return {
          position: 'right-0 bottom-0',
          size: outsideClose ? 'sm:w-[450px] w-[90%] h-full' : 'w-full h-full',
          border: 'border-l',
          handlePosition: 'top-[40%] left-2',
          handleSize: 'h-16 w-[0.30rem]',
        };
      case 'top':
        return {
          position: 'top-0 left-0',
          size: outsideClose ? 'w-full sm:h-[450px] h-[90%]' : 'w-full h-full',
          border: 'border-b',
          handlePosition: 'bottom-2 left-[40%]',
          handleSize: 'w-16 h-[0.30rem]',
        };
      case 'bottom':
        return {
          position: 'bottom-0 left-0',
          size: outsideClose ? 'w-full sm:h-[450px] h-[90%]' : 'w-full h-full',
          border: 'border-t',
          handlePosition: 'top-2 left-[40%]',
          handleSize: 'w-16 h-[0.30rem]',
        };
      case 'left':
      default:
        return {
          position: 'left-0 bottom-0',
          size: outsideClose ? 'sm:w-[450px] w-[90%] h-full' : 'w-full h-full',
          border: 'border-r',
          handlePosition: 'top-[40%] right-2',
          handleSize: 'h-16 w-[0.30rem]',
        };
    }
  };

  const directionClasses = getDirectionClasses();
  const vaulDirection =
    direction === 'right'
      ? 'right'
      : direction === 'top'
        ? 'top'
        : direction === 'bottom'
          ? 'bottom'
          : 'left';

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {trigger}

      <VaulSidebar.Root
        open={open}
        direction={vaulDirection}
        onOpenChange={setOpen}
        dismissible={isDesktop ? false : true}
      >
        <VaulSidebar.Portal>
          <VaulSidebar.Overlay
            className='fixed inset-0 dark:bg-black/40 bg-white/50 backdrop-blur-xs z-50'
            onClick={() => setOpen(false)}
          />
          <VaulSidebar.Content
            className={cn(
              `${directionClasses.border} z-50 ${directionClasses.size} fixed ${directionClasses.position} ${
                outsideClose ? 'dark:bg-zinc-950 bg-zinc-100' : ''
              }`,
              className
            )}
          >
            <div
              className={`${
                outsideClose
                  ? 'w-full h-full'
                  : `dark:bg-neutral-900 relative bg-white ${directionClasses.border} ${directionClasses.size}`
              }`}
            >
              {isDesktop ? (
                <button
                  className='flex justify-end w-full absolute right-2 top-2'
                  onClick={() => setOpen(false)}
                >
                  <X />
                </button>
              ) : (
                <div
                  className={`absolute ${directionClasses.handlePosition} mx-auto ${directionClasses.handleSize} shrink-0 rounded-full bg-neutral-600 my-4`}
                />
              )}
              {content}
            </div>
          </VaulSidebar.Content>
        </VaulSidebar.Portal>
      </VaulSidebar.Root>
    </DrawerContext.Provider>
  );
}

export function DrawerContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('', className)}>{children}</div>;
}

export function DrawerTrigger({ children }: { children: ReactNode }) {
  const { setOpen } = useDirectionalDrawer();
  return <div onClick={() => setOpen(true)}>{children}</div>;
}
