"use client";
import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
// import AboutSection from "./about/components/AboutSection";
// import BlogSection from "./blog/components/BlogSection";
// import ProjectsSection from "./projects/components/ProjectsSection";
// import ResearchSection from "./research/components/ResearchSection";
// import ContactSection from "./contact/components/ContactSection";
// import ResumeSection from "./resume/components/ResumeSection";

export default function Home() {
  return (
   <div>
    <HeroSection />
    {/* <AboutSection />
    <ResearchSection />
    <ProjectsSection />
    <BlogSection />
    <ContactSection /> */}
    {/* <ResumeSection /> */}
   </div>
  );
}
