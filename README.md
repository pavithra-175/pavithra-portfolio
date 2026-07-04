# Pavithra S S — Portfolio

A premium, minimal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. All content is sourced from the provided resume only.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Structure

```
app/            Routes, layout, global styles
components/
  sections/     Hero, About, Skills, Experience, Projects, Education, Contact
  ui/           Navbar, Footer, Loader, MagneticButton, ScrollProgress, etc.
hooks/          useActiveSection
lib/            Resume data (single source of truth)
types/          Shared TypeScript types
```

Edit `lib/data.ts` to update resume content — every section reads from it.
