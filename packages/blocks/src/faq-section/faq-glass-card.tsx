'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/ui/accordion'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'

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

export const FaqGlassCard = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null)
  return (
    <div
      className="w-full px-4 relative min-h-screen flex flex-col justify-center items-center"
      ref={timelineRef}
    >
      <TimelineAnimation
        timelineRef={timelineRef}
        animationNum={0}
        as="h1"
        className="text-2xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-10 text-center"
      >
        Frequently Asked Questions
      </TimelineAnimation>
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50" />
      <div className="max-w-4xl relative z-2 mx-auto w-full">
        <Accordion multiple={false}>
          {FAQ_DATA.slice(0, 5).map((item, i) => (
            <AccordionItem key={item.id} value={item.id} className="mb-6">
              <TimelineAnimation
                animationNum={i}
                timelineRef={timelineRef}
                className="border dark:border-white/10 border-white/20  dark:bg-black/40 bg-white/40 backdrop-blur-xl rounded-xl p-3 hover:scale-[1.01] transition-all duration-500"
              >
                <AccordionHeader className="px-6 py-4 text-xl font-semibold bg-transparent data-active:bg-transparent  hover:bg-transparent">
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-500 dark:from-slate-50 dark:to-slate-200">
                    {item.question}
                  </span>
                </AccordionHeader>
                <AccordionPanel className="px-4 bg-transparent data-active:bg-transparent ">
                  <div className="text-lg text-slate-600 leading-relaxed py-4 border-t border-white/10 dark:text-white">
                    {item.answer}
                  </div>
                </AccordionPanel>
              </TimelineAnimation>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
