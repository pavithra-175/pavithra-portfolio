"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 xl:px-0">
        <SectionHeading eyebrow="Skills" title="Tools and thinking behind the work." align="left" />

        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left items-start">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
              className="gradient-border group rounded-2xl p-6 h-full flex flex-col"
            >
              <h3 className="font-display text-lg font-semibold">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: gi * 0.12 + si * 0.05 }}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-white/80"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
