import type { Metadata } from "next";
import PageHero, { SectionHead } from "@/components/PageHero";
import { Btn, Reveal } from "@/components/motion";
import WorldMap from "@/components/WorldMap";
import { markets, offices } from "@/lib/site";

export const metadata: Metadata = { title: "Global Reach" };

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Global connectivity"
        title={"A global network\nyou can rely on."}
        italic={["rely", "on."]}
        text="Six offices across six countries, serving fashion brands in the UK, Europe, North America, the Middle East and beyond — all connected from our Hong Kong head office."
        actions={<Btn href="/contact" variant="clay">Find your nearest office</Btn>}
      />

      <section className="bg-ink pb-24 text-paper md:pb-32">
        <div className="container-x">
          <WorldMap />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our market reach" title="Serving brands across" italic={["across"]} text="From Hong Kong we connect brands in eight key markets with world-class sourcing solutions." />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {markets.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group flex items-center gap-4 rounded-[20px] border border-line p-5 transition-all duration-500 hover:-translate-y-1 hover:border-clay hover:bg-bone">
                  <span className="text-3xl transition-transform duration-500 group-hover:scale-125">{m.flag}</span>
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-xs text-ink/50">{m.region}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our offices" title={"Six locations.\nOne standard."} italic={["One", "standard."]} />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-[28px] bg-paper p-8">
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-ink transition-all duration-700 ease-silk group-hover:h-full" />
                  <div className="relative transition-colors duration-500 group-hover:text-paper">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl">{o.flag}</span>
                      <span className="rounded-full bg-clay/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-clay">{o.role}</span>
                    </div>
                    <h3 className="h-display mt-8 text-4xl">{o.city}</h3>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-50">{o.country}</p>
                    <p className="mt-5 text-sm leading-relaxed opacity-70">{o.address}</p>
                    <div className="mt-6 space-y-1 text-sm font-semibold">
                      <p>{o.phone}</p>
                      <p className="text-clay group-hover:text-clay-2">{o.email}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow justify-center text-clay">Wherever you are</p>
            <h2 className="h-display mx-auto mt-6 max-w-3xl text-5xl md:text-7xl">
              We&apos;re here to <span className="it text-clay">connect.</span>
            </h2>
            <div className="mt-10">
              <Btn href="/contact">Get in touch</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
