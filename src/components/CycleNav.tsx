"use client";

import { useEffect, useState } from "react";
import { cycles } from "@/data/cycles";

export function CycleNav() {
  const [activeId, setActiveId] = useState(cycles[0]?.id ?? "");

  useEffect(() => {
    const sections = cycles
      .map((cycle) => document.getElementById(cycle.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Cycle chapters"
      className="pointer-events-none fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-3 border-l border-line pl-4">
        {cycles.map((cycle) => {
          const isActive = activeId === cycle.id;
          return (
            <li key={cycle.id}>
              <a
                href={`#${cycle.id}`}
                className={`font-mono block text-xs tracking-wide transition-colors ${
                  isActive ? "text-lime" : "text-mist hover:text-fog"
                }`}
              >
                <span className="mr-2 tabular-nums">
                  {String(cycle.number).padStart(2, "0")}
                </span>
                {cycle.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
