import React from 'react'

export const BoldStats = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center">
      <div className="flex flex-col gap-20 py-10 max-w-7xl mx-auto px-5">
        <div className="md:flex justify-between items-center border-b border-zinc-200 pb-5">
          <div className="flex flex-col md:flex-row items-baseline just gap-4">
            <span className="md:text-8xl text-8xl lg:text-9xl font-medium tracking-tighter text-zinc-950 ">
              10B+
            </span>
            <div className="max-w-xs">
              <h3 className="text-xl font-semibold tracking-tight">
                API Calls Monthly
              </h3>
              <p className="text-sm text-zinc-500 text-pretty">
                Serving the world's most demanding applications with zero
                latency.
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="supportive img"
            className="sm:w-96 w-full h-52 object-fill"
          />
        </div>

        <div className="flex justify-between items-center gap-5">
          <div>
            <p className="md:text-5xl text-4xl font-medium tracking-tighter text-zinc-950 mb-2 ">
              0.1ms
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              P99 Latency
            </p>
          </div>
          <div>
            <p className="md:text-5xl text-4xl font-medium tracking-tighter text-zinc-950 mb-2 ">
              142
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Global Regions
            </p>
          </div>
          <div>
            <p className="md:text-5xl text-4xl font-medium tracking-tighter text-zinc-950 mb-2 ">
              24/7
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Human Support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
