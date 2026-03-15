import React, { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const NavLink = ({ to, children, onClick }) => (
  <a
    href={`#${to}`}
    onClick={onClick}
    className="
      text-[15px] md:text-base font-semibold tracking-wide
      text-slate-700 hover:text-blue-600
      transition
      relative
      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
      after:bg-blue-600 hover:after:w-full
      after:transition-all after:duration-300
      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 rounded
    "
  >
    {children}
  </a>
);

// Simple inline icons (no library needed)
const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M6 6l12 12M18 6l-12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Navbar({ name = "Isha Patel" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep your theme logic if you still want it set by default:
  // (No button now; it will just respect localStorage and default to light)
  const [dark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* White Glass Bar */}
      <div className="bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="py-4 flex items-center justify-between">
            {/* Left: Profile + Name */}
            <a
              href="#home"
              className="flex items-center gap-4 group"
              onClick={handleNavClick}
            >
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="
                    h-12 w-12 rounded-2xl object-cover
                    border border-slate-200 shadow-md
                    transition-transform duration-300
                    group-hover:scale-[1.02]
                  "
                />
                {/* subtle ring glow */}
                <div className="pointer-events-none absolute -inset-1 rounded-[18px] bg-blue-500/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="leading-tight">
                <div className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                  {name}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Full Stack • Digital Strategy
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              <NavLink to="about">About</NavLink>
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a
                href="#contact"
                className="
                  hidden md:inline-flex items-center justify-center
                  rounded-xl
                  bg-blue-600 text-white
                  px-5 py-2.5 text-sm font-semibold
                  shadow-sm
                  hover:bg-blue-700 hover:-translate-y-px
                  active:translate-y-0
                  transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                "
              >
                Let’s Work Together
              </a>

              {/* Mobile Menu Icon Button */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="
                  md:hidden
                  inline-flex items-center justify-center
                  h-11 w-11 rounded-xl
                  border border-slate-300 bg-white
                  text-slate-800
                  hover:bg-slate-100
                  transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30
                "
              >
                {menuOpen ? (
                  <IconClose className="h-5 w-5" />
                ) : (
                  <IconMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-[max-height,opacity] duration-300
            ${menuOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-6 flex flex-col gap-5">
              <NavLink to="about" onClick={handleNavClick}>
                About
              </NavLink>
              <NavLink to="projects" onClick={handleNavClick}>
                Projects
              </NavLink>
              <NavLink to="contact" onClick={handleNavClick}>
                Contact
              </NavLink>

              <a
                href="#contact"
                onClick={handleNavClick}
                className="
                  mt-2 inline-flex items-center justify-center
                  rounded-xl bg-blue-600 text-white
                  px-6 py-3 font-semibold
                  shadow-sm
                  hover:bg-blue-700 transition
                "
              >
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}