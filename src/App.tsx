import { ThemeProvider } from "./components/ThemeProvider";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";
import { SEO } from "./components/SEO";
import { SchemaMarkup, WebsiteSchema } from "./components/SchemaMarkup";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <SEO
        title="Al-ameen Balogun | Full-Stack Developer Portfolio"
        description="Full-stack developer specializing in React, TypeScript, and modern web technologies. Portfolio showcasing projects, experience, and skills."
        keywords="portfolio, developer, web development, react, typescript, full-stack, frontend, backend"
        url="https://alameenbalogun.com"
      />
      <SchemaMarkup />
      <WebsiteSchema />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 lg:left-[25%] right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Content */}
        <main className="w-full lg:w-3/4 lg:ml-[25%] flex-shrink-0 pt-16 lg:pt-0 overflow-hidden">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Toaster />
      </div>
    </ThemeProvider>
  );
}
