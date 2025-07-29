'use client'
import { motion } from 'motion/react'
import { PlanCard } from './PlanCards'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: '$19',
    period: 'per month',
    features: ['Custom domains', 'Edge content delivery', 'Advanced analytics'],
    disabled: [
      'Quarterly workshops',
      'Single sign-on (SSO)',
      'Priority phone support',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    description: 'Ideal for growing teams and businesses',
    price: '$49',
    period: 'per month',
    features: [
      'Custom domains',
      'Edge content delivery',
      'Advanced analytics',
      'Quarterly workshops',
    ],
    disabled: ['Single sign-on (SSO)', 'Priority phone support'],
    popular: true,
  },
  {
    name: 'Scale',
    description: 'Enterprise-grade features and support',
    price: '$99',
    period: 'per month',
    features: [
      'Custom domains',
      'Edge content delivery',
      'Advanced analytics',
      'Quarterly workshops',
      'Single sign-on (SSO)',
      'Priority phone support',
    ],
    disabled: [],
    popular: false,
  },
]

export const PricingSection2 = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6"
          >
            💎 Pricing Plans
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent leading-tight">
            Pricing that grows with
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              your team size
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <PlanCard key={idx} plan={plan} idx={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-sm font-medium mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {['Transistor', 'Laravel', 'Tuple', 'SavvyCal', 'Statamic'].map(
              (brand, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="text-slate-600 dark:text-slate-400 text-lg font-semibold tracking-wide hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-200"
                >
                  {brand}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
