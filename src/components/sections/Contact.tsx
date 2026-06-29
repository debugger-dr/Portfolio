import { profile } from "@/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/motion";
import { buildGmailComposeUrl } from "@/lib/gmail";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-elev-lg)] md:p-14">
            <SectionLabel>Contact</SectionLabel>

            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Let&apos;s build something intelligent.
            </h2>

            <p className="mt-6 max-w-xl text-xl text-muted md:text-2xl">
              Open to senior ML engineering roles, consulting, and collaborations
              on production AI systems.
            </p>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <ContactForm email={profile.email} />

              <div className="grid content-start gap-8 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <ContactDetail label="Email">
                  <a
                    href={buildGmailComposeUrl(profile.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-lg text-foreground md:text-xl"
                  >
                    {profile.email}
                  </a>
                </ContactDetail>

                <ContactDetail label="Phone">
                  <a
                    href={`tel:${profile.phone.replace(/\D/g, "")}`}
                    className="link-underline text-lg text-foreground md:text-xl"
                  >
                    {profile.phone}
                  </a>
                </ContactDetail>

                <ContactDetail label="LinkedIn">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-lg text-foreground md:text-xl"
                  >
                    Connect on LinkedIn
                  </a>
                </ContactDetail>

                <ContactDetail label="Location">
                  <p className="text-lg text-foreground md:text-xl">{profile.location}</p>
                </ContactDetail>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-sm uppercase tracking-wider text-accent">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
