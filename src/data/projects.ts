export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  impact: string;
  tags: string[];
  tech: string[];
  github?: string;
  demo?: string;
  stars?: number;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "writescan",
    title: "WriteScan — Handwriting Form Automation",
    description:
      "AI-powered handwriting-based digital form automation system recognized as Top 50 Inventors at Neo Ventures national competition.",
    problem:
      "Manual data entry from handwritten forms is slow, error-prone, and costly — particularly for organizations handling thousands of paper forms in healthcare, education, and government.",
    approach:
      "Designed an end-to-end pipeline: touch-based handwriting capture on tablets, a pluggable handwriting recognition engine using CNN-LSTM architecture, structured data extraction, and offline-first local storage with optional cloud sync.",
    impact:
      "Recognized as Top 50 Inventors at Neo Ventures National Innovation Competition (Trace Expert City). Awarded 2nd Place at Open Business Summit 2025, University of Peradeniya.",
    tags: ["AI", "Startup"],
    tech: ["Python", "Deep Learning", "Computer Vision", "React Native"],
    github: "https://github.com/tdineth/writescan",
  },
  {
    id: "nexclinic",
    title: "NexClinic — AI Medical Decision Support",
    description:
      "AI-powered medical symptom analysis and doctor-assisted decision support system with agentic RAG architecture.",
    problem:
      "Doctors in underserved regions lack access to comprehensive diagnostic references during patient consultations, leading to delayed or suboptimal treatment decisions.",
    approach:
      "Built an agentic RAG system with vector databases and knowledge graphs for medical knowledge retrieval. Backend developed with Django, PostgreSQL, and Next.js with a relational database architecture for patient records.",
    impact:
      "Active development — designing the agentic pipeline to assist doctors with evidence-based diagnostic recommendations in real-time consultations.",
    tags: ["AI", "Startup"],
    tech: ["Django", "Next.js", "PostgreSQL", "Vector DBs", "Knowledge Graphs"],
    github: "https://github.com/tdineth/nexclinic",
  },
  {
    id: "dhara",
    title: "DHARA — Disaster Hazard Analysis & Response",
    description:
      "Disaster analysis and response assistant developed in collaboration with the Government of Sri Lanka.",
    problem:
      "Disaster response teams need rapid access to hazard data, historical patterns, and AI-driven analysis to coordinate effective responses during natural disasters.",
    approach:
      "Built data visualization dashboards integrated with government databases. Implemented AI-based hazard analysis for pattern detection and predictive risk assessment across multiple disaster types.",
    impact:
      "Deployed in collaboration with Government of Sri Lanka for real-time disaster hazard assessment and response coordination.",
    tags: ["AI", "Systems"],
    tech: ["Python", "Databases", "Data Visualization", "AI Analysis"],
  },
  {
    id: "dengue-prediction",
    title: "Dengue Outbreak Early Warning System",
    description:
      "Predictive system for dengue outbreak detection and hotspot prioritization using epidemiological data.",
    problem:
      "Sri Lanka faces recurring dengue outbreaks. Health authorities need early warning systems to prioritize resource allocation to high-risk areas before outbreaks escalate.",
    approach:
      "Developed time-series prediction models using historical case data, weather patterns, and population density. Built hotspot maps with risk scoring for district-level prioritization.",
    impact:
      "System capable of identifying high-risk districts 2–4 weeks before case spikes, enabling proactive mosquito control deployment.",
    tags: ["AI", "Research"],
    tech: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
  },
  {
    id: "plant-disease",
    title: "Diseased Plant Identification System",
    description:
      "Computer vision system for automated detection and classification of plant diseases from leaf images.",
    problem:
      "Farmers and agricultural officers struggle to quickly identify plant diseases in the field, leading to crop loss from delayed treatment.",
    approach:
      "Trained CNN-based image classifiers on plant disease datasets. Optimized the model for mobile inference so field workers can identify diseases from smartphone photos in real time.",
    impact:
      "Achieved high classification accuracy across multiple disease types, deployable on mobile devices for field use.",
    tags: ["AI", "Research"],
    tech: ["Python", "Computer Vision", "TensorFlow", "CNN"],
  },
  {
    id: "vehicle-prediction",
    title: "Vehicle Maintenance & Customer Prediction",
    description:
      "Predictive analytics system for vehicle maintenance failure prediction and customer chain analysis.",
    problem:
      "Automotive service centers lack data-driven tools to predict maintenance failures before they occur, resulting in costly breakdowns and poor customer retention.",
    approach:
      "Built ML models for failure prediction using historical maintenance records and sensor data. Developed customer chain prediction to identify patterns in service behavior.",
    impact:
      "Reduced unexpected failure rates through proactive maintenance scheduling based on predictive signals.",
    tags: ["AI", "Systems"],
    tech: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
  },
  {
    id: "curveexplorer",
    title: "CurveExplorer — Interactive Graphing Calculator",
    description:
      "Interactive mathematical graphing calculator developed using the Julia programming language.",
    problem:
      "Students need intuitive tools for visualizing mathematical functions and understanding curve behavior interactively.",
    approach:
      "Built a performant interactive graphing calculator in Julia leveraging its numerical computing capabilities for real-time function evaluation and visualization.",
    impact:
      "Functional interactive tool for mathematical exploration and education.",
    tags: ["Systems"],
    tech: ["Julia", "Numerical Computing", "Visualization"],
    github: "https://github.com/tdineth/curveexplorer",
  },
  {
    id: "libtiny3d",
    title: "Libtiny3D — C-Based 3D Rendering",
    description:
      "3D rendering library built from scratch in C, plus a Python game using Pygame.",
    problem:
      "Understanding 3D rendering pipelines at a fundamental level requires building one from scratch — transformations, projections, rasterization.",
    approach:
      "Implemented core 3D rendering in C: matrix transformations, camera projection, basic rasterization. Also built a game prototype using Python and Pygame for interactive demonstration.",
    impact:
      "Deep understanding of graphics pipeline internals; reusable C library for low-level 3D rendering experiments.",
    tags: ["Systems"],
    tech: ["C", "Python", "Pygame", "3D Graphics"],
    github: "https://github.com/tdineth/libtiny3d",
  },
  {
    id: "line-follower",
    title: "Line Following Robot",
    description:
      "Autonomous line-following robot using Arduino, infrared sensors, and real-time path correction.",
    problem:
      "Building a reliable autonomous robot that follows a line path requires precise sensor calibration and real-time motor control.",
    approach:
      "Used Arduino Uno with infrared sensors for line detection and L293D motor driver for movement. Implemented real-time path correction logic with PID-like control for smooth tracking.",
    impact:
      "Successfully built and demonstrated autonomous line following with real-time path correction and smooth motor control.",
    tags: ["Robotics"],
    tech: ["Arduino", "IR Sensors", "L293D", "C++"],
  },
];
