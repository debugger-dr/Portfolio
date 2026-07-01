import { profile } from "@/data";
import { buildGmailComposeUrl } from "@/lib/gmail";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-sm text-muted md:text-base">
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href={buildGmailComposeUrl(profile.email)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-base text-muted transition-colors hover:text-accent md:text-lg"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-base text-muted transition-colors hover:text-accent md:text-lg"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-base text-muted transition-colors hover:text-accent md:text-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
