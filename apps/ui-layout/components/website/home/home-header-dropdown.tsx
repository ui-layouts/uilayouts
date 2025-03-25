'use client';

import * as React from 'react';
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRecentPagesStore } from '@/hooks/useZustStore';

const components: { title: string; href: string; description: string }[] = [
  {
    title: '3D Blob ',
    href: 'components/3d-blob',
    description:
      'When you scroll down to that specific section, all the animations will slowly play one after another.',
  },
  {
    title: 'Image Ripple Effect',
    href: '/components/image-ripple-effect',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Tags Input',
    href: '/components/tags-input',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Mesh Gradient',
    href: '/components/bg-mesh-gradient',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Timeline Animation',
    href: 'components/timeline-animation',
    description:
      'When you scroll down to that specific section, all the animations will slowly play one after another.',
  },
  {
    title: 'Motion Number',
    href: '/components/motion-number',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Dialog',
    href: 'components/dialog',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Text Scroll Animation ',
    href: 'components/scroll-text',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: 'components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Image Mousetrail',
    href: '/components/image-mousetrail',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];
export function NavigationMenuDemo() {
  const { addVisitedPage, getRecentPages } = useRecentPagesStore();

  const recentPages = getRecentPages();
  const updates = components.slice(0, 4); // First 4 components
  const others = components.slice(4); // Remaining components
  return (
    <NavigationMenuPrimitive.Root
    className="relative  "

  >
    <NavigationMenuPrimitive.List
      className={cn(
        "flex flex-row rounded-lg hover:bg-white  p-2 space-x-2",
      )}
    >
      <NavigationMenuPrimitive.Item
    
      >
        <NavigationMenuPrimitive.Trigger
          className={cn(
            "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
            "text-sm font-medium",
            "text-gray-700 ",
            "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
          )}
        >
          Components
        </NavigationMenuPrimitive.Trigger>

        <NavigationMenuPrimitive.Content
          className={cn(
            "absolute w-auto top-0 left-0 rounded-lg",
            "radix-motion-from-start:animate-enter-from-left",
            "radix-motion-from-end:animate-enter-from-right",
            "radix-motion-to-start:animate-exit-to-left",
            "radix-motion-to-end:animate-exit-to-right",
          )}
        >
          <div className="w-[37rem] l p-3">
            <a
              className=' flex gap-2 mb-2  rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 px-4 no-underline outline-none focus:shadow-md'
              href='/'
            >
              <div className='mb-2 mt-4 text-lg font-medium'>
                <Image
                  src='/apple-touch-icon.png'
                  alt='apple-touch-icon'
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p>✨Updates</p>
                <ul className='grid grid-cols-2 gap-1'>
                  {updates.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className='border'
                    >
                      {component.title}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </a>
            <ul className='grid gap-3  md:w-[400px] lg:w-[500px]  lg:grid-cols-[.75fr_1fr]'>
              {others.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.title}
                </ListItem>
              ))}
            </ul>
          </div>
        </NavigationMenuPrimitive.Content>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item asChild>
        <NavigationMenuPrimitive.Link
          href="https://cursify.vercel.app"
          className={cn(
            "px-3 py-2 text-sm rounded-md hover:bg-gray-100",
            "text-sm font-medium text-gray-700 ",
          )}
        >
          Cursify
        </NavigationMenuPrimitive.Link>
      </NavigationMenuPrimitive.Item>

      <NavigationMenuPrimitive.Indicator
        className={cn(
          "z-10",
          "top-[100%] flex items-end justify-center h-2 overflow-hidden",
          "radix-state-visible:animate-fade-in",
          "radix-state-hidden:animate-fade-out",
          "transition-[width_transform] duration-[250ms] ease-[ease]",
        )}
      >
        <div className="top-1 relative bg-white  w-2 h-2 rotate-45" />
      </NavigationMenuPrimitive.Indicator>
    </NavigationMenuPrimitive.List>

    <div
      className={cn(
        "absolute flex justify-center",
        "w-[140%] left-[-20%] top-[100%]",
      )}
      style={{
        perspective: "2000px",
      }}
    >
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative mt-2 shadow-lg rounded-md bg-white  overflow-hidden",
          "w-radix-navigation-menu-viewport",
          "h-radix-navigation-menu-viewport",
          "radix-state-open:animate-scale-in-content",
          "radix-state-closed:animate-scale-out-content",
          "origin-[top_center] transition-[width_height] duration-300 ease-[ease]",
        )}
      />
    </div>
  </NavigationMenuPrimitive.Root>
    // <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Components </NavigationMenuTrigger>
    //       <NavigationMenuContent className='dark:bg-black bg-white p-6 '>
    //         <a
    //           className=' flex gap-2 mb-2  rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 px-4 no-underline outline-none focus:shadow-md'
    //           href='/'
    //         >
    //           <div className='mb-2 mt-4 text-lg font-medium'>
    //             <Image
    //               src='/apple-touch-icon.png'
    //               alt='apple-touch-icon'
    //               width={100}
    //               height={100}
    //             />
    //           </div>
    //           <div>
    //             <p>✨Updates</p>
    //             <ul className='grid grid-cols-2 gap-1'>
    //               {updates.map((component) => (
    //                 <ListItem
    //                   key={component.title}
    //                   title={component.title}
    //                   href={component.href}
    //                   className='border'
    //                 >
    //                   {component.title}
    //                 </ListItem>
    //               ))}
    //             </ul>
    //           </div>
    //         </a>
    //         <ul className='grid gap-3  md:w-[400px] lg:w-[500px]  lg:grid-cols-[.75fr_1fr]'>
    //           {others.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.title}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Cursify</NavigationMenuTrigger>
    //       <NavigationMenuContent className='dark:bg-black bg-white '>
    //         <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] '>
    //           {recentPages.map((component) => (
    //             <ListItem
    //               key={component.id}
    //               title={component.name}
    //               href={component.id}
    //             >
    //               {component.name}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuPrimitive.Link asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuPrimitive.Link>
    </li>
  );
});
ListItem.displayName = 'ListItem';
