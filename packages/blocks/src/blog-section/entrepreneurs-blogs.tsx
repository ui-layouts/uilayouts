'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
} from '@/components/ui/carousel'

interface BlogCardProps {
  date: string
  title: string
  description: string
  imageSeed: string
  variant?: 'purple' | 'white'
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  description,
  imageSeed,
  variant = 'white',
}) => {
  return (
    <div
      className={cn(
        'rounded-[2.5rem] p-8 space-y-8 flex flex-col h-full transition-transform hover:-translate-y-2 duration-300',
        variant === 'purple'
          ? 'bg-violet-600 text-white'
          : 'bg-white text-gray-900 border border-gray-100 shadow-sm'
      )}
    >
      <div className="flex justify-between items-center">
        <span
          className={cn(
            'px-4 py-1.5 rounded-full text-sm font-medium tabular-nums',
            variant === 'purple' ? 'bg-white/20' : 'bg-gray-100'
          )}
        >
          {date}
        </span>
        <button
          className={cn(
            'size-10 rounded-full flex items-center justify-center transition-colors',
            variant === 'purple'
              ? 'bg-white text-violet-600'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          )}
        >
          <span className="text-xl">›</span>
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold leading-tight">{title}</h3>
        <p
          className={cn(
            'text-lg text-pretty',
            variant === 'purple' ? 'text-white/80' : 'text-gray-500'
          )}
        >
          {description}
        </p>
      </div>

      <div className="mt-auto aspect-square rounded-4xl overflow-hidden bg-gray-200">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/600/600`}
          className="w-full h-full object-cover"
          alt={title}
        />
      </div>
    </div>
  )
}

const BLOG_DATA = [
  {
    variant: 'purple' as const,
    date: '08/2024',
    title: 'Digital Entrepreneurs',
    description:
      'Discover the key mindset changes that will help you break through self-doubt, stay',
    imageSeed: 'blog1',
  },
  {
    date: '09/2024',
    title: 'Profitable Online Course',
    description: 'How to Create & Sell Your First Online Course Like a Pro',
    imageSeed: 'blog2',
  },
  {
    date: '09/2024',
    title: 'Social Media Growth',
    description:
      'A proven strategy to grow your personal brand, attract your ideal audience, and',
    imageSeed: 'blog3',
  },
  {
    date: '09/2024',
    title: 'Business Owners',
    description:
      'Struggling to stay productive? help you eliminate distractions, and get more done in less time',
    imageSeed: 'blog4',
  },
  {
    date: '10/2024',
    title: 'Scaling Systems',
    description:
      'How to delegate effectively and build systems that work while you sleep.',
    imageSeed: 'blog5',
  },
]

export const EntrepreneursBlogs = () => {
  return (
    <section className="bg-[#f2f2f2] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Carousel options={{ align: 'start', containScroll: 'trimSnaps' }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium uppercase">
                « Latest Blogs »
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Master your personal brand
              </h2>
            </div>
            <div className="flex gap-4">
              <SliderPrevButton className="size-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 shadow-sm transition-colors group">
                <span className="text-2xl text-gray-400 group-hover:text-gray-900">
                  ‹
                </span>
              </SliderPrevButton>
              <SliderNextButton className="size-14 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-lg transition-colors group">
                <span className="text-2xl">›</span>
              </SliderNextButton>
            </div>
          </div>

          <SliderContainer>
            {BLOG_DATA.map((blog, i) => (
              <Slider
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/4 px-3"
              >
                <BlogCard {...blog} />
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>

        <div className="mt-16 flex justify-center">
          <button className="bg-violet-600 text-white px-10 py-5 rounded-full font-bold flex items-center gap-4 hover:bg-violet-700 transition-colors shadow-xl group">
            Watch More
            <div className="size-10 bg-white rounded-full flex items-center justify-center text-violet-600 group-hover:translate-x-1 transition-transform">
              <span className="text-xl">›</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
