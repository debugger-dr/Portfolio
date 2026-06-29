import { projects } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/motion";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Selected work across GenAI, computer vision, and ML platforms.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.06}>
              <article className="ring-gradient group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elev-md)] md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-sm uppercase tracking-wider text-accent">
                    {project.category}
                  </p>
                  <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-sm text-accent">
                    {project.metric}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {project.name}
                  </h3>
                  <span className="text-lg text-muted md:text-xl">
                    {project.subtitle}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-base text-muted md:text-lg"
                    >
                      <span className="mt-1 text-accent" aria-hidden>
                        →
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech} accent>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
