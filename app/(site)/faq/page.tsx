import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Btn, Reveal } from "@/components/motion";
import { FaqBrowser } from "@/components/widgets";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Help centre" title={"Frequently asked\nquestions."} italic={["questions."]} text="Everything you need to know about working with Weftora — from sourcing and quality to lead times and sustainability." />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <FaqBrowser />
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[32px] bg-bone p-10 text-center md:p-16">
              <h2 className="h-display text-4xl md:text-5xl">
                Still have <span className="it text-clay">questions?</span>
              </h2>
              <p className="mt-3 text-ink/60">Our team usually responds within one business day.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Btn href="/contact">Request a quote</Btn>
                <Btn href="/contact" variant="outline">Contact us</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
