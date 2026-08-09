"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 xl:px-0">
        <SectionHeading eyebrow="Selected Work" title="Projects worth a closer look." />

        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl p-0 border border-border/70 bg-white/[0.02] transition-colors hover:border-accent-sky/40"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image ?? "/images/donation.png"}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                  </div>
                  <span className="shrink-0 text-xs font-mono uppercase tracking-widest text-muted">{project.year}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-white/[0.02] px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent-sky hover:underline"
                  >
                    View Behance <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
          >
            Explore all work
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
