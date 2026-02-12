'use client'

import { MountainSnow, Rainbow } from 'lucide-react'

export const FeatureBento: React.FC = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-10 font-manrope">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* Hero Card - Large */}
          <div className="md:col-span-2 md:row-span-2 bg-linear-to-br from-blue-100 via-blue-600 to-blue-500 rounded-3xl p-10 text-white flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium">
                <span className="size-2 bg-green-400 rounded-full animate-pulse" />
                Live Adventures
              </div>
              <h3 className="text-5xl font-bold tracking-tight">
                Explore Beyond
                <br />
                Boundaries
              </h3>
              <p className="max-w-md text-white/90 text-lg">
                Discover curated trails that challenge your limits and reconnect
                you with nature's raw beauty.
              </p>
            </div>
          </div>

          {/* Stats Card 1 */}
          <div className="bg-linear-to-br from-blue-300 to-blue-700 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group transition-all">
            <div className="absolute -right-8 -top-8 size-32 bg-white/20 rounded-full blur-2xl transition-transform duration-500" />
            <div className="relative z-10">
              <div className="size-14 text-white rounded-2xl bg-blue-600 backdrop-blur-sm flex items-center justify-center text-2xl mb-4">
              <MountainSnow className='w-6 h-6' />
              </div>
              <h4 className="text-4xl font-black text-white mb-2">2,847</h4>
              <p className="text-neutral-200 font-medium">Peaks Conquered</p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-gray-200 transition-all group">
            <div className="size-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl font-bold transition-transform">
              <Rainbow className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-gray-900">
                Instant Routes
              </h4>
              <p className="text-gray-600">
                AI-powered trail recommendations based on your skill level and
                preferences.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-linear-to-br from-neutral-950 to-neutral-800 rounded-3xl p-8 text-white flex flex-col justify-between transition-all cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Join Now
              </span>
              <div className="size-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl group-hover:bg-white/30 group-hover:rotate-45 transition-all">
                ↗
              </div>
            </div>
            <h4 className="text-2xl font-bold leading-tight">
              Get Your
              <br />
              Explorer Pass
            </h4>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-gray-950 rounded-3xl p-8 text-white flex flex-col justify-center gap-3 relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute top-5 right-5 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-blue-500"></span>
            </span>
            <div className="relative z-10">
              <span className="text-5xl font-black bg-linear-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
                18.2k+
              </span>
              <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold mt-2">
                Active Community
              </p>
            </div>
          </div>

          {/* Stats Card 3 */}
          <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center gap-3 relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute -bottom-10 -right-10 size-40 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-5xl font-black">94%</span>
              <p className="text-sm uppercase tracking-widest text-rose-100 font-semibold mt-2">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
