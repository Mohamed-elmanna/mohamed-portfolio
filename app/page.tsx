import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Profile from "@/sections/Profile";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Publications from "@/sections/Publications";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <Education />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
