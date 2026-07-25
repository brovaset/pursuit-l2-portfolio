"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Cycle } from "@/data/cycles";

type CycleChapterProps = {
  cycle: Cycle;
  index: number;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono mb-3 text-[11px] uppercase tracking-[0.22em] text-mist">
      {children}
    </p>
  );
}

export function CycleChapter({ cycle, index }: CycleChapterProps) {
  const reduceMotion = useReducedMotion();
  const isShipped = cycle.status === "Shipped";

  return (
    <motion.article
      id={cycle.id}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.12),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="scroll-mt-24 border-t border-line py-16 sm:py-24"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono mb-3 text-xs uppercase tracking-[0.24em] text-mist">
            Cycle {String(cycle.number).padStart(2, "0")}
          </p>
          <h3 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {cycle.title}
          </h3>
        </div>
        <span
          className={`font-mono inline-flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-[0.18em] ${
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
          {cycle.status}
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-10">
          {cycle.problem && (
            <div>
              <SectionLabel>Problem</SectionLabel>
              <p className="leading-relaxed text-fog">{cycle.problem}</p>
            </div>
          )}

          {cycle.dataInsight && (
            <div>
              <SectionLabel>Data insight</SectionLabel>
              <p className="leading-relaxed text-fog">{cycle.dataInsight}</p>
            </div>
          )}

          <div>
            <SectionLabel>What it does</SectionLabel>
            <p className="leading-relaxed text-fog">{cycle.whatItDoes}</p>
          </div>

          {cycle.observeDecideAct && (
            <div>
              <SectionLabel>Observe → decide → act</SectionLabel>
              <p className="leading-relaxed text-fog">{cycle.observeDecideAct}</p>
            </div>
          )}

          <div>
            <SectionLabel>
              {cycle.featuresNote ?? "Key features"}
            </SectionLabel>
            <ul className="space-y-3">
              {cycle.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : featureIndex * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-3 text-fog"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-lime" aria-hidden="true" />
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {cycle.stillInProgress && cycle.stillInProgress.length > 0 && (
            <div>
              <SectionLabel>Still in progress</SectionLabel>
              <ul className="space-y-3">
                {cycle.stillInProgress.map((item) => (
                  <li key={item} className="flex gap-3 text-mist">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 bg-mist"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div>
            <SectionLabel>Stack</SectionLabel>
            <ul className="flex flex-wrap gap-2">
              {cycle.stack.map((tech) => (
                <li key={tech}>
                  <span className="font-mono inline-block border border-line px-2.5 py-1.5 text-[11px] tracking-wide text-fog transition-colors hover:border-lime/40 hover:text-lime">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Repo</SectionLabel>
            <a
              href={cycle.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link font-mono break-all text-sm"
            >
              {cycle.repo.replace(/^https?:\/\//, "")} →
            </a>
          </div>

          {cycle.liveDemo && (
            <div>
              <SectionLabel>Live demo</SectionLabel>
              <a
                href={cycle.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link font-mono break-all text-sm"
              >
                {cycle.liveDemo.replace(/^https?:\/\//, "")} →
              </a>
            </div>
          )}

          {cycle.screenshot && (
            <div>
              <SectionLabel>Screenshot</SectionLabel>
              <div className="overflow-hidden border border-line">
                <Image
                  src={cycle.screenshot}
                  alt={cycle.screenshotAlt ?? `${cycle.title} screenshot`}
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          )}

          {cycle.builtWith && (
            <div>
              <SectionLabel>Built with</SectionLabel>
              <p className="text-sm leading-relaxed text-fog">{cycle.builtWith}</p>
            </div>
          )}

          <div>
            <SectionLabel>Notes</SectionLabel>
            <p className="border-l-2 border-lime/40 pl-4 text-sm leading-relaxed text-mist">
              {cycle.notes}
            </p>
          </div>
        </aside>
      </div>
    </motion.article>
  );
}
