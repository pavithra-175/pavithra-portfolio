"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

function FigmaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path d="M24 29c0-5.523 4.477-10 10-10h0c5.523 0 10 4.477 10 10 0 5.523-4.477 10-10 10h-10V29Z" fill="#1ABCFE" />
      <path d="M4 39c0-5.523 4.477-10 10-10h10v10c0 5.523-4.477 10-10 10S4 44.523 4 39Z" fill="#0ACF83" />
      <path d="M24 9v10h10c5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10h-10Z" fill="#FF7262" />
      <path d="M4 19c0-5.523 4.477-10 10-10h10v10H14c-5.523 0-10 4.477-10 10 0 5.523-4.477 10-10 10V19Z" fill="#A259FF" />
    </svg>
  );
}

function ToolBadge({ label, className }: { label: string; className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [0, 1.3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className}`}
    >
      <div className="rounded-full border border-white/10 bg-black/70 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">{label}</span>
      </div>
    </motion.div>
  );
}

function ConnectorLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 80" className={`absolute ${className}`} fill="none">
      <path d="M8 66C24 42 46 28 70 32C93 36 110 54 132 72" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="70" cy="32" r="3" fill="#38bdf8" />
      <circle cx="132" cy="72" r="2.2" fill="#7c3aed" />
    </svg>
  );
}

function FrameCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[#0f1115]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

export default function HeroWorkspace() {
  const x = useSpring(0, { stiffness: 80, damping: 18 });
  const y = useSpring(0, { stiffness: 80, damping: 18 });

  useEffect(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    x.set(offsetX * 8);
    y.set(offsetY * 8);
  };

  return (
    <div className="mt-14 hidden w-full max-w-[760px] md:block">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        animate={{ y: [0, -8, 0], rotate: [0, 0.6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.13),_transparent_30%),rgba(5,5,5,0.95)] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/5" />
        <div className="pointer-events-none absolute left-[10%] top-[15%] h-24 w-24 rounded-full bg-accent-violet/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[10%] right-[15%] h-28 w-28 rounded-full bg-accent-sky/15 blur-3xl" />
        <motion.div
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[18%] top-[22%] h-16 w-16 rounded-full border border-white/10"
        />

        <div className="relative h-[300px] sm:h-[340px] lg:hidden">
          <div className="absolute inset-0 rounded-[1.4rem] border border-white/10 bg-[rgba(10,10,12,0.92)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.32)]">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FigmaIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-white/45">Workspace</p>
                  <p className="text-sm font-medium text-white/80">Design + data</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-2 py-1 text-[8px] uppercase tracking-[0.24em] text-white/45">Live</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Prototype</p>
                <div className="mt-3 h-2 rounded-full bg-white/10" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-accent-sky/35" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">KPI</p>
                <div className="mt-3 flex items-end gap-2">
                  <div className="h-8 w-4 rounded-full bg-accent-violet/45" />
                  <div className="h-12 w-4 rounded-full bg-accent-sky/50" />
                  <div className="h-6 w-4 rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div style={{ x, y }} className="relative hidden h-[320px] sm:h-[360px] lg:block lg:h-[420px]">
          <ConnectorLine className="left-[12%] top-[14%] h-20 w-[36%] opacity-80" />
          <ToolBadge label="Figma" className="left-[7%] top-[9%]" />
          <ToolBadge label="Auto Layout" className="right-[11%] top-[12%]" />
          <ToolBadge label="SQL" className="left-[9%] bottom-[16%]" />
          <ToolBadge label="Power BI" className="right-[10%] bottom-[16%]" />

          <motion.div
            animate={{ y: [0, -4, 0], rotate: [0, 0.4, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[6%] top-[19%] hidden rounded-2xl border border-white/10 bg-black/70 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <FigmaIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/45">Design tools</p>
                <p className="text-sm font-medium text-white/80">Wireframe flow</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="h-2 w-8 rounded-full bg-white/10" />
              <div className="h-2 w-12 rounded-full bg-accent-sky/35" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0], rotate: [0, -0.35, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[6%] top-[22%] w-[38%] max-w-[220px] rounded-2xl border border-white/10 bg-black/70 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Analytics</p>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[8px] uppercase tracking-[0.24em] text-white/45">KPI</span>
            </div>
            <div className="mt-3 flex items-end gap-2">
              <div className="h-12 w-5 rounded-t-full bg-accent-violet/50" />
              <div className="h-16 w-5 rounded-t-full bg-accent-sky/55" />
              <div className="h-8 w-5 rounded-t-full bg-white/15" />
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 0.3, 0] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[9%] bottom-[10%] w-[40%] max-w-[220px] rounded-2xl border border-white/10 bg-black/70 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Data flow</p>
              <span className="text-[10px] uppercase tracking-[0.24em] text-accent-sky">SQL</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">DB</div>
              <div className="flex-1 rounded-full border border-white/10 bg-white/5 p-2">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-accent-sky/40" />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0], rotate: [0, -0.4, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[8%] hidden w-[32%] max-w-[180px] rounded-2xl border border-white/10 bg-black/70 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Prototype</p>
              <span className="text-[10px] uppercase tracking-[0.24em] text-accent-violet">Flow</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded-full bg-white/10" />
              <div className="h-2 w-4/5 rounded-full bg-accent-violet/35" />
              <div className="h-2 w-3/5 rounded-full bg-white/10" />
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.01, 1], y: [0, -4, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 flex w-[78%] max-w-[420px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-[#0b0d12]/90 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5"
          >
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FigmaIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-white/45">Creative workspace</p>
                  <p className="text-sm font-medium text-white/80">UI + data thinking</p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 px-2 py-1 text-[8px] uppercase tracking-[0.24em] text-white/45">
                Live
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
              <FrameCard className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Design system</p>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-accent-sky">Components</p>
                </div>
                <div className="h-2 rounded-full bg-white/10" />
                <div className="h-2 w-4/5 rounded-full bg-white/10" />
                <div className="h-2 w-3/5 rounded-full bg-white/10" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-8 rounded-xl bg-accent-violet/25" />
                  <div className="h-8 rounded-xl bg-accent-sky/25" />
                  <div className="h-8 rounded-xl bg-white/8" />
                </div>
              </FrameCard>

              <FrameCard className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Analytics pulse</p>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-accent-violet">Dashboard</p>
                </div>
                <div className="flex items-end gap-2">
                  <div className="h-10 w-4 rounded-full bg-accent-violet/45" />
                  <div className="h-14 w-4 rounded-full bg-accent-sky/50" />
                  <div className="h-7 w-4 rounded-full bg-white/15" />
                </div>
                <div className="h-2 rounded-full bg-white/10" />
              </FrameCard>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
