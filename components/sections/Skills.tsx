"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="Skills" title="Tools and thinking behind the work." align="left" />

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-accent-sky">Unique approach</p>
            <h3 className="font-display text-2xl font-semibold">Design skills reimagined</h3>
            <p className="text-sm text-muted">A compact, flexible skillset focused on practical tools and human-centred methods.</p>

            <div className="mt-6 rounded-2xl border border-border/70 bg-white/[0.02] p-4">
              <p className="text-sm font-semibold">Signature</p>
              <p className="mt-2 text-xs text-muted">Figma-first workflows, rapid prototyping, and accessible interfaces.</p>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                className="gradient-border group rounded-2xl p-6"
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
                      className="rounded-full border border-border bg-white/[0.02] px-3.5 py-1.5 text-xs text-white/80"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
