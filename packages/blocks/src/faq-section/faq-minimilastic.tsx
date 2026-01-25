'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/ui/accordion'
import { Plus } from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { FaqQuestionImg } from '../../assets'

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

export const FaqMinimalist = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null)
  console.log(FaqQuestionImg)

  return (
    <section className="w-full bg-blue-50/50 relative py-20" ref={timelineRef}>
      {/* <div
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 10%, #fff 40%, #55a0f7 100%)',
        }}
      /> */}
      <div className="w-full max-w-3xl mx-auto px-4 relative">
        <TimelineAnimation
          timelineRef={timelineRef}
          as="h1"
          animationNum={0}
          className="text-2xl sm:text-4xl font-medium text-blue-800 mb-10 text-center"
        >
          All the Answer to Your Question
        </TimelineAnimation>
        <Accordion multiple={false} defaultValue="g1">
          {FAQ_DATA.slice(0, 5).map((item, i) => (
            <AccordionItem key={item.id} value={item.id} className="mb-4">
              <TimelineAnimation
                timelineRef={timelineRef}
                animationNum={i + 1}
                className="border border-slate-200 bg-blue-100 data-active:bg-blue-100 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500"
              >
                <AccordionHeader
                  customIcon
                  className="p-4 text-xl dark:bg-transparent bg-transparent data-active:bg-transparent text-blue-800 hover:text-blue-800 hover:bg-blue-50"
                >
                  {item.question}
                  <span className="relative group-data-active:rotate-90 border border-neutral-200 bg-white text-neutral-950 p-2 -translate-x-1 rounded-xl">
                    <Plus className="group-data-active:rotate-45 transition-all duration-300" />
                  </span>
                </AccordionHeader>
                <AccordionPanel className="px-3 dark:bg-transparent bg-transparent data-active:bg-transparent">
                  <p className="text-lg text-slate-600">{item.answer}</p>
                </AccordionPanel>
              </TimelineAnimation>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="max-w-xl mx-auto pt-10">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={7}
            as="img"
            //@ts-ignore
            src={FaqQuestionImg?.src}
            className="w-20 mx-auto"
            alt="questionimg"
          />
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={7}
            className="text-2xl sm:text-4xl font-medium text-blue-800 pt-4 text-center"
          >
            Still have Question?
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={8}
            as="p"
            className="font-medium text-blue-800 my-2 text-center"
          >
            Book a call with our team to learn how UI-Layouts can help you to
            change he way you manage your business?
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={8}
            as="button"
            className="text-xl px-4 font-medium bg-blue-800 text-white  text-center grid place-items-center p-3 rounded-xl w-fit mx-auto"
          >
            Book a demo
          </TimelineAnimation>
        </div>
      </div>
    </section>
  )
}
