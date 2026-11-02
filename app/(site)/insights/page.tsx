import type { Metadata } from "next";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { InsightsBrowser } from "@/components/widgets";
import { insights } from "@/lib/site";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  const f = insights[0];
  return (
    <>
      <PageHero crumb="Insights" eyebrow="Insights & industry updates" title={"Stay informed.\nStay inspired."} italic={["inspired."]} text="The latest updates, stories and milestones from Weftora and the world of apparel." />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <a href="#" className="group grid overflow-hidden rounded-[32px] bg-ink text-paper lg:grid-cols-2">
              <div className="relative min-h-[340px] overflow-hidden bg-sand">
                <Photo id={f.photo} alt={f.title} w={900} className="transition-transform duration-[1.2s] ease-silk group-hover:scale-105" />
                <span className="absolute left-6 top-6 rounded-full bg-paper px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Featured story</span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay-2">
                  {f.tag} · {f.date} · {f.read} read
                </p>
                <h2 className="h-display mt-5 text-4xl md:text-5xl">{f.title}</h2>
                <p className="mt-5 leading-relaxed text-paper/65">{f.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                  Read full story <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </a>
          </Reveal>
          <div className="mt-20">
            <InsightsBrowser />
          </div>
        </div>
      </section>

      <section className="bg-bone py-20">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-8 rounded-[32px] bg-paper p-8 md:grid-cols-[1fr_1fr] md:items-center md:p-14">
              <div>
                <p className="eyebrow text-clay">Stay informed</p>
                <h2 className="h-display mt-4 text-4xl md:text-5xl">Never miss an update.</h2>
                <p className="mt-3 text-ink/60">Insights on design, manufacturing and sustainability — straight to your inbox.</p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="you@brand.com" className="flex-1 rounded-full border border-line bg-bone px-6 py-4 outline-none focus:border-clay" />
                <button type="button" className="rounded-full bg-ink px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-clay">Subscribe</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
