import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductGrid, type Product } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop — Mavo Athletics" },
      { name: "description", content: "Shop the full Mavo collection — performance tops, bottoms, outerwear and accessories engineered for every workout." },
      { property: "og:title", content: "Shop — Mavo Athletics" },
      { property: "og:description", content: "Performance athleisure for every season." },
    ],
  }),
});

const ALL: Product[] = [
  { img: product1, name: "Mavo Core Hoodie Set", price: "USD 118.00", tag: "Winter" },
  { img: product2, name: "Mavo Pro Tech Tracksuit", price: "USD 142.00", tag: "Winter" },
  { img: product3, name: "Mavo Lite Run Kit", price: "USD 96.00", tag: "Summer" },
  { img: lookbook1, name: "Mavo Cargo High Rib Jogger", price: "USD 108.00", tag: "Fall" },
  { img: lookbook2, name: "Mavo Thermal Layer Tee", price: "USD 64.00", tag: "Winter" },
  { img: product1, name: "Mavo Heritage Fleece", price: "USD 128.00", tag: "Winter" },
  { img: product2, name: "Mavo Stride Trainer Set", price: "USD 156.00", tag: "All" },
  { img: product3, name: "Mavo Field Shorts", price: "USD 58.00", tag: "Summer" },
];

const FILTERS = ["ALL", "WINTER", "SUMMER", "FALL", "TRAINING", "RUN", "RECOVERY"];

function ShopPage() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <PageHero
        eyebrow="ALL COLLECTIONS"
        title={<>SHOP THE <span className="italic">FULL</span> RANGE</>}
        description="Every piece engineered, tested and refined. Discover what you'll wear next."
      />

      <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-12 md:mx-6 md:px-12 md:py-16">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={`rounded-pill px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] transition-colors ${i === 0 ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-foreground hover:text-background"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <ProductGrid products={ALL} />
      </section>

      <SiteFooter />
    </main>
  );
}
