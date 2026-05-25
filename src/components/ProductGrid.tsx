import { Heart, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

export interface Product {
  img: string;
  name: string;
  price: string;
  tag: string;
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {products.map((p, i) => (
        <Reveal key={i} delay={i * 80}>
          <article className="group relative aspect-[3/4] overflow-hidden rounded-[24px] bg-muted">
            <img
              src={p.img}
              alt={p.name}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <span className="rounded-pill bg-background/85 px-3 py-1 text-[10px] font-medium tracking-wider">
                {p.tag}
              </span>
              <button
                aria-label="Add to wishlist"
                className="grid size-7 place-items-center rounded-full bg-background/85"
              >
                <Heart className="size-3.5" />
              </button>
            </div>
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-pill bg-background/90 py-2 pl-4 pr-2 backdrop-blur">
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.price}</p>
              </div>
              <button
                aria-label="View product"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5"
              >
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
