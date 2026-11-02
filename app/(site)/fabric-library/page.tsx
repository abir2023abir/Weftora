import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Counter, Reveal } from "@/components/motion";
import { FabricLibrary } from "@/components/widgets";

export const metadata: Metadata = { title: "Fabric Library" };

export default function FabricPage() {
  return (
    <>
      <PageHero eyebrow="Explore. Compare. Create." title="Fabric library." italic={["library."]} text="A curated collection of premium fabrics — sourced for quality, engineered for performance, chosen for timeless apparel." />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <FabricLibrary />
        </div>
      </section>
      <section className="bg-bone py-20">
        <div className="container-x grid gap-5 md:grid-cols-4">
          {[
            ["📖", "Fabric guide", "Understand types, weights and finishes."],
            ["🧺", "Care & durability", "Tips that extend fabric life and performance."],
            ["🌿", "Sustainability", "Explore eco options and certifications."],
            ["🎯", "Need help sourcing?", "Our experts will find the right fabric for you."],
          ].map(([i, t, d], k) => (
            <Reveal key={t} delay={k * 0.08}>
              <a href={k === 3 ? "/contact" : "#"} className={`group block h-full rounded-[24px] p-7 transition-transform duration-500 hover:-translate-y-2 ${k === 3 ? "bg-ink text-paper" : "bg-paper"}`}>
                <span className="text-3xl">{i}</span>
                <p className="h-display mt-5 text-2xl">{t}</p>
                <p className="mt-2 text-sm opacity-60">{d}</p>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-clay">{k === 3 ? "Get in touch" : "View guide"} →</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <blockquote className="h-display mx-auto max-w-4xl text-center text-4xl md:text-6xl">
              “Great design begins with the right fabric. <span className="it text-clay">We source responsibly,</span> so you can create confidently.”
            </blockquote>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              [500, "+", "Curated fabrics"],
              [30, "+", "Partner mills"],
              [98, "%", "Quality compliance"],
              [2, "M+", "Metres delivered"],
            ].map(([n, s, t]) => (
              <Reveal key={t as string}>
                <p className="h-display text-6xl">
                  <Counter to={n as number} suffix={s as string} />
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
