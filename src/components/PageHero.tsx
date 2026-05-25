import { Reveal } from "./Reveal";
import { SiteHeader } from "./SiteHeader";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative mx-3 mt-3 overflow-hidden rounded-[32px] hero-vignette md:mx-6">
      <div className="absolute inset-0 perspective-lines" aria-hidden />
      <SiteHeader />
      <div className="relative z-10 flex flex-col items-center px-6 pb-20 pt-20 text-center md:px-12 md:pb-28 md:pt-24">
        <Reveal>
          <p className="mb-5 text-[11px] font-medium tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground md:text-base">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
