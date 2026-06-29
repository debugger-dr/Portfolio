import { skillCategories } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/motion";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>Expertise</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            AI &amp; ML at every layer of the stack.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 0.08}>
              <article className="ring-gradient group h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-elev-md)]">
                <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {category.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  {category.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
