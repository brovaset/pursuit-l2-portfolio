"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cycles, siteCopy } from "@/data/cycles";

export function Footer() {
  const reduceMotion = useReducedMotion();
  const demos = cycles.filter((cycle) => cycle.liveDemo);

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-line px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-foreground">
            {siteCopy.name}
          </p>
          <p className="font-mono mt-3 text-xs uppercase tracking-[0.2em] text-mist">
            Last updated {siteCopy.lastUpdated}
          </p>
          <a
            href={siteCopy.pdfPath}
            download
            className="demo-link font-mono mt-6 inline-block text-sm"
          >
            Download build log (PDF) →
          </a>
        </div>

        <div>
          <p className="font-mono mb-3 text-[11px] uppercase tracking-[0.22em] text-mist">
            Live demos
          </p>
          <ul className="space-y-2 text-right sm:text-left">
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
          <p className="font-mono mt-6 mb-3 text-[11px] uppercase tracking-[0.22em] text-mist">
            Repos
          </p>
          <ul className="space-y-2 text-right sm:text-left">
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
    </motion.footer>
  );
}
