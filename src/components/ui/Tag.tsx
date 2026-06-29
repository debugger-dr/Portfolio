interface TagProps {
  children: React.ReactNode;
  /** Accent-tinted variant — used to make project tech stacks stand out. */
  accent?: boolean;
}

export function Tag({ children, accent = false }: TagProps) {
  const styles = accent
    ? "border-accent/30 bg-accent/5 text-accent"
    : "border-border bg-surface text-muted";

  return (
    <span
      className={`inline-block rounded-md border px-3 py-1.5 font-mono text-sm md:text-base ${styles}`}
    >
      {children}
    </span>
  );
}
