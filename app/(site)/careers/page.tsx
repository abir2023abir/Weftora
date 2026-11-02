import type { Metadata } from "next";
import PageHero, { SectionHead } from "@/components/PageHero";
import { Btn, Reveal } from "@/components/motion";
import { JobsBoard } from "@/components/widgets";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={"Build your future\nwith us."}
        italic={["with", "us."]}
        text="Join Weftora across Bangladesh, India, the UK, Hong Kong and China — where your ideas are valued and your growth is our priority."
        actions={
          <>
            <Btn href="#positions">View open positions</Btn>
            <Btn href="/life" variant="outline">Life at Weftora</Btn>
          </>
        }
        aside={
          <div className="grid grid-cols-2 gap-4">
            {[
              ["🎓", "Learning budget", "Annual training & certification support"],
              ["🌍", "Global mobility", "Work across six international offices"],
              ["🩺", "Health cover", "Medical insurance for you and family"],
              ["🏖️", "Time to recharge", "Generous leave and festival bonuses"],
            ].map(([i, t, d]) => (
              <div key={t} className="rounded-[24px] bg-paper p-5">
                <span className="text-2xl">{i}</span>
                <p className="mt-3 font-semibold">{t}</p>
                <p className="mt-1 text-xs text-ink/55">{d}</p>
              </div>
            ))}
          </div>
        }
      />
      <section id="positions" className="scroll-mt-24 py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Open positions" title="Current opportunities" italic={["opportunities"]} />
          <div className="mt-12">
            <JobsBoard />
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] bg-ink p-10 text-paper md:flex-row md:items-center md:p-14">
              <div>
                <h2 className="h-display text-4xl md:text-5xl">Don&apos;t see your role?</h2>
                <p className="mt-3 text-paper/60">Send your CV — we&apos;re always meeting talented people.</p>
              </div>
              <Btn href="/contact" variant="clay">Submit your CV</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
