"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  buildGmailComposeUrl,
  buildMailtoUrl,
  composeEnquiry,
} from "@/lib/gmail";

interface ContactFormProps {
  email: string;
}

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Add your name so Harry knows who's writing.";
  if (!values.email.trim()) errors.email = "An email lets Harry reply.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "That email doesn't look right.";
  if (values.message.trim().length < 10)
    errors.message = "A sentence or two helps — at least 10 characters.";
  return errors;
}

export function ContactForm({ email }: ContactFormProps) {
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    const mail = composeEnquiry(values);
    window.location.href = buildMailtoUrl(email, mail);
    setSent(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    const mail = composeEnquiry(values);
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-elev-md)]"
        role="status"
        aria-live="polite"
      >
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </motion.div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
          Your email app is opening.
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          The message is drafted and ready to send. Didn&apos;t see it open?
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={buildGmailComposeUrl(email, mail.subject, mail.body)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Open in Gmail
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {copied ? "Copied!" : "Copy address"}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5">
      <Field
        id="name"
        label="Name"
        value={values.name}
        error={errors.name}
        onChange={(v) => update("name", v)}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(v) => update("email", v)}
        autoComplete="email"
      />
      <Field
        id="message"
        label="Message"
        multiline
        value={values.message}
        error={errors.message}
        onChange={(v) => update("message", v)}
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-medium text-accent-foreground shadow-[0_4px_24px_-4px_var(--color-accent-glow)] transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
      >
        Send message
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </motion.button>
    </form>
  );
}

interface FieldProps {
  id: Field;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
}

function Field({ id, label, value, error, onChange, type = "text", multiline, autoComplete }: FieldProps) {
  const describedBy = error ? `${id}-error` : undefined;
  const base =
    "w-full rounded-xl border bg-background px-4 py-3 text-lg text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent";
  const borderClass = error ? "border-accent/70" : "border-border";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-sm uppercase tracking-wider text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`${base} ${borderClass} resize-y`}
          placeholder="What would you like to build?"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          autoComplete={autoComplete}
          className={`${base} ${borderClass}`}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden text-base text-accent"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
