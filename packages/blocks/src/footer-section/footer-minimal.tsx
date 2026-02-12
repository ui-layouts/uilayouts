import React from 'react'
import { Mail, Twitter, Github, Linkedin } from 'lucide-react'

export const MinimalFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-sm bg-zinc-900" />
              <span className="text-sm font-semibold tracking-tight uppercase">
                Minimal Inc.
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs">
              Creating beautiful, functional digital experiences with attention
              to detail and user-centric design.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <Github className="size-4" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Explore
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Journal
              </a>
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Works
              </a>
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Careers
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Stay Updated
            </h4>
            <p className="text-sm text-zinc-600">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-zinc-900 text-white size-6 rounded flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <svg
                  className="size-3"
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
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs text-zinc-400">© 2026 Minimal Inc.</span>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
          <span className="text-xs text-zinc-400">Crafted with intention</span>
        </div>
      </div>
    </footer>
  )
}
