'use client'
import React from 'react'
import { Button } from '@repo/shadcn'

const footerLinks = [
  {
    title: 'Product',
    links: ['Overview', 'Pricing', 'Integrations', 'Documentation'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Brand', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Support', 'Guides'],
  },
  {
    title: 'Social',
    links: ['Twitter', 'GitHub', 'LinkedIn', 'YouTube'],
  },
]

export const DetailedFooter = () => {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 rounded bg-white flex items-center justify-center">
                <span className="text-zinc-900 font-bold text-xs">P</span>
              </div>
              <span className="text-white font-semibold tracking-tight">
                Platform
              </span>
            </div>
            <p className="text-sm text-pretty leading-relaxed mb-6">
              Building the next generation of creative tools for digital
              artisans.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            <span className="text-xs">© 2026 Platform Inc.</span>
            <a href="#" className="text-xs hover:text-white">
              Terms
            </a>
            <a href="#" className="text-xs hover:text-white">
              Privacy
            </a>
          </div>

          <form
            className="w-full max-w-sm relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-zinc-900 size-8 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors">
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </form>
        </div>
      </div>
    </footer>
  )
}
