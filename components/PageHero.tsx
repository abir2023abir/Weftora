"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { SplitText, silk } from "./motion";
import { useIntroDone } from "./Intro";

export default function PageHero({
  eyebrow,
  title,
  italic = [],
  text,
  actions,
  aside,
  crumb,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  italic?: string[];
  text?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  crumb?: string;
  dark?: boolean;
}) {
  const ready = useIntroDone();
  const fade = (d: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1, delay: d, ease: silk },
  });
  return (
    <section className={`relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 ${dark ? "bg-ink text-paper" : "bg-bone"}`}>
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl" />
      <div className="container-x relative grid items-end gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          {crumb && (
            <motion.p {...fade(0)} className="mb-6 text-xs text-current/50">
              <Link href="/" className="link-u">Home</Link> / <span>{crumb}</span>
            </motion.p>
          )}
          <motion.p {...fade(0.05)} className={`eyebrow ${dark ? "text-clay-2" : "text-clay"}`}>
            {eyebrow}
          </motion.p>
          <h1 className="h-display mt-6 text-[13vw] sm:text-7xl lg:text-[96px]">
            <SplitText text={title} italic={italic} delay={0.1} immediate />
          </h1>
          {text && (
            <motion.p {...fade(0.5)} className="mt-8 max-w-xl text-lg leading-relaxed text-current/70">
              {text}
            </motion.p>
          )}
          {actions && (
            <motion.div {...fade(0.65)} className="mt-10 flex flex-wrap gap-3">
              {actions}
            </motion.div>
          )}
        </div>
        {aside && <motion.div {...fade(0.4)}>{aside}</motion.div>}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  italic = [],
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  italic?: string[];
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${light ? "text-clay-2" : "text-clay"}`}>{eyebrow}</p>
      <h2 className="h-display mt-5 text-5xl md:text-6xl lg:text-7xl">
        <SplitText text={title} italic={italic} />
      </h2>
      {text && <p className={`mt-6 text-lg leading-relaxed ${light ? "text-paper/65" : "text-ink/65"}`}>{text}</p>}
    </div>
  );
}
