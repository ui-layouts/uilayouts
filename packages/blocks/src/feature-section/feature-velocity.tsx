'use client'
import { cn } from '@/lib/utils'
import { Brain, Database, Palette } from 'lucide-react'

export const FeatureVelocity = () => {
  return (
    <section className="bg-black py-32 px-6 min-h-screen font-dmSans relative">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#252525_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="max-w-7xl mx-auto space-y-24 relative z-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-neutral-800 pb-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              High Velocity
              <br />
              Distribution.
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 font-mono text-sm leading-relaxed uppercase tracking-widest">
            Architecture designed for maximum influence and sustainable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Neural Link',
              label: 'Algorithm Optimization',
              color: 'from-violet-500/20',
              icon: Brain,
            },
            {
              title: 'Data Core',
              label: 'Predictive Analytics',
              color: 'from-emerald-500/20',
              icon: Database,
            },
            {
              title: 'Fluid UI',
              label: 'Experience Design',
              color: 'from-blue-500/20',
              icon: Palette,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative bg-neutral-950 border border-neutral-800 rounded-2xl p-12 overflow-hidden hover:border-neutral-950 transition-all duration-500"
            >
              <div
                className={cn(
                  'absolute inset-0 bg-linear-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700',
                  card.color
                )}
              />
              <div className="relative z-10 space-y-16">
                <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <card.icon className="size-6 text-white" />
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
                    {card.label}
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
