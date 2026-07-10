"use client";

import { Box } from "@/components/ui";
import { useReveal } from "@/lib/hooks";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Systems } from "@/components/sections/Systems";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  useReveal();

  return (
    <Box as="main" bg="primary" minH="screen">
      <Nav />
      <Hero />
      <About />
      <Systems />
      <Experience />
      <Projects />
      <Writing />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
}
