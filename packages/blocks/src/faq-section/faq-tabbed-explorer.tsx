'use client'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/ui/accordion'
import { LayoutGrid, ShieldCheck, Cpu, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'technical' | 'billing' | 'account'
}

type FAQCategory = FAQItem['category']

const FAQ_DATA: FAQItem[] = [
  // ───────────────── GENERAL ─────────────────
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
    id: 'g3',
    category: 'general',
    question: 'Who is this platform for?',
    answer:
      'This platform is built for designers, developers, founders, and teams who want high-quality UI patterns and modern interaction examples.',
  },
  {
    id: 'g4',
    category: 'general',
    question: 'Do I need an account to explore the content?',
    answer:
      'No account is required to explore public sections. An account is only needed for premium features and saved configurations.',
  },
  {
    id: 'g5',
    category: 'general',
    question: 'Is this platform suitable for production use?',
    answer:
      'Yes. All components follow production-ready patterns and can be adapted directly into real-world applications.',
  },

  // ───────────────── TECHNICAL ─────────────────
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
      'We use React 18, TypeScript, Framer Motion for animations, and modern API integrations for intelligent features.',
  },
  {
    id: 't3',
    category: 'technical',
    question: 'Can I customize the components?',
    answer:
      'Yes. All components are designed to be customizable through props, Tailwind utility classes, and configuration options.',
  },
  {
    id: 't4',
    category: 'technical',
    question: 'Does this support dark mode?',
    answer:
      'Yes. Dark mode is fully supported and follows system preferences or manual user selection.',
  },
  {
    id: 't5',
    category: 'technical',
    question: 'Is server-side rendering supported?',
    answer:
      'Yes. The platform is compatible with Next.js and supports both server-side rendering and static generation.',
  },

  // ───────────────── BILLING ─────────────────
  {
    id: 'b1',
    category: 'billing',
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit cards and PayPal for paid plans. Enterprise billing options are available on request.',
  },
  {
    id: 'b2',
    category: 'billing',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription from your account dashboard at any time. Access remains until the billing period ends.',
  },
  {
    id: 'b3',
    category: 'billing',
    question: 'Do you offer refunds?',
    answer:
      'Refunds are handled on a case-by-case basis. Please contact support if you believe you were charged incorrectly.',
  },
  {
    id: 'b4',
    category: 'billing',
    question: 'Are there team or enterprise plans?',
    answer:
      'Yes. We offer team and enterprise plans with additional features, priority support, and flexible billing.',
  },
  {
    id: 'b5',
    category: 'billing',
    question: 'Will I be charged automatically?',
    answer:
      'Yes. Subscriptions renew automatically unless canceled before the next billing cycle.',
  },

  // ───────────────── ACCOUNT ─────────────────
  {
    id: 'a1',
    category: 'account',
    question: 'How do I reset my password?',
    answer:
      'Go to the login page and click on "Forgot Password". You will receive an email with reset instructions.',
  },
  {
    id: 'a2',
    category: 'account',
    question: 'Can I share my account?',
    answer:
      'Sharing accounts is against our terms of service. Team plans are available for collaborative use.',
  },
  {
    id: 'a3',
    category: 'account',
    question: 'How do I delete my account?',
    answer:
      'You can request account deletion from the account settings page or by contacting support.',
  },
  {
    id: 'a4',
    category: 'account',
    question: 'Can I change my email address?',
    answer:
      'Yes. Email addresses can be updated from the account settings section after verification.',
  },
  {
    id: 'a5',
    category: 'account',
    question: 'How is my data secured?',
    answer:
      'We use industry-standard security practices, including encryption and secure authentication, to protect user data.',
  },
]

export const FaqTabbedExplorer = () => {
  const [activeTab, setActiveTab] = useState<FAQCategory>('general')
  const categories: { id: FAQCategory; icon: any; label: string }[] = [
    { id: 'general', icon: LayoutGrid, label: 'General' },
    { id: 'technical', icon: Cpu, label: 'Technical' },
    { id: 'billing', icon: CreditCard, label: 'Billing' },
    { id: 'account', icon: ShieldCheck, label: 'Account' },
  ]

  const filteredItems = FAQ_DATA.filter((item) => item.category === activeTab)

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-72 bg-slate-50 p-6 border-b md:border-b-0 md:border-r border-slate-200 pt-10 rounded-l-3xl">
          <h3 className="text-sm font-semibold font-spaceGrotesk text-slate-400 uppercase tracking-widest mb-4 px-2">
            Knowledge Base
          </h3>
          <nav className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  'w-full flex items-center font-spaceGrotesk cursor-pointer gap-3 px-2 py-3 border rounded-xl transition-all font-medium',
                  activeTab === cat.id
                    ? 'bg-neutral-100 text-black border-neutral-200 shadow-primary-500/30 shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)]'
                    : 'text-slate-600 hover:bg-slate-200/50  border-slate-50'
                )}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-spaceGrotesk font-semibold text-slate-900 mb-2 capitalize">
              {activeTab} Questions
            </h2>
            <p className="text-slate-500 text-sm">
              Find answers specifically related to your {activeTab} inquiries.
            </p>
          </div>
          <div className="space-y-4">
            <Accordion multiple={false} defaultValue={filteredItems[0]?.id}>
              {filteredItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-neutral-200 bg-transparent mb-4"
                >
                  <AccordionHeader className="rounded-xl hover:bg-slate-50 bg-white py-4 px-3 font-semibold font-spaceGrotesk">
                    <span className="text-slate-900">{item.question}</span>
                  </AccordionHeader>
                  <AccordionPanel className="px-0 bg-white  data-active:bg-white">
                    <p className="pt-3">{item.answer}</p>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
