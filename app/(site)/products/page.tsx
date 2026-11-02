import type { Metadata } from "next";
import Photo from "@/components/Photo";
import PageHero, { SectionHead } from "@/components/PageHero";
import { Btn, Reveal } from "@/components/motion";
import { ProductsBrowser } from "@/components/widgets";
import { products } from "@/lib/site";

export const metadata: Metadata = { title: "Products" };

const features = [
  ["Quality materials", "Premium fabrics from globally certified mills.", "🧶"],
  ["Trend-led design", "Forward-looking aesthetics for every season.", "✏️"],
  ["Responsible production", "Low-impact processes that minimise waste.", "🌿"],
  ["Custom solutions", "Private-label development built around your brand.", "🪡"],
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={"Timeless styles.\nLimitless ideas."}
        italic={["Limitless", "ideas."]}
        text="From everyday essentials to statement pieces — considered craftsmanship meets fresh design across six core categories."
        actions={<Btn href="#categories">Explore our collection</Btn>}
        aside={
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
            {[products[0], products[7], products[13], products[24]].map((p, i) => (
              <div key={p.code} className={`relative aspect-[4/5] overflow-hidden rounded-[24px] bg-sand ${i % 2 ? "translate-y-10" : ""}`}>
                <Photo id={p.photo} alt={p.name} w={500} priority />
              </div>
            ))}
          </div>
        }
      />

      <section id="categories" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-x">
          <SectionHead eyebrow="Browse by category" title="Explore our collections" italic={["collections"]} />
          <div className="mt-12">
            <ProductsBrowser />
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([t, d, icon], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full rounded-[24px] bg-paper p-7 transition-transform duration-500 hover:-translate-y-2">
                <span className="text-3xl">{icon}</span>
                <h3 className="h-display mt-6 text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] bg-clay px-8 py-16 text-paper md:px-16">
              <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-paper/10" />
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="h-display text-5xl md:text-6xl">
                    Looking for something <span className="it">specific?</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-paper/80">Our developers build custom apparel lines around your brand&apos;s vision — from one reference image to a full range.</p>
                </div>
                <Btn href="/contact" variant="light">
                  Contact our team
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
