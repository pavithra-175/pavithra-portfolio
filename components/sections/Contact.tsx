"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import GridBackground from "@/components/ui/GridBackground";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "LinkedIn", value: "pavithra-s-s", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "pavithra-175", href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <GridBackground />
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-accent-sky"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
        >
          Let&apos;s build something worth using.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-md text-muted"
        >
          Open to UI design roles, internships, and freelance collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton href={`mailto:${profile.email}`} variant="primary">
            Say Hello
            <ArrowUpRight size={16} />
          </MagneticButton>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="focus-ring card-border group flex items-center gap-4 rounded-xl p-5 text-left transition-colors hover:border-accent-sky/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent-sky">
                <link.icon size={16} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">
                  {link.label}
                </span>
                <span className="block text-sm text-white/90">
                  {link.value}
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="ml-auto text-muted transition-colors group-hover:text-accent-sky"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
