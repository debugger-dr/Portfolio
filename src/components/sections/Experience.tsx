import { experience } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/motion";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Eight years shipping ML in production.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {experience.map((job) => (
            <Reveal key={job.id}>
              <article className="grid gap-6 border-t border-border pt-10 md:grid-cols-[240px_1fr] md:gap-12">
                <div>
                  <p className="font-mono text-base text-accent md:text-lg">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-lg text-muted md:text-xl">{job.role}</p>
                </div>

                <ul className="space-y-4">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-4 text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
