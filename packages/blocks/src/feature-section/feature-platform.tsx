import React from 'react'
import {
  Diamond,
  Home,
  Wallet,
  TrendingUp,
  DollarSign,
  Package,
  BadgeCent,
} from 'lucide-react'
import { Button } from '@repo/shadcn'

export const FeaturePlatform = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 font-dmSans min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Title Cell */}
        <div className="md:col-span-3 flex flex-col justify-start">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight text-balance">
            Our <br /> Platform
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed text-pretty pt-4">
            Our platform provides you with the tools and resources you need to
            succeed.
          </p>
        </div>

        {/* Bento Grid Cells */}
        <div className="relative overflow-hidden md:col-span-4 bg-white p-10 rounded-3xl border border-slate-200 flex flex-col justify-between h-80">
          <img
            src="https://images.unsplash.com/photo-1763010156322-2fb80d48ea8b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-out"
          />
          <div className="flex justify-between items-start relative z-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Exclusive
            </h3>
            <Package className="size-8 text-slate-900" />
          </div>
          <p className="text-slate-900 text-sm leading-relaxed text-pretty relative z-2">
            200 exclusive prospects pushed to your platform monthly.
          </p>
        </div>

        <div className="md:col-span-5 bg-white p-10 rounded-3xl border border-slate-200 flex flex-col justify-between h-80">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              In your backyard
            </h3>
            <Home className="size-8 text-slate-400" />
          </div>
          <p className="text-slate-700  text-sm leading-relaxed text-pretty">
            Radius based leads within 50-miles from you, prioritizing those
            closer to you.
          </p>
        </div>

        {/* Second Row */}
        <div className="md:col-span-4 bg-white p-10 rounded-3xl border border-slate-200 flex flex-col justify-between h-80">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              High net worth
            </h3>
            <BadgeCent className="size-8 text-slate-400" />
          </div>
          <p className="text-slate-700 text-sm leading-relaxed text-pretty">
            Average investable assets of $1.5 million.
          </p>
        </div>

        <div className="md:col-span-4 bg-white p-10 rounded-3xl border border-slate-200 flex flex-col justify-between h-80">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              High propensity
            </h3>
            <TrendingUp className="size-8 text-slate-400" />
          </div>
          <p className="text-slate-700 text-sm leading-relaxed text-pretty">
            Our combination of event-driven data, historical data, and
            behavioral results in the highest propensity prospects.
          </p>
        </div>

        <div className="md:col-span-4 bg-emerald-500 p-10 rounded-3xl flex flex-col justify-between h-80 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Pricing Prospective
            </h3>
            <Wallet className="size-8 text-black" />
          </div>
          <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-10 p-4 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <DollarSign key={i} className="size-6 text-white" />
            ))}
          </div>
          <div className="relative z-10 flex flex-col h-full justify-end">
            <Button className="flex items-center gap-2 text-white font-bold text-lg hover:gap-4 bg-black transition-all">
              View pricing <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
