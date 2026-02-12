'use client'
import React, { useState } from 'react'
import { Plus, Zap } from 'lucide-react'
import NumberFlow from '@number-flow/react'
import { cn } from '@/lib/utils'
import { Button } from '@repo/shadcn'

const PLANS = [
  {
    name: 'Starter',
    price: 10,
    description: 'Perfect for individuals and small projects',
    features: [
      '5 projects per month',
      'Basic templates',
      'Community support',
      '1GB storage',
      'Mobile app access',
    ],
  },
  {
    name: 'Professional',
    price: 20,
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      'Premium templates',
      'Priority support',
      '10GB storage',
      'Advanced analytics',
    ],
    featured: true,
  },
  {
    name: 'Business',
    price: 40,
    description: 'Complete solution for established businesses',
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Dedicated account manager',
      'API access',
      'SLA guarantee',
      'Training sessions',
    ],
  },
  {
    name: 'Enterprise',
    price: 60,
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Business',
      'Custom development',
      '24/7 phone support',
      'Compliance certifications',
      'Multi-region hosting',
      'Custom contracts',
    ],
  },
]

export const SubscriptionDetails = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="py-24 md:px-16 px-10 font-dmSans min-h-screen bg-white text-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold">Subscription</h2>
          <div className="bg-neutral-100 p-1 rounded-full flex gap-1">
            <Button
              onClick={() => setBilling('monthly')}
              className={cn(
                'px-4 py-1.5 text-sm font-medium rounded-full transition-all',
                billing === 'monthly'
                  ? 'bg-white shadow-sm text-black'
                  : 'text-neutral-500 hover:text-neutral-900 bg-transparent border-none'
              )}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setBilling('yearly')}
              className={cn(
                'px-4 py-1.5 text-sm font-medium rounded-full transition-all',
                billing === 'yearly'
                  ? 'bg-white shadow-sm text-black'
                  : 'text-neutral-500 hover:text-neutral-900 bg-transparent border-none'
              )}
            >
              Annual <span className="text-neutral-900">-15%</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 gap-6">
          {PLANS.map((plan, idx) => {
            const displayPrice =
              billing === 'monthly' ? plan.price : Math.round(plan.price * 0.85)
            return (
              <div
                key={idx}
                className={cn(
                  'xl:p-8 md:p-4 p-6 rounded-2xl relative border transition-all flex flex-col',
                  plan.featured
                    ? 'bg-black text-white shadow-2xl relative overflow-hidden border-none'
                    : 'bg-neutral-100 border-neutral-300 border-2 border-dashed'
                )}
              >
                {plan.featured && (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1600619030925-569b3b964418?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-fill absolute -bottom-40 rotate-180 left-0"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 via-pink-500/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-20">
                      Most popular
                    </div>
                  </>
                )}
                <div className="relative z-10 flex-1 space-y-4 pb-10">
                  <span className="text-sm text-neutral-400 block">
                    {plan.name}
                  </span>
                  <span className="text-4xl font-bold block">
                    $<NumberFlow value={displayPrice} />
                  </span>
                  <p
                    className={cn(
                      'text-xl font-medium',
                      plan.featured ? 'text-white' : 'text-neutral-800'
                    )}
                  >
                    {plan.description}
                  </p>
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div
                          className={cn(
                            'size-2 rounded-full',
                            plan.featured ? 'bg-white/40' : 'bg-neutral-200'
                          )}
                        />
                        <span
                          className={
                            plan.featured
                              ? 'text-neutral-200'
                              : 'text-neutral-700'
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className={cn(
                    'relative z-10 gap-2 h-12 border-neutral-200 mt-auto transition-transform',
                    plan.featured
                      ? 'bg-white text-black hover:bg-neutral-100 border-none shadow-lg active:scale-95'
                      : 'text-neutral-600 active:scale-95 hover:bg-white '
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="size-5 stroke-black fill-none"
                    stroke-width="2"
                  >
                    <path d="M3.32352 13.0113C3.6739 10.009 4.18586 7.75784 4.66063 6.15851C5.04994 4.84711 5.24459 4.19141 6.04283 3.5957C6.84107 3 7.65697 3 9.28876 3H14.7113C16.3431 3 17.159 3 17.9572 3.5957C18.7554 4.19141 18.9501 4.84711 19.3394 6.15851C19.8142 7.75784 20.3261 10.009 20.6765 13.0113C21.0895 16.5497 21.2959 18.3189 20.1027 19.6594C18.9095 21 16.9758 21 13.1084 21H10.8916C7.02422 21 5.09052 21 3.89731 19.6594C2.70411 18.3189 2.91058 16.5497 3.32352 13.0113Z" />
                    <path d="M9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7" />
                  </svg>{' '}
                  Subscribe
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-900 text-pretty">
                How many interiors can I generate with a basic plan?
              </h4>
            </div>
            <div className="relative">
              <p className="text-neutral-500 text-sm leading-relaxed mb-4 text-pretty">
                Replace the couch: Current leather couch feels too lightweight.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed text-pretty">
                Go for a deep brutalist frame in dark suede or stonewashed linen
                — think low, wide, grounded. See Mario Bellini Camaleonda, or a
                custom slab-style bench sofa in ecru mohair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
