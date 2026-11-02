import type { Metadata } from "next";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import { Btn, Reveal } from "@/components/motion";
import { products } from "@/lib/site";

export const metadata: Metadata = { title: "Social Feed" };

const posts = [
  { text: "Fresh off the sample table: our AW27 terracotta shirt dress in linen-cotton. 🧡", likes: 412, ago: "2h", p: 1 },
  { text: "Fleece season is here. 12,400 heather hoodies heading to cutting this week.", likes: 298, ago: "1d", p: 8 },
  { text: "Chunky knits from our Keqiao desk — which colourway gets your vote?", likes: 521, ago: "2d", p: 24 },
  { text: "Kidswear fit session in Gurugram — twirl-ready dresses, perfected. ✨", likes: 187, ago: "4d", p: 12 },
  { text: "Sharp tailoring in graphite. A new womenswear story for SS27.", likes: 344, ago: "6d", p: 3 },
  { text: "Behind the scenes: our in-house lab testing colour-fastness on 40 shirting shades.", likes: 239, ago: "1w", p: 6 },
];

export default function SocialPage() {
  return (
    <>
      <PageHero
        eyebrow="Social media"
        title="Weftora on social."
        italic={["social."]}
        text="Factory updates, sustainability milestones, new collections and industry insights from our global team."
        actions={<Btn href="#">Follow us</Btn>}
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-10 flex items-center justify-between text-sm text-ink/55">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-moss" /> Updated just now
            </span>
            <button className="link-u font-semibold text-ink">Refresh feed ↻</button>
          </div>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {posts.map((post, i) => {
              const pr = products[post.p];
              return (
                <Reveal key={i} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
                  <article className="overflow-hidden rounded-[24px] border border-line bg-paper">
                    <div className="flex items-center gap-3 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-semibold text-clay">w</span>
                      <div className="text-sm">
                        <p className="font-semibold">Weftora Global Sourcing</p>
                        <p className="text-xs text-ink/45">{post.ago} ago</p>
                      </div>
                    </div>
                    <div className={`relative overflow-hidden bg-sand ${i % 2 ? "aspect-square" : "aspect-[4/5]"}`}>
                      <Photo id={pr.photo} alt={pr.name} w={600} />
                    </div>
                    <div className="p-5">
                      <p className="leading-relaxed">{post.text}</p>
                      <div className="mt-4 flex gap-5 text-sm text-ink/55">
                        <span>♥ {post.likes}</span>
                        <span>💬 {Math.round(post.likes / 9)}</span>
                        <span>↗ Share</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
