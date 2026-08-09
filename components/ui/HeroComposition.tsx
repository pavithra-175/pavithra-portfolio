"use client";

import { ReactNode } from "react";

function FigmaLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size * 0.67} height={size} viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.25 23.25 19 28.5 19C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.75 4.25 19 9.5 19H19V0H9.5C4.25 0 0 4.25 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5C4.25 19 0 23.25 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

function PBILogo({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="16" width="4" height="6" rx="1" fill="#F2C811" opacity="0.65" />
      <rect x="8" y="10" width="4" height="12" rx="1" fill="#F2C811" opacity="0.8" />
      <rect x="14" y="4" width="4" height="18" rx="1" fill="#F2C811" />
    </svg>
  );
}

function ToolBadge({
  label,
  icon,
  className,
}: {
  label: string;
  icon: ReactNode;
  className: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0f0f0f]/80 px-2.5 py-1.5 shadow-lg shadow-black/40 backdrop-blur-xl">
        <span className="text-white/80">{icon}</span>
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/70">{label}</span>
      </div>
    </div>
  );
}

export default function HeroComposition() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-[720px] select-none items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_32%),rgba(7,7,7,0.9)] px-4 py-6 shadow-2xl shadow-black/40 sm:h-[360px] md:h-[400px] lg:h-[440px]">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/[0.04]" />
      <div className="pointer-events-none absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-accent-violet/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[16%] right-[12%] h-36 w-36 rounded-full bg-accent-sky/10 blur-3xl" />

      <ToolBadge label="Figma" icon={<FigmaLogo size={12} />} className="left-[6%] top-[12%]" />
      <ToolBadge label="Excel" icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" /><path d="M8 8h8" /><path d="M8 12h8" /><path d="M8 16h8" /></svg>} className="right-[8%] top-[16%]" />
      <ToolBadge label="Power BI" icon={<PBILogo size={10} />} className="left-[15%] bottom-[14%]" />
      <ToolBadge label="SQL" icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" opacity="0.5" /></svg>} className="right-[12%] bottom-[18%]" />

      <div className="relative w-full max-w-[540px] rounded-[1.5rem] border border-white/[0.08] bg-[#101010]/90 p-4 shadow-2xl shadow-black/50 sm:p-6">
        <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
          <div className="flex items-center gap-2">
            <FigmaLogo size={15} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">Design workspace</span>
          </div>
          <div className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[8px] uppercase tracking-[0.24em] text-white/50">Concept</div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.24em] text-white/45">UI flow</span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-accent-sky">Figma</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/[0.08]" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-white/[0.06]" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-white/[0.06]" />
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.24em] text-white/45">Insights</span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-accent-violet">Power BI</span>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="h-10 flex-1 rounded bg-accent-violet/20" />
              <div className="h-10 flex-1 rounded bg-accent-sky/20" />
              <div className="h-10 flex-1 rounded bg-white/[0.08]" />
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </div>
  );
}
