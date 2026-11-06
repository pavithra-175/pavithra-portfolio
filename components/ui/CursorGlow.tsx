"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 220}px, ${
          e.clientY - 220
        }px, 0)`;
        el.style.opacity = "1";
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[440px] w-[440px] rounded-full opacity-0 transition-opacity duration-500 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--accent-violet) 14%, transparent) 0%, color-mix(in srgb, var(--accent-sky) 6%, transparent) 45%, transparent 70%)",
        filter: "blur(10px)",
      }}
    />
  );
}
