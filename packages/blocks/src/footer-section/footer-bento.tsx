import { Rainbow } from 'lucide-react'
import { Button } from '@repo/shadcn'

export const BentoFooter = () => {
  return (
    <footer className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Info Card */}
          <div className="md:col-span-2 row-span-2 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-neutral-900 dark:bg-neutral-100 mb-6 flex items-center justify-center">
                <Rainbow />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-4">
                Start your journey today.
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-pretty leading-relaxed">
                Empowering founders and teams with the fastest development
                cycles in the industry.
              </p>
            </div>
            <div className="mt-12 flex gap-4">
              <Button className="px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                Get Started
              </Button>
              <Button className="px-6 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 rounded-lg text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Social Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              Connect
            </span>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="bg-neutral-900 dark:bg-neutral-100 rounded-2xl p-6 flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              Join the Circle
            </span>
            <div className="mt-4">
              <p className="text-sm text-neutral-400 dark:text-neutral-600 mb-4">
                Weekly insights delivered.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-neutral-800 dark:bg-neutral-200 border-none rounded-lg px-3 py-2 pr-10 text-sm text-white dark:text-neutral-900 focus:ring-1 focus:ring-neutral-600 dark:focus:ring-neutral-400 mb-2"
                />
                <Button className="absolute right-2 top-1.5 size-6 bg-neutral-600 dark:bg-neutral-700 rounded flex items-center justify-center hover:bg-neutral-500 dark:hover:bg-neutral-600 transition-colors">
                  <svg
                    className="size-3 text-white"
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
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex items-center gap-4">
            <div className="size-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
              <svg
                className="size-5 text-neutral-500 dark:text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-950 dark:text-neutral-50">
                San Francisco, CA
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Global HQ
              </p>
            </div>
          </div>

          {/* Legal Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs font-medium hover:underline text-neutral-950 dark:text-neutral-50"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs font-medium hover:underline text-neutral-950 dark:text-neutral-50"
              >
                Terms
              </a>
            </div>
            <span className="text-xs text-neutral-400 dark:text-neutral-600">
              © 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
