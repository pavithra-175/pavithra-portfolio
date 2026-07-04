"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="Career Ladder" title="How I got here." />

        <div className="mt-12 space-y-12">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative flex flex-col gap-6 md:flex-row md:items-start"
            >
              <div className="md:w-1/6 flex items-start md:items-center">
                <div className="mr-4 flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-accent-sky ring-2 ring-border" />
                  <span className="mt-4 h-full w-px bg-border" />
                </div>
                <div className="hidden md:block text-sm text-muted">{item.duration}</div>
              </div>

              <div className="md:w-5/6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold">{item.role}</h3>
                  <div className="rounded-full border border-border/70 px-3 py-1 text-xs text-white/80">{item.company}</div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                  {item.achievements.map((a, ai) => (
                    <p key={ai} className="text-sm text-muted">{a}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
