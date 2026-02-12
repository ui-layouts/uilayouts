import React from 'react'

export const FooterSimple = () => {
  return (
    <footer className="bg-white text-black px-6 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <div className="text-2xl font-bold">UI-LAYOUTS.</div>
          <p className="text-zinc-500 max-w-xs text-pretty">
            Redefining the digital frontier with elegance and precision.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="font-bold text-sm uppercase tracking-widest text-zinc-400">
              Social
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a href="#" className="hover:text-black">
                Twitter
              </a>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
              <a href="#" className="hover:text-black">
                Instagram
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-sm uppercase tracking-widest text-zinc-400">
              Legal
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a href="#" className="hover:text-black">
                Privacy
              </a>
              <a href="#" className="hover:text-black">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-50 text-xs text-zinc-400 flex justify-between">
        <span>&copy; 2026 UI-Layouts. All rights reserved.</span>
        <span>Made with Precision.</span>
      </div>
    </footer>
  )
}
