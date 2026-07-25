import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteNav } from "@/components/SiteNav";
import { cycles } from "@/data/cycles";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />

      <section id="work" className="scroll-mt-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-line pt-10 sm:pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              Selected work
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projects
            </h2>
          </div>

          {cycles.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <About />
      <Footer />
    </main>
  );
}
