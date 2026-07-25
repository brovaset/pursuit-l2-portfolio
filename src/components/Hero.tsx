"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteCopy } from "@/data/cycles";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[85svh] flex-col justify-end overflow-hidden px-6 pb-12 pt-24 sm:px-10 sm:pb-16 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(11,15,20,0.55) 70%, rgba(11,15,20,0.92) 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="font-mono mb-4 text-xs uppercase tracking-[0.28em] text-lime sm:text-sm"
        >
          {siteCopy.brandLabel}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.9] font-extrabold tracking-tight text-foreground"
        >
          {siteCopy.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-lg leading-relaxed text-fog sm:text-xl"
        >
          {siteCopy.heroThesis}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center bg-lime px-6 py-3 font-medium text-ink transition-colors hover:bg-lime-dim"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-line px-6 py-3 font-medium text-fog transition-colors hover:border-lime/40 hover:text-lime"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
