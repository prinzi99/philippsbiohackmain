import { Link } from "react-router-dom";
import { Calculator, Activity, HelpCircle, Wrench, ArrowRight, LucideIcon } from "lucide-react";

type TileKey = "rechner" | "selbstcheck" | "faq" | "tools";

const allTiles: Record<TileKey, { to: string; icon: LucideIcon; title: string }> = {
  rechner: { to: "/kompass/kalorienrechner", icon: Calculator, title: "Rechner" },
  selbstcheck: { to: "/kompass/stoffwechsel-check", icon: Activity, title: "Selbstcheck" },
  faq: { to: "/kompass/faq", icon: HelpCircle, title: "FAQ" },
  tools: { to: "/kompass/biohacking-tools", icon: Wrench, title: "Tools" },
};

interface Props {
  current: TileKey;
}

const KompassCrossNav = ({ current }: Props) => {
  const others = (Object.keys(allTiles) as TileKey[]).filter((k) => k !== current);

  return (
    <section className="px-5 md:px-8 pb-12 md:pb-16">
      <div className="container-narrow">
        <div className="rounded-2xl bg-warm-cream p-5 md:p-7 border border-border/40">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 text-center">
            Was möchtest du als Nächstes tun?
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {others.map((key) => {
              const { to, icon: Icon, title } = allTiles[key];
              return (
                <Link
                  key={key}
                  to={to}
                  className="group flex flex-col items-center gap-2 rounded-xl bg-card border border-border/50 p-3 md:p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground text-center leading-tight">
                    {title}
                  </span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KompassCrossNav;
