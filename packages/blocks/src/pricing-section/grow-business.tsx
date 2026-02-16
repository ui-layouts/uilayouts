'use client'
import React, { useState, useRef } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import NumberFlow from '@number-flow/react'
import { useId } from 'react'

// import { Button } from '@repo/ui/shadcn'
import { cn } from '@/lib/utils'
import { Switch, Button } from '@repo/shadcn'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
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

export const GrowthBusiness = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const id = useId()
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={timelineRef}
      className="py-24 bg-slate-100 font-dmSans text-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto md:px-0 px-6 text-center">
        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          as="h2"
          className="text-4xl font-semibold tracking-tight mb-2 text-balance"
        >
          Plans that grow your business.
        </TimelineAnimation>
        <TimelineAnimation
          animationNum={2}
          timelineRef={timelineRef}
          as="p"
          className="text-neutral-500 mb-5 text-pretty"
        >
          Unlock potential with plans designed to fuel growth.
        </TimelineAnimation>
        <TimelineAnimation
          animationNum={3}
          timelineRef={timelineRef}
          className="flex items-center justify-center gap-4 mb-16 bg-lime-100 border border-lime-400 font-semibold w-fit p-3 mx-auto rounded-full"
        >
          <span
            className={cn(
              'text-sm transition-colors',
              billing === 'monthly' ? 'text-black' : 'text-neutral-400'
            )}
          >
            Monthly
          </span>
          <Switch
            id={id}
            // @ts-ignore
            checked={billing === 'yearly'}
            className="bg-neutral-300 data-[state=checked]:bg-lime-500 data-[state=checked]:text-white"
            // @ts-ignore
            onCheckedChange={(checked) =>
              setBilling(checked ? 'yearly' : 'monthly')
            }
          />

          <div className="flex items-center">
            <span
              className={cn(
                'text-sm transition-colors',
                billing === 'yearly' ? 'text-black' : 'text-neutral-400'
              )}
            >
              Yearly
            </span>
            <span
              className={cn(
                'px-2 py-0.5 bg- text-xs font-bold rounded-full uppercase',
                billing === 'yearly' ? 'text-lime-600' : 'text-neutral-400'
              )}
            >
              (Save 20%)
            </span>
          </div>
        </TimelineAnimation>
        <TimelineAnimation animationNum={4} timelineRef={timelineRef}>
          <div className="grid lg:grid-cols-3 gap-6">
            {PLANS.map((plan, index) => (
              <TimelineAnimation
                key={plan.name}
                animationNum={5 + index}
                timelineRef={timelineRef}
                className={cn(
                  'rounded-lg p-4 flex flex-col border transition-all',
                  plan.featured
                    ? 'bg-neutral-950 text-white shadow-2xl z-10 border-transparent'
                    : 'bg-white border border-neutral-200'
                )}
              >
                <div className="text-left mb-4">
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
                <div className="flex items-baseline gap-1 mb-4 text-left">
                  <span
                    className={cn(
                      'text-2xl font-medium',
                      plan.featured ? 'text-green-400' : 'text-neutral-400'
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
                  <span className="text-neutral-400 text-sm">
                    /{billing === 'monthly' ? 'monthly' : 'yearly'}
                  </span>
                </div>
                <TimelineAnimation
                  animationNum={6 + index}
                  timelineRef={timelineRef}
                >
                  <Button
                    variant={plan.variant}
                    className={cn(
                      'w-full mb-5 rounded-lg h-14',
                      plan.featured
                        ? 'py-4 bg-lime-500 border border-neutral-700'
                        : 'bg-white border-neutral-200 hover:shadow-neutral-200 hover:shadow-lg hover:bg-white'
                    )}
                  >
                    Select Plan
                  </Button>
                </TimelineAnimation>
                <div
                  className={cn(
                    'space-y-4 p-4 text-left border rounded-lg',
                    plan.featured
                      ? 'border-neutral-700 bg-neutral-800'
                      : 'border-neutral-200 bg-neutral-100'
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className={cn(
                          'w-5 h-5',
                          plan.featured
                            ? 'fill-white stroke-white'
                            : 'fill-black stroke-black '
                        )}
                      >
                        <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" />
                        <path
                          d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5"
                          stroke={plan.featured ? 'black' : 'white'}
                        />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </TimelineAnimation>
            ))}
          </div>
        </TimelineAnimation>
      </div>
    </section>
  )
}
