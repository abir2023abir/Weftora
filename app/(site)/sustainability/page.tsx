import type { Metadata } from "next";
import PageHero, { SectionHead } from "@/components/PageHero";
import { Btn, Counter, Reveal } from "@/components/motion";

export const metadata: Metadata = { title: "Sustainability" };

const pillars = [
  ["🌱", "Sustainable materials", "Innovative fabrics and trims aligned with eco standards — from organic cotton to recycled polyester.", ["Organic & recycled fibres", "Better Cotton programme", "Low-impact dyes", "Certified materials"]],
  ["⚖️", "Ethical compliance", "Every partner factory is monitored against global codes. Fair wages and safe conditions are non-negotiable.", ["BSCI aligned factories", "Fire & building safety", "WRAP certification", "ILO code of conduct"]],
  ["🤝", "People & community", "We invest in the workers behind every garment through training, fair pay and inclusive workplaces.", ["Worker welfare", "Gender equality", "Community investment", "Skills training"]],
  ["💧", "Lower impact", "We actively minimise waste, water and energy use across our supply chain.", ["ETP-equipped dye-houses", "Water metering", "Solar-ready factories", "Cutting-waste recycling"]],
  ["♻️", "Circular thinking", "Designing for longevity and recyclability, and finding second lives for offcuts.", ["Mono-material design", "Deadstock reuse", "Take-back pilots", "Durability testing"]],
  ["📊", "Transparency", "Traceability from fibre to finished garment, reported openly to our partners.", ["Tier-2 mapping", "Annual impact report", "Certificate vault", "Third-party audits"]],
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={"For people.\nFor planet.\nFor tomorrow."}
        italic={["tomorrow."]}
        text="Ethical standards, eco-friendly technology and a skilled, responsible workforce — the foundation of everything we make."
        actions={
          <>
            <Btn href="/contact">Work with us</Btn>
            <Btn href="/capabilities" variant="outline">Our capabilities</Btn>
          </>
        }
        aside={
          <div className="relative mx-auto aspect-square max-w-md">
            <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_40s_linear_infinite]">
              {Array.from({ length: 12 }).map((_, i) => (
                <ellipse key={i} cx="100" cy="55" rx="16" ry="44" fill={i % 2 ? "#3d5a4a" : "#8da38c"} opacity="0.85" transform={`rotate(${i * 30} 100 100)`} />
              ))}
              <circle cx="100" cy="100" r="28" fill="#c4572f" />
            </svg>
          </div>
        }
      />

      <section className="bg-moss py-16 text-paper">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            [100, "%", "Ethically audited factories"],
            [31, "%", "Water saved since 2024"],
            [4, "", "Compliance frameworks"],
            [6, "+", "Green certifications"],
          ].map(([n, s, t]) => (
            <Reveal key={t as string}>
              <p className="h-display text-6xl">
                <Counter to={n as number} suffix={s as string} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/60">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Our commitment" title={"Ethics at the core\nof everything."} italic={["core"]} />
          <div className="space-y-6 text-lg leading-relaxed text-ink/70">
            <Reveal>
              <p>Weftora sets ethical business standards by delivering exceptional service, quality and integrity — through eco-friendly technology and the development of a skilled, responsible workforce.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>Every factory partner is monitored for ongoing compliance with international worker-rights frameworks including BSCI, the Accord on Fire & Building Safety, WRAP and ILO codes.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 pt-2">
                {["BSCI", "WRAP", "Accord", "ILO", "GOTS", "GRS", "OEKO-TEX®"].map((c) => (
                  <span key={c} className="rounded-full border border-moss px-4 py-2 text-sm font-bold text-moss">{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our approach" title="Six pillars of responsible fashion" italic={["responsible"]} />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(([icon, t, d, list], i) => (
              <Reveal key={t as string} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-[28px] bg-paper p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-moss/10 text-2xl transition-transform duration-500 group-hover:rotate-12">{icon}</span>
                  <h3 className="h-display mt-6 text-3xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{d}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm">
                    {(list as string[]).map((l) => (
                      <li key={l} className="flex items-center gap-2">
                        <span className="text-moss">✓</span> {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
