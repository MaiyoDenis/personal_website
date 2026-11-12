import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import GithubSection from "@/components/sections/Github";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Products from "@/components/sections/Products";
import Mission from "@/components/sections/Mission";
import Contact from "@/components/sections/Contact";
import EngineeringBackground from "@/components/ui/EngineeringBackground";

function SectionDivider() {
  return (
    <div className="section-divider" />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section stays clean with its own city background as requested */}
        <Hero />

        {/* All subsequent sections wrapped in EngineeringBackground */}
        <EngineeringBackground>
          <SectionDivider />
          <About />
          <SectionDivider />
          <Projects />
          <GithubSection />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Journey />
          <SectionDivider />
          <Products />
          <SectionDivider />
          <Mission />
          <SectionDivider />
          <Contact />
        </EngineeringBackground>
      </main>
    </>
  );
}
