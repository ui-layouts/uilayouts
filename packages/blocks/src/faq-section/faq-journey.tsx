'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/ui/accordion'
import {
  LayoutGrid,
  ShieldCheck,
  Zap,
  CreditCard,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'technical' | 'billing' | 'account'
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'g1',
    category: 'general',
    question: 'What is this platform about?',
    answer:
      'This is a premium showcase platform designed to demonstrate modern UI patterns, including sophisticated accordions and AI-driven features.',
  },
  {
    id: 'g2',
    category: 'general',
    question: 'How do I get started?',
    answer:
      'Simply browse through our various sections. If you have a specific question, use our AI Assistant at the bottom of the page.',
  },
  {
    id: 't1',
    category: 'technical',
    question: 'Is it mobile responsive?',
    answer:
      'Absolutely. Every component is built with a mobile-first approach using Tailwind CSS, ensuring a seamless experience across all devices.',
  },
  {
    id: 't2',
    category: 'technical',
    question: 'What technologies are used?',
    answer:
      'We use React 18, TypeScript, Framer Motion for animations, and the Gemini AI API for our intelligent features.',
  },
  {
    id: 'b1',
    category: 'billing',
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit cards, PayPal, and cryptocurrency for our premium enterprise plans.',
  },
  {
    id: 'b2',
    category: 'billing',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription from your account dashboard at any time. Your features will remain active until the end of the billing cycle.',
  },
  {
    id: 'a1',
    category: 'account',
    question: 'How do I reset my password?',
    answer:
      'Go to the login page and click on "Forgot Password". We will send an email with instructions to reset your access securely.',
  },
  {
    id: 'a2',
    category: 'account',
    question: 'Can I share my account?',
    answer:
      'Sharing accounts is against our terms of service. We offer team plans for collaborative work environments.',
  },
]

export const FaqJourney = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null)

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white"
      ref={timelineRef}
    >
      <div className="w-full max-w-3xl mx-auto px-4 py-12 relative">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={0}
          as="h1"
          className="text-2xl sm:text-3xl font-medium text-gray-900  mb-10 text-center"
        >
          Frequently Asked Questions
        </TimelineAnimation>
        <div className="relative z-10">
          <TimelineAnimation
            animationNum={3}
            timelineRef={timelineRef}
            className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 hidden sm:block"
          />
          <Accordion multiple={false} defaultValue="g1">
            {FAQ_DATA.slice(0, 6).map((item, idx) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="mb-8 relative z-10"
              >
                <div className="flex gap-6 shadow-2xl">
                  <TimelineAnimation
                    animationNum={idx + 1}
                    timelineRef={timelineRef}
                    className="shrink-0 w-14 h-14 translate-x-1 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xl font-semibold font-spaceGrotesk text-neutral-500 group-data-active:border-primary-500 group-data-active:bg-black group-data-active:text-white transition-all duration-500 shadow-xl sm:flex"
                  >
                    {(idx + 1).toString().padStart(2, '0')}
                  </TimelineAnimation>
                  <TimelineAnimation
                    animationNum={idx + 1}
                    timelineRef={timelineRef}
                    className="flex-1 bg-neutral-100 border border-slate-100 rounded-3xl p-2  transition-all duration-500"
                  >
                    <AccordionHeader className="p-4 sm:p-6 text-xl font-semibold font-spaceGrotesk rounded-2xl data-active:bg-white">
                      {item.question}
                    </AccordionHeader>
                    <AccordionPanel className="data-active:bg-transparent">
                      <div className="text-slate-500  border-t border-slate-100 pt-4 mt-2">
                        {item.answer}
                      </div>
                    </AccordionPanel>
                  </TimelineAnimation>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
