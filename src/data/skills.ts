export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Model Optimization" },
      { name: "Computer Vision" },
      { name: "NLP" },
    ],
  },
  {
    title: "Robotics",
    icon: "🤖",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Arduino" },
      { name: "Embedded Systems" },
      { name: "Sensors & Actuators" },
      { name: "Control Systems" },
      { name: "ROS" },
      { name: "PID Control" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git" },
      { name: "Linux" },
      { name: "MATLAB" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Jupyter" },
    ],
  },
];
