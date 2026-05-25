import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Flame } from "lucide-react";
import cardWinter from "@/assets/card-winter.jpg";
import cardSummer from "@/assets/card-summer.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

export const Route = createFileRoute("/trending")({
  component: TrendingPage,
  head: () => ({
    meta: [
      { title: "Trending — Mavo Athletics" },
      { name: "description", content: "What's moving at Mavo. The most-wanted drops, restocks and editor picks of the season." },
      { property: "og:title", content: "Trending — Mavo Athletics" },
      { property: "og:description", content: "The most-wanted Mavo drops right now." },
    ],
  }),
});

const TRENDS = [
  { rank: "01", img: lookbook1, title: "CARGO HIGH RIB JOGGER", note: "+312% this week" },
  { rank: "02", img: cardWinter, title: "TACTICAL TECH HOODIE", note: "+248% this week" },
  { rank: "03", img: lookbook2, title: "MAUVE LAYER SET", note: "+187% this week" },
  { rank: "04", img: cardSummer, title: "PRO ZIP TRACK JACKET", note: "+164% this week" },
  { rank: "05", img: product1, title: "CORE HOODIE SET", note: "+121% this week" },
  { rank: "06", img: product2, title: "STRIDE TRAINER", note: "+98% this week" },
];

function TrendingPage() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <PageHero
        eyebrow="TRENDING NOW"
        title={<>WHAT THE <span className="italic">CREW</span> IS WEARING</>}
        description="Real-time most-wanted drops, restocks, and editor picks — updated weekly."
      />

      <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-14 md:mx-6 md:px-12 md:py-20">
        <Reveal>
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-none">THIS WEEK'S TOP 06</h2>
            <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">
              <Flame className="size-4" /> LIVE RANKING
            </span>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {TRENDS.map((t, i) => (
            <Reveal key={t.rank} delay={i * 80}>
              <article className="group relative aspect-square overflow-hidden rounded-[24px] card-gradient-dark">
                <img src={t.img} alt={t.title} className="size-full object-cover opacity-90 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                <div className="absolute left-5 top-5 font-display text-5xl text-white/90">{t.rank}</div>
                <div className="absolute right-5 top-5 rounded-pill bg-white/95 px-3 py-1 text-[10px] font-semibold tracking-wider text-foreground">{t.note}</div>
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight text-white">{t.title}</h3>
                  <button aria-label="View" className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-foreground transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
