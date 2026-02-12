export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "neural-nav",
    title: "Neural Navigation System",
    description:
      "Deep reinforcement learning agent for autonomous robot navigation in complex environments.",
    longDescription:
      "Developed a DRL-based navigation system using PPO algorithm that enables a mobile robot to navigate through dynamic environments. The system uses LiDAR point cloud data processed through a custom CNN architecture, achieving 94% success rate in simulation and 87% in real-world tests. Implemented in Python with PyTorch and ROS integration.",
    tags: ["AI", "Robotics", "Research"],
    github: "https://github.com/tdineth/neural-nav",
  },
  {
    id: "vision-transformer",
    title: "Efficient Vision Transformer",
    description:
      "Lightweight ViT architecture optimized for edge deployment with knowledge distillation.",
    longDescription:
      "Designed a compact Vision Transformer model that achieves 92% of full-scale ViT accuracy while using only 30% of the parameters. Applied knowledge distillation and structured pruning techniques for efficient deployment on embedded devices. Benchmarked on CIFAR-100 and ImageNet-1K datasets.",
    tags: ["AI", "Research", "Systems"],
    github: "https://github.com/tdineth/efficient-vit",
  },
  {
    id: "swarm-robotics",
    title: "Swarm Robotics Coordination",
    description:
      "Multi-agent coordination system using bio-inspired algorithms for collective task completion.",
    longDescription:
      "Built a swarm robotics framework implementing ant colony optimization and particle swarm optimization for multi-robot task allocation. Simulated with 50+ agents performing collaborative mapping and object transport. Integrated with Arduino-based physical robots for real-world validation.",
    tags: ["Robotics", "AI", "Systems"],
    github: "https://github.com/tdineth/swarm-coord",
  },
  {
    id: "ml-pipeline",
    title: "AutoML Pipeline Framework",
    description:
      "End-to-end automated machine learning pipeline with hyperparameter optimization and model selection.",
    longDescription:
      "Created an automated ML pipeline that handles data preprocessing, feature engineering, model selection, and hyperparameter tuning using Bayesian optimization. Supports classification and regression tasks with automatic ensemble generation. Achieved competitive performance on Kaggle benchmarks.",
    tags: ["AI", "Systems"],
    github: "https://github.com/tdineth/automl-pipeline",
  },
  {
    id: "embedded-ai",
    title: "Edge AI Inference Engine",
    description:
      "Optimized inference engine for running neural networks on resource-constrained microcontrollers.",
    longDescription:
      "Developed a lightweight inference engine in C++ for deploying quantized neural networks on ARM Cortex-M processors. Implemented INT8 quantization, operator fusion, and memory-efficient scheduling. Achieved real-time object detection at 15 FPS on STM32H7 with only 512KB RAM.",
    tags: ["AI", "Robotics", "Systems"],
  },
  {
    id: "research-nlp",
    title: "Scientific Paper Analyzer",
    description:
      "NLP system that extracts key findings, methodologies, and citations from research papers.",
    longDescription:
      "Built an NLP pipeline using transformer-based models to automatically extract structured information from scientific papers. Features include abstract summarization, methodology classification, result extraction, and citation graph analysis. Fine-tuned on a corpus of 10K+ CS papers.",
    tags: ["AI", "Research"],
    github: "https://github.com/tdineth/paper-analyzer",
  },
];
