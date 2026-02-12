export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "MATLAB" },
      { name: "Bash" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
      { name: "Hugging Face" },
      { name: "OpenCV" },
      { name: "LangChain" },
      { name: "ONNX" },
      { name: "Keras" },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: "⚙️",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Django" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "Next.js" },
      { name: "REST APIs" },
      { name: "Docker" },
      { name: "Git" },
      { name: "Linux" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    color: "from-rose-500 to-red-500",
    skills: [
      { name: "Apache Airflow" },
      { name: "MLflow" },
      { name: "Postman" },
      { name: "Jupyter" },
      { name: "VS Code" },
      { name: "AutoCAD" },
    ],
  },
  {
    title: "Architecture & Infra",
    icon: "🏗️",
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Microservices" },
      { name: "CI/CD" },
      { name: "REST Design" },
      { name: "MLOps" },
      { name: "System Design" },
    ],
  },
];
