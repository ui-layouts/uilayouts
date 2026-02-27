// @ts-nocheck
'use client';

import * as React from 'react';
import {
  Check,
  CheckCheck,
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDown,
  Copy,
} from 'lucide-react';
import * as SelectPrimitives from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { Button } from '@repo/shadcn';
import { SVGProps } from 'react';
import { Bun, NPM, Pnpm, Yarn } from '../icons';

import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

type PM = 'npm' | 'pnpm' | 'bun' | 'yarn';

const packageManagers = [
  { value: 'npm', label: 'npm', Icon: NPM },
  { value: 'pnpm', label: 'pnpm', Icon: Pnpm },
  { value: 'bun', label: 'bun', Icon: Bun },
  { value: 'yarn', label: 'yarn', Icon: Yarn },
] as const;

const COMMANDS: Record<PM, (id: string) => string> = {
  npm: (id) => `npx shadcn add @ui-layouts/${id}`,
  pnpm: (id) => `pnpm dlx shadcn add @ui-layouts/${id}`,
  bun: (id) => `bunx --bun shadcn add @ui-layouts/${id}`,
  yarn: (id) => `yarn shadcn add @ui-layouts/${id}`,
};

export default function CliCopyBtn({ id }: { id: string }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<PM>('npm');
  const [copied, setCopied] = React.useState(false);

  const current = packageManagers.find((p) => p.value === value)!;
  const command = COMMANDS[value](id);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className='flex items-center gap-2'>
      {/* Package Manager Select */}
      <SelectPrimitives.Root
        value={value}
        onValueChange={(newValue) => setValue(newValue as PM)}
      >
        <SelectPrimitives.Trigger
          className={cn(
            'inline-flex h-10 w-12 pl-1 items-center justify-center gap-1 border border-input bg-neutral-100 dark:bg-neutral-700 py-2 text-sm placeholder:text-muted-foreground transition-all duration-200'
          )}
          aria-label='Select package manager'
        >
          <SelectPrimitives.Value>
            <current.Icon className='h-4 w-4' />
          </SelectPrimitives.Value>
          <SelectPrimitives.Icon className='h-4 w-4 opacity-50'>
            <ChevronsUpDown className='h-4 w-4 shrink-0 dark:text-white text-black' />
          </SelectPrimitives.Icon>
        </SelectPrimitives.Trigger>
        <SelectPrimitives.Portal>
          <SelectPrimitives.Content className='overflow-hidden bg-white dark:bg-neutral-700 text-popover-foreground shadow-md min-w-8 px-0'>
            <SelectPrimitives.Viewport className='p-0'>
              <SelectPrimitives.Group className=''>
                {packageManagers.map((pm) => (
                  <SelectItem key={pm.value} value={pm.value}>
                    <div className='flex items-center gap-2'>
                      <pm.Icon className='h-4 w-4' />
                      {/* <span>{pm.label}</span> */}
                    </div>
                  </SelectItem>
                ))}
              </SelectPrimitives.Group>
            </SelectPrimitives.Viewport>
          </SelectPrimitives.Content>
        </SelectPrimitives.Portal>
      </SelectPrimitives.Root>
      {/* Copy Button */}
      <Button
        onClick={copy}
        variant='outline'
        className='h-10 flex items-center gap-2 relative rounded-none bg-neutral-100 dark:bg-neutral-700 px-1.5'
      >
        <div className='relative w-full'>
          <m.span
            initial={{ opacity: 0.95, filter: 'blur(0px)' }}
            animate={{
              opacity: copied ? 0 : 0.95,
              filter: copied ? 'blur(4px)' : 'blur(0px)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='whitespace-nowrap dark:text-white text-black font-mono text-xs'
          >
            {command}
          </m.span>
          <m.span
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{
              opacity: copied ? 0.95 : 0,
              filter: copied ? 'blur(0px)' : 'blur(4px)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute w-full text-left text-black dark:text-white left-0 top-0 whitespace-nowrap'
          >
            Copied!
          </m.span>
        </div>
        {copied ? (
          <CheckCheck className='h-4 w-4 text-black dark:text-white' />
        ) : (
          <Copy className='h-4 w-4 text-black dark:text-white' />
        )}
      </Button>
    </div>
  );
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitives.Item
        className={cn(
          'relative w-full border-b last:border-none dark:border-neutral-800 border-neutral-200 flex justify-center select-none items-center py-1.5 text-sm outline-none transition-colors duration-200 cursor-pointer',
          // Base state
          'text-gray-700 dark:text-gray-200',
          // Hover state
          'hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-blue-500/30 dark:hover:text-blue-100',
          // Focus/Keyboard navigation state (data-highlighted)
          'data-highlighted:bg-blue-100 data-highlighted:text-blue-900 dark:data-highlighted:bg-blue-500/30 dark:data-highlighted:text-blue-100',
          // Selected state (data-[state=checked])
          'data-[state=checked]:bg-blue-500 data-[state=checked]:text-white dark:data-[state=checked]:bg-blue-600',
          // Disabled state
          'data-disabled:pointer-events-none data-disabled:opacity-50',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
      </SelectPrimitives.Item>
    );
  }
);
