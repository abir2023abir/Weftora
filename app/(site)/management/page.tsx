import type { Metadata } from "next";
import PageHero, { SectionHead } from "@/components/PageHero";
import Photo from "@/components/Photo";
import { Reveal } from "@/components/motion";
import { team } from "@/lib/site";

export const metadata: Metadata = { title: "Management" };

export default function ManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="About our leadership"
        title={"Leadership &\nmanagement."}
        italic={["management."]}
        text="Guided by experience, driven by excellence — the people who steer Weftora across six offices."
        aside={
          <div className="grid grid-cols-2 gap-4">
            {[
              ["9+", "Years of experience in design & sourcing"],
              ["60+", "Factory partners across key hubs"],
              ["100%", "Ethically audited production"],
              ["180+", "Long-standing retail partners"],
            ].map(([n, t], i) => (
              <div key={t} className={`rounded-[24px] p-6 ${i === 0 ? "bg-ink text-paper" : "bg-paper"}`}>
                <p className="h-display text-4xl">{n}</p>
                <p className="mt-2 text-sm opacity-65">{t}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our leadership team" title="Board of directors" italic={["directors"]} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.1}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]" style={{ background: m.tone }}>
                    <Photo id={m.photo} alt={m.name} w={600} className="grayscale transition-all duration-[1.2s] ease-silk group-hover:scale-105 group-hover:grayscale-0" />
                    <span className="absolute right-5 top-5 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-bold tracking-[0.2em]">{m.initials}</span>
                    <div className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-between rounded-2xl bg-paper/90 p-4 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-sm font-semibold">Connect on LinkedIn</span>
                      <span>↗</span>
                    </div>
                  </div>
                  <h3 className="h-display mt-5 text-3xl">{m.name}</h3>
                  <p className="text-ink/55">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="container-x">
          <SectionHead light eyebrow="What guides us" title="Leadership principles" italic={["principles"]} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Integrity", "We operate with honesty, transparency and strong ethical standards in everything we do."],
              ["Innovation", "We embrace creativity and continuous improvement to deliver future-ready solutions."],
              ["Responsibility", "We are committed to people, planet and communities — creating value that lasts."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="h-full rounded-[28px] border border-paper/10 p-8 transition-colors duration-500 hover:border-clay-2">
                  <span className="font-display text-7xl font-semibold text-clay-2">0{i + 1}</span>
                  <h3 className="h-display mt-8 text-3xl">{t}</h3>
                  <p className="mt-3 leading-relaxed text-paper/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
