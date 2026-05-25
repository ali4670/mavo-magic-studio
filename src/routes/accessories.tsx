import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductGrid, type Product } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import videoThumb from "@/assets/video-thumb.jpg";
import heroModel from "@/assets/hero-model.png";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";

export const Route = createFileRoute("/accessories")({
  component: AccessoriesPage,
  head: () => ({
    meta: [
      { title: "Accessories — Mavo Athletics" },
      { name: "description", content: "Caps, slings, bottles and finishing pieces. The Mavo accessories that complete the kit." },
      { property: "og:title", content: "Accessories — Mavo Athletics" },
      { property: "og:description", content: "Finishing pieces, engineered to match." },
    ],
  }),
});

const ACC: Product[] = [
  { img: heroModel, name: "Mavo Tech Cap", price: "USD 38.00", tag: "Headwear" },
  { img: videoThumb, name: "Mavo Stride Runner", price: "USD 168.00", tag: "Footwear" },
  { img: lookbook1, name: "Mavo Sling Pack", price: "USD 74.00", tag: "Bags" },
  { img: product1, name: "Mavo Neck Wrap", price: "USD 28.00", tag: "Layer" },
  { img: product2, name: "Mavo Crew Sock 3-Pack", price: "USD 24.00", tag: "Basics" },
  { img: product3, name: "Mavo Hydration Bottle", price: "USD 32.00", tag: "Gear" },
  { img: heroModel, name: "Mavo Field Shades", price: "USD 86.00", tag: "Eyewear" },
  { img: lookbook1, name: "Mavo Beanie", price: "USD 26.00", tag: "Headwear" },
];

function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <PageHero
        eyebrow="ACCESSORIES"
        title={<>THE PIECES <span className="italic">THAT</span> FINISH IT</>}
        description="Caps, bags, eyewear and finishing pieces — same standard as the rest of the fit."
      />
      <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-14 md:mx-6 md:px-12 md:py-20">
        <Reveal>
          <p className="mb-8 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">SHOP ACCESSORIES — {ACC.length} PIECES</p>
        </Reveal>
        <ProductGrid products={ACC} />
      </section>
      <SiteFooter />
    </main>
  );
}
