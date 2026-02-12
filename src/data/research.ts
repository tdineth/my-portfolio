export interface ResearchInterest {
  title: string;
  icon: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "published" | "under-review" | "in-progress";
  link?: string;
}

export interface TimelineEvent {
  title: string;
  year: string;
  description: string;
  type: "project" | "topic" | "milestone";
}

export const researchInterests: ResearchInterest[] = [
  {
    title: "Natural Language Processing",
    icon: "🧠",
    description:
      "Exploring LLM fine-tuning, prompt engineering, and retrieval-augmented generation for domain-specific applications.",
  },
  {
    title: "Computer Vision",
    icon: "👁️",
    description:
      "Handwriting recognition, object detection, and image segmentation for real-world automation systems.",
  },
  {
    title: "Robotics & Embedded AI",
    icon: "🤖",
    description:
      "Sim-to-real transfer learning, autonomous navigation, and intelligent control systems for mobile robots.",
  },
  {
    title: "MLOps & Scalable AI",
    icon: "⚙️",
    description:
      "Building production ML pipelines with Apache Airflow, MLflow, and containerized model serving.",
  },
];

export const publications: Publication[] = [
  {
    title: "WriteScan: AI-Powered Handwriting Form Automation",
    authors: "T. Dineth et al.",
    venue: "Open Business Summit, University of Peradeniya",
    year: "2025",
    status: "published",
  },
  {
    title: "Sim-to-Real Transfer for Autonomous Line-Following Robots",
    authors: "T. Dineth",
    venue: "Research in progress",
    year: "2025",
    status: "in-progress",
  },
];

export const researchTimeline: TimelineEvent[] = [
  {
    title: "WriteScan — Handwriting Recognition System",
    year: "2025",
    description:
      "Built AI-powered handwriting form automation. Awarded 2nd Place and Top 50 Inventors at Neo Ventures.",
    type: "project",
  },
  {
    title: "Computer Vision Honors — OpenCV University",
    year: "2024",
    description:
      "Completed advanced computer vision coursework covering object detection, segmentation, and image processing.",
    type: "milestone",
  },
  {
    title: "Sim-to-Real Transfer Learning",
    year: "2024–Present",
    description:
      "Researching transfer learning techniques for bridging simulation-trained models to real-world robotics.",
    type: "topic",
  },
  {
    title: "Line-Following Robot — Autonomous Navigation",
    year: "2024",
    description:
      "Designed and built an autonomous line-following robot with PID control and sensor fusion.",
    type: "project",
  },
  {
    title: "ML Pipeline Engineering",
    year: "2024",
    description:
      "Explored Apache Airflow and MLflow for orchestrating end-to-end ML pipelines.",
    type: "topic",
  },
];

export const futureTopics: string[] = [
  "Reinforcement Learning",
  "Federated Learning",
  "Edge AI & TinyML",
  "Multimodal LLMs",
  "Autonomous Systems",
  "AI Safety & Alignment",
  "Neural Architecture Search",
];
