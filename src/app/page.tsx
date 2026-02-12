"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProofOfSkill from "@/components/sections/ProofOfSkill";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import LearningTimeline from "@/components/sections/LearningTimeline";
import RoboticsBuilds from "@/components/sections/RoboticsBuilds";
import Testimonials from "@/components/sections/Testimonials";
import ResumeDownload from "@/components/sections/ResumeDownload";
import Contact from "@/components/sections/Contact";

const NeuralBackground = dynamic(
  () => import("@/components/NeuralBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ProofOfSkill />
        <Projects />
        <Research />
        <LearningTimeline />
        <RoboticsBuilds />
        <Testimonials />
        <ResumeDownload />
        <Contact />
      </div>
    </>
  );
}
