"use client";

import { AnimatePresence, animate, motion } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Mark } from "./Logo";

const IntroCtx = createContext(true);
export const useIntroDone = () => useContext(IntroCtx);

const curtain = [0.76, 0, 0.24, 1] as const;
const word = "weftora".split("");

export function IntroProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const c = animate(0, 100, {
      duration: 2.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        setShow(false);
        setTimeout(() => {
          setDone(true);
          document.documentElement.style.overflow = "";
        }, 350);
      },
    });
    return () => {
      c.stop();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <IntroCtx.Provider value={done}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div key="intro" className="fixed inset-0 z-[100] pointer-events-auto" exit={{ pointerEvents: "none" }}>
            {/* split curtains */}
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-ink"
              exit={{ y: "-100%" }}
              transition={{ duration: 1.1, ease: curtain }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-ink"
              exit={{ y: "100%" }}
              transition={{ duration: 1.1, ease: curtain }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-paper"
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-paper/10"
              >
                <Mark className="h-14 w-14" />
              </motion.div>

              <div className="mt-6 flex overflow-hidden font-display text-[16vw] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[9vw]">
                {word.map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className={i === 0 ? "text-clay" : ""}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>

              {/* the thread */}
              <svg viewBox="0 0 600 40" className="mt-4 w-[78vw] max-w-[620px]" aria-hidden>
                <path
                  d="M0 20 C 50 0, 100 40, 150 20 S 250 0, 300 20 S 400 40, 450 20 S 550 0, 600 20"
                  fill="none"
                  stroke="var(--clay)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1 1"
                  strokeDashoffset={1 - count / 100}
                />
              </svg>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-6 px-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] md:text-[11px] md:tracking-[0.4em]"
              >
                Apparel sourcing · woven with intent
              </motion.p>

              <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between text-[11px] font-bold uppercase tracking-[0.3em] text-paper/50 md:bottom-10 md:left-10 md:right-10">
                <span>Hong Kong · Dhaka · Gurugram · Manchester</span>
                <span className="font-display text-6xl tracking-[-0.04em] text-paper md:text-8xl">
                  {String(count).padStart(3, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </IntroCtx.Provider>
  );
}
