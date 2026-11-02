"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Logo from "./Logo";
import { Btn } from "./motion";
import { brand, explore, legal, nav, offices } from "@/lib/site";

const socials = ["LinkedIn", "Instagram", "Facebook", "YouTube"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="container-x pt-24">
        <div className="grid gap-12 border-b border-paper/10 pb-20 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-clay-2">Start a project</p>
            <h2 className="h-display mt-6 text-5xl md:text-7xl">
              Have a collection <span className="it text-clay-2">in mind?</span>
            </h2>
            <div className="mt-10">
              <Btn href="/contact" variant="clay">
                Talk to a merchandiser
              </Btn>
            </div>
          </div>
          <form className="self-end" onSubmit={(e) => e.preventDefault()}>
            <p className="text-sm text-paper/60">Seasonal fabric stories & sourcing notes, once a month.</p>
            <div className="mt-4 flex items-center gap-3 border-b border-paper/20 pb-3 focus-within:border-clay-2">
              <input type="email" required placeholder="Your work email" className="w-full bg-transparent py-2 outline-none placeholder:text-paper/40" />
              <button className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-clay-2 hover:text-paper">Subscribe →</button>
            </div>
          </form>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo light />
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">
              {brand.full} is a multinational apparel buying house connecting fashion brands with certified factories across South Asia.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a key={s} href="#" className="rounded-full border border-paper/15 px-3 py-1.5 text-[11px] text-paper/70 transition-colors hover:border-clay-2 hover:text-clay-2">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Company" links={nav} />
          <FooterCol title="Explore" links={explore} />
          <div>
            <p className="eyebrow mb-5 text-paper/40">Offices</p>
            <ul className="space-y-4 text-sm">
              {offices.slice(0, 4).map((o) => (
                <li key={o.city}>
                  <p className="font-semibold">
                    {o.flag} {o.city}
                  </p>
                  <p className="text-paper/55">{o.phone}</p>
                  <p className="text-paper/55">{o.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative select-none overflow-hidden">
        <motion.p
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[23vw] font-semibold leading-[0.78] tracking-[-0.06em] text-paper/[0.06]"
        >
          weftora
        </motion.p>
      </div>

      <div className="container-x flex flex-col gap-4 border-t border-paper/10 py-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {brand.full}. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="link-u hover:text-paper">
              {l.label}
            </Link>
          ))}
          <Link href="/admin/login" className="link-u hover:text-paper">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-5 text-paper/40">{title}</p>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-u text-paper/75 hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
