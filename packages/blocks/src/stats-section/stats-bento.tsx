'use client'
import React from 'react'

export const StatsBento = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 max-w-7xl mx-auto">
        {/* Primary Stat */}
        <div className="md:col-span-3 md:row-span-2 bg-zinc-950 rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#383838_0px_1px,transparent_1px_10px)] mask-[radial-gradient(ellipse_80%_50%_at_100%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
          {/* <div className="absolute top-0 right-0 p-8 opacity-20">
            <div className="size-40 border-8 border-white rounded-full translate-x-10 -translate-y-10" />
          </div> */}
          <div>
            <span className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-6">
              Market Share
            </span>
            <h3 className="text-6xl tracking-tighter text-white ">64%</h3>
          </div>
          <p className="text-zinc-400 text-sm max-w-xs">
            Dominating the cloud-native infrastructure market for venture-backed
            startups.
          </p>
        </div>

        {/* Secondary Stat A */}
        <div className="md:col-span-3 bg-zinc-50 rounded-3xl p-8 border border-zinc-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
              Growth
            </p>
            <p className="text-3xl text-zinc-900 ">+240%</p>
          </div>
          <div className="flex gap-1 items-end h-8">
            {[10, 20, 40, 30, 60, 50, 80, 70, 90, 100, 110].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-zinc-900 rounded-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Tertiary Stat B */}
        <div className="md:col-span-1 bg-white rounded-3xl p-6 border border-zinc-200 flex flex-col justify-center text-center">
          <p className="text-2xl text-zinc-900">12</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Awards
          </p>
        </div>

        {/* Tertiary Stat C */}
        <div className="md:col-span-2 bg-zinc-100 rounded-3xl p-6 flex items-center gap-4">
          <div className="size-10 text-2xl rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm font-semibold">
            ★
          </div>
          <div>
            <p className="text-sm text-zinc-900 leading-none">4.9 / 5.0</p>
            <p className="text-xs font-semibold text-zinc-500 mt-1">
              G2 Peer Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
