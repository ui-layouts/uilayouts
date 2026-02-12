import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@repo/shadcn'

interface NatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  active?: boolean
}

const NatureCard: React.FC<NatureCardProps> = ({
  title,
  description,
  icon,
  active,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 flex flex-col h-full transition-all duration-300 border-2',
        active
          ? 'bg-emerald-950 border-emerald-950 text-white shadow-2xl'
          : 'bg-white border-transparent text-gray-900 shadow-sm hover:border-emerald-100'
      )}
    >
      <div
        className={cn(
          'size-12 mb-4 flex items-center justify-center',
          active ? 'text-emerald-400' : 'text-emerald-900'
        )}
      >
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2 leading-tight">{title}</h3>
      <p
        className={cn(
          'text-lg mb-12 text-pretty',
          active ? 'text-emerald-100/70' : 'text-gray-500'
        )}
      >
        {description}
      </p>
      <Button
        className={cn(
          'mt-auto px-6 py-3 rounded-full font-bold w-fit transition-colors',
          active
            ? 'bg-white text-emerald-950 hover:bg-emerald-50'
            : 'bg-emerald-950 text-white hover:bg-emerald-900'
        )}
      >
        Learn More
      </Button>
    </div>
  )
}

export const FeatureNature = () => {
  return (
    <section className="bg-white py-10 px-4 font-dmSans">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl max-w-2xl font-bold text-gray-900">
              Discover the Wonders of Nature
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl text-pretty">
              Explore breathtaking experiences that bring you closer to the
              natural world, from wild forests to tranquil trails.
            </p>
          </div>
          <Button className="bg-emerald-950 text-white px-6 py-4 rounded-2xl font-semibold transition-colors">
            Start Your Journey
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <NatureCard
            active
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
                <path d="M7 16v6" />
                <path d="M13 19v3" />
                <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
              </svg>
            }
            title="Explore Pristine Forests"
            description="Walk beneath ancient trees and discover untouched ecosystems teeming with life."
          />
          <NatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="size-8"
                stroke="currentColor"
              >
                <path d="M22 17a10 10 0 0 0-20 0" />
                <path d="M6 17a6 6 0 0 1 12 0" />
                <path d="M10 17a2 2 0 0 1 4 0" />
              </svg>
            }
            title="Wildlife Encounters"
            description="Experience rare moments with native species in their natural habitats, guided by ethical eco-tour practices."
          />
          <NatureCard
            icon={
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A2 2 0 013 15.483V6.517a2 2 0 011.553-1.943L9 2l5.447 2.724A2 2 0 0116 6.517v8.966a2 2 0 01-1.553 1.943L9 20z"
                />
              </svg>
            }
            title="Scenic Trails & Hikes"
            description="Follow scenic trails that reveal stunning views, peaceful landscapes, and hidden gems at every turn."
          />
          <NatureCard
            icon={
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            title="Sunset & Stargazing"
            description="Unwind under breathtaking sunsets or gaze at starry skies free from city light pollution."
          />
        </div>
      </div>
    </section>
  )
}
