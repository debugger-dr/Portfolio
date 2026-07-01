"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface NeuralBackgroundProps {
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const LINK_DISTANCE = 132;
const MOUSE_DISTANCE = 168;

/**
 * Ambient "neural constellation" rendered to a canvas: drifting nodes wired by
 * fading synapses, with the cursor lighting up nearby connections. The signature
 * motif for an ML portfolio. Reads its hue from the `--node-color` token so it
 * tracks the theme, and renders a single static frame when motion is reduced.
 */
export function NeuralBackground({ className }: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let onScreen = true;
    let pageVisible = !document.hidden;
    let io: IntersectionObserver | null = null;
    const mouse = { x: -9999, y: -9999 };

    let rgb = "184, 92, 56";
    const readColor = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--node-color")
        .trim();
      if (value) rgb = value;
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(72, Math.max(22, Math.floor((width * height) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${rgb}, ${0.16 * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < MOUSE_DISTANCE) {
          ctx.strokeStyle = `rgba(${rgb}, ${0.4 * (1 - mdist / MOUSE_DISTANCE)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${rgb}, 0.55)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    // Only animate while on-screen and the tab is visible — never spend the
    // main thread painting a canvas nobody can see, which keeps scrolling smooth.
    const active = () => onScreen && pageVisible && !reduce;
    const sync = () => {
      if (active()) {
        if (!raf) raf = requestAnimationFrame(step);
      } else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      pageVisible = !document.hidden;
      sync();
    };

    readColor();
    build();

    if (reduce) {
      draw();
    } else {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("mouseout", onMouseLeave, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      io = new IntersectionObserver(
        (entries) => {
          onScreen = entries[0]?.isIntersecting ?? true;
          sync();
        },
        { threshold: 0 },
      );
      io.observe(canvas);
      sync();
    }

    const resizeObserver = new ResizeObserver(() => {
      build();
      if (reduce) draw();
    });
    resizeObserver.observe(canvas);

    // Re-read the hue when the theme class on <html> flips.
    const themeObserver = new MutationObserver(() => {
      readColor();
      if (reduce) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      io?.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}
