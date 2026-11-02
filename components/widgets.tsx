"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import Photo from "./Photo";
import { InsightCard, ProductCard } from "./cards";
import { Reveal, silk } from "./motion";
import { albums, categories, fabrics, faqs, insights, jobs, products } from "@/lib/site";

/* ---------- shared pill tabs ---------- */
function Tabs({ items, value, onChange, id, dark = false }: { items: string[]; value: string; onChange: (v: string) => void; id: string; dark?: boolean }) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
      {items.map((it) => (
        <button
          key={it}
          onClick={() => onChange(it)}
          className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            value === it ? (dark ? "text-ink" : "text-paper") : dark ? "text-paper/70 hover:text-paper" : "text-ink/60 hover:text-ink"
          } ${dark ? "border border-paper/15" : "border border-line"}`}
        >
          {value === it && <motion.span layoutId={`pill-${id}`} className={`absolute inset-0 rounded-full ${dark ? "bg-paper" : "bg-ink"}`} transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
          <span className="relative">{it}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------- products ---------- */
export function ProductsBrowser() {
  const [cat, setCat] = useState<string>("All");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("category");
    if (q && (categories as readonly string[]).includes(q)) setCat(q);
  }, []);
  const select = (c: string) => {
    setCat(c);
    const url = c === "All" ? "/products" : `/products?category=${c}`;
    window.history.replaceState(null, "", url);
  };
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Tabs id="cat" items={["All", ...categories]} value={cat} onChange={select} />
        <p className="text-sm text-ink/50">
          <motion.span key={list.length} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="inline-block font-bold text-ink">
            {list.length}
          </motion.span>{" "}
          styles
        </p>
      </div>
      <motion.div layout className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProductCard key={p.code} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---------- insights ---------- */
export function InsightsBrowser() {
  const [tag, setTag] = useState("All");
  const list = tag === "All" ? insights : insights.filter((p) => p.tag === tag);
  return (
    <div>
      <Tabs id="ins" items={["All", "News", "Events", "Sustainability", "Press Releases"]} value={tag} onChange={setTag} />
      <motion.div layout className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.title} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6, ease: silk }}>
              <InsightCard post={p} index={insights.indexOf(p)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---------- FAQ ---------- */
export function FaqBrowser() {
  const [group, setGroup] = useState(faqs[0].group);
  const [open, setOpen] = useState<number | null>(0);
  const g = faqs.find((f) => f.group === group)!;
  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <LayoutGroup id="faq">
        <ul className="space-y-2 lg:sticky lg:top-28 lg:self-start">
          {faqs.map((f) => (
            <li key={f.group}>
              <button onClick={() => (setGroup(f.group), setOpen(0))} className={`relative flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-left font-semibold transition-colors ${group === f.group ? "text-paper" : "text-ink/70 hover:bg-bone"}`}>
                {group === f.group && <motion.span layoutId="faq-bg" className="absolute inset-0 rounded-2xl bg-ink" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                <span className="relative text-xl">{f.icon}</span>
                <span className="relative">{f.group}</span>
              </button>
            </li>
          ))}
        </ul>
      </LayoutGroup>
      <div>
        <AnimatePresence mode="wait">
          <motion.div key={group} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5, ease: silk }}>
            <h2 className="h-display mb-6 text-4xl">{group}</h2>
            <ul className="divide-y divide-line border-y border-line">
              {g.items.map((it, i) => (
                <li key={it.q}>
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold">
                    {it.q}
                    <motion.span animate={{ rotate: open === i ? 45 : 0 }} className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xl ${open === i ? "bg-clay text-paper" : "bg-bone"}`}>
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: silk }} className="overflow-hidden">
                        <p className="max-w-2xl pb-6 leading-relaxed text-ink/65">{it.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- fabric library ---------- */
function Swatch({ photo, alt, className = "" }: { photo: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <Photo id={photo} alt={alt} w={600} />
    </div>
  );
}

export function FabricLibrary() {
  const [type, setType] = useState("All");
  const [eco, setEco] = useState(false);
  const [sort, setSort] = useState("featured");
  const [sel, setSel] = useState(0);
  const list = useMemo(() => {
    let l = fabrics.filter((f) => (type === "All" || f.type === type) && (!eco || f.eco !== "BCI"));
    if (sort === "light") l = [...l].sort((a, b) => a.gsm - b.gsm);
    if (sort === "heavy") l = [...l].sort((a, b) => b.gsm - a.gsm);
    if (sort === "az") l = [...l].sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [type, eco, sort]);
  const f = fabrics[sel];

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow text-clay">Refine your search</p>
        <div>
          <p className="mb-3 text-sm font-bold">Category</p>
          <Tabs id="fab" items={["All", "Knit", "Woven"]} value={type} onChange={setType} />
        </div>
        <label className="flex cursor-pointer items-center justify-between rounded-2xl bg-bone p-4 text-sm font-semibold">
          Sustainable fibres only
          <button type="button" onClick={() => setEco(!eco)} className={`relative h-6 w-11 rounded-full transition-colors ${eco ? "bg-moss" : "bg-sand"}`} aria-pressed={eco}>
            <motion.span layout className={`absolute top-1 h-4 w-4 rounded-full bg-paper ${eco ? "right-1" : "left-1"}`} />
          </button>
        </label>
        <div>
          <p className="mb-3 text-sm font-bold">Sort</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm">
            <option value="featured">Featured</option>
            <option value="az">Name A–Z</option>
            <option value="light">Weight (light first)</option>
            <option value="heavy">Weight (heavy first)</option>
          </select>
        </div>
      </aside>

      <div>
        <AnimatePresence mode="wait">
          <motion.div key={sel} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: silk }} className="grid overflow-hidden rounded-[28px] bg-ink text-paper md:grid-cols-2">
            <Swatch photo={f.photo} alt={f.name} className="min-h-[260px]" />
            <div className="p-8">
              <div className="flex gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="rounded-full bg-clay px-3 py-1">Featured</span>
                <span className={`rounded-full px-3 py-1 ${f.stock ? "bg-moss" : "bg-paper/15"}`}>{f.stock ? "In stock" : "On request"}</span>
              </div>
              <h3 className="h-display mt-5 text-4xl">{f.name}</h3>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Composition", f.comp],
                  ["Weight", `${f.gsm} GSM`],
                  ["Finish", f.finish],
                  ["Stretch", f.stretch],
                  ["Sustainability", f.eco],
                  ["Category", f.type],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] font-bold uppercase tracking-widest text-paper/45">{k}</dt>
                    <dd className="mt-1 font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <a href="/contact" className="mt-8 inline-block rounded-full bg-paper px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-clay hover:text-paper">
                Request swatch →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-12 text-sm text-ink/50">
          <b className="text-ink">{list.length}</b> fabrics found
        </p>
        <motion.div layout className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((fb) => {
              const i = fabrics.indexOf(fb);
              return (
                <motion.button
                  key={fb.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: silk }}
                  onClick={() => setSel(i)}
                  className={`group overflow-hidden rounded-2xl border text-left transition-colors ${sel === i ? "border-clay" : "border-line hover:border-ink/40"}`}
                >
                  <Swatch photo={fb.photo} alt={fb.name} className="aspect-square transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-clay">{fb.type}</p>
                    <p className="mt-1 font-semibold leading-tight">{fb.name}</p>
                    <p className="mt-1 text-xs text-ink/50">{fb.gsm} GSM · {fb.eco}</p>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- careers ---------- */
export function JobsBoard() {
  const offices = ["All", ...Array.from(new Set(jobs.map((j) => j.office.split(",")[1].trim())))];
  const [o, setO] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = o === "All" ? jobs : jobs.filter((j) => j.office.includes(o));
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Tabs id="jobs" items={offices} value={o} onChange={setO} />
        <a href="/contact" className="text-sm font-bold text-clay link-u">Submit your CV →</a>
      </div>
      <ul className="mt-10 space-y-4">
        <AnimatePresence mode="popLayout">
          {list.map((j) => {
            const i = jobs.indexOf(j);
            return (
              <motion.li key={j.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: silk }} className="overflow-hidden rounded-[24px] border border-line bg-paper transition-colors hover:border-ink/30">
                <button onClick={() => setOpen(open === i ? null : i)} className="grid w-full gap-4 p-6 text-left md:grid-cols-[1fr_auto] md:items-center md:p-8">
                  <div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.18em]">
                      <span className="rounded-full bg-bone px-3 py-1">{j.type}</span>
                      <span className="rounded-full bg-bone px-3 py-1">{j.team}</span>
                    </div>
                    <h3 className="h-display mt-4 text-3xl">{j.title}</h3>
                    <p className="mt-2 text-sm text-ink/55">📍 {j.office} · Salary negotiable · Apply by {j.deadline}</p>
                  </div>
                  <span className={`justify-self-start rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors md:justify-self-end ${open === i ? "bg-clay text-paper" : "bg-ink text-paper"}`}>{open === i ? "Close" : "View & apply"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.5, ease: silk }} className="overflow-hidden">
                      <div className="border-t border-line p-6 md:p-8">
                        <p className="max-w-3xl leading-relaxed text-ink/70">{j.text}</p>
                        <a href="/contact" className="mt-6 inline-block rounded-full bg-clay px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-paper">Apply now →</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}

/* ---------- life ---------- */
export function Albums() {
  const tags = ["All Albums", ...Array.from(new Set(albums.map((a) => a.tag)))];
  const [t, setT] = useState("All Albums");
  const list = t === "All Albums" ? albums : albums.filter((a) => a.tag === t);
  return (
    <div>
      <Tabs id="alb" items={tags} value={t} onChange={setT} />
      <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((a, i) => (
            <motion.a href="#" key={a.title} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.6, ease: silk }} className={`group relative block overflow-hidden rounded-[28px] text-paper ${i % 4 === 0 ? "sm:row-span-2" : ""}`} style={{ background: a.tone }}>
              <div className={`relative ${i % 4 === 0 ? "h-full min-h-[440px]" : "aspect-[4/3]"}`}>
                <Photo id={a.photo} alt={a.title} w={700} className="transition-transform duration-[1.4s] ease-silk group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6">
                  <span className="rounded-full bg-paper/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur">{a.tag}</span>
                  <h3 className="h-display mt-3 text-3xl">{a.title}</h3>
                  <p className="mt-1 text-sm text-paper/70">
                    {a.date} · {a.office}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---------- contact form ---------- */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-paper p-7 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)] md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="grid min-h-[480px] place-items-center text-center">
            <div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-clay text-3xl text-paper">
                ✓
              </motion.div>
              <h3 className="h-display mt-6 text-4xl">Message received</h3>
              <p className="mt-3 text-ink/60">A merchandiser will reply within one business day.</p>
              <button onClick={() => setSent(false)} className="link-u mt-6 text-sm font-bold">Send another</button>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0, y: -20 }} onSubmit={(e) => (e.preventDefault(), setSent(true))}>
            <h2 className="h-display text-4xl">Send us a message</h2>
            <p className="mt-2 text-ink/60">Fill out the form and our team will get back to you shortly.</p>
            <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {[
                ["Full name", "text"],
                ["Email address", "email"],
                ["Company name", "text"],
                ["Phone number", "tel"],
              ].map(([l, t]) => (
                <label key={l} className="block text-xs font-bold uppercase tracking-[0.15em] text-ink/50">
                  {l}
                  <input type={t} required={t === "email"} className="field text-base font-normal normal-case tracking-normal text-ink" />
                </label>
              ))}
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-ink/50 sm:col-span-2">
                Subject
                <select className="field text-base font-normal normal-case tracking-normal text-ink">
                  <option>New product development</option>
                  <option>Request a quote</option>
                  <option>Fabric swatches</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-ink/50 sm:col-span-2">
                Message
                <textarea rows={4} className="field resize-none text-base font-normal normal-case tracking-normal text-ink" />
              </label>
            </div>
            <button className="group relative mt-8 w-full overflow-hidden rounded-full bg-ink py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-paper">
              <span className="absolute inset-0 translate-y-full bg-clay transition-transform duration-500 ease-silk group-hover:translate-y-0" />
              <span className="relative">Send message →</span>
            </button>
            <p className="mt-4 text-center text-xs text-ink/45">🔒 Your information is safe with us.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Reveal };
