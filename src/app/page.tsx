import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import RoboticsBuilds from "@/components/sections/RoboticsBuilds";
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
        <Projects />
        <Research />
        <RoboticsBuilds />
        <ResumeDownload />
        <Contact />
      </div>
    </>
  );
}
