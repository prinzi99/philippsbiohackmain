import { Link } from "react-router-dom";
import { Calculator, Activity, HelpCircle, Wrench, ArrowRight, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const tiles = [
  {
    to: "/kompass/kalorienrechner",
    icon: Calculator,
    title: "Kalorien- & Makro-Rechner",
    subtitle: "Zahlen für deinen Alltag",
    desc: "Ein warmer Startpunkt für deine Alltagszahlen – ohne Dogma.",
    cta: "Zum Rechner",
    warm: false,
  },
  {
    to: "/kompass/stoffwechsel-check",
    icon: Activity,
    title: "Stoffwechsel-Selbstcheck",
    subtitle: "Messen & einordnen",
    desc: "Beobachte deine Signale und miss, wo du gerade stehst – strukturiert und ohne Überforderung.",
    cta: "Zum Selbstcheck",
    warm: false,
  },
  {
    to: "/kompass/faq",
    icon: HelpCircle,
    title: "Häufige Fragen",
    subtitle: "Antworten in Ruhe",
    desc: "Ehrliche Antworten auf typische Alltagsfragen.",
    cta: "Zu den FAQ",
    warm: true,
  },
  {
    to: "/kompass/biohacking-tools",
    icon: Wrench,
    title: "Empfohlene Tools",
    subtitle: "Apps & Helfer",
    desc: "Apps, Tracker & Helfer – sortiert nach Priorität.",
    cta: "Zu den Tools",
    warm: false,
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
        <section className="hero-warm-gradient px-5 md:px-8 pt-8 md:pt-14 pb-8 md:pb-12">
          <div className="container-narrow space-y-5 text-center">
            <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
              Kompass
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Dein Kompass für den Alltag
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Vier kleine Werkzeuge, die dir Orientierung geben – ohne Überforderung, ohne Druck.
              Wähle, womit du starten willst.
            </p>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto pt-2">
              Schön, dass du hier bist. Du hast den ersten Schritt gemacht – jetzt geht es darum,
              die Puzzleteile ruhig zusammenzusetzen. Du musst nicht alles auf einmal lösen. Nutze
              diese Seite als deinen Kompass für die nächsten Wochen – ohne Druck, in deinem Tempo.
            </p>
          </div>
        </section>

        {/* Tiles */}
        <section className="px-5 md:px-8 pt-8 md:pt-12 pb-8 md:pb-10">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {tiles.map(({ to, icon: Icon, title, subtitle, desc, cta, warm }) => (
                <Link
                  key={to}
                  to={to}
                  className="group block focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl"
                >
                  <Card
                    className={`h-full border-border/50 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-accent/40 group-active:scale-[0.98] ${
                      warm ? "bg-warm-cream" : ""
                    }`}
                  >
                    <CardContent className="p-5 md:p-6 flex flex-col h-full">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                        {title}
                      </h2>
                      <p className="text-xs uppercase tracking-wide text-accent/80 font-medium mt-1 mb-2">
                        {subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {desc}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-accent">
                        {cta}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Orientation helper */}
        <section className="px-5 md:px-8 pb-12 md:pb-16">
          <div className="container-narrow">
            <div className="rounded-2xl bg-warm-cream border border-border/40 shadow-sm p-6 md:p-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-foreground">
                  Nicht sicher, wo du anfangen sollst?
                </h2>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-foreground/85 leading-relaxed">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span>
                    <strong className="font-semibold">Wenn du konkrete Zahlen brauchst</strong>{" "}
                    (Kalorien, Makros) →{" "}
                    <Link to="/kompass/kalorienrechner" className="text-accent underline-offset-2 hover:underline">
                      starte mit dem Rechner
                    </Link>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span>
                    <strong className="font-semibold">Wenn du dich erschöpft fühlst oder stagnierst</strong>{" "}
                    →{" "}
                    <Link to="/kompass/stoffwechsel-check" className="text-accent underline-offset-2 hover:underline">
                      starte mit dem Selbstcheck
                    </Link>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span>
                    <strong className="font-semibold">Wenn du unsicher bist oder Fragen hast</strong>{" "}
                    →{" "}
                    <Link to="/kompass/faq" className="text-accent underline-offset-2 hover:underline">
                      lies zuerst die FAQ
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto mt-8">
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
