import { Heart, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Tilt3D } from "./Tilt3D";

export interface Product {
  img: string;
  name: string;
  price: string;
  tag: string;
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4" style={{ perspective: "1400px" }}>
      {products.map((p, i) => (
        <Reveal key={i} delay={i * 90} variant="tilt" y={40}>
          <Tilt3D max={16} lift={18} glare={0.4} scale={1.05} className="rounded-[24px]">
            <article className="group relative aspect-[3/4] overflow-hidden rounded-[24px] bg-muted shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]">
              <div
                data-tilt-layer="14"
                className="absolute inset-0 transition-transform duration-300"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                data-tilt-layer="34"
                className="absolute right-3 top-3 flex items-center gap-2 transition-transform duration-300"
              >
                <span className="rounded-pill bg-background/85 px-3 py-1 text-[10px] font-medium tracking-wider backdrop-blur">
                  {p.tag}
                </span>
                <button
                  aria-label="Add to wishlist"
                  className="grid size-7 place-items-center rounded-full bg-background/85 backdrop-blur transition-transform hover:scale-110"
                >
                  <Heart className="size-3.5" />
                </button>
              </div>
              <div
                data-tilt-layer="42"
                className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-pill bg-background/90 py-2 pl-4 pr-2 backdrop-blur transition-transform duration-300"
              >
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
          </Tilt3D>
        </Reveal>
      ))}
    </div>
  );
}
