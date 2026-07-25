import { CycleChapter } from "@/components/CycleChapter";
import { CycleNav } from "@/components/CycleNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { cycles } from "@/data/cycles";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />

      <section
        id="cycles"
        className="scroll-mt-8 px-6 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="pt-8 pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              Progress
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four cycles
            </h2>
          </div>

          {cycles.map((cycle, index) => (
            <CycleChapter key={cycle.id} cycle={cycle} index={index} />
          ))}
        </div>
      </section>

      <CycleNav />
      <Footer />
    </main>
  );
}
