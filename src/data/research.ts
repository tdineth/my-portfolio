export interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  status: "published" | "under-review" | "in-progress";
}

export const researchInterests: ResearchInterest[] = [
  {
    title: "Deep Reinforcement Learning",
    description:
      "Exploring novel DRL architectures for real-world robotic control and navigation tasks with sample-efficient learning.",
    icon: "🧠",
  },
  {
    title: "Efficient Neural Architectures",
    description:
      "Designing compact, deployment-ready neural networks through pruning, quantization, and neural architecture search.",
    icon: "⚡",
  },
  {
    title: "Multi-Agent Systems",
    description:
      "Investigating emergent behaviors and coordination strategies in swarm robotics using bio-inspired algorithms.",
    icon: "🤖",
  },
  {
    title: "Computer Vision for Robotics",
    description:
      "Developing real-time visual perception systems for autonomous robots operating in unstructured environments.",
    icon: "👁",
  },
];

export const publications: Publication[] = [
  {
    title:
      "Sample-Efficient Deep Reinforcement Learning for Mobile Robot Navigation",
    authors: "T. Dineth, et al.",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2025,
    status: "under-review",
  },
  {
    title:
      "Lightweight Vision Transformers for Edge Deployment: A Knowledge Distillation Approach",
    authors: "T. Dineth, et al.",
    venue: "Neural Computing and Applications Journal",
    year: 2025,
    status: "in-progress",
  },
];
