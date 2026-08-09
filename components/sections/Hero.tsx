"use client";


import { profile } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import GridBackground from "@/components/ui/GridBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28"
    >
      <GridBackground />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 md:px-10 xl:px-0 z-10">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted sm:mb-5 sm:px-4 sm:py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-sky" />
          Available for design & analytics roles
        </p>

        <h1 className="font-display text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem]">
          {profile.name}
          <span className="block gradient-text">{profile.title}.</span>
          <span className="mt-3 block text-base font-medium text-muted sm:mt-4 sm:text-xl md:text-2xl">
            {profile.secondaryTitle}
          </span>
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:mt-6 md:text-lg">
          {profile.summary}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 md:mt-10">
          <MagneticButton
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="primary"
          >
            View Projects
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
        </div>
      </div>

    </section>
  );
}
