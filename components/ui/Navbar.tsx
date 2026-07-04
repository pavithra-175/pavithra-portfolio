"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-canvas/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-10"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick("hero");
          }}
          className="focus-ring font-display text-sm font-semibold tracking-wide"
        >
          pavithra
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleClick(link.id)}
                className={`focus-ring text-sm transition-colors ${
                  active === link.id
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-accent-violet to-accent-sky"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleClick("contact")}
          className="focus-ring hidden rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-accent-sky/60 md:inline-flex"
        >
          Let&apos;s talk
        </button>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-white transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-white transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-1 border-t border-border bg-canvas/95 px-4 pb-6 pt-2 backdrop-blur-xl sm:px-6 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`focus-ring w-full py-3 text-left text-sm ${
                  active === link.id ? "text-white" : "text-muted"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
