import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Metrics } from "@/components/sections/Metrics";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Metrics />
      <Expertise />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
