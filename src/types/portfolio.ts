export interface Profile {
  name: string;
  title: string;
  tagline: string;
  /** Hero intro — a couple of sentences that sit directly under the name. */
  intro: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  yearsExperience: number;
  stats: Stat[];
  /** Production-impact numbers for the "In production" metrics band. */
  metrics: Stat[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  /** Short domain label shown as the card eyebrow, e.g. "LLMs & GenAI". */
  category: string;
  /** Headline outcome surfaced beside the title, e.g. "+25% accuracy". */
  metric: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface NavItem {
  label: string;
  href: string;
}
