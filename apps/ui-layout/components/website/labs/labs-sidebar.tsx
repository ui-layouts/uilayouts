'use client';
import { BadgeInfo, CheckCheck, ChevronsUpDown, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/website/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/website/ui/popover';
import { AllComponents } from '@/configs/docs';
import { useSelectedComponentStore, useStateChange } from '@/hooks/useZustStore';
import { cn } from '@/lib/utils';
import LabsLogo from './labs-logo';

function LabSidebar() {
  const [open, setOpen] = useState(false);
  const { isSidebarOpen, toggleSidebar } = useStateChange();
  const [searchTerm, setSearchTerm] = useState('');
  const recentComponents = useSelectedComponentStore((state) => state.recentComponents);
  const value = recentComponents[0]?.componentName ?? '';
  const addSelectedComponent = useSelectedComponentStore((state) => state.addSelectedComponent);

  const filteredComponents = AllComponents.filter((component) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatches = component.componentName.toLowerCase().includes(searchLower);

    const tagMatches =
      component.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ?? false; // Ensure `false` if `tags` is undefined

    return nameMatches || tagMatches;
  });
  const handleSelectComponent = (component: { componentName: string }) => {
    const metadata = AllComponents.find((item) => item.componentName === component.componentName);
    addSelectedComponent({
      componentName: component.componentName,
      pagelink: metadata?.href ?? '',
      fileSrc: '',
      type: 'component',
    });
    setOpen(false);
  };

  return (
    <AnimatePresence mode='wait'>
      {!isSidebarOpen && (
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            opacity: { duration: 0.4 },
          }}
          className='absolute right-0 top-0 z-40 h-dvh w-[min(85vw,320px)] min-h-0 min-w-0 overflow-y-auto border-l bg-background p-4 py-5 md:relative md:w-auto'
        >
          <div className='mb-3 flex items-center justify-between gap-2'>
            <Link
              href='/'
              aria-label='UI Layouts home'
              className='flex items-center gap-2 text-foreground'
            >
              <LabsLogo />
              <span className='rounded border px-2 py-0.5 text-xs text-muted-foreground'>Labs</span>
            </Link>
            <button
              type='button'
              aria-label='Close sidebar'
              onClick={toggleSidebar}
              className='rounded p-1 hover:bg-muted md:hidden'
            >
              <X className='size-4' />
            </button>
          </div>
          <hr />
          <div className=' text-sm text-primary pt-2'>
            <h1 className='text-lg font-medium pb-1 '>Select Components</h1>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button
                  type='button'
                  aria-expanded={open}
                  className='w-full border border-input dark:bg-neutral-800 bg-neutral-50 hover:bg-accent   text-primary  inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  capitalize h-10 px-4 py-2'
                >
                  {value
                    ? AllComponents.find((component) => component.componentName === value)
                        ?.componentName
                    : 'Select component...'}
                  <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </button>
              </PopoverTrigger>
              <PopoverContent className='2xl:w-[370px] w-[300px] p-0'>
                <Command>
                  <div className='flex items-center border-b px-3'>
                    <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
                    <input
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                      aria-label='Search components'
                      placeholder='Search components…'
                      className='flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-defaultText font-medium disabled:cursor-not-allowed disabled:opacity-50'
                    />
                  </div>

                  <CommandList>
                    <CommandEmpty>No component found.</CommandEmpty>
                    <CommandGroup>
                      {filteredComponents.map((component) => (
                        <CommandItem
                          key={`${component.category}-${component.componentName}`}
                          value={component.componentName}
                          onSelect={() => handleSelectComponent(component)}
                          className={cn(
                            'capitalize flex gap-2  items-center',
                            value === component.componentName ? '' : ''
                          )}
                        >
                          {component.componentName}{' '}
                          <AnimatePresence mode='wait'>
                            {value === component.componentName && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 500,
                                  damping: 30,
                                  opacity: { duration: 0.4 },
                                }}
                              >
                                <CheckCheck className={cn('mr-2 h-4 w-4')} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className='py-4'>
            <h1 className='py-1'>Your Recent Components</h1>
            <hr />
            <div className='h-[67vh] '>
              <div className='flex 2xl:gap-2 gap-1 flex-wrap mt-2  '>
                <AnimatePresence>
                  {recentComponents.length !== 0 ? (
                    recentComponents.map((component) => (
                      <motion.button
                        type='button'
                        layout
                        key={`${component.type}-${component.componentName}`}
                        onClick={() => handleSelectComponent(component)}
                        className={`border w-fit p-1 2xl:text-sm text-xs px-2 cursor-pointer rounded-md flex 2xl:gap-1 items-center capitalize ${
                          value === component.componentName
                            ? 'bg-primary text-primary-foreground'
                            : 'dark:bg-neutral-800 bg-neutral-50 text-foreground'
                        } hover:bg-primary hover:text-primary-foreground transition-colors duration-200`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          opacity: { duration: 0.4 },
                        }}
                      >
                        {component.componentName}
                        {/* <AnimatePresence> */}
                        {value === component.componentName && (
                          <motion.div>
                            <CheckCheck className='w-4 h-4' />
                          </motion.div>
                        )}
                        {/* </AnimatePresence> */}
                      </motion.button>
                    ))
                  ) : (
                    <motion.h1
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='bg-destructive text-destructive-foreground p-1 text-sm my-2 rounded-md flex gap-1 items-center'
                    >
                      <BadgeInfo className='w-5 h-5' /> You don&apos;t have any memories
                    </motion.h1>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default LabSidebar;
