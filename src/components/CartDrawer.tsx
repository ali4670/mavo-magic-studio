import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { items, open, setOpen, total, setQty, remove, clear } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle className="flex items-center gap-2 font-display text-2xl tracking-wide">
            <ShoppingBag className="size-5" /> YOUR BAG
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="grid size-16 place-items-center rounded-full bg-muted">
              <ShoppingBag className="size-7 text-muted-foreground" />
            </div>
            <p className="mt-4 font-medium">Your bag is empty</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Add a few pieces and they'll show up here.
            </p>
          </div>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
            {items.map((i) => (
              <div key={i.id} className="flex gap-4">
                <div className="size-20 overflow-hidden rounded-2xl bg-muted">
                  <img src={i.img} alt={i.name} className="size-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold leading-tight">{i.name}</p>
                    <button
                      aria-label="Remove"
                      onClick={() => remove(i.id)}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Size {i.size} · {i.color}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center rounded-pill border">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        className="grid size-7 place-items-center text-muted-foreground hover:text-foreground"
                        aria-label="Decrease"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-medium">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        className="grid size-7 place-items-center text-muted-foreground hover:text-foreground"
                        aria-label="Increase"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold">
                      USD {(i.price * i.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Subtotal</span>
              <span className="font-display text-2xl">USD {total.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-pill bg-foreground py-4 text-xs font-semibold tracking-[0.18em] text-background transition-transform hover:scale-[1.01]">
              CHECKOUT
            </button>
            <button
              onClick={clear}
              className="mt-3 w-full text-center text-[11px] tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              CLEAR BAG
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
