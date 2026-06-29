import { buildGmailComposeUrl } from "@/lib/gmail";

interface ContactButtonProps {
  email: string;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ContactButton({
  email,
  label = "Get in touch",
  variant = "primary",
  className = "",
}: ContactButtonProps) {
  const href = buildGmailComposeUrl(
    email,
    "Hello Harry — I'd like to connect",
  );

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_4px_24px_-4px_var(--color-accent-glow)]",
    secondary:
      "border-2 border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </a>
  );
}
