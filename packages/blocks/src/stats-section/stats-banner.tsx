'use client'
import React from 'react'
import { motion } from 'motion/react'

export const StatsBanner = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-slate-50 to-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold text-slate-900 mb-4 text-balance"
          >
            Trusted by Thousands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Join businesses worldwide who've transformed their advertising with
            our platform
          </motion.p>
        </div>

        <div className="space-y-6">
          {/* Hero Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full rounded-3xl p-16 text-center text-white shadow-2xl shadow-blue-500/20 overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1762503203754-62c5a0c969d9?q=80&w=1492&auto=format&fit=crop"
              alt="gradient"
              className="w-full h-full object-cover absolute left-0 top-0"
            />
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

            <div className="relative z-10">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                className="text-7xl md:text-8xl font-semibold block mb-3 bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent"
              >
                500K+
              </motion.span>
              <p className="text-xl md:text-2xl font-medium text-blue-50">
                Campaigns Successfully Managed
              </p>
            </div>
          </motion.div>

          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBox number="300K+" label="Ads Optimized Daily" delay={0.3} />
            <StatBox number="140K+" label="Campaigns Built" delay={0.4} />
            <StatBox number="100K+" label="Happy Customers" delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatBox = ({
  number,
  label,
  delay,
}: {
  number: string
  label: string
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 hover:border-blue-200 transition-all duration-300 group"
  >
    <span className="text-4xl md:text-5xl font-semibold text-slate-900 block mb-3 transition-colors">
      {number}
    </span>
    <p className="text-slate-600 text-base font-medium">{label}</p>
  </motion.div>
)
