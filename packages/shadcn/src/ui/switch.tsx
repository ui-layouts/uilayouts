// @ts-nocheck
import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

interface SwitchProps extends React.ComponentProps<
  typeof SwitchPrimitive.Root
> {
  size?: 'sm' | 'default'
  className?: string
  thumbsClassName?: string
  id?: string
}

export function Switch({
  className,
  size = 'default',
  thumbsClassName,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        'relative h-6 w-11 cursor-default rounded-md outline-none data-[state=checked]:bg-black bg-neutral-200',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'block size-5 translate-x-0.5 rounded-md bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]',
          thumbsClassName
        )}
      />
    </SwitchPrimitive.Root>
  )
}
