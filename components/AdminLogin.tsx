"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import Logo from "./Logo";
import { products } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const showcase = [products[1], products[24], products[7], products[20]];

export default function AdminLogin() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState<"idle" | "loading" | "demo">("idle");
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % showcase.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid min-h-screen bg-paper lg:grid-cols-[1.1fr_1fr]">
      {/* visual side */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="relative hidden overflow-hidden bg-ink text-paper lg:block"
      >
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-clay/30 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-moss/40 blur-[100px]" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo light />
          <div className="relative mx-auto h-[420px] w-[340px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={slide}
                initial={{ opacity: 0, y: 60, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                exit={{ opacity: 0, y: -60, rotate: -10 }}
                transition={{ duration: 0.9, ease }}
                className="absolute inset-0 overflow-hidden rounded-[32px] bg-ink-2 shadow-2xl"
              >
                <Photo id={showcase[slide].photo} alt={showcase[slide].name} w={700} priority />
                <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-bold text-ink">{showcase[slide].name}</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            <h2 className="h-display text-5xl">
              Manage every collection, <span className="it text-clay-2">in one place.</span>
            </h2>
            <div className="mt-6 flex gap-2">
              {showcase.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} aria-label={`Show slide ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-500 ${slide === i ? "w-10 bg-clay" : "w-4 bg-paper/25"}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* form side */}
      <div className="flex flex-col px-6 py-8 md:px-16">
        <div className="flex items-center justify-between">
          <div className="lg:invisible">
            <Logo />
          </div>
          <Link href="/" className="link-u text-sm font-semibold text-ink/60 hover:text-ink">
            ← Back to website
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
          className="mx-auto my-auto w-full max-w-md py-12"
        >
          <motion.p variants={item} className="eyebrow text-clay">
            Admin portal
          </motion.p>
          <motion.h1 variants={item} className="h-display mt-5 text-5xl md:text-6xl">
            Welcome <span className="it text-clay">back.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-ink/60">
            Sign in to manage products, insights, careers and enquiries.
          </motion.p>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setState("loading");
              setTimeout(() => setState("demo"), 1400);
            }}
          >
            <motion.label variants={item} className="block">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-ink/50">Email</span>
              <input type="email" required autoComplete="username" placeholder="admin@weftora.com" className="mt-2 w-full rounded-2xl border border-line bg-bone px-5 py-4 outline-none transition-all focus:border-clay focus:bg-paper focus:ring-4 focus:ring-clay/10" />
            </motion.label>
            <motion.label variants={item} className="block">
              <span className="flex justify-between text-xs font-bold uppercase tracking-[0.15em] text-ink/50">
                Password
                <a href="#" className="normal-case tracking-normal text-clay">Forgot password?</a>
              </span>
              <span className="relative mt-2 block">
                <input type={show ? "text" : "password"} required autoComplete="current-password" placeholder="••••••••" className="w-full rounded-2xl border border-line bg-bone px-5 py-4 pr-16 outline-none transition-all focus:border-clay focus:bg-paper focus:ring-4 focus:ring-clay/10" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-ink/50 hover:text-ink">
                  {show ? "HIDE" : "SHOW"}
                </button>
              </span>
            </motion.label>
            <motion.label variants={item} className="flex items-center gap-3 text-sm text-ink/70">
              <input type="checkbox" className="h-4 w-4 accent-[var(--clay)]" /> Keep me signed in
            </motion.label>
            <motion.button
              variants={item}
              whileTap={{ scale: 0.98 }}
              disabled={state === "loading"}
              className="group relative w-full overflow-hidden rounded-2xl bg-ink py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-paper"
            >
              <span className="absolute inset-0 translate-y-full bg-clay transition-transform duration-500 ease-silk group-hover:translate-y-0" />
              <span className="relative flex items-center justify-center gap-3">
                {state === "loading" ? (
                  <>
                    <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="h-4 w-4 rounded-full border-2 border-paper/30 border-t-paper" />
                    Signing in
                  </>
                ) : (
                  "Sign in →"
                )}
              </span>
            </motion.button>
          </form>

          <AnimatePresence>
            {state === "demo" && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 rounded-2xl bg-sand/60 p-4 text-center text-sm text-ink/70">
                Demo preview — the admin dashboard will be connected in the next phase.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.p variants={item} className="mt-10 text-center text-xs text-ink/40">
            Protected area · Authorised Weftora staff only
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
