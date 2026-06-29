import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "llm-genai",
    title: "LLMs & Generative AI",
    description:
      "Production-grade large language models, RAG pipelines, and generative applications.",
    skills: [
      "Large Language Models",
      "Generative AI",
      "Hugging Face",
      "LangChain",
      "OpenAI API",
      "Prompt Engineering",
      "RAG Architecture",
      "Fine-tuning",
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning & CV",
    description:
      "Neural network design, training optimization, and computer vision at scale.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "CNNs",
      "RNNs",
      "Transformers",
      "OpenCV",
      "Model Quantization",
    ],
  },
  {
    id: "nlp-speech",
    title: "NLP & Speech",
    description:
      "Natural language processing, medical text analysis, and automated speech recognition.",
    skills: [
      "NLTK",
      "MedSpacy",
      "LangChain",
      "ASR Systems",
      "Text Classification",
      "Named Entity Recognition",
      "Sentiment Analysis",
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Infrastructure",
    description:
      "End-to-end ML lifecycle — from experiment tracking to production deployment.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS SageMaker",
      "GCP ML Services",
      "Azure ML",
      "TravisCI",
      "GitLab CI/CD",
      "Model Monitoring",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "ETL pipelines, feature engineering, and real-time streaming for ML workloads.",
    skills: [
      "PySpark",
      "Apache Spark",
      "Pandas",
      "NumPy",
      "SQL",
      "Kinesis",
      "Time-Series Forecasting",
      "Data Mining",
    ],
  },
  {
    id: "engineering",
    title: "Software Engineering",
    description:
      "APIs, microservices, and full-stack integration for AI-powered products.",
    skills: [
      "Python",
      "JavaScript",
      "FastAPI",
      "Flask",
      "Node.js",
      "RESTful APIs",
      "Microservices",
      "C++",
      "CUDA",
    ],
  },
];
