import type { Metadata } from "next";
import Photo from "@/components/Photo";
import PageHero, { SectionHead } from "@/components/PageHero";
import { Btn, Counter, Reveal, Unveil } from "@/components/motion";
import { scenes } from "@/lib/site";

export const metadata: Metadata = { title: "Our Story" };

const values = [
  ["Integrity", "Honest communication and responsible practice in every deal we make."],
  ["Quality", "Lectra-precise patterns and in-house lab testing on every single order."],
  ["Innovation", "A multi-sourcing network exploring new fabrics, washes and techniques each season."],
  ["Partnership", "Long-term relationships built on trust, transparency and shared ambition."],
  ["Compliance", "Factories aligned with BSCI, WRAP, Accord and ILO codes — no compromise."],
];

const timeline = [
  ["2017", "Founded in Dhaka with three merchandisers and one UK client."],
  ["2019", "Hong Kong headquarters opens; in-house Lectra pattern room installed."],
  ["2021", "Design studio launches; first green-certified factory partners onboarded."],
  ["2023", "Gurugram office opens to serve kidswear and knitwear programmes."],
  ["2025", "Keqiao fabric desk and Dubai office extend our reach."],
  ["2026", "Manchester design studio opens; 42M+ garments shipped."],
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About Weftora Global Sourcing"
        title={"Trusted global\napparel partner."}
        italic={["apparel", "partner."]}
        text="A certified apparel sourcing partner helping brands reach their goals with high-quality product and seamless production."
        actions={
          <>
            <Btn href="/contact">Work with us</Btn>
            <Btn href="/capabilities" variant="outline">
              Our capabilities
            </Btn>
          </>
        }
        aside={
          <Unveil className="rounded-[32px]" color="bg-ink">
            <div className="relative aspect-[5/4] bg-sand">
              <Photo id={scenes.factory} alt="Production line at a partner factory" w={900} priority />
            </div>
          </Unveil>
        }
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead eyebrow="Our story" title={"A journey built on\ntrust & craft."} italic={["trust", "&", "craft."]} />
          <div className="space-y-6 text-lg leading-relaxed text-ink/70">
            <Reveal>
              <p>
                Weftora Global Sourcing is a multinational apparel buying house with a simple ambition: to make sourcing feel effortless for the brands we serve. Headquartered in Hong Kong with our corporate office in Dhaka, we combine market knowledge with experienced sourcing professionals — from fabric to fashion.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We partner with top-rated woven, jersey and knitwear factories across Bangladesh, India and China — each compliance-certified, several green-certified. Behind them sits our own team for fabric sourcing, garment technology, design and compliance.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="grid gap-3 pt-4 text-base sm:grid-cols-2">
                {["No minimum order quantities", "Multiple colourways, no upcharge", "In-house Lectra pattern room", "Design & graphics team in Dhaka", "Specialised denim expertise", "Dedicated merchandiser per brand"].map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-2xl bg-bone px-4 py-3 font-semibold text-ink">
                    <span className="text-clay">✦</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            ["Our mission", "Ethical standards. Exceptional delivery.", "We set ethical business standards by delivering exceptional service, quality and integrity — through eco-friendly technologies and skilled workforce development."],
            ["Our vision", "Excellence through innovation.", "To be the most reliable global apparel sourcing organisation, providing excellence and quality through innovation in every market we serve."],
          ].map(([e, t, d], i) => (
            <Reveal key={e} delay={i * 0.12}>
              <div className={`h-full rounded-[32px] p-10 ${i ? "bg-clay" : "bg-ink-2"}`}>
                <p className="eyebrow text-paper/60">{e}</p>
                <h3 className="h-display mt-6 text-4xl md:text-5xl">{t}</h3>
                <p className="mt-6 leading-relaxed text-paper/75">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our approach" title={"Guided by values.\nDriven by purpose."} italic={["purpose."]} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-5">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07} className="bg-paper">
                <div className="group h-full p-7 transition-colors duration-500 hover:bg-ink hover:text-paper">
                  <span className="text-xs font-bold text-clay">0{i + 1}</span>
                  <h3 className="h-display mt-10 text-3xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Milestones" title="Nine years, stitched together." italic={["stitched"]} />
          <ol className="relative mt-14 border-l border-ink/15 pl-8 md:pl-12">
            {timeline.map(([y, t], i) => (
              <Reveal key={y} as="li" delay={i * 0.05} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-bone bg-clay md:-left-[57px]" />
                <p className="h-display text-5xl text-clay md:text-6xl">{y}</p>
                <p className="mt-2 max-w-xl text-lg text-ink/70">{t}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHead eyebrow="What we do" title={"Streamlined solutions.\nZero compromise."} italic={["Zero", "compromise."]} text="End-to-end sourcing and production for global fashion brands — design development, fabric sourcing, sampling, costing, production planning, quality control and shipment, managed with care at every step." />
          <div className="grid grid-cols-2 gap-5">
            {[
              [42, "M+", "Garments shipped"],
              [180, "+", "Brand partners"],
              [60, "+", "Partner factories"],
              [98, "%", "On-time shipments"],
            ].map(([n, s, t], i) => (
              <Reveal key={t as string} delay={i * 0.08}>
                <div className={`rounded-[24px] p-7 ${i === 3 ? "bg-clay text-paper" : "bg-bone"}`}>
                  <p className="h-display text-5xl">
                    <Counter to={n as number} suffix={s as string} />
                  </p>
                  <p className="mt-2 text-sm font-semibold opacity-70">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
