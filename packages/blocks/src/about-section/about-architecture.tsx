'use client'

import React from 'react'
import { motion } from 'motion/react'

export const AboutArchitecture = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                Established 1984
              </span>
              <div className="h-px w-12 bg-zinc-200" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                About the Studio
              </span>
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-spaceGrotesk font-bold tracking-tighter leading-none text-balance">
              Building <br /> <span className="italic">Modernity</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-zinc-500 text-lg text-pretty leading-relaxed">
              We specialize in the intersection of organic form and industrial
              precision, crafting spaces that breathe and evolve with their
              inhabitants.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="aspect-3/4 overflow-hidden rounded-sm group relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
                className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Architecture detail"
              />
              <div className="absolute bottom-8 left-8 text-white mix-blend-difference">
                <span className="text-xs font-mono">
                  01 / STRUCTURAL INTEGRITY
                </span>
              </div>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2 font-spaceGrotesk">
                Material First
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-pretty">
                Our approach begins with the raw elements. Concrete, steel, and
                light. We believe that architecture should be as much about the
                void as it is about the solid.
              </p>
            </div>
          </div>

          <div className="space-y-12 pt-24">
            <div className="max-w-md ml-auto text-right">
              <h3 className="text-2xl font-bold mb-2 font-spaceGrotesk">
                Environmental Flow
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-pretty">
                Sustainability is not a feature; it is the foundation. Every
                line we draw considers the path of the sun and the movement of
                the wind.
              </p>
            </div>
            <div className="aspect-3/4 overflow-hidden rounded-sm group relative">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000"
                className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Architecture light"
              />
              <div className="absolute bottom-8 right-8 text-white mix-blend-difference">
                <span className="text-xs font-mono">02 / NATURAL LIGHTING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
