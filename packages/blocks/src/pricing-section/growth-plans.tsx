'use client'
import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import NumberFlow from '@number-flow/react'
import { useId } from 'react'

// import { Button } from '@repo/ui/shadcn'
import { cn } from '@/lib/utils'
import { Switch, Button } from '@repo/shadcn'
const PLANS = [
  {
    name: 'Basic Plan',
    description: 'Ideal for small businesses',
    monthly: 29,
    yearly: 23,
    features: [
      'Unified dashboard',
      'Finance management module',
      'Inventory control',
      'Basic reporting and analytics',
      '10 user accounts',
    ],
    variant: 'outline' as const,
  },
  {
    name: 'Business Plan',
    description: 'For growing businesses',
    monthly: 59,
    yearly: 47,
    features: [
      'Everything in basic plan',
      'HR & payroll module',
      'Sales & CRM module',
      'Workflow automation',
      'Advanced analytics & reporting',
    ],
    variant: 'secondary' as const,
    featured: true,
  },
  {
    name: 'Premium Plan',
    description: 'Ideal for enterprises seeking',
    monthly: 99,
    yearly: 79,
    features: [
      'Everything in business plan',
      'Custom integrations',
      'AI-Driven recommendations',
      'Role based access control',
      'Unlimited user accounts',
    ],
    variant: 'outline' as const,
  },
]

export const GrowthPlans = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const id = useId()
  return (
    <section className="py-24 bg-white font-dmSans text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-2 text-balance">
          Plans that grow your SASS.
        </h2>
        <p className="text-neutral-500 mb-5 text-pretty">
          Unlock potential with plans designed to fuel growth.
        </p>
        <div className="flex items-center justify-center gap-4 mb-16 bg-neutral-100 border border-neutral-200 w-fit p-3 mx-auto">
          <span
            className={cn(
              'text-sm transition-colors',
              billing === 'monthly'
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-400'
            )}
          >
            Monthly
          </span>
          <Switch
            id={id}
            // @ts-ignore
            checked={billing === 'yearly'}
            className="bg-neutral-300"
            // @ts-ignore
            onCheckedChange={(checked) =>
              setBilling(checked ? 'yearly' : 'monthly')
            }
          />

          <div className="flex items-center gap-2">
            <span
              className={cn(
                'text-sm transition-colors',
                billing === 'yearly'
                  ? 'text-neutral-900 font-medium'
                  : 'text-neutral-400'
              )}
            >
              Yearly
            </span>
            <span className="px-2 py-0.5 bg- text-[10px] font-bold rounded-full uppercase">
              Save 20%
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 -gap-x-4 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-lg p-8 flex flex-col border transition-all',
                plan.featured
                  ? 'bg-neutral-950 text-white scale-105 shadow-2xl z-10 border-transparent'
                  : 'bg-neutral-100 border border-neutral-200'
              )}
            >
              <div className="text-left mb-8">
                <h4 className="font-bold text-lg">{plan.name}</h4>
                <p
                  className={cn(
                    'text-sm',
                    plan.featured ? 'text-neutral-400' : 'text-neutral-400'
                  )}
                >
                  {plan.description}
                </p>
              </div>
              <div className="flex items-baseline gap-1 mb-8 text-left">
                <span
                  className={cn(
                    'text-2xl font-medium',
                    plan.featured ? 'text-gre' : 'text-neutral-400'
                  )}
                >
                  $
                </span>
                <span
                  className={cn(
                    'text-5xl font-bold ',
                    plan.featured ? 'text-white' : 'text-neutral-900'
                  )}
                >
                  <NumberFlow
                    value={billing === 'monthly' ? plan.monthly : plan.yearly}
                  />
                </span>
                <span className="text-neutral-400 text-sm">/monthly</span>
              </div>
              <Button
                variant={plan.variant}
                className={cn(
                  'w-full mb-10 rounded-lg h-14',
                  plan.featured
                    ? 'py-4 bg-neutral-800 border border-neutral-700'
                    : 'bg-white border-neutral-200 hover:shadow-neutral-200 hover:shadow-lg hover:bg-white'
                )}
              >
                Select Plan
              </Button>
              <div
                className={cn(
                  'space-y-4 pt-8 border-t text-left',
                  plan.featured ? 'border-neutral-700' : 'border-neutral-200'
                )}
              >
                {plan.features.map((f, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex items-center gap-3 text-sm',
                      plan.featured ? 'text-neutral-300' : 'text-neutral-600'
                    )}
                  >
                    <Check className="size-4 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
