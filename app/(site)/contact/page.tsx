import type { Metadata } from "next";
import { SectionHead } from "@/components/PageHero";
import { Reveal, SplitText } from "@/components/motion";
import { ContactForm } from "@/components/widgets";
import { offices } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone pb-24 pt-32 md:pt-40">
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-clay/15 blur-3xl" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow text-clay">Get in touch</p>
            <h1 className="h-display mt-6 text-[13vw] sm:text-7xl lg:text-[88px]">
              <SplitText text={"Let's build\nsomething\nexceptional."} italic={["exceptional."]} immediate delay={0.1} />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/65">Whether you have a brief, a question, or just want to explore possibilities — we&apos;d love to hear from you.</p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {offices.slice(0, 4).map((o, i) => (
                  <div key={o.city} className="rounded-[20px] bg-paper p-5">
                    <p className="text-xs font-bold text-clay">0{i + 1}</p>
                    <p className="mt-2 font-semibold">{o.role}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{o.address}</p>
                    <p className="mt-3 text-sm font-semibold">{o.phone}</p>
                    <p className="text-sm text-clay">{o.email}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} y={60}>
            <div className="lg:sticky lg:top-28">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our global offices" title="Strategically located. Globally connected." italic={["Globally", "connected."]} />
          <div className="mt-14 divide-y divide-line border-y border-line">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.04}>
                <div className="group grid gap-4 py-8 transition-colors md:grid-cols-[80px_1.2fr_2fr_1fr] md:items-center">
                  <span className="text-3xl">{o.flag}</span>
                  <div>
                    <p className="h-display text-3xl transition-colors group-hover:text-clay">{o.city}</p>
                    <p className="text-sm text-ink/50">{o.country}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/65">{o.address}</p>
                  <div className="text-sm md:text-right">
                    <p className="font-semibold">{o.phone}</p>
                    <p className="text-clay">{o.email}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
