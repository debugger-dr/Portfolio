import { education } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/motion";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Academic foundation.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="ring-gradient mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elev-md)] md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {education.institution}
              </h3>
              <p className="mt-1 text-lg text-muted md:text-xl">{education.degree}</p>
            </div>
            <p className="font-mono text-base text-accent md:text-lg">
              {education.period}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
