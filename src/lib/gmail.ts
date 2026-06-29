export interface MailContent {
  subject?: string;
  body?: string;
}

export interface Enquiry {
  name: string;
  email: string;
  message: string;
}

/** Gmail web compose URL — opens a prefilled compose window in the browser. */
export function buildGmailComposeUrl(
  email: string,
  subject?: string,
  body?: string,
): string {
  const params = new URLSearchParams({ view: "cm", to: email });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/**
 * `mailto:` URL for the visitor's default mail client. Encoded manually so
 * spaces become %20 (some clients render `+` from URLSearchParams literally).
 */
export function buildMailtoUrl(
  email: string,
  { subject, body }: MailContent = {},
): string {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${parts.length ? `?${parts.join("&")}` : ""}`;
}

/** Turns contact-form fields into a ready-to-send subject and body. */
export function composeEnquiry({ name, email, message }: Enquiry): MailContent {
  return {
    subject: `Portfolio enquiry from ${name}`,
    body: `Hi Harry,\n\n${message}\n\n— ${name}\n${email}`,
  };
}
