"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, profile } from "@/lib/data";

const items = [
  {
    label: "Education",
    value: education[0].degree,
    detail: `${education[0].institution} · ${education[0].duration}`,
  },
  {
    label: "Based in",
    value: profile.location,
    detail: "Open to remote & on-site roles",
  },
  {
    label: "Focus",
    value: "UI/UX Design & Data Analytics",
    detail: "Figma · SQL · Power BI · Excel",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-10 lg:gap-12">

          <div className="md:col-span-1 space-y-6">
            <SectionHeading
              eyebrow="About"
              title="Designing with intention, transforming data into insights."
              description="A quick look at how I think and what I bring to a team."
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {profile.aboutBio}
            </motion.p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-white/[0.03] p-3">
              <Image
                src="/images/my image.jpeg"
                alt="Pavithra"
                width={800}
                height={1000}
                className="h-56 w-full rounded-xl object-cover sm:h-64 md:h-72"
              />
            </div>

            <div className="flex justify-end">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 px-5 py-2.5 text-sm text-white/90 transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
              >
                <Download size={15} className="text-accent-sky" />
                Download Resume
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-8">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="card-border rounded-xl p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-sm font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs text-muted">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
