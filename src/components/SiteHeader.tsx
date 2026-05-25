import { Link } from "@tanstack/react-router";
import { Lock, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const linkClass =
  "transition-opacity hover:opacity-60 [&.active]:opacity-100 [&.active]:underline underline-offset-4 decoration-1";

export function SiteHeader() {
  const { count, setOpen } = useCart();
  return (
    <header className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10">
      <nav className="hidden items-center gap-8 rounded-pill bg-surface px-7 py-3.5 text-[11px] font-medium tracking-[0.18em] text-foreground md:flex">
        <Link to="/shop" className={linkClass}>SHOP</Link>
        <Link to="/men" className={linkClass}>MEN</Link>
        <Link to="/women" className={linkClass}>WOMEN</Link>
        <Link to="/trending" className={linkClass}>TRENDING</Link>
      </nav>

      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <Link to="/" className="block rounded-b-[28px] bg-surface px-10 pb-3 pt-6">
          <span className="font-display text-2xl tracking-[0.04em]">MAVO</span>
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <nav className="hidden items-center gap-8 rounded-pill bg-surface px-7 py-3.5 text-[11px] font-medium tracking-[0.18em] md:flex">
          <Link to="/seasonal" className={linkClass}>SEASONAL</Link>
          <Link to="/accessories" className={linkClass}>ACCESSORIES</Link>
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label={`Open cart, ${count} items`}
          className="relative grid size-12 place-items-center rounded-full bg-surface text-foreground transition-transform hover:scale-[1.05]"
        >
          <ShoppingBag className="size-4" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-foreground text-[10px] font-bold text-background">
              {count}
            </span>
          )}
        </button>
        <button className="hidden rounded-pill bg-foreground px-6 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-background transition-transform hover:scale-[1.02] md:inline-flex">
          SIGN IN / UP
        </button>
        <button
          aria-label="Account"
          className="grid size-12 place-items-center rounded-full bg-foreground text-background transition-transform hover:scale-[1.05]"
        >
          <Lock className="size-4" />
        </button>
      </div>
    </header>
  );
}
