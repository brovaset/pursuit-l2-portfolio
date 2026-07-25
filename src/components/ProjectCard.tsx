"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Cycle } from "@/data/cycles";

type ProjectCardProps = {
  project: Cycle;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const isShipped = project.status === "Shipped";
  const highlights = project.features.slice(0, 3);

  return (
    <motion.article
      id={project.id}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.12),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="scroll-mt-24 border-t border-line py-8 sm:py-10"
    >
      <div className="max-w-2xl">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
            {String(project.number).padStart(2, "0")} · {project.role}
          </p>
          <span
            className={`font-mono inline-flex items-center gap-2 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] ${
              isShipped
                ? "bg-lime/15 text-lime"
                : "border border-line text-fog"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isShipped ? "bg-lime" : "bg-mist"
              }`}
              aria-hidden="true"
            />
            {project.status}
          </span>
        </div>

        <h3 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-2 text-base leading-relaxed text-fog sm:text-lg">
          {project.summary}
        </p>

        {project.screenshot && (
          <div className="relative mt-5 aspect-[16/10] overflow-hidden bg-ink-elevated">
            <Image
              src={project.screenshot}
              alt={project.screenshotAlt ?? `${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        )}

        <ul className="mt-4 space-y-1.5">
          {highlights.map((item) => (
            <motion.li
              key={item}
              initial={reduceMotion ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-3 text-sm text-fog"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 bg-lime"
                aria-hidden="true"
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech}>
              <span className="font-mono inline-block border border-line px-2.5 py-1.5 text-[11px] tracking-wide text-fog transition-colors hover:border-lime/40 hover:text-lime">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-5">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link font-medium text-sm"
            >
              Live demo →
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link font-medium text-sm"
          >
            View repo →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
