import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface CartItem {
  id: string; // unique per (name+size+color)
  name: string;
  img: string;
  priceText: string;
  price: number;
  size: string;
  color: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  add: (item: Omit<CartItem, "id" | "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "mavo:cart:v1";

function parsePrice(text: string) {
  const m = text.match(/([\d.]+)/);
  return m ? parseFloat(m[1]) : 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const add: CartContextValue["add"] = (item, qty = 1) => {
    const id = `${item.name}__${item.size}__${item.color}`;
    setItems((cur) => {
      const existing = cur.find((i) => i.id === id);
      if (existing) {
        return cur.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...cur, { ...item, id, qty, price: item.price || parsePrice(item.priceText) }];
    });
    setOpen(true);
  };

  const remove = (id: string) => setItems((c) => c.filter((i) => i.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((c) =>
      c.flatMap((i) => (i.id === id ? (qty <= 0 ? [] : [{ ...i, qty }]) : [i])),
    );
  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * i.price, 0);

  return (
    <CartContext.Provider value={{ items, count, total, add, remove, setQty, clear, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
