import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import cardWinter from "@/assets/card-winter.jpg";
import cardSummer from "@/assets/card-summer.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";

export const Route = createFileRoute("/seasonal")({
  component: SeasonalPage,
  head: () => ({
    meta: [
      { title: "Seasonal — Mavo Athletics" },
      { name: "description", content: "Four seasons, one standard. Explore the Mavo seasonal capsules — Winter, Spring, Summer and Fall." },
      { property: "og:title", content: "Seasonal — Mavo Athletics" },
      { property: "og:description", content: "Capsule collections for every season." },
    ],
  }),
});

const SEASONS = [
  { id: "01", name: "WINTER", year: "2026", img: cardWinter, copy: "Thermal-locked layers and weatherproof shells engineered for the coldest training days." },
  { id: "02", name: "SPRING", year: "2026", img: lookbook2, copy: "Lightweight tech fabrics for transitional weather — built to breathe and built to move." },
  { id: "03", name: "SUMMER", year: "2026", img: cardSummer, copy: "Sweat-wicking, sun-ready cuts designed for heat-of-the-day intensity." },
  { id: "04", name: "FALL", year: "2026", img: lookbook1, copy: "Mid-weight layering essentials. Texture, warmth, and tonal palettes built for crisp mornings." },
];

function SeasonalPage() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <PageHero
        eyebrow="SEASONAL CAPSULES"
        title={<>FOUR SEASONS. <span className="italic">ONE</span> STANDARD.</>}
        description="Each capsule is a complete answer to the conditions you train in."
      />

      <section className="mx-3 mt-3 space-y-3 md:mx-6">
        {SEASONS.map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <article className="relative grid overflow-hidden rounded-[32px] bg-surface md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden card-gradient-dark md:aspect-auto">
                <img src={s.img} alt={s.name} className="size-full object-cover opacity-90 mix-blend-luminosity" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                <span className="absolute left-6 top-6 text-[11px] font-medium tracking-[0.22em] text-white/90">{s.id} / {s.name}</span>
                <span className="absolute left-6 bottom-6 font-display text-[clamp(3rem,8vw,6rem)] leading-none text-white">{s.name}</span>
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 md:p-14">
                <div>
                  <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">CAPSULE {s.id} — {s.year}</p>
                  <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">{s.name} <span className="italic">{s.year}</span></h3>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{s.copy}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="rounded-pill bg-foreground px-7 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-background transition-transform hover:scale-[1.03]">
                    SHOP CAPSULE
                  </button>
                  <button aria-label="View" className="grid size-12 place-items-center rounded-full bg-background text-foreground">
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
