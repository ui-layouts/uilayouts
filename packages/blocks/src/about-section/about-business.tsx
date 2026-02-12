'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Button } from '@repo/shadcn'

export const AboutBusiness = () => {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-12 -left-12 size-48 bg-zinc-50 rounded-full -z-10" />
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-zinc-900 rounded-2xl flex items-center justify-center p-8 text-white">
                <div className="text-center">
                  <div className="text-5xl font-black font-manrope">25+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-2">
                    Years of Trust
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-zinc-100 rounded-2xl flex items-center justify-center p-8">
                <div className="text-center text-zinc-900">
                  <div className="text-5xl font-black font-manrope">12</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">
                    Global Offices
                  </div>
                </div>
              </div>
              <div className="col-span-2 aspect-2/1 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200"
                  className="object-cover size-full"
                  alt="Corporate"
                />
              </div>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                Corporate Overview
              </span>
              <h2 className="text-5xl font-semibold tracking-tight text-balance leading-tight font-dmSans">
                A legacy of leadership <br /> and strategic impact.
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="size-6 bg-black shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-pretty font-dmSans">
                    Global Perspective
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed text-pretty font-dmSans">
                    Leveraging international insights to solve local
                    complexities with precision and scale.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-6 bg-zinc-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-pretty">
                    Operational Excellence
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed text-pretty">
                    Optimizing corporate structures to foster long-term
                    resilience and shareholder value.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Button className="h-14 px-10 bg-black text-white text-xs font-black uppercase tracking-widest rounded-sm hover:translate-y-[-2px] transition-transform duration-200 shadow-xl">
                Our Executive Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
