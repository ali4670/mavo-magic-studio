import { createFileRoute } from "@tanstack/react-router";
import { Play, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ProductGrid } from "@/components/ProductGrid";
import heroModel from "@/assets/hero-model.png";
import cardWinter from "@/assets/card-winter.jpg";
import cardSummer from "@/assets/card-summer.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import videoThumb from "@/assets/video-thumb.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mavo — Gear Up Every Season, Every Workout" },
      { name: "description", content: "Mavo is premium athleisure built for peak performance. Discover seasonal drops, fresh fits, and gear engineered for every workout." },
      { property: "og:title", content: "Mavo — Performance Athleisure" },
      { property: "og:description", content: "Premium athleisure built for peak performance." },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative mx-3 mt-3 overflow-hidden rounded-[32px] hero-vignette md:mx-6">
      <div className="absolute inset-0 perspective-lines" aria-hidden />
      <SiteHeader />
      <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center md:px-12 md:pt-20">
        <Reveal>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95]">
            GEAR UP EVERY SEASON
            <br />
            EVERY <span className="italic">WORKOUT!</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex items-center gap-3">
            <button className="rounded-pill bg-foreground px-9 py-4 text-xs font-semibold tracking-[0.18em] text-background transition-transform hover:scale-[1.03]">
              SHOP NOW
            </button>
            <button className="rounded-pill bg-accent px-9 py-4 text-xs font-semibold tracking-[0.18em] text-accent-foreground transition-transform hover:scale-[1.03]">
              EXPLORE ALL
            </button>
          </div>
        </Reveal>
        <Reveal delay={250} y={40}>
          <div className="relative mt-4 flex w-full max-w-5xl justify-center">
            <img
              src={heroModel}
              alt="Mavo athletic wear hero model"
              width={1024}
              height={1280}
              className="relative z-10 h-[clamp(420px,60vh,720px)] w-auto object-contain"
            />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-8 z-20 hidden max-w-[260px] md:block">
        <Reveal delay={400}>
          <div className="mb-3 flex -space-x-3">
            {["bg-[oklch(0.65_0.08_30)]","bg-[oklch(0.45_0.04_40)]","bg-[oklch(0.72_0.05_60)]"].map((c, i) => (
              <div key={i} className={`size-11 rounded-full border-2 border-surface ${c}`} />
            ))}
          </div>
          <p className="text-[13px] leading-snug text-muted-foreground">
            Stay cozy without compromising your range of motion. Our seasonal range is built for chilly outdoor workouts.
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <Reveal delay={500}>
          <div className="relative h-32 w-52 overflow-hidden rounded-2xl">
            <img src={videoThumb} alt="Mavo product reel" className="size-full object-cover" />
            <button aria-label="Play video" className="absolute inset-0 grid place-items-center">
              <span className="grid size-12 place-items-center rounded-full bg-background/90 text-foreground">
                <Play className="size-5 fill-current" />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EditorialCard({ img, eyebrow, year, title }: { img: string; eyebrow: string; year: string; title: React.ReactNode }) {
  return (
    <article className="relative aspect-[4/5] overflow-hidden rounded-[28px] card-gradient-dark">
      <img src={img} alt="" className="absolute inset-0 size-full object-cover opacity-90 mix-blend-luminosity transition-transform duration-700 hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute right-6 top-6 text-right text-[11px] font-medium tracking-[0.18em] text-white/80">
        <div>{eyebrow}</div>
        <div className="text-white/50">{year}</div>
      </div>
      <h3 className="absolute left-6 top-1/2 -translate-y-1/2 font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[0.95] text-white">{title}</h3>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <button className="rounded-pill bg-white/95 px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-foreground">SHOP COLLECTION</button>
        <button aria-label="View more" className="grid size-11 place-items-center rounded-full bg-white/95 text-foreground">
          <ArrowUpRight className="size-4" />
        </button>
      </div>
    </article>
  );
}

function TopPicks() {
  return (
    <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-14 md:mx-6 md:px-12 md:py-20">
      <Reveal>
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">OUR TOP PICKS</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-3xl">
              TOP WORKOUT GEAR FOR <span className="italic">PEAK</span> PERFORMANCE!
            </h2>
          </div>
          <p className="hidden max-w-[260px] pt-2 text-sm text-muted-foreground md:block">
            Discover the best of our collection, designed to power your workouts all year round.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal delay={80}>
          <EditorialCard img={cardWinter} eyebrow="01 / WINTER" year="2026"
            title={<>TOP <br /> WORKOUT <br /> GEAR FOR <br /> PEAK <br /> PERFORMANCE!</>} />
        </Reveal>
        <Reveal delay={180}>
          <EditorialCard img={cardSummer} eyebrow="02 / SUMMER" year="2026"
            title={<>LATEST <br /> STYLES AND <br /> INNOVATIONS <br /> IN WORKOUT <br /> GEAR.</>} />
        </Reveal>
      </div>
    </section>
  );
}

function FreshFits() {
  const products = [
    { img: product1, name: "Mavo Core Hoodie Set", price: "USD 118.00", tag: "Winter" },
    { img: product2, name: "Mavo Pro Tech Tracksuit", price: "USD 142.00", tag: "Winter" },
    { img: product3, name: "Mavo Lite Run Kit", price: "USD 96.00", tag: "Summer" },
    { img: product1, name: "Mavo Heritage Fleece", price: "USD 128.00", tag: "Winter" },
  ];
  return (
    <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-14 md:mx-6 md:px-12 md:py-20">
      <Reveal>
        <div className="mb-10 grid items-end gap-4 md:grid-cols-3">
          <span className="text-[11px] font-medium tracking-[0.22em] text-muted-foreground">NEW ARRIVAL</span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-center">
            FRESH FITS FOR YOUR <br /> <span className="italic">NEXT</span> WORKOUT!
          </h2>
          <span className="text-[11px] font-medium tracking-[0.22em] text-muted-foreground md:text-right">ALL BRANDS</span>
        </div>
      </Reveal>
      <ProductGrid products={products} />
    </section>
  );
}

function Lookbook() {
  const looks = [
    { img: lookbook1, label: "CARGO HIGH RIB JOGGER", delivery: "12/08/2026", season: "FALL / WINTER", parts: "HOODIE\nSHOE", ghost: "FOR YO", ghostBottom: "EXT WORKOU" },
    { img: lookbook2, label: "T-SHIRT & INNER THERMAL", delivery: "12/08/2026", season: "FALL / WINTER", parts: "TROUSER\nSHOE", ghost: "UR NEX", ghostBottom: "YOUR NEXT W" },
  ];
  return (
    <section className="mx-3 mt-3 space-y-3 md:mx-6">
      {looks.map((l, i) => (
        <Reveal key={i} delay={i * 120}>
          <div className="relative overflow-hidden rounded-[32px] bg-surface px-6 py-16 md:px-12 md:py-24">
            <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 font-display text-[clamp(4rem,12vw,10rem)] leading-none text-foreground/8 md:left-12">{l.ghost}</span>
            <span className="pointer-events-none absolute bottom-6 right-6 font-display text-[clamp(4rem,12vw,10rem)] leading-none text-foreground/8 md:bottom-10 md:right-12">{l.ghostBottom}</span>
            <div className="relative mx-auto flex w-full max-w-md flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] card-gradient-dark">
                <img src={l.img} alt={l.label} className="size-full object-cover mix-blend-luminosity opacity-95" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                <div className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.18em] text-white/85">
                  {l.label.split(" & ").map((s, k) => (<div key={k}>{s}</div>))}
                </div>
                <div className="absolute right-5 top-5 text-right text-[10px] font-medium tracking-[0.18em] text-white/85">
                  <div>{l.delivery}</div>
                  <div className="text-white/60">DELIVERY</div>
                </div>
                <div className="absolute bottom-5 left-5 text-[10px] font-medium tracking-[0.18em] text-white whitespace-pre">{l.season.replace(" / ", " /\n")}</div>
                <div className="absolute bottom-5 right-5 text-right text-[10px] font-medium tracking-[0.18em] text-white whitespace-pre">• {l.parts}</div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <Hero />
      <TopPicks />
      <FreshFits />
      <Lookbook />
      <SiteFooter />
    </main>
  );
}
