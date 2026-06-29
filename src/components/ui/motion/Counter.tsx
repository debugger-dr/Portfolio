"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /** The stat string, e.g. "8+", "50%", "95%". Non-numeric values render verbatim. */
  value: string;
  className?: string;
  duration?: number;
}

/** Splits "50%" into prefix "", number 50, suffix "%". */
function parseValue(value: string) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: null, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
}

/** Counts a numeric stat up from zero the first time it scrolls into view. */
export function Counter({ value, className, duration = 1.4 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const { prefix, target, suffix, decimals } = parseValue(value);

  const [display, setDisplay] = useState(() =>
    target === null ? value : `${prefix}0${suffix}`,
  );

  useEffect(() => {
    if (target === null || !inView) return;
    // duration 0 for reduced motion: jumps straight to the final value via the
    // onUpdate callback (no synchronous setState in the effect body).
    const controls = animate(0, target, {
      duration: reduce ? 0 : duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduce, target, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
