import PageHero from "./PageHero";
import { Reveal } from "./motion";

export default function Legal({ title, updated, sections }: { title: string; updated: string; sections: [string, string][] }) {
  return (
    <>
      <PageHero crumb={title} eyebrow="Legal" title={title} text={`Last updated ${updated}`} />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[260px_1fr]">
          <nav className="hidden lg:block">
            <ul className="sticky top-28 space-y-3 text-sm">
              {sections.map(([h], i) => (
                <li key={h}>
                  <a href={`#s${i}`} className="link-u text-ink/60 hover:text-ink">
                    {i + 1}. {h}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-3xl space-y-12">
            {sections.map(([h, b], i) => (
              <Reveal key={h}>
                <article id={`s${i}`} className="scroll-mt-28">
                  <h2 className="h-display text-3xl">
                    <span className="mr-3 text-clay">{String(i + 1).padStart(2, "0")}</span>
                    {h}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">{b}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
