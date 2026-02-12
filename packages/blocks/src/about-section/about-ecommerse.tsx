'use client'
import React from 'react'
import { motion } from 'motion/react'

export const AboutECommerce = () => {
  return (
    <section className="py-32 px-6 bg-orange-50 text-orange-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-orange-800/20" />
            <span className="text-xs font-bold text-orange-800/60 uppercase tracking-[0.3em]">
              Our Story & Craft
            </span>
            <div className="h-px w-8 bg-orange-800/20" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif italic text-zinc-900 mb-8 text-balance">
            Rooted in heritage, <br /> refined for today.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed text-pretty italic">
            "We believe that the things we surround ourselves with should tell a
            story. Not just of where they came from, but where they are going."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800"
                className="object-cover size-full"
                alt="Craftsmanship"
              />
            </div>
            <h4 className="font-bold text-lg">Ethical Sourcing</h4>
            <p className="text-sm text-zinc-500 text-pretty">
              Working directly with artisans to ensure fair trade and
              sustainable materials.
            </p>
          </div>
          <div className="space-y-6 pt-12">
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800"
                className="object-cover size-full"
                alt="Curation"
              />
            </div>
            <h4 className="font-bold text-lg">Timeless Curation</h4>
            <p className="text-sm text-zinc-500 text-pretty">
              Each piece is selected for its ability to withstand trends and age
              beautifully.
            </p>
          </div>
          <div className="space-y-6 pt-24">
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
                className="object-cover size-full"
                alt="Quality"
              />
            </div>
            <h4 className="font-bold text-lg">Local Heritage</h4>
            <p className="text-sm text-zinc-500 text-pretty">
              Preserving traditional techniques through modern design
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
