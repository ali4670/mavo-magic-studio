import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

function Marquee() {
  const items = ["MAVO ATHLETICS", "GEAR UP", "MOVE FREE", "EVERY SEASON", "PEAK PERFORMANCE", "BUILT TO LAST"];
  return (
    <div className="mx-3 mt-3 overflow-hidden rounded-[32px] bg-foreground py-8 text-background md:mx-6">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-4xl tracking-[0.04em] md:text-6xl">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-background/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  const cols = [
    { h: "SHOP", l: [
      { name: "Men", to: "/men" },
      { name: "Women", to: "/women" },
      { name: "Accessories", to: "/accessories" },
      { name: "Seasonal", to: "/seasonal" },
    ]},
    { h: "EXPLORE", l: [
      { name: "Shop", to: "/shop" },
      { name: "Trending", to: "/trending" },
      { name: "Lookbook", to: "/shop" },
      { name: "Journal", to: "/trending" },
    ]},
    { h: "SUPPORT", l: [
      { name: "Help", to: "/" },
      { name: "Shipping", to: "/" },
      { name: "Returns", to: "/" },
      { name: "Contact", to: "/" },
    ]},
  ] as const;

  return (
    <>
      <Reveal>
        <Marquee />
      </Reveal>
      <Reveal as="footer" className="mx-3 my-3 rounded-[32px] bg-surface px-6 py-12 md:mx-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl tracking-[0.04em]">MAVO</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Premium athleisure engineered for peak performance — every season, every workout.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.22em]">{c.h}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.l.map((i) => (
                  <li key={i.name}>
                    <Link to={i.to} className="transition-colors hover:text-foreground">{i.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Mavo Athletics. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
          </span>
        </div>
      </Reveal>
    </>
  );
}
