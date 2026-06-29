import { profile } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Counter, Reveal } from "@/components/ui/motion";

export function Metrics() {
  return (
    <section
      id="metrics"
      className="scroll-mt-24 border-y border-border bg-surface py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>In production</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Shipped, served, and monitored at scale.
          </h2>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {profile.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={(i % 4) * 0.08}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                {metric.label}
              </dt>
              <dd className="mt-2 font-display text-5xl font-bold text-accent md:text-6xl">
                <Counter value={metric.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
