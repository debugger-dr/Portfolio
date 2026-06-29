import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    id: "agile17",
    company: "Agile17",
    role: "Senior Machine Learning Engineer",
    period: "Jun 2021 — Present",
    highlights: [
      "Lead a team of seven building PySpark data pipelines that cut ETL time by 50%.",
      "Ship LLM and generative-AI applications with Hugging Face and OpenAI, raising interaction accuracy by 25%.",
      "Deploy real-time inference on AWS SageMaker and GCP with automated MLOps and sub-second latency.",
    ],
  },
  {
    id: "seven-rooms",
    company: "Seven Rooms",
    role: "Machine Learning Engineer",
    period: "Dec 2018 — May 2021",
    highlights: [
      "Built computer-vision models with OpenCV and PyTorch at 95% object-detection accuracy.",
      "Engineered NLP pipelines with MedSpacy and LangChain, cutting medical document processing time by 30%.",
      "Accelerated Transformer training 40% via C++ and CUDA optimization on GPU workloads.",
    ],
  },
  {
    id: "pendo",
    company: "Pendo",
    role: "Software Engineer",
    period: "May 2016 — Dec 2018",
    highlights: [
      "Built CNN deep-learning models with PyTorch and OpenCV, improving image analysis accuracy by 35%.",
      "Containerized AI apps with Docker and shipped real-time ML APIs with Node.js and Flask.",
    ],
  },
];
