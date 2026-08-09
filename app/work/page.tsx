"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { projects } from "@/lib/data";

const collageImages = [
  "3grid posters1.png",
  "3grid posters2.png",
  "3grid posters3.png",
  "3grid posters4.png",
  "3grid posters5.png",
  "3grid posters6.png",
  "3grid posters7.png",
  "3grid posters8.png",
  "posters1.png",
  "posters2.png",
  "posters3.png",
  "posters4.png",
  "posters5.png",
  "posters6.png",
  "posters7.png",
  "posters8.png",
  "robopark gallery.png",
  "robopark home.png",
  "roboparkcareers.png",
  "roboparkcontact us.png",
  "launchpad.png",
  "enablers.png",
];

export default function WorkPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-canvas px-6 py-20 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-white/80 transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-accent-sky">Showcase</p>
          <h1 className="font-display text-3xl font-semibold md:text-5xl">Selected design work.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">A collection of UI and product design work focused on clarity, storytelling, and thoughtful interaction.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-3xl border border-border/70 bg-white/[0.02]">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={project.image ?? "/images/donation.png"} alt={project.title} fill className="object-cover object-top" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                  </div>
                  <span className="shrink-0 text-xs uppercase tracking-[0.28em] text-muted">{project.year}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.24em] text-white/70">{tag}</span>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-white/70">
                  <p><span className="text-white/90">Font:</span> {project.font}</p>
                  <p><span className="text-white/90">Palette:</span> {project.palette?.join(" · ")}</p>
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-accent-sky transition-colors hover:text-white">
                  Open Behance
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <h3 className="mb-6 font-display text-xl font-semibold">Other works</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {collageImages.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className="overflow-hidden rounded-xl border border-border/60 bg-white/[0.02] transition-all hover:border-accent-sky/50"
              >
                <div className="relative h-40 w-full cursor-pointer">
                  <Image src={`/images/${img}`} alt={img} fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.behance.net/pavithra-ss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
          >
            More
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div className="relative h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/images/${selectedImage}`}
              alt={selectedImage}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
