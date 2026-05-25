import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCart } from "@/lib/cart";
import { Heart, Check, ShoppingBag } from "lucide-react";
import type { Product } from "./ProductGrid";

interface Props {
  product: Product | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export function ProductQuickView({ product, open, onOpenChange }: Props) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  if (!product) return null;
  const sizes = product.sizes ?? ["XS", "S", "M", "L", "XL"];
  const colors = product.colors ?? [
    { name: "Onyx", hex: "#1a1a1a" },
    { name: "Bone", hex: "#e8e2d4" },
    { name: "Ember", hex: "#c2664a" },
  ];

  const activeSize = size ?? sizes[1] ?? sizes[0];
  const activeColor = color ?? colors[0].name;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setSize(null);
          setColor(null);
          setQty(1);
        }
      }}
    >
      <DialogContent className="w-[min(960px,95vw)] max-w-none overflow-hidden p-0 sm:rounded-[28px]">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <DialogDescription className="sr-only">{product.tag} piece, choose size and color.</DialogDescription>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted md:aspect-auto">
            <img
              src={product.img}
              alt={product.name}
              className="size-full animate-[fadeIn_400ms_ease-out] object-cover"
            />
            <span className="absolute left-4 top-4 rounded-pill bg-background/90 px-3 py-1 text-[10px] font-medium tracking-wider backdrop-blur">
              {product.tag}
            </span>
          </div>

          <div className="flex flex-col gap-6 p-8">
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-muted-foreground">MAVO STREETWEAR</p>
              <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05]">
                {product.name}
              </h2>
              <p className="mt-2 text-lg font-semibold">{product.priceText ?? product.price}</p>
            </div>

            <p className="text-sm text-muted-foreground">
              Premium-weight construction with a relaxed, modern silhouette. Designed for daily wear,
              built to outlast a season of constant rotation.
            </p>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.18em]">COLOR</span>
                <span className="text-xs text-muted-foreground">{activeColor}</span>
              </div>
              <div className="flex gap-3">
                {colors.map((c: { name: string; hex: string }) => {
                  const active = activeColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      aria-label={c.name}
                      onClick={() => setColor(c.name)}
                      className={`grid size-9 place-items-center rounded-full border-2 transition-all ${
                        active ? "border-foreground scale-110" : "border-transparent hover:scale-105"
                      }`}
                      style={{ background: c.hex }}
                    >
                      {active && <Check className="size-4" style={{ color: c.hex === "#1a1a1a" || c.hex === "#000" ? "#fff" : "#000" }} />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.18em]">SIZE</span>
                <button className="text-xs text-muted-foreground underline underline-offset-2">
                  Size guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s: string) => {
                  const active = activeSize === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`min-w-[44px] rounded-pill border px-4 py-2 text-xs font-semibold tracking-wider transition-colors ${
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-background hover:border-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-pill border">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="grid size-10 place-items-center text-muted-foreground hover:text-foreground"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="grid size-10 place-items-center text-muted-foreground hover:text-foreground"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  add(
                    {
                      name: product.name,
                      img: product.img,
                      priceText: product.priceText ?? product.price,
                      price: 0,
                      size: activeSize,
                      color: activeColor,
                    },
                    qty,
                  );
                  onOpenChange(false);
                  setSize(null);
                  setColor(null);
                  setQty(1);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-pill bg-foreground py-3 text-xs font-semibold tracking-[0.18em] text-background transition-transform hover:scale-[1.01]"
              >
                <ShoppingBag className="size-4" /> ADD TO BAG
              </button>
              <button
                aria-label="Wishlist"
                className="grid size-11 place-items-center rounded-full border transition-colors hover:bg-muted"
              >
                <Heart className="size-4" />
              </button>
            </div>

            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <li>· Free shipping over $120</li>
              <li>· 30-day returns</li>
              <li>· Premium cotton blend</li>
              <li>· Ships within 48h</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
