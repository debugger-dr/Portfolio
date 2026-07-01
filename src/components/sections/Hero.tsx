"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { profile } from "@/data";
import { ContactButton } from "@/components/ui/ContactButton";
import { Counter, MagneticButton, NeuralBackground } from "@/components/ui/motion";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const nameParts = profile.name.split(" ");

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <NeuralBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-70 [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_72%,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={item}
            className="mb-6 font-mono text-base uppercase tracking-[0.25em] text-accent md:text-lg"
          >
            {profile.title}
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-foreground">
            {nameParts.map((word, i) => (
              <motion.span key={word} variants={item} className="block">
                {i === 1 ? <span className="text-accent">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <MagneticButton>
              <ContactButton email={profile.email} />
            </MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View projects
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-accent md:text-5xl">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-base text-muted md:text-lg">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
