interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
      {children}
    </p>
  );
}
