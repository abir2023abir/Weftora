"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Photo from "./Photo";
import { brand, explore, nav, offices, products } from "@/lib/site";
import { useIntroDone } from "./Intro";

const ease = [0.76, 0, 0.24, 1] as const;
const darkHeroRoutes = ["/global-reach", "/life"];

export default function Header() {
  const pathname = usePathname();
  const ready = useIntroDone();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 300 && y > prev && !open);
  });

  // Pages whose hero is dark need a light header until the paper backdrop appears.
  const onDark = darkHeroRoutes.includes(pathname) && !solid && !open;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: ready && !hidden ? 0 : -100 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            solid && !open ? "bg-paper/80 shadow-[0_1px_0_var(--line)] backdrop-blur-xl" : ""
          }`}
        >
          <div className="container-x flex h-[76px] items-center justify-between gap-6">
            <div className={open ? "invisible" : ""}>
              <Logo light={onDark} />
            </div>
            <nav className="hidden items-center gap-7 xl:flex">
              {nav.slice(1).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`link-u text-[13px] font-semibold transition-colors duration-500 ${
                    pathname === n.href ? (onDark ? "text-clay-2" : "text-clay") : onDark ? "text-paper/80 hover:text-paper" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 hover:bg-clay hover:text-paper md:inline-block ${
                  onDark ? "bg-paper text-ink" : "bg-ink text-paper"
                } ${open ? "invisible" : ""}`}
              >
                Contact us
              </Link>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={`relative grid h-12 w-12 place-items-center rounded-full transition-colors ${
                  open ? "bg-paper text-ink" : onDark ? "bg-paper/15 text-paper hover:bg-paper/25" : "bg-sand/70 text-ink hover:bg-sand"
                }`}
              >
                <span className="relative block h-3 w-5">
                  <span className={`absolute left-0 h-[2px] w-5 bg-current transition-all duration-500 ${open ? "top-[5px] rotate-45" : "top-0"}`} />
                  <span className={`absolute left-0 h-[2px] bg-current transition-all duration-500 ${open ? "top-[5px] w-5 -rotate-45" : "top-[10px] w-3"}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-ink text-paper"
            initial={{ clipPath: "circle(0% at calc(100% - 64px) 38px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 64px) 38px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 64px) 38px)" }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="container-x grid min-h-full gap-12 pb-12 pt-28 lg:grid-cols-[1.4fr_1fr] lg:pt-32">
              <div>
                <p className="eyebrow mb-6 text-paper/50">Menu</p>
                <ul>
                  {nav.map((n, i) => (
                    <li key={n.href} className="overflow-hidden">
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.8, delay: 0.25 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={n.href}
                          className="group flex items-baseline gap-5 py-1 font-display text-[11vw] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[64px]"
                        >
                          <span className="w-8 text-xs font-bold tracking-widest text-paper/40">0{i + 1}</span>
                          <span className={`transition-all duration-500 group-hover:translate-x-4 group-hover:text-clay-2 ${pathname === n.href ? "text-clay-2" : ""}`}>
                            {n.label}
                          </span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col gap-10 lg:pt-14"
              >
                <div className="hidden grid-cols-2 gap-4 lg:grid">
                  {[products[1], products[7]].map((p, i) => (
                    <motion.div
                      key={p.code}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: i ? 24 : 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink-2"
                    >
                      <Photo id={p.photo} alt={p.name} w={500} />
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <p className="eyebrow mb-4 text-paper/40">Explore</p>
                    <ul className="space-y-2">
                      {explore.map((e) => (
                        <li key={e.href}>
                          <Link href={e.href} className="link-u text-paper/80 hover:text-paper">
                            {e.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-4 text-paper/40">Say hello</p>
                    <p className="text-paper/80">{brand.email}</p>
                    <p className="text-paper/80">{brand.phone}</p>
                    <p className="mt-4 text-paper/50">{offices.map((o) => o.city).join(" · ")}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
