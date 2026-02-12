'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Cog, Globe, Shield } from 'lucide-react'

const features = [
  {
    title: 'Global Edge Network',
    description:
      'Deploy your code closer to your users with our distributed edge nodes in 40+ regions.',
    icon: <Globe />,
  },
  {
    title: 'Zero-Config Scaling',
    description:
      'Automatic scaling that handles traffic spikes without manual intervention or pre-provisioning.',
    icon: <Cog />,
  },
  {
    title: 'Military-Grade Security',
    description:
      'SOC2 Type II compliant infrastructure with built-in DDoS protection and encrypted secrets.',
    icon: <Shield />,
  },
]

const integrations = [
  'GitHub',
  'Vercel',
  'AWS',
  'Slack',
  'Discord',
  'Stripe',
  'PostHog',
]

export const AboutSass = () => {
  return (
    <section className="py-24 px-6 bg-zinc-50 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Main Brand Story */}
        <div className="bg-white rounded-2xl p-10 md:p-16 shadow-sm border border-zinc-200/60 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1759269834694-3daf291dce44?q=80&w=627&auto=format&fit=crop"
            alt=""
            className="absolute top-0 right-0 w-full opacity-[0.03] pointer-events-none hidden lg:block"
          />

          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="size-2.5 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                Company Introduction
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-balance leading-[0.9] mb-8">
              Built by developers, <br /> for the future of SaaS.
            </h2>

            <p className="text-xl text-zinc-500 text-pretty leading-relaxed mb-12">
              We started as a small team of engineers tired of fighting
              infrastructure. Today, we're building the operating system for
              modern software companies—handling the complexity so you can ship
              features faster.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="text-xs font-dmSans font-semibold text-zinc-500 hover:text-black transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Dynamic Stats Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold tracking-tight text-balance">
              Infrastructure that scales with your ambition.
            </h3>
            <p className="text-zinc-500 text-pretty leading-relaxed">
              Whether you're a startup launching your first MVP or an enterprise
              scaling to millions of users, our architecture is designed to grow
              with you. No migration headaches, no performance bottlenecks.
            </p>
            <div className="flex gap-12 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-black font-dmSans">99.99%</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Uptime SLA
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black font-dmSans ">1.2ms</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  API Latency
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl bg-zinc-900 p-8 flex flex-col justify-end overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1759179355276-cb2278fdc4c1?q=80&w=627&auto=format&fit=crop"
              alt=""
              className="absolute top-0 right-0 w-full opacity-[0.03] pointer-events-none hidden lg:block"
            />
            <div className="space-y-4 relative z-10">
              <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="size-full bg-white"
                />
              </div>
              <div className="font-mono text-xs mb-16 text-zinc-500 flex justify-between uppercase">
                <span>System Health</span>
                <span className="text-emerald-500 animate-pulse font-bold">
                  Optimal
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2 h-40 items-end">
                {[125, 70, 120, 90, 99, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="bg-blue-500 rounded-t-sm group-hover:bg-blue-600 transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid to fill space */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-2xl bg-zinc-50 flex items-center border border-zinc-200 justify-center text-zinc-900 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight font-dmSans">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed text-pretty">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
