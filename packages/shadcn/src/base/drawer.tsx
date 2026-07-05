"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "@/lib/utils"; // adjust to your project's cn util

// ─── Types ────────────────────────────────────────────────────────────────────

type SwipeDirection = "left" | "right" | "up" | "down";

interface DrawerRootProps {
  children: React.ReactNode;
  swipeDirection?: SwipeDirection;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

// ─── Direction helpers ────────────────────────────────────────────────────────

const directionConfig: Record<
  SwipeDirection,
  {
    viewport: string;
    popup: string;
    startingEndingTransform: string;
  }
> = {
  right: {
    viewport: "fixed inset-0 flex items-stretch justify-end p-[--viewport-padding]",
    popup: cn(
      "h-full w-[min(20rem,calc(100vw-3rem))]",
      "-mr-[3rem] border-l pr-[calc(1.5rem+3rem)]",
      "supports-[-webkit-touch-callout:none]:mr-0",
      "supports-[-webkit-touch-callout:none]:w-[20rem]",
      "supports-[-webkit-touch-callout:none]:pr-6",
      "supports-[-webkit-touch-callout:none]:border",
      "[transform:translateX(var(--drawer-swipe-movement-x))]",
    ),
    startingEndingTransform:
      "data-starting-style:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
  },
  left: {
    viewport: "fixed inset-0 flex items-stretch justify-start p-[--viewport-padding]",
    popup: cn(
      "h-full w-[min(20rem,calc(100vw-3rem))]",
      "-ml-[3rem] border-r pl-[calc(1.5rem+3rem)]",
      "supports-[-webkit-touch-callout:none]:ml-0",
      "supports-[-webkit-touch-callout:none]:pl-6",
      "supports-[-webkit-touch-callout:none]:border",
      "[transform:translateX(var(--drawer-swipe-movement-x))]",
    ),
    startingEndingTransform:
      "data-starting-style:[transform:translateX(calc(-100%+var(--bleed)-var(--viewport-padding)-2px))] data-ending-style:[transform:translateX(calc(-100%+var(--bleed)-var(--viewport-padding)-2px))]",
  },
  up: {
    viewport: "fixed inset-0 flex flex-col items-stretch justify-start p-[--viewport-padding]",
    popup: cn(
      "w-full h-[min(32rem,calc(100dvh-3rem))]",
      "-mt-[3rem] border-b pb-[calc(1.5rem+3rem)]",
      "supports-[-webkit-touch-callout:none]:mt-0",
      "supports-[-webkit-touch-callout:none]:pb-6",
      "supports-[-webkit-touch-callout:none]:border",
      "[transform:translateY(var(--drawer-swipe-movement-y))]",
    ),
    startingEndingTransform:
      "data-starting-style:[transform:translateY(calc(-100%+var(--bleed)-var(--viewport-padding)-2px))] data-ending-style:[transform:translateY(calc(-100%+var(--bleed)-var(--viewport-padding)-2px))]",
  },
  down: {
    viewport: "fixed inset-0 flex flex-col items-stretch justify-end p-[--viewport-padding]",
    popup: cn(
      "w-full h-[min(32rem,calc(100dvh-3rem))]",
      "-mb-[3rem] border-t pt-[calc(1.5rem+3rem)]",
      "supports-[-webkit-touch-callout:none]:mb-0",
      "supports-[-webkit-touch-callout:none]:pt-6",
      "supports-[-webkit-touch-callout:none]:border",
      "[transform:translateY(var(--drawer-swipe-movement-y))]",
    ),
    startingEndingTransform:
      "data-starting-style:[transform:translateY(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:[transform:translateY(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]",
  },
};

// ─── Context ──────────────────────────────────────────────────────────────────

const DrawerContext = React.createContext<{ swipeDirection: SwipeDirection }>({
  swipeDirection: "right",
});

// ─── Root ─────────────────────────────────────────────────────────────────────

function Drawer({
  swipeDirection = "right",
  children,
  ...props
}: DrawerRootProps) {
  return (
    <DrawerContext.Provider value={{ swipeDirection }}>
      <DrawerPrimitive.Root swipeDirection={swipeDirection} {...props}>
        {children}
      </DrawerPrimitive.Root>
    </DrawerContext.Provider>
  );
}
Drawer.displayName = "Drawer";

// ─── Trigger ─────────────────────────────────────────────────────────────────

const DrawerTrigger = React.forwardRef<
  HTMLElement,
  DrawerPrimitive.Trigger.Props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Trigger
    ref={ref}
    className={cn(
      // base
      "inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md",
      "border border-neutral-200 bg-white px-4 text-sm font-medium text-neutral-900",
      "shadow-sm transition-colors select-none",
      // hover / active
      "hover:not-data-disabled:bg-neutral-50 active:not-data-disabled:bg-neutral-100",
      // disabled
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "disabled:pointer-events-none disabled:opacity-50",
      // dark
      "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100",
      "dark:hover:not-data-disabled:bg-neutral-800",
      // focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950",
      "dark:focus-visible:ring-neutral-300",
      className,
    )}
    {...props}
  />
));
DrawerTrigger.displayName = "DrawerTrigger";

// ─── Close ────────────────────────────────────────────────────────────────────

const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  DrawerPrimitive.Close.Props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Close
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md",
      "border border-neutral-200 bg-white px-4 text-sm font-medium text-neutral-900",
      "shadow-sm transition-colors select-none",
      "hover:not-data-disabled:bg-neutral-50 active:not-data-disabled:bg-neutral-100",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100",
      "dark:hover:not-data-disabled:bg-neutral-800",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950",
      "dark:focus-visible:ring-neutral-300",
      className,
    )}
    {...props}
  />
));
DrawerClose.displayName = "DrawerClose";

// ─── Content (Portal + Backdrop + Viewport + Popup) ───────────────────────────

interface DrawerContentProps
  extends DrawerPrimitive.Popup.Props {
  /** Extra classes forwarded to the inner Popup element. */
  popupClassName?: string;
}

const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(({ className, popupClassName, children, ...props }, ref) => {
  const { swipeDirection } = React.useContext(DrawerContext);
  const cfg = directionConfig[swipeDirection];

  return (
    <DrawerPrimitive.Portal>
      {/* Backdrop */}
      <DrawerPrimitive.Backdrop
        className={cn(
          "[--backdrop-opacity:0.2] dark:[--backdrop-opacity:0.65]",
          "fixed inset-0 min-h-dvh bg-black supports-[-webkit-touch-callout:none]:absolute",
          "opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))]",
          "transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
          "data-swiping:duration-0",
          "data-starting-style:opacity-0 data-ending-style:opacity-0",
          "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
        )}
      />

      {/* Viewport */}
      <DrawerPrimitive.Viewport
        className={cn(
          "[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]",
          cfg.viewport,
        )}
      >
        {/* Popup */}
        <DrawerPrimitive.Popup
          ref={ref}
          className={cn(
            "[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px]",
            // shared layout
            "overflow-y-auto overscroll-contain touch-auto outline-none",
            "bg-white text-neutral-950 p-6",
            "border-neutral-200 shadow-[0.25rem_0.25rem_0_0] shadow-black/10",
            // dark
            "dark:bg-neutral-950 dark:text-neutral-100 dark:border-neutral-800 dark:shadow-none",
            // animation
            "transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
            "data-swiping:select-none",
            "data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
            // direction-specific layout + transform
            cfg.popup,
            cfg.startingEndingTransform,
            popupClassName,
            className,
          )}
          {...props}
        >
          {/* Inner content wrapper */}
          <DrawerPrimitive.Content className="mx-auto w-full max-w-lg">
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
});
DrawerContent.displayName = "DrawerContent";

// ─── Header ───────────────────────────────────────────────────────────────────

function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-4 flex flex-col gap-1", className)}
      {...props}
    />
  );
}
DrawerHeader.displayName = "DrawerHeader";

// ─── Footer ───────────────────────────────────────────────────────────────────

function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 flex items-center justify-end gap-3", className)}
      {...props}
    />
  );
}
DrawerFooter.displayName = "DrawerFooter";

// ─── Title ────────────────────────────────────────────────────────────────────

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  DrawerPrimitive.Title.Props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-base font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

// ─── Description ─────────────────────────────────────────────────────────────

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  DrawerPrimitive.Description.Props
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
