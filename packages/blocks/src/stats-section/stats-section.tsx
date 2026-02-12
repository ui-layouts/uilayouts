'use client'
import React from 'react'
import { motion } from 'motion/react'

const stats = [
  { label: 'Founded', value: '2023' },
  { label: 'Remote', value: '100%' },
  { label: 'Capital', value: '$2.5M' },
  { label: 'Partners', value: '50+' },
]

export const StatsSection = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950 text-white min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center ">
          <div className="space-y-10">
            <span className="inline-flex px-4 py-1.5 text-xs font-semibold border border-zinc-800 rounded-full text-zinc-500 uppercase tracking-[0.2em] bg-zinc-900/50">
              Agency Metrics
            </span>
            <h2 className="text-6xl md:text-7xl font-bold font-dmSans tracking-tighter text-balance leading-none">
              Our Existence <br />
              <span className="text-zinc-600">Explained.</span>
            </h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: 'easeOut',
                  }}
                >
                  <div className="text-5xl font-semibold mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-20 bg-linear-to-tr from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
            <div className="space-y-8 relative z-10">
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed text-pretty font-medium">
                We recognized a demand for solutions that empower enterprises to
                distill exponential information into its purest and most
                simplistic form.
              </p>
              <div className="h-px w-20 bg-zinc-800" />
              <p className="text-lg text-zinc-500 leading-relaxed text-pretty">
                Looking at the market, we encountered software solutions that
                struggled to handle considerable, ever-changing data
                complexities. We saw tools that needed to be faster, more
                convenient, and more precise for effective deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
