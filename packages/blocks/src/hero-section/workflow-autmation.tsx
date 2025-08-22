"use client"
import {VerticalBarsNoise} from "@repo/ui";
import { motion } from "motion/react";

export function WorkflowAutomation() {
  return (
    <section className="bg-white relative pb-10">
      <div className="absolute bottom-0 left-0 -inset-0 right-0 opacity-65 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <VerticalBarsNoise />
      </div>
      <header className="flex gap-2 z-50 text-neutral-900 backdrop-blur-lg rounded-lg max-w-4xl items-center justify-between mx-auto p-2 sticky top-1.5">
        <h1 className="text-xl uppercase">Logo</h1>
        <nav className="flex gap-4 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
        </nav>
        <button className="text-lg h-10 px-4 rounded-lg text-white flex items-center gap-2 bg-neutral-800 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-t before:from-neutral-800 before:to-neutral-300 before:rounded-t-lg  transition-all group">
          Log In
        </button>
      </header>
      <article className="text-neutral-800 py-32 w-fit max-w-4xl mx-auto text-center space-y-4 relative z-10">
        <h1 className="text-7xl capitalize font-medium">
          Workflow Automation for growing teams
        </h1>
        <p className="max-w-xl mx-auto">
          Our Sass integrates your favorite tools into one simple dashboard, so
          you can focus on what truly matters: building, collaborating, and
          delivering results.
        </p>
        <motion.div
          className="flex gap-2 mt-5 mx-auto w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="text-lg h-12 px-4 rounded-lg text-white flex items-center gap-2 bg-neutral-800 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-t before:from-neutral-800 before:to-neutral-300 before:rounded-t-lg  transition-all group">
            Get Started For Free
          </button>
        </motion.div>
      </article>
      <figure className="relative max-w-6xl mx-auto p-3 backdrop-blur-lg bg-black/5 rounded-lg">
        <img
          src="http://localhost:3000/dashboard.png"
          className="w-full relative z-10 rounded-lg"
        />
      </figure>
    </section>
  );
}

