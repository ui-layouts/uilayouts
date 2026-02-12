'use client'

import { motion, useSpring } from 'motion/react'
import React, { useState, MouseEvent, useRef } from 'react'

interface ImageItem {
  img: string
  label: string
  title: string
  description: string
}
const list: ImageItem[] = [
  {
    img: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
    label: 'Urban Landscapes',
    title: 'City Photography',
    description:
      'A visual exploration of modern architectural wonders, iconic city skylines, and the rhythm of urban life captured through bold compositions.',
  },
  {
    img: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
    label: 'Nature Portraits',
    title: 'Outdoor Photography',
    description:
      'Intimate moments of wildlife in their natural habitat, showcasing raw beauty, movement, and the quiet balance of the outdoors.',
  },
  {
    img: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
    label: 'Abstract Art',
    title: 'Creative Photography',
    description:
      'Contemporary artistic expressions that blend color, texture, and form to create visually striking and thought-provoking compositions.',
  },
  {
    img: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
    label: 'Fashion Editorial',
    title: 'Style Photography',
    description:
      'High-fashion editorials highlighting runway trends, expressive styling, and editorial storytelling through bold visuals.',
  },

  {
    img: 'https://images.unsplash.com/photo-1682686580024-580519d4b2d2?q=80&w=1274&auto=format&fit=crop',
    label: 'Minimal Spaces',
    title: 'Interior Photography',
    description:
      'Calm and intentional interior scenes that focus on light, texture, and spatial balance, capturing the beauty of simplicity.',
  },
  {
    img: 'https://images.unsplash.com/photo-1683009427042-e094996f9780?q=80&w=1274&auto=format&fit=crop',
    label: 'Portrait Studies',
    title: 'Human Expression',
    description:
      'Expressive portraits that highlight emotion, personality, and subtle storytelling through light, framing, and composition.',
  },
  {
    img: 'https://images.unsplash.com/photo-1768248855015-36e55c07ae98?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Motion & Speed',
    title: 'Action Photography',
    description:
      'Dynamic captures of movement and energy, freezing fast-paced moments while preserving a strong sense of momentum.',
  },
  {
    img: 'https://images.unsplash.com/photo-1769251845951-c271e703f047?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Aerial Perspectives',
    title: 'Drone Photography',
    description:
      'Unique top-down viewpoints revealing patterns, scale, and geometry that are often hidden from ground level.',
  },
]

export function CustomerExperience() {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>(
    {
      src: '',
      alt: '',
      opacity: 0,
    }
  )

  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  }

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const { clientX, clientY } = e
    const relativeX = clientX - containerRect.left
    const relativeY = clientY - containerRect.top

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2)
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2)
  }

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.label, opacity })
  }

  return (
    <section className="bg-orange-200 font-manrope overflow-x-hidden">
      <div
        ref={containerRef}
        onMouseMove={handleMove}
        className="relative max-w-6xl mx-auto border-x border-orange-500"
      >
        <h1 className="lg:text-9xl sm:text-8xl px-5 text-7xl border-b border-orange-500 font-bold py-10 text-orange-500 font-spaceGrotesk">
          EXPERIENCE
        </h1>
        {list.map((item) => (
          <div
            key={item.label}
            onMouseEnter={() => handleImageInteraction(item, 1)}
            onMouseMove={() => handleImageInteraction(item, 1)}
            onMouseLeave={() => handleImageInteraction(item, 0)}
            className="w-full py-5 px-5 cursor-pointer relative text-center md:flex justify-between items-center text-primary border-b border-orange-500 last:border-none"
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-14 h-14 text-orange-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 17.3497C9 17.3497 15.9383 17.8924 16.9154 16.9154C17.8924 15.9383 17.3496 9 17.3496 9M16.5 16.5L6.5 6.5" />
              </svg>
              <div className="flex flex-col items-start">
                <h2 className="lg:text-4xl text-xl font-bold">{item.label}</h2>
                <span>{item?.title}</span>
              </div>
            </div>
            <p className="xl:max-w-xl md:max-w-96 ml-auto text-right md:pt-0 pt-5">
              {item.description}{' '}
            </p>
          </div>
        ))}

        <motion.img
          ref={imageRef}
          src={img.src}
          alt={img.alt}
          className="w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
          style={{
            x: imagePos.x,
            y: imagePos.y,
            opacity: img.opacity,
          }}
        />
      </div>
    </section>
  )
}
