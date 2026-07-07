import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Products from "@/components/sections/Products";
import Mission from "@/components/sections/Mission";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <Products />
        <Mission />
        <Contact />
      </main>
    </>
  );
}