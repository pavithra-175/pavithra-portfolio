"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

type Theme = "light" | "dark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState<Theme>("dark");
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.toggle("light", nextTheme === "light");
    root.classList.toggle("dark", nextTheme === "dark");
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

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
        className={`relative flex items-center justify-center gap-2 rounded-full bg-canvas/70 px-3 py-2 backdrop-blur-xl shadow-lg transition-all duration-300 sm:gap-4 sm:px-8 sm:py-3 ${
          scrolled ? "bg-canvas/90 shadow-md" : ""
        }`}
      >
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleClick(link.id)}
                className={`focus-ring text-[11px] font-medium transition-colors sm:text-sm ${
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

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            onClick={toggleTheme}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--text-primary)] transition-colors hover:bg-accent-violet/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--text-primary)] transition-colors hover:bg-accent-violet/10 sm:hidden"
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
                        ? "bg-accent-violet/10 text-accent-violet"
                        : "text-muted hover:bg-accent-violet/5 hover:text-accent-sky"
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
