"use client";

import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import Photo from "./Photo";
import { useIntroDone } from "./Intro";
import { Btn, Counter, Parallax, Reveal, SplitText, Unveil, silk } from "./motion";
import { SectionHead } from "./PageHero";
import { capabilities, categories, insights, offices, products, scenes, stats } from "@/lib/site";
import { InsightCard } from "./cards";

const services = ["Ethical Sourcing", "Design & Development", "Precision Production", "Quality Assurance", "Global Logistics", "Sustainable Fashion", "On-time Delivery"];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Capabilities />
      <Tracking />
      <Strengths />
      <Collections />
      <Sampling />
      <Offices />
      <Sustain />
      <Latest />
    </>
  );
}

function Hero() {
  const ready = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = (d: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.1, delay: d, ease: silk },
  });
  const cards = [products[0], products[8], products[24]];

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-bone pt-32 md:pt-36">
      <div className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-clay/15 blur-3xl" />
      <div className="container-x relative grid gap-14 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div className="flex flex-col justify-center">
          <motion.p {...fade(0)} className="eyebrow text-clay">
            Apparel buying house · Est. 2017
          </motion.p>
          <h1 className="h-display mt-7 text-[17vw] sm:text-8xl lg:text-[120px] xl:text-[136px]">
            <SplitText text={"Woven with\nintent."} italic={["intent"]} delay={0.15} stagger={0.09} immediate />
          </h1>
          <motion.p {...fade(0.6)} className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
            From fibre to finished garment, Weftora connects fashion brands with certified factories across South Asia — with the design, quality and logistics muscle to deliver every collection on time.
          </motion.p>
          <motion.div {...fade(0.75)} className="mt-10 flex flex-wrap gap-3">
            <Btn href="/our-story">Discover our story</Btn>
            <Btn href="/capabilities" variant="outline">
              Our capabilities
            </Btn>
          </motion.div>
        </div>

        <div className="relative h-[520px] sm:h-[600px] lg:h-[640px]">
          <motion.div style={{ y: y2 }} className="absolute inset-x-6 bottom-0 top-10 rounded-[40px] bg-ink" initial={{ clipPath: "inset(100% 0 0 0 round 40px)" }} animate={ready ? { clipPath: "inset(0% 0 0 0 round 40px)" } : undefined} transition={{ duration: 1.4, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}>
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <motion.div className="absolute inset-0" initial={{ scale: 1.3 }} animate={ready ? { scale: 1 } : undefined} transition={{ duration: 2.4, delay: 0.2, ease: silk }}>
                <Photo id={scenes.rack} alt="Garment samples on a showroom rail" w={1000} priority />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
              <div className="absolute left-8 top-8 text-[11px] font-bold uppercase tracking-[0.3em] text-paper/80">AW 27 · Development</div>
            </div>
          </motion.div>
          {cards.map((p, i) => {
            const pos = ["left-0 top-16 w-[52%] -rotate-6", "right-0 top-0 w-[50%] rotate-[5deg]", "left-[24%] bottom-0 w-[54%] rotate-[-1deg]"][i];
            return (
              <motion.div
                key={p.code}
                style={{ y: i === 1 ? y1 : i === 0 ? y2 : 0 }}
                className={`absolute ${pos}`}
                initial={{ opacity: 0, y: 120, scale: 0.9 }}
                animate={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={{ duration: 1.3, delay: 0.55 + i * 0.15, ease: silk }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[24px] bg-paper p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-sand">
                    <Photo id={p.photo} alt={p.name} w={500} priority />
                  </div>
                  <div className="mt-2 flex items-center justify-between px-1.5 pb-0.5 text-[11px] font-bold">
                    <span>{p.name}</span>
                    <span className="text-ink/40">{p.code}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
          <motion.div style={{ rotate: rot }} className="absolute -left-2 bottom-24 hidden h-32 w-32 sm:block">
            <motion.svg viewBox="0 0 100 100" className="h-full w-full" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
              <defs>
                <path id="circ" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
              </defs>
              <circle cx="50" cy="50" r="49" fill="var(--clay)" />
              <text fill="var(--paper)" fontSize="9.4" fontWeight="700" letterSpacing="2.6">
                <textPath href="#circ">CERTIFIED · ETHICAL · ON TIME · </textPath>
              </text>
              <text x="50" y="57" textAnchor="middle" fill="var(--paper)" fontSize="20">✦</text>
            </motion.svg>
          </motion.div>
        </div>
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fade(0.9 + i * 0.08)} className={`py-8 ${i ? "md:border-l md:border-line md:pl-8" : ""}`}>
              <p className="h-display text-5xl md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-6 text-paper">
      <MarqueeRow speed={1.6} />
      <MarqueeRow speed={-1.2} outline className="mt-3" />
    </div>
  );
}

/**
 * Endless ticker driven per frame (not CSS) so it keeps moving even when the OS
 * asks for reduced motion; page scrolling speeds it up and flips its direction.
 */
function MarqueeRow({ speed, outline = false, className = "" }: { speed: number; outline?: boolean; className?: string }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    const b = boost.get();
    if (b < 0) dir.current = -1;
    else if (b > 0) dir.current = 1;
    const step = dir.current * speed * (delta / 1000);
    baseX.set(baseX.get() + step + step * Math.abs(b));
  });

  const row = [...services, ...services];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max" style={{ x }}>
        {row.map((s, i) => (
          <span
            key={i}
            className={`flex items-center gap-10 pr-10 font-display font-semibold tracking-[-0.03em] ${
              outline ? "text-2xl text-transparent [-webkit-text-stroke:1px_rgba(243,239,231,0.45)] md:text-4xl" : "text-3xl md:text-5xl"
            }`}
          >
            {s}
            <span className={outline ? "text-clay/60 [-webkit-text-stroke:0]" : "text-clay"}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

const capPhotos = [scenes.fabricRolls, scenes.designer, scenes.sewingLine, scenes.spools, scenes.rack2];

function Capabilities() {
  const [active, setActive] = useState(0);
  const c = capabilities[active];
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHead eyebrow="We turn ideas into impact" title={"One partner.\nEvery stage."} italic={["Every", "stage."]} />
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/65">
              From concept and fabric sourcing to sampling, production, quality control and global delivery — we manage every step with precision, so your collection lands exactly as imagined.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <ul className="divide-y divide-line border-y border-line">
            {capabilities.map((cap, i) => (
              <li key={cap.n}>
                <button onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} className="group flex w-full items-center gap-6 py-6 text-left">
                  <span className={`text-xs font-bold tracking-widest transition-colors ${active === i ? "text-clay" : "text-ink/35"}`}>{cap.n}</span>
                  <span className={`font-display text-3xl font-semibold tracking-[-0.03em] transition-all duration-500 md:text-4xl ${active === i ? "translate-x-2 text-ink" : "text-ink/35 group-hover:text-ink/70"}`}>
                    {cap.title}
                  </span>
                  <motion.span animate={{ rotate: active === i ? 0 : -45, opacity: active === i ? 1 : 0.3 }} className="ml-auto text-2xl">
                    →
                  </motion.span>
                </button>
              </li>
            ))}
          </ul>
          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] bg-ink">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0 flex items-end p-8 text-paper md:p-10"
                initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: silk }}>
                  <Photo id={capPhotos[active]} alt={c.title} w={900} />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                <span className="absolute right-8 top-6 font-display text-[110px] font-semibold leading-none tracking-[-0.06em] text-paper/25">{c.n}</span>
                <motion.div className="relative max-w-md" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.25, ease: silk }}>
                  <h3 className="h-display text-4xl md:text-5xl">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/80">{c.text}</p>
                  <Link href="/capabilities" className="link-u mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em]">
                    Learn more →
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const stages = ["Confirmed", "Cutting", "Stitching", "Finishing", "QC Check", "Packing", "Shipped"];

function Tracking() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-clay/20 blur-[120px]" />
      <div className="container-x relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHead light eyebrow="Live tracking" title={"Real-time view.\nTotal control."} italic={["Total", "control."]} text="Follow every order from sampling to shipment with live stage updates, production photos and clear delivery forecasts — all in one place." />
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              ["Complete visibility", "Live updates at every stage."],
              ["Total transparency", "No surprises, ever."],
              ["On-time delivery", "Forecasts you can plan on."],
              ["Data security", "Your designs stay yours."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="border-t border-paper/15 pt-4">
                  <p className="font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-paper/55">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal y={80}>
          <div className="rounded-[32px] bg-paper p-6 text-ink shadow-2xl md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">Order</p>
                <p className="h-display mt-1 text-3xl">#WF-30418</p>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-clay/10 px-3 py-1.5 text-xs font-bold text-clay">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
                </span>
                In production
              </span>
            </div>
            <div className="mt-6 grid grid-cols-[110px_1fr] gap-5 rounded-2xl bg-bone p-4">
              <div className="relative min-h-[140px] overflow-hidden rounded-xl bg-sand">
                <Photo id={products[8].photo} alt={products[8].name} w={300} />
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {[
                  ["Product", "Heavy Hoodie"],
                  ["Fabric", "Brushed Fleece"],
                  ["Colour", "Ember"],
                  ["Sizes", "S – XXL"],
                  ["Qty", "12,400 pcs"],
                  ["ETD", "Jan 14, 2027"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] font-bold uppercase tracking-widest text-ink/40">{k}</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ol className="mt-7 space-y-3">
              {stages.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${i < 4 ? "bg-ink text-paper" : i === 4 ? "bg-clay text-paper" : "bg-sand text-ink/40"}`}>
                    {i < 4 ? "✓" : i + 1}
                  </span>
                  <span className={i <= 4 ? "font-semibold" : "text-ink/40"}>{s}</span>
                  {i === 4 && <span className="ml-auto text-xs text-clay">In progress</span>}
                </motion.li>
              ))}
            </ol>
            <div className="mt-7">
              <div className="flex justify-between text-xs font-bold">
                <span>65% completed</span>
                <span className="text-ink/40">Updated 2 min ago</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-sand">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-clay to-clay-2" initial={{ width: 0 }} whileInView={{ width: "65%" }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5, ease: silk }} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Strengths() {
  const items = [
    { t: "Quality", d: "Lectra-precise patterns and an in-house lab that tests every order before it ships — consistent from first sample to final carton.", big: true },
    { t: "Innovation", d: "New fabrics, washes and finishes explored every season to build tomorrow’s essentials today." },
    { t: "Compliance", d: "BSCI, WRAP and ILO-aligned factories, audited by our own team every year." },
  ];
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <SectionHead eyebrow="Our strengths" title={"Quality. Innovation.\nCompliance."} italic={["Compliance."]} />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.5, ease: silk }} className={`group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[28px] p-8 ${i === 0 ? "bg-clay text-paper" : "bg-bone"}`}>
                <span className={`font-display text-8xl font-semibold leading-none tracking-[-0.06em] ${i === 0 ? "text-paper/20" : "text-ink/10"}`}>0{i + 1}</span>
                <div>
                  <h3 className="h-display text-4xl">{it.t}</h3>
                  <p className={`mt-4 leading-relaxed ${i === 0 ? "text-paper/80" : "text-ink/65"}`}>{it.d}</p>
                  <Link href="/our-story" className="link-u mt-6 inline-block text-xs font-bold uppercase tracking-[0.2em]">
                    Learn more →
                  </Link>
                </div>
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full transition-transform duration-700 group-hover:scale-150 ${i === 0 ? "bg-paper/10" : "bg-clay/10"}`} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collections() {
  const picks = categories.slice(0, 5).map((c) => products.find((p) => p.category === c)!);
  return (
    <section className="bg-bone py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="Our products" title={"Timeless styles.\nEndless possibilities."} italic={["Endless", "possibilities."]} />
          <Reveal>
            <Btn href="/products">Explore collection</Btn>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {picks.map((p, i) => (
            <Reveal key={p.category} delay={i * 0.08} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link href={`/products?category=${p.category}`} className="group block">
                <Unveil className="rounded-[28px]" delay={i * 0.08} color="bg-ink">
                  <div className={`relative overflow-hidden bg-sand ${i < 2 ? "aspect-[4/3.4]" : "aspect-[4/5]"}`}>
                    <Photo id={p.photo} alt={p.category} w={i < 2 ? 900 : 600} className="transition-transform duration-[1.2s] ease-silk group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <span className="absolute right-5 top-5 grid h-12 w-12 -rotate-45 place-items-center rounded-full bg-ink text-paper transition-transform duration-500 group-hover:rotate-0">→</span>
                  </div>
                </Unveil>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="h-display text-3xl">{p.category}</h3>
                  <span className="text-xs font-bold text-ink/40">{products.filter((x) => x.category === p.category).length} styles</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sampling() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHead eyebrow="Sample development" title={"From concept\nto confidence."} italic={["confidence."]} text="Our in-house sample room turns sketches into production-ready samples with precision, speed and craftsmanship." />
          <div className="mt-10 flex flex-wrap gap-2">
            {["Fit Samples", "Proto Samples", "PP Samples", "Size Sets", "TOP Samples", "Salesman Samples"].map((s, i) => (
              <Reveal key={s} delay={i * 0.05}>
                <span className="inline-block rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-clay hover:bg-clay hover:text-paper">{s}</span>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {["Concept & brief", "Develop & refine", "Approve & produce"].map((s, i) => (
              <Reveal key={s} delay={0.1 * i}>
                <div className="border-t-2 border-ink pt-4">
                  <p className="text-xs font-bold text-clay">0{i + 1}</p>
                  <p className="mt-2 font-semibold leading-snug">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Parallax offset={40} className="space-y-5">
            <div className="rounded-[28px] bg-ink p-7 text-paper">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/50">Turnaround</p>
              <p className="h-display mt-3 text-6xl">
                3–7<span className="it text-clay-2"> days</span>
              </p>
              <p className="mt-3 text-sm text-paper/60">Fast, reliable sampling keeps your calendar on track.</p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[28px] bg-sand">
              <Photo id={scenes.sewingMan} alt="Sample machinist at work" w={600} />
            </div>
          </Parallax>
          <Parallax offset={-40} className="space-y-5 pt-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-sand">
              <Photo id={scenes.threads} alt="Thread spools in the sample room" w={600} />
            </div>
            <div className="rounded-[28px] bg-clay p-7 text-paper">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/70">First approval</p>
              <p className="h-display mt-3 text-6xl">
                <Counter to={96} suffix="%+" />
              </p>
              <p className="mt-3 text-sm text-paper/75">Right first time, built on precise patterns.</p>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

function Offices() {
  return (
    <section className="overflow-hidden bg-bone py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="Office gallery" title={"Spaces that inspire.\nTeams that deliver."} italic={["deliver."]} />
          <Reveal>
            <Btn href="/global-reach" variant="outline">
              Explore our offices
            </Btn>
          </Reveal>
        </div>
      </div>
      <motion.div className="no-scrollbar mt-14 flex gap-5 overflow-x-auto px-5 md:px-10" initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: silk }}>
        {offices.map((o, i) => (
          <div key={o.city} className="group relative h-[420px] w-[300px] shrink-0 overflow-hidden rounded-[28px] bg-ink p-7 text-paper md:w-[360px]">
            <Photo id={o.photo} alt={`${o.city} office`} w={500} className="transition-transform duration-[1.5s] ease-silk group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <p className="relative inline-block rounded-full bg-paper/90 px-3 py-1 text-2xl">{o.flag}</p>
            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-paper/60">{o.role}</p>
              <p className="h-display mt-2 text-4xl">{o.city}</p>
              <p className="mt-2 text-sm text-paper/70">{o.country}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="container-x mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          [6, "", "Global offices", "HK · BD · IN · UK · CN · UAE"],
          [240, "+", "Team members", "Across all locations"],
          [5, "+", "Showrooms & labs", "Design. Sample. Test."],
          [1, "", "Purpose", "Excellence in every thread"],
        ].map(([n, s, t, d]) => (
          <Reveal key={t as string}>
            <p className="h-display text-6xl">
              <Counter to={n as number} suffix={s as string} />
            </p>
            <p className="mt-2 font-semibold">{t}</p>
            <p className="text-sm text-ink/55">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Sustain() {
  return (
    <section className="relative overflow-hidden bg-moss py-24 text-paper md:py-36">
      <Parallax offset={90} className="absolute -inset-y-24 inset-x-0">
        <Photo id={scenes.fabricSort} alt="Textile workers sorting fabric" w={1600} />
      </Parallax>
      <div className="absolute inset-0 bg-moss/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-moss via-moss/80 to-moss/40" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-end">
        <SectionHead light eyebrow="Sustainability" title={"For people.\nFor planet.\nFor tomorrow."} italic={["tomorrow."]} />
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-paper/75">
              Organic and recycled fibres, low-impact dyeing and audited factories are the standard, not the upgrade. Every season we measure, publish and improve.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              [100, "%", "Audited factories"],
              [31, "%", "Less water"],
              [70, "%+", "Better cotton"],
            ].map(([n, s, t]) => (
              <Reveal key={t as string}>
                <p className="h-display text-5xl">
                  <Counter to={n as number} suffix={s as string} />
                </p>
                <p className="mt-2 text-sm text-paper/60">{t}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Btn href="/sustainability" variant="light">
              Our commitment
            </Btn>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Latest() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="Insights" title={"Stay informed.\nStay inspired."} italic={["inspired."]} />
          <Reveal>
            <Btn href="/insights" variant="outline">
              All stories
            </Btn>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <InsightCard post={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
