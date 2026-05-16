'use client'

import * as React from 'react'
import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion'
import { ChevronDown } from 'lucide-react'

const cx = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(' ')

function Root({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Root> & { className?: string }) {
  return <BaseAccordion.Root className={cx('w-full', className)} {...props} />
}

function Item({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Item> & { className?: string }) {
  return <BaseAccordion.Item className={cx('border-b', className)} {...props} />
}

function Trigger({ className, children, ...props }: React.ComponentProps<typeof BaseAccordion.Trigger> & { className?: string }) {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger
        className={cx('flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline', className)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform data-[panel-open]:rotate-180" />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  )
}

function Content({ className, children, ...props }: React.ComponentProps<typeof BaseAccordion.Panel> & { className?: string }) {
  return (
    <BaseAccordion.Panel className={cx('overflow-hidden text-sm', className)} {...props}>
      <div className="pb-4 pt-0">{children}</div>
    </BaseAccordion.Panel>
  )
}

export const BaseUiAccordion = { Root, Item, Trigger, Content }
