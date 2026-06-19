import { Link } from "react-router-dom";
import { Calculator, Activity, HelpCircle, Wrench, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const tiles = [
  {
    to: "/kompass/kalorienrechner",
    icon: Calculator,
    title: "Kalorien- & Makro-Rechner",
    desc: "Ein warmer Startpunkt für deine Alltagszahlen – ohne Dogma.",
    cta: "Zum Rechner",
  },
  {
    to: "/kompass/stoffwechsel-check",
    icon: Activity,
    title: "Stoffwechsel-Selbstcheck",
    desc: "Verstehe, ob dein Stoffwechsel gerade unter Stress steht.",
    cta: "Zum Selbstcheck",
  },
  {
    to: "/kompass/faq",
    icon: HelpCircle,
    title: "Häufige Fragen",
    desc: "Ehrliche Antworten auf typische Alltagsfragen.",
    cta: "Zu den FAQ",
  },
  {
    to: "/kompass/biohacking-tools",
    icon: Wrench,
    title: "Empfohlene Tools",
    desc: "Apps, Tracker & Helfer – sortiert nach Priorität.",
    cta: "Zu den Tools",
  },
];

const Kompass = () => {
  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Kompass | Philipp's Biohack</title>
      <meta name="description" content="Dein praktischer Kompass – Rechner, Selbstcheck, FAQ und empfohlene Tools." />
      <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="px-5 md:px-8 pt-8 md:pt-14 pb-6 md:pb-10">
          <div className="container-narrow space-y-4 text-center md:text-left">
            <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
              Kompass
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Dein Kompass für den Alltag
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Vier kleine Werkzeuge, die dir Orientierung geben – ohne Überforderung,
              ohne Druck. Wähle, womit du starten willst.
            </p>
          </div>
        </section>

        {/* Tiles */}
        <section className="px-5 md:px-8 pb-16 md:pb-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {tiles.map(({ to, icon: Icon, title, desc, cta }) => (
                <Link key={to} to={to} className="group block focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl">
                  <Card className="h-full border-border/50 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:border-accent/40 group-active:scale-[0.98]">
                    <CardContent className="p-5 md:p-6 flex flex-col h-full">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-foreground mb-1.5 leading-snug">
                        {title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {desc}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-accent">
                        {cta}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto mt-10">
              Die Inhalte dieser Seite dienen der strukturierten Selbstbeobachtung und ersetzen
              keine medizinische Beratung.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kompass;
