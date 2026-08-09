"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 24);

      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
    window.localStorage.setItem("theme", "dark");

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const handleClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed z-50 transition-all duration-300 ease-in-out right-4 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[95%] sm:max-w-[max-content] ${
        hidden && !mobileMenuOpen ? "-top-24 opacity-0" : "top-4 sm:top-6 opacity-100"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`relative flex items-center justify-center rounded-full bg-canvas/70 px-3 py-2 sm:px-8 sm:py-3 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          scrolled ? "bg-canvas/90 shadow-md" : ""
        }`}
      >
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleClick(link.id)}
                className={`focus-ring text-[11px] sm:text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-accent-violet to-accent-sky"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="flex sm:hidden items-center justify-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-3 w-[200px] rounded-2xl bg-canvas/90 backdrop-blur-xl shadow-lg sm:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-center text-sm font-medium transition-colors ${
                      active === link.id
                        ? "bg-white/10 text-white"
                        : "text-muted hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
