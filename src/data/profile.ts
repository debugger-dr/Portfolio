import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Harry Ahmad",
  title: "Senior Machine Learning Engineer",
  tagline: "Building production AI systems that scale.",
  summary:
    "Senior ML Engineer with 8+ years shipping data-driven products from research prototype to production. I architect end-to-end AI systems — LLMs, computer vision, NLP, and time-series forecasting — and lead teams through the full lifecycle: data pipelines, model training, MLOps, and low-latency inference at scale. Berkeley CS. Based in Sacramento.",
  location: "Sacramento, CA",
  email: "harryahmad.dev@gmail.com",
  phone: "+1 (916) 916-2496",
  linkedin: "https://www.linkedin.com/in/sharaz-ahmad-025953415/",
  yearsExperience: 8,
  stats: [
    { value: "8+", label: "Years in ML & AI" },
    { value: "7", label: "Engineers led" },
    { value: "50%", label: "Pipeline speed gain" },
    { value: "95%", label: "CV model accuracy" },
  ],
  metrics: [
    { value: "30+", label: "Models in production" },
    { value: "5M+", label: "Daily inference requests" },
    { value: "92%", label: "Avg. model accuracy" },
    { value: "99.9%", label: "Pipeline uptime" },
  ],
};
