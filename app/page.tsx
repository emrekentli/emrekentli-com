"use client"

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Career } from "@/components/sections/career";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "career", "projects", "stack"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111] text-zinc-900 dark:text-white">
      <div className="fixed top-0 left-0 right-0 h-[72px] bg-gradient-to-b from-[#e7e2ff] dark:from-[#0f0f0f] to-transparent pointer-events-none z-40" />
      <Navigation activeSection={activeSection} />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto">
          <About />
          <Projects />
          <TechStack />
          <Career />
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.05),transparent)]" />
      </div>
    </main>
  );
}
