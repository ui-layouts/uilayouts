'use client'
import React, { useState } from 'react'
import { AlignStartVertical, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'technical' | 'billing' | 'account'
  img: string
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'g1',
    category: 'general',
    question: 'What is this platform about?',
    answer:
      'This is a premium showcase platform designed to demonstrate modern UI patterns, including sophisticated accordions and AI-driven features.',
    img: 'https://images.unsplash.com/photo-1768280511074-3b3effe7a139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'g2',
    category: 'general',
    question: 'How do I get started?',
    answer:
      'Simply browse through our various sections. If you have a specific question, use our AI Assistant at the bottom of the page.',
    img: 'https://images.unsplash.com/photo-1759269834957-3457c9ee46c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 't1',
    category: 'technical',
    question: 'Is it mobile responsive?',
    answer:
      'Absolutely. Every component is built with a mobile-first approach using Tailwind CSS, ensuring a seamless experience across all devices.',
    img: 'https://images.unsplash.com/photo-1754405300142-246a9bf917d9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 't2',
    category: 'technical',
    question: 'What technologies are used?',
    answer:
      'We use React 18, TypeScript, Framer Motion for animations, and the Gemini AI API for our intelligent features.',
    img: 'https://images.unsplash.com/photo-1738510992679-41f599ec9399?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'b1',
    category: 'billing',
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit cards, PayPal, and cryptocurrency for our premium enterprise plans.',
    img: 'https://images.unsplash.com/photo-1688909906484-738d78601884?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'b2',
    category: 'billing',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription from your account dashboard at any time. Your features will remain active until the end of the billing cycle.',
    img: 'https://images.unsplash.com/photo-1703600091728-8d0a2bf13396?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'a1',
    category: 'account',
    question: 'How do I reset my password?',
    answer:
      'Go to the login page and click on "Forgot Password". We will send an email with instructions to reset your access securely.',
    img: 'https://images.unsplash.com/photo-1642849206045-d34279481967?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'a2',
    category: 'account',
    question: 'Can I share my account?',
    answer:
      'Sharing accounts is against our terms of service. We offer team plans for collaborative work environments.',
    img: 'https://images.unsplash.com/photo-1667776384514-a06f0b7675a1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export const FaqInteractivePreview = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null)

  const [activeItem, setActiveItem] = useState<FAQItem | null>(FAQ_DATA[0])

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative bg-white"
      ref={timelineRef}
    >
      <TimelineAnimation
        timelineRef={timelineRef}
        animationNum={0}
        as="h1"
        className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center"
      >
        Frequently Asked Questions
      </TimelineAnimation>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-12 relative z-10">
        <div className="space-y-4 ">
          {FAQ_DATA.slice(0, 6).map((item, i) => (
            <motion.button
              key={item.id}
              onMouseEnter={() => setActiveItem(item)}
              onClick={() => setActiveItem(item)}
              className={cn(
                'w-full text-left px-4 py-6 rounded-2xl cursor-pointer transition-shadow duration-300 flex items-center justify-between group',
                activeItem?.id === item.id
                  ? 'bg-white text-black shadow-2xl scale-[1.02]'
                  : 'bg-white  text-slate-600 hover:bg-slate-50'
              )}
            >
              <span className="text-lg font-semibold font-spaceGrotesk">
                {item.question}
              </span>
              <ArrowRight
                className={cn(
                  'transition-transform',
                  activeItem?.id === item.id
                    ? 'translate-x-0'
                    : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                )}
              />
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem?.id}
            // layoutId={activeItem?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-neutral-100 rounded-xl p-6 relative h-full min-h-[500px] flex flex-col justify-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.05),0px_2px_4px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="relative z-10 space-y-4">
              <span className=" text-xs font-semibold uppercase tracking-widest rounded-full  inline-block">
                Magic Preview
              </span>
              <h3 className="text-3xl font-semibold font-spaceGrotesk text-slate-900 leading-tight">
                {activeItem?.question}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {activeItem?.answer}
              </p>
              <img
                src={activeItem?.img}
                alt={activeItem?.question}
                className="aspect-video rounded-lg mt-4 object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
