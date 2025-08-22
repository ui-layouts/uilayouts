"use client"
import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import { NeuralNoise} from "@repo/ui";

export function NuetralHero() {
  return (
    <section className="min-h-screen relative pb-10 h-full">
      <NeuralNoise />
      <header className="flex gap-2 z-50 text-white backdrop-blur-xl bg-black/15 top-2 rounded-lg max-w-4xl items-center justify-between mx-auto px-3 p-2 sticky">
        <h1 className="text-xl uppercase font-bold">Logo</h1>
        <nav className="flex gap-4 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
        </nav>
        <button className="text-lg h-10 px-4 rounded-lg text-white flex items-center gap-2 bg-neutral-900 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-t before:from-neutral-900 before:to-neutral-700 before:rounded-t-lg  transition-all group">
          Log In
        </button>
      </header>
      <article className="text-white py-32 w-fit max-w-4xl mx-auto text-center space-y-4 relative z-10">
        <h1 className="2xl:text-7xl text-5xl font-semibold text-white mb-6 capitalize ">
          A Smarter Way to
          <span className="inline-block">Manage Your Content.</span>
        </h1>
        <p className="2xl:max-w-3xl max-w-2xl mx-auto 2xl:text-lg">
          Our AI-powered content management platform streamlines your workflow,
          saving you time and effort while ensuring your content is always fresh
          and engaging.
        </p>
        <motion.div
          className="flex gap-2 mt-5 mx-auto w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white bg-gradient-to-t from-blue-600 to-blue-800 shadow-md shadow-blue-600 border border-blue-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <Sparkles size={20} />
              Get started
            </button>
            <button className="text-white bg-gradient-to-t from-neutral-900 to-neutral-800 shadow-md shadow-neutral-900 border border-neutral-900 px-4 py-2 rounded-lg flex items-center gap-2">
              Watch demo
              <Play size={20} />
            </button>
          </div>
        </motion.div>
        <p>  </p>
      </article>
      <div className="relative max-w-7xl mx-auto">
        <figure className="rounded-lg p-3 backdrop-blur-lg bg-white/5">
          <img src="http://localhost:3000/black-dashboard.png" className="w-full rounded-lg" />
        </figure>
      </div>
    </section>
  );
}

