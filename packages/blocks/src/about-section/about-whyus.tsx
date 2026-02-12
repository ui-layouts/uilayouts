'use client'
import React from 'react'
import { Star, Award, Target, Zap, Shield } from 'lucide-react'

export const AboutWhyUs = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 relative font-manrope min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-6">
            <h2 className="text-7xl font-bold text-slate-900 tracking-tighter">
              Why us
            </h2>
            <ul className="space-y-4 grid grid-cols-2 gap-2 items-center">
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Award className="size-4 text-slate-900" /> Experience
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Target className="size-4 text-slate-900" /> Consistency
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Zap className="size-4 text-slate-900" /> Quality
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Shield className="size-4 text-slate-900" /> Dedication
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex gap-1 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
              <span className="text-xs font-bold text-slate-900 ml-2">
                5.0 / 5
              </span>
            </div>
            <p className="text-slate-600 text-pretty italic text-lg leading-relaxed">
              "We asked Naymur to redesign our brand and website from scratch,
              and they absolutely nailed it."
            </p>
            <div>
              <p className="font-bold text-slate-900">Sarah Mitchell</p>
              <p className="text-sm text-slate-400">
                Marketing Director, Lunoa
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          <div className="max-w-2xl ml-auto text-right md:text-left">
            <h3 className="text-3xl font-medium text-slate-900 leading-tight text-pretty">
              We design and build tailored digital experiences that not only
              elevate your brand visually but also deliver measurable results
              that support long-term business growth.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-end">
            <StatColumn
              number="105+"
              label="Completed projects"
              sub="for growing brands"
            />
            <StatColumn
              number="92%"
              label="Client retention rate"
              sub="over the past 3 years"
            />
            <StatColumn
              number="1M+"
              label="Users reached through"
              sub="websites we've designed"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatColumn = ({ number, label, sub }: any) => (
  <div className="bg-white p-6 rounded-3xl group relative border border-slate-100 flex flex-col justify-end gap-16 min-h-72 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <span className="text-6xl font-bold text-slate-900  tracking-tighter">
      {number}
    </span>
    <div className="space-y-1">
      <p className="font-medium text-slate-900">{label}</p>
      <p className="text-sm text-slate-400">{sub}</p>
    </div>
  </div>
)
