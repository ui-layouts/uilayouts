import React from 'react'

const stats = [
  { label: 'Active Users', value: '1.2M+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Response Time', value: '42ms' },
  { label: 'Global Edge', value: '250+' },
]

export const MinimalStats = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center font-manrope">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 border-l border-zinc-200 px-6 py-2 hover:bg-zinc-200"
            >
              <p className="text-3xl font-bold tracking-tight text-zinc-900 ">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
