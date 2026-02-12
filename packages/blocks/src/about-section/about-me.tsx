import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@repo/shadcn'

export const AboutMe = () => {
  return (
    <section className="bg-neutral-100 min-h-screen px-6 py-24 md:px-12 lg:px-24 font-manrope">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="relative w-full max-w-sm shrink-0">
          <div className="md:aspect-auto aspect-5/6 rounded-2xl overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1676377630356-d8e7acd02ead?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Naymur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 -left-4">
            {/* Simple representation of the handwritten signature */}
            <div className="font-serif italic text-2xl text-gray-800 -rotate-6">
              Naymur Rahman
              <div className="h-px w-48 bg-gray-400 -mt-1"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span>« About me »</span>
          </div>

          <h2 className="text-6xl md:text-6xl font-bold text-gray-900 text-balance">
            The Digital Craftsmanship
          </h2>

          <div className="space-y-6 max-w-2xl">
            <p className="text-xl text-gray-600 leading-relaxed text-pretty">
              As a passionate UI/UX designer and frontend developer, I
              specialize in creating beautiful, functional digital experiences
              that bridge the gap between design and technology.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty">
              With over 5 years of experience in the industry, I've had the
              privilege of working with startups and established companies to
              transform their ideas into engaging digital products that users
              love.
            </p>
          </div>

          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-colors group">
            Read My Full Story
            <div className="size-8 bg-white rounded-full flex items-center justify-center text-violet-600 group-hover:translate-x-1 transition-transform">
              <span className="text-lg">›</span>
            </div>
          </Button>
        </div>

        <div className="hidden lg:block w-48 shrink-0 self-end">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 rotate-6 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1765779038142-054a9f8c2268?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 -rotate-6 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1764703495149-f09b0aa607c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
