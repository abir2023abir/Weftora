import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Albums } from "@/components/widgets";
import { albums } from "@/lib/site";

export const metadata: Metadata = { title: "Life at Weftora" };

export default function LifePage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Our global family"
        title="Life at Weftora."
        italic={["Weftora."]}
        text="Moments, milestones and memories from our people, culture and events around the world."
        aside={
          <div className="flex items-end gap-3">
            <p className="h-display text-8xl text-clay-2">{albums.length}</p>
            <p className="pb-3 text-sm text-paper/60">albums in
              <br />
              our collection
            </p>
          </div>
        }
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Albums />
        </div>
      </section>
    </>
  );
}
