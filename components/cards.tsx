"use client";

import { motion } from "motion/react";
import Photo from "./Photo";
import type { Product } from "@/lib/site";
import { insights } from "@/lib/site";

type Post = (typeof insights)[number];

export function InsightCard({ post }: { post: Post; index?: number }) {
  return (
    <motion.a href="#" whileHover="hover" className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-sand">
        <motion.div variants={{ hover: { scale: 1.08 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <Photo id={post.photo} alt={post.title} w={700} />
        </motion.div>
        <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">{post.tag}</span>
      </div>
      <p className="mt-5 text-xs font-semibold text-ink/45">
        {post.date} · {post.read} read
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] transition-colors group-hover:text-clay">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
    </motion.a>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-sand">
        <Photo id={p.photo} alt={p.name} w={600} className="transition-transform duration-[1.2s] ease-silk group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-bold tracking-[0.15em] backdrop-blur">{p.code}</span>
        <div className="absolute inset-x-3 bottom-3 translate-y-[130%] rounded-2xl bg-ink/90 p-4 text-paper backdrop-blur transition-transform duration-500 ease-silk group-hover:translate-y-0">
          <div className="flex justify-between gap-2 text-xs">
            <span className="text-paper/60">Fabric</span>
            <span className="text-right font-semibold">{p.fabric}</span>
          </div>
          <div className="mt-1 flex justify-between text-xs">
            <span className="text-paper/60">Weight</span>
            <span className="font-semibold">{p.gsm} GSM</span>
          </div>
          <a href="/contact" className="mt-3 block rounded-full bg-clay py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em]">
            Request sample
          </a>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">{p.name}</h3>
          <p className="text-sm text-ink/50">{p.category}</p>
        </div>
        <span className="mt-1 h-4 w-4 shrink-0 rounded-full ring-2 ring-paper ring-offset-1" style={{ background: p.tone }} />
      </div>
    </motion.div>
  );
}
