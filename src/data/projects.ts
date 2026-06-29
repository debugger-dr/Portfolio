import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "atlas-rag",
    name: "Atlas",
    subtitle: "Enterprise RAG Assistant",
    category: "LLMs & Generative AI",
    metric: "+25% answer accuracy",
    description:
      "A retrieval-augmented assistant that grounds LLM responses in a company's own knowledge base — documents, tickets, and wikis — with citations and sub-second retrieval.",
    highlights: [
      "Raised contextual answer accuracy by 25% with a hybrid semantic + keyword retriever over a pgvector store.",
      "Streamed responses through a FastAPI gateway with token-level caching, holding p95 latency under 900ms.",
      "Cut hallucinations with citation-grounded prompting and an automated eval harness gating every model change.",
    ],
    technologies: [
      "LangChain",
      "OpenAI",
      "Hugging Face",
      "pgvector",
      "FastAPI",
      "Docker",
    ],
  },
  {
    id: "sentinel-vision",
    name: "Sentinel",
    subtitle: "Real-Time Vision Inspection",
    category: "Computer Vision",
    metric: "95% detection · <40ms",
    description:
      "An edge computer-vision system that flags manufacturing defects on a live production line, replacing manual spot-checks with continuous, frame-by-frame inspection.",
    highlights: [
      "Reached 95% defect-detection accuracy across varied lighting and part geometries on real-world datasets.",
      "Compiled PyTorch models to TensorRT for <40ms GPU inference, keeping pace with the line at full speed.",
      "Rolled out as Kubernetes-managed inference pods with drift monitoring and automated retraining triggers.",
    ],
    technologies: [
      "PyTorch",
      "OpenCV",
      "CUDA",
      "TensorRT",
      "Kubernetes",
      "Triton",
    ],
  },
  {
    id: "forecast-engine",
    name: "Forecast Engine",
    subtitle: "Demand Forecasting & Streaming Platform",
    category: "Data & MLOps",
    metric: "+28% forecast accuracy",
    description:
      "A demand-planning platform pairing time-series forecasting with a real-time feature pipeline, so planners see updated predictions as new sales data lands.",
    highlights: [
      "Lifted forecast accuracy by 28% with an ensemble of gradient-boosted and TensorFlow sequence models.",
      "Halved pipeline runtime by moving feature engineering to PySpark with Kinesis-fed streaming updates.",
      "Operationalized the full lifecycle on SageMaker with Airflow orchestration and versioned model registries.",
    ],
    technologies: [
      "PySpark",
      "TensorFlow",
      "Scikit-learn",
      "Kinesis",
      "SageMaker",
      "Airflow",
    ],
  },
];
