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
import cardWinter from "@/assets/card-winter.jpg";

export const Route = createFileRoute("/men")({
  component: MenPage,
  head: () => ({
    meta: [
      { title: "Men — Mavo Athletics" },
      { name: "description", content: "Mavo Men's collection. Hoodies, joggers, tees and outerwear cut for everyday city living." },
      { property: "og:title", content: "Men — Mavo Athletics" },
      { property: "og:description", content: "Premium streetwear for men." },
    ],
  }),
});

const MEN_PRODUCTS: Product[] = [
  { img: product1, name: "Mavo Core Hoodie Set", price: "USD 118.00", tag: "Winter" },
  { img: product2, name: "Mavo Pro Tech Tracksuit", price: "USD 142.00", tag: "Winter" },
  { img: product3, name: "Mavo Lite Run Kit", price: "USD 96.00", tag: "Summer" },
  { img: lookbook1, name: "Mavo Cargo Jogger", price: "USD 108.00", tag: "Fall" },
  { img: lookbook2, name: "Mavo Mauve Layer Set", price: "USD 134.00", tag: "All" },
  { img: cardWinter, name: "Mavo Tactical Hoodie", price: "USD 168.00", tag: "Winter" },
  { img: product1, name: "Mavo Heritage Fleece", price: "USD 128.00", tag: "Winter" },
  { img: product2, name: "Mavo Stride Trainer", price: "USD 156.00", tag: "All" },
];

function MenPage() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <PageHero
        eyebrow="MEN'S COLLECTION"
        title={<>BUILT FOR <span className="italic">EVERY</span> MOVE</>}
        description="Engineered fabrics, considered cuts. The Mavo men's range moves the way you do."
      />
      <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-14 md:mx-6 md:px-12 md:py-20">
        <Reveal>
          <p className="mb-8 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">SHOP MEN — {MEN_PRODUCTS.length} PIECES</p>
        </Reveal>
        <ProductGrid products={MEN_PRODUCTS} />
      </section>
      <SiteFooter />
    </main>
  );
}
