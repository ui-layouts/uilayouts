'use client'
import { motion } from 'motion/react'
import { Check, X } from 'lucide-react'

interface PlanCardProps {
  plan: {
    name: string
    description: string
    price: string
    period: string
    features: string[]
    disabled: string[]
    popular: boolean
  }
  idx: number
}

export const PlanCard = ({ plan, idx }: PlanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-3xl p-8 transition-all duration-500 ${
        plan.popular
          ? 'bg-gradient-to-b from-white to-violet-50 dark:from-slate-800 dark:to-violet-900/20 border-2 border-violet-200 dark:border-violet-500/50 shadow-2xl shadow-violet-500/20'
          : 'bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl'
      } backdrop-blur-sm h-[580px] flex flex-col`}
    >
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            ⭐ Most Popular
          </div>
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          {plan.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center">
          <span className="text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            {plan.price}
          </span>
          <span className="text-slate-500 dark:text-slate-400 ml-2 text-lg">
            {plan.period}
          </span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 mb-8 ${
          plan.popular
            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40'
            : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg'
        }`}
      >
        Start free trial
      </motion.button>

      <div className="flex-1">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
          What's included:
        </h4>
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1 + i * 0.05,
              }}
              className="flex items-center text-slate-700 dark:text-slate-300"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm leading-relaxed">{feature}</span>
            </motion.li>
          ))}
          {plan.disabled.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1 + (plan.features.length + i) * 0.05,
              }}
              className="flex items-center text-slate-400 dark:text-slate-500"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3">
                <X className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </div>
              <span className="text-sm leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
