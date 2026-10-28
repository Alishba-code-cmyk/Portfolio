import { AuroraBackground } from "@/components/AuroraBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
