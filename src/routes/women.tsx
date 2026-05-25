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

export const Route = createFileRoute("/women")({
  component: WomenPage,
  head: () => ({
    meta: [
      { title: "Women — Mavo Athletics" },
      { name: "description", content: "Mavo Women's collection. Performance fits, layered essentials, and cold-weather gear designed without compromise." },
      { property: "og:title", content: "Women — Mavo Athletics" },
      { property: "og:description", content: "Performance athleisure for women." },
    ],
  }),
});

const WOMEN_PRODUCTS: Product[] = [
  { img: lookbook2, name: "Mavo Studio Set", price: "USD 124.00", tag: "All" },
  { img: product3, name: "Mavo Run Crop Kit", price: "USD 88.00", tag: "Summer" },
  { img: product1, name: "Mavo Soft Hoodie", price: "USD 98.00", tag: "Winter" },
  { img: lookbook1, name: "Mavo Heat Layer", price: "USD 76.00", tag: "Fall" },
  { img: product2, name: "Mavo Pro Legging", price: "USD 92.00", tag: "All" },
  { img: lookbook2, name: "Mavo Lounge Set", price: "USD 116.00", tag: "Recovery" },
  { img: product3, name: "Mavo Active Tee", price: "USD 48.00", tag: "Summer" },
  { img: product1, name: "Mavo Sherpa Pullover", price: "USD 142.00", tag: "Winter" },
];

function WomenPage() {
  return (
    <main className="min-h-screen bg-background pb-3">
      <PageHero
        eyebrow="WOMEN'S COLLECTION"
        title={<>FORM. <span className="italic">FUNCTION.</span> FREEDOM.</>}
        description="A women's range that meets you wherever your training takes you — studio, street, or trail."
      />
      <section className="mx-3 mt-3 rounded-[32px] bg-surface px-6 py-14 md:mx-6 md:px-12 md:py-20">
        <Reveal>
          <p className="mb-8 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">SHOP WOMEN — {WOMEN_PRODUCTS.length} PIECES</p>
        </Reveal>
        <ProductGrid products={WOMEN_PRODUCTS} />
      </section>
      <SiteFooter />
    </main>
  );
}
