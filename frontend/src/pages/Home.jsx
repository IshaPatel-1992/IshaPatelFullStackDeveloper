import React from "react";
import { portfolio } from "../data/portfolio";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    
    <div className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-50 overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gray-200/70 dark:bg-gray-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gray-200/70 dark:bg-gray-800/40 blur-3xl" />

      <Navbar name={portfolio.name} />

      <main className="relative">
        <Hero profile={portfolio} onViewProjects={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} />
         <About profile={portfolio} />
        <Projects profile={portfolio} />
        <Contact profile={portfolio} />
        <Footer name={portfolio.name} socials={portfolio.socials} email={portfolio.email} />
      </main>
    </div>
  );
}
