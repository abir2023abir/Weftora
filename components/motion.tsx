"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useIntroDone } from "./Intro";

export const silk = [0.22, 1, 0.36, 1] as const;

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const M = motion[as];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ready = useIntroDone();
  return (
    <M
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView && ready ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1, delay, ease: silk }}
    >
      {children}
    </M>
  );
}

/** Headline whose words slide up out of a mask, line by line. */
export function SplitText({
  text,
  className,
  delay = 0,
  italic = [],
  stagger = 0.06,
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  italic?: string[];
  stagger?: number;
  immediate?: boolean;
}) {
  const lines = text.split("\n");
  let i = 0;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const ready = useIntroDone();
  const go = (immediate || inView) && ready;
  return (
    <span ref={ref} className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((w, wi) => {
            const idx = i++;
            const isIt = italic.includes(w.replace(/[.,]/g, ""));
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${isIt ? "it text-clay" : ""}`}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={go ? { y: "0%", rotate: 0 } : undefined}
                  transition={{ duration: 1.1, delay: delay + idx * stagger, ease: silk }}
                >
                  {w}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

/** Number that counts up once visible. */
export function Counter({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2.2, ease: silk, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {v}
      {suffix}
    </span>
  );
}

/** Element that leans toward the cursor. */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Pill button with a fill that sweeps in on hover. */
export function Btn({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "clay" | "outline";
  className?: string;
}) {
  const styles = {
    dark: "bg-ink text-paper",
    light: "bg-paper text-ink",
    clay: "bg-clay text-paper",
    outline: "border border-current text-current",
  }[variant];
  const sweep = variant === "clay" ? "bg-ink" : "bg-clay";
  return (
    <Magnetic strength={0.25}>
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] ${styles} ${className}`}
      >
        <span className={`absolute inset-0 translate-y-full rounded-full ${sweep} transition-transform duration-500 ease-silk group-hover:translate-y-0`} />
        <span className="relative">{children}</span>
        <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-current/15">
          <span className="block transition-transform duration-500 ease-silk group-hover:translate-x-6">→</span>
          <span className="absolute -translate-x-6 transition-transform duration-500 ease-silk group-hover:translate-x-0">→</span>
        </span>
      </Link>
    </Magnetic>
  );
}

/** Children drift vertically with scroll for depth. */
export function Parallax({ children, offset = 80, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Line that draws itself across when visible. */
export function DrawLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px origin-left bg-current/20 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: silk }}
    />
  );
}

/** Image/illustration panel that unveils with a sliding curtain. */
export function Unveil({ children, className = "", delay = 0, color = "bg-clay" }: { children: ReactNode; className?: string; delay?: number; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ready = useIntroDone();
  const go = inView && ready;
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.25 }}
        animate={go ? { scale: 1 } : undefined}
        transition={{ duration: 1.6, delay, ease: silk }}
      >
        {children}
      </motion.div>
      <motion.div
        className={`absolute inset-0 origin-top ${color}`}
        initial={{ scaleY: 1 }}
        animate={go ? { scaleY: 0 } : undefined}
        transition={{ duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}
