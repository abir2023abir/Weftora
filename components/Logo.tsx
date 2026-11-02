import Link from "next/link";

export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  // Interlaced warp/weft "W" monogram.
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="currentColor" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12 L15 29 L20 17 L25 29 L31 12" stroke="var(--clay)" strokeWidth="3.4" />
        <path d="M8 20.5 H32" stroke="var(--paper)" strokeWidth="1.6" strokeDasharray="3 3.2" opacity="0.9" />
      </g>
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${light ? "text-paper" : "text-ink"}`} aria-label="Weftora home">
      <span className={light ? "text-paper/10" : "text-ink"}>
        <Mark className="h-9 w-9 transition-transform duration-700 ease-silk group-hover:rotate-[-8deg]" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[22px] font-semibold tracking-[-0.04em]">weftora</span>
        <span className="mt-0.5 block text-[8.5px] font-bold uppercase tracking-[0.32em] opacity-60">Global Sourcing</span>
      </span>
    </Link>
  );
}
