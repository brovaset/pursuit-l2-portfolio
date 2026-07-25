"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteCopy } from "@/data/cycles";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/75 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-tight text-foreground sm:text-base"
        >
          {siteCopy.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
