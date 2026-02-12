'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Button } from '@repo/shadcn'

const values = [
  {
    number: '01',
    title: 'Who We Are',
    description:
      'A diverse collective of thinkers, makers, and problem solvers dedicated to pushing boundaries.',
  },
  {
    number: '02',
    title: 'What Do We Do',
    description:
      'We craft digital experiences that resonate, using state-of-the-art technology and timeless design.',
  },
  {
    number: '03',
    title: 'How Do We Help',
    description:
      'Through deep collaboration and strategic thinking, we help brands navigate the modern digital landscape.',
  },
  {
    number: '04',
    title: 'Create Success',
    description:
      'Our goal is measurable impact and lasting legacy for every client we partner with.',
  },
]

export const AboutCreative = () => {
  return (
    <section className="py-32 px-6 bg-white text-black overflow-hidden relative min-h-screen">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter">
            Our Core <br />
            <span className="italic">Philosophy</span>
          </h2>
          <div className="max-w-md space-y-6">
            <p className="text-zinc-500 text-lg md:text-xl text-pretty leading-relaxed">
              At Kreativy, we take pride in our values — service, integrity, and
              excellence. We're driven by the desire to build something
              meaningful.
            </p>
            <Button className="h-12 px-6 dark:hover:bg-zinc-50 border text-black border-zinc-200 bg-zinc-100 rounded-full text-sm font-bold hover:bg-zinc-50 transition-colors active:scale-95">
              Read our values
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="grid sm:grid-cols-2 ">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
                className="group hover:bg-zinc-100 p-6 border border-transparent hover:border-zinc-300 transition-colors duration-300"
              >
                <div className="text-xs font-black text-zinc-300 mb-4 tracking-tighter  group-hover:text-black transition-colors duration-300">
                  {v.number}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight font-spaceGrotesk">
                  {v.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm text-pretty">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="aspect-4/5 rounded-3xl bg-zinc-100 overflow-hidden shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
                  alt="Workspace"
                  className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-100 overflow-hidden shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800"
                  alt="Collaboration"
                  className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="space-y-6 pt-12"
            >
              <div className="aspect-square rounded-3xl bg-zinc-100 overflow-hidden shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800"
                  alt="Process"
                  className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="aspect-4/5 rounded-3xl bg-zinc-100 overflow-hidden shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800"
                  alt="Detail"
                  className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </section>
  )
}
