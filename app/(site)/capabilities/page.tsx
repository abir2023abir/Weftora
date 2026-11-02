import type { Metadata } from "next";
import Photo from "@/components/Photo";
import PageHero, { SectionHead } from "@/components/PageHero";
import { Btn, Reveal, Unveil } from "@/components/motion";
import { scenes } from "@/lib/site";

export const metadata: Metadata = { title: "Capabilities" };

const pillars = [
  {
    tag: "Right materials. Right partners. Every time.",
    title: "Sourcing & product development",
    text: "Our fabric team chases innovative fabrics and trims aligned with high-street trends. No minimum order quantities and multiple colourways without upcharge give brands the freedom to move fast.",
    list: ["No minimum order quantities", "Extra colourways at no cost", "Woven, outerwear, jersey & knitwear (3GG–12GG)", "Multi-sourcing across key hubs", "Ethical supplier qualification"],
    g: scenes.fabricRolls2,
  },
  {
    tag: "Where creativity meets technical precision.",
    title: "In-house design studio",
    text: "Design and graphics teams in Dhaka and Manchester work in real time with production. With Lectra pattern precision we bridge concept and bulk — with special expertise in denim, jersey and technical outerwear.",
    list: ["Lectra pattern system", "Trend boards & range plans", "Technical flats & spec packs", "Print & placement graphics", "Seasonal collections"],
    g: scenes.designer,
  },
  {
    tag: "In-house testing. Zero compromises.",
    title: "Technical lab & quality assurance",
    text: "Every order passes our in-house lab for physical, colour-fastness and dimensional tests, backed by inline, pre-final and final AQL inspections.",
    list: ["Colour-fastness & pilling tests", "Dimensional stability", "Inline & final AQL 2.5", "Third-party lab coordination", "Fit sessions on every style"],
    g: scenes.embroidery,
  },
  {
    tag: "Audited. Monitored. Improved.",
    title: "Compliance & sustainability",
    text: "Every partner factory is audited to BSCI, Accord, WRAP and ILO standards, with our own compliance team running annual follow-ups and corrective action plans.",
    list: ["Annual social audits", "Environmental monitoring", "Corrective action tracking", "Certificate management", "Supplier development"],
    g: scenes.workshop,
  },
  {
    tag: "From factory floor to your door.",
    title: "Logistics & delivery",
    text: "Production in duty-free countries with competitive pricing and short lead times. We consolidate and ship FOB, CIF or DDP — by sea or by air.",
    list: ["FOB, CIF & DDP terms", "Sea & air consolidation", "Duty-free origins", "Live shipment tracking", "Customs documentation"],
    g: scenes.stacks,
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our capabilities"
        title={"End-to-end\napparel solutions."}
        italic={["apparel", "solutions."]}
        text="From global sourcing and in-house design to lab testing, compliance and on-time delivery — streamlined, with zero compromise on quality."
        actions={
          <>
            <Btn href="/contact">Get a quote</Btn>
            <Btn href="/products" variant="outline">Explore products</Btn>
          </>
        }
        aside={
          <div className="grid grid-cols-2 gap-4">
            {[
              ["No MOQ", "Flexible volumes and free extra colourways."],
              ["In-house teams", "Design, technical and compliance under one roof."],
              ["Full compliance", "Every factory audited to global codes."],
              ["Global logistics", "Duty-free origins and short lead times."],
            ].map(([t, d], i) => (
              <div key={t} className={`rounded-[24px] p-6 ${i === 1 ? "bg-clay text-paper" : "bg-paper"}`}>
                <p className="h-display text-2xl">{t}</p>
                <p className="mt-2 text-sm opacity-65">{d}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="What we offer" title="Five pillars of excellence" italic={["excellence"]} />
          <div className="mt-16 space-y-24 md:space-y-32">
            {pillars.map((p, i) => (
              <div key={p.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <Unveil className="rounded-[32px]" color={i % 2 ? "bg-clay" : "bg-ink"}>
                    <div className="relative aspect-[5/4] bg-sand">
                      <Photo id={p.g} alt={p.title} w={900} />
                      <div className="absolute inset-0 bg-gradient-to-br from-ink/40 to-transparent" />
                      <span className="absolute left-8 top-6 font-display text-[120px] font-semibold leading-none tracking-[-0.06em] text-paper/70">0{i + 1}</span>
                    </div>
                  </Unveil>
                </div>
                <div>
                  <Reveal>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay">{p.tag}</p>
                    <h3 className="h-display mt-5 text-4xl md:text-5xl">{p.title}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-ink/65">{p.text}</p>
                  </Reveal>
                  <ul className="mt-8 divide-y divide-line border-y border-line">
                    {p.list.map((l, k) => (
                      <Reveal key={l} as="li" delay={k * 0.06} y={16}>
                        <span className="flex items-center gap-4 py-3.5 font-semibold">
                          <span className="text-xs text-clay">0{k + 1}</span>
                          {l}
                        </span>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
