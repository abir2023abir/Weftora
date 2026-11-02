"use client";

import Lenis from "lenis";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIntroDone } from "./Intro";

export function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function CookieBanner() {
  const ready = useIntroDone();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!ready) return;
    let seen = false;
    try {
      seen = !!localStorage.getItem("wf-cookie");
    } catch {}
    if (!seen) {
      const t = setTimeout(() => setShow(true), 1800);
      return () => clearTimeout(t);
    }
  }, [ready]);
  const close = (v: string) => {
    try {
      localStorage.setItem("wf-cookie", v);
    } catch {}
    setShow(false);
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto flex max-w-2xl flex-col gap-4 rounded-2xl bg-ink p-5 text-sm text-paper shadow-2xl sm:flex-row sm:items-center"
        >
          <p className="flex-1 text-paper/75">
            🍪 We use cookies to improve your experience. See our <a href="/cookie-policy" className="underline">Cookie Policy</a>.
          </p>
          <div className="flex gap-2">
            <button onClick={() => close("declined")} className="rounded-full border border-paper/20 px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-paper">
              Decline
            </button>
            <button onClick={() => close("accepted")} className="rounded-full bg-clay px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-clay-2">
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Thin progress bar showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-clay" />;
}
