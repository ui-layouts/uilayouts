'use client'
import React from 'react'
import { Layout, Box, BookOpen, ArrowRight } from 'lucide-react'

const darkFeatures = [
  {
    icon: Layout,
    title: 'Pixel Perfect Layout',
    desc: 'All the sections are perfectly designed with pixel perfect grids and layouts. Everything you see is responsive for all devices.',
  },
  {
    icon: Box,
    title: 'Editable Components',
    desc: 'With the help of variables, everything is under your control. Just click the component and start changing everything but not anything.',
  },
  {
    icon: BookOpen,
    title: 'Scalable Library',
    desc: 'Since each component is custom made, you can easily scale your library with new components, icons, colors, etc.',
  },
]

export const FeatureHighlights = () => {
  return (
    <section className="bg-black py-32 px-6 min-h-screen font-dmSans">
      <div className="max-w-7xl mx-auto">
        <span className="text-pink-500 text-sm font-bold uppercase tracking-widest block mb-6">
          Key Highlights
        </span>
        <h2 className="text-white text-5xl font-bold mb-20 text-balance tracking-tight">
          Why Toast only?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {darkFeatures.map((f, i) => (
            <div
              key={i}
              className="group p-8 border border-neutral-800 rounded-xl hover:bg-neutral-900 bg-neutral-950 transition-all duration-300"
            >
              <div className="size-10 flex items-center justify-center mb-10 text-pink-500">
                <f.icon className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {f.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-10 text-pretty">
                {f.desc}
              </p>
              <button className="flex items-center gap-2 text-slate-300 group-hover:text-pink-500 transition-colors font-medium">
                Learn more <ArrowRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
