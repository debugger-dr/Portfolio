import { profile } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            From data pipelines to production inference — the full ML lifecycle.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-base text-muted md:text-lg">
            <span>{profile.location}</span>
            <span>{profile.yearsExperience}+ years experience</span>
            <span>UC Berkeley CS</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
