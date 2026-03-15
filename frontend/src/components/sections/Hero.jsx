import React from "react";
import { FaCode, FaChartLine, FaPalette, FaRocket } from "react-icons/fa";
import bgImage from "@/assets/banners/HeroBg.png";

export default function PremiumPortfolio() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-10 md:pt-32 md:pb-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Custom Website Design & Web Apps — Grow With Us
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed">
            We create high-performance websites and web applications that look premium, load fast,
            and support your goals — from planning and build to launch and ongoing updates.
          </p>

          {/* CTAs (aligned + spaced) */}
          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">

            {/* Primary */}
            <a
              href="#contact"
              className="
      inline-flex items-center justify-center
      rounded-2xl
      bg-blue-600 text-white
      px-8 py-3
      font-semibold text-sm
      shadow-lg shadow-blue-600/25
      hover:bg-blue-700 hover:-translate-y-0.5
      transition-all duration-300
    "
            >
              Get a Quote
            </a>

            {/* Secondary */}
            <a
              href="#projects"
              className="
      inline-flex items-center justify-center
      rounded-2xl
      border border-slate-300
      bg-white/80 backdrop-blur
      px-8 py-3
      font-semibold text-sm text-slate-800
      hover:bg-white hover:-translate-y-0.5
      transition-all duration-300
    "
            >
              View Client Work
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid md:grid-cols-2 gap-6 mt-10 lg:mt-0">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-black/40 lg:bg-black/35 backdrop-blur-md border border-white/25 text-white">
            <FaCode className="text-xl mb-4" />
            <h3 className="font-semibold">Website & App Development</h3>
            <p className="text-white/85 mt-2 text-sm">
              Custom builds with clean structure, responsive design, and modern features.
            </p>
          </div>

          {/* Card 2 (ONLY lighten on lg+) */}
          <div className="p-6 rounded-2xl bg-black/40 lg:bg-white/15 backdrop-blur-md border border-white/25 lg:border-white/20 text-white">
            <FaChartLine className="text-xl mb-4" />
            <h3 className="font-semibold">SEO & Speed Optimization</h3>
            <p className="text-white/85 mt-2 text-sm">
              Better visibility and faster load times with strong technical foundations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-black/40 lg:bg-black/35 backdrop-blur-md border border-white/25 text-white">
            <FaPalette className="text-xl mb-4" />
            <h3 className="font-semibold">UI Refresh & Branding</h3>
            <p className="text-white/85 mt-2 text-sm">
              Upgrade your look with polished visuals, consistency, and conversion-friendly layout.
            </p>
          </div>

          {/* Card 4 (ONLY lighten on lg+) */}
          <div className="p-6 rounded-2xl bg-black/40 lg:bg-white/15 backdrop-blur-md border border-white/25 lg:border-white/20 text-white">
            <FaRocket className="text-xl mb-4" />
            <h3 className="font-semibold">Launch & Ongoing Support</h3>
            <p className="text-white/85 mt-2 text-sm">
              Smooth deployment, updates, fixes, and maintenance as your needs evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}