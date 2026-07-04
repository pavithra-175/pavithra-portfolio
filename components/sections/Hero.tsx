"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import GridBackground from "@/components/ui/GridBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function GeometricComposition() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto hidden h-[280px] w-[280px] md:block md:h-[380px] md:w-[380px]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-border"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-accent-violet/30"
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] md:h-52 md:w-52"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(56,189,248,0.18))",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        animate={{
          borderRadius: [
            "38% 62% 63% 37% / 41% 44% 56% 59%",
            "58% 42% 39% 61% / 55% 61% 39% 45%",
            "38% 62% 63% 37% / 41% 44% 56% 59%",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-6 h-14 w-14 rotate-12 border border-accent-sky/50 md:h-16 md:w-16"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -left-4 bottom-8 h-3 w-3 rounded-full bg-accent-sky md:h-4 md:w-4"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-8 h-8 w-8 border border-accent-violet/50"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28"
    >
      <GridBackground />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-10 lg:gap-16 xl:px-0">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted sm:mb-5 sm:px-4 sm:py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-sky" />
            Available for design roles
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem]"
          >
            {profile.name}
            <span className="block gradient-text">{profile.title}.</span>
            <span className="mt-3 block text-base font-medium text-muted sm:mt-4 sm:text-xl md:text-2xl">
              {profile.secondaryTitle}
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:mt-6 md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 md:mt-10"
          >
            <MagneticButton
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="primary"
            >
              View Projects
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="ghost"
            >
              Contact
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <GeometricComposition />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
