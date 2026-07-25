"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteCopy } from "@/data/cycles";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-line px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-14">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          About
        </motion.h2>

        <div className="space-y-4">
          {siteCopy.intro.map((paragraph, index) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-lg leading-relaxed text-fog sm:text-xl"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
