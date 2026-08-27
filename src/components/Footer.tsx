"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cycles, siteCopy } from "@/data/cycles";

export function Footer() {
  const reduceMotion = useReducedMotion();
  const demos = cycles.filter((cycle) => cycle.liveDemo);

  return (
    <motion.footer
      id="contact"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24 border-t border-line px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-3xl font-bold tracking-tight text-foreground">
            Let’s build something.
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-fog">
            Open to roles where shipping real products matters. Browse the work
            above, or reach out by email, GitHub, or LinkedIn.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteCopy.email}`}
              className="inline-flex items-center justify-center bg-lime px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-lime-dim"
            >
              {siteCopy.email}
            </a>
            <a
              href={siteCopy.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium text-fog transition-colors hover:border-lime/40 hover:text-lime"
            >
              GitHub
            </a>
            <a
              href={siteCopy.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium text-fog transition-colors hover:border-lime/40 hover:text-lime"
            >
              LinkedIn
            </a>
          </div>
          <p className="font-mono mt-5 text-xs uppercase tracking-[0.2em] text-mist">
            Updated {siteCopy.lastUpdated}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-end">
          <div>
            <p className="font-mono mb-2 text-[11px] uppercase tracking-[0.22em] text-mist">
              Live demos
            </p>
            <ul className="space-y-1.5">
              {demos.map((cycle) => (
                <li key={cycle.id}>
                  <a
                    href={cycle.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link font-mono text-sm"
                  >
                    {cycle.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono mb-2 text-[11px] uppercase tracking-[0.22em] text-mist">
              Repos
            </p>
            <ul className="space-y-1.5">
              {cycles.map((cycle) => (
                <li key={`repo-${cycle.id}`}>
                  <a
                    href={cycle.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link font-mono text-sm"
                  >
                    {cycle.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
