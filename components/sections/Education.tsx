"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 xl:px-0">
        <SectionHeading eyebrow="Education" title="Academic background." />

        <div className="mt-10 sm:mt-12 md:mt-14 divide-y divide-border border-y border-border">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between gap-2 py-6 md:flex-row md:items-center"
            >
              <div>
                <h3 className="font-display text-base font-semibold sm:text-lg">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-accent-sky">
                {item.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
