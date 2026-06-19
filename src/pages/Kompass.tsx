import {
  Activity,
  Calculator,
  Wrench,
  FileDown,
  Utensils,
  Plus,
  ArrowRight,
  BookOpen,
  Footprints,
  Lightbulb,
  Watch,
  Wind,
  Moon,
  Smartphone,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import buchCover from "@/assets/buch-cover.jpeg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const toolCards: { icon: React.ElementType; title: string; text: string; button: string; badge: string; link?: string }[] = [
  {
    icon: Activity,
    title: "Stoffwechsel-Reset Check",
    text: "Prüfe, ob dein Stoffwechsel aktuell eher unter Stress, Anpassung oder Stabilität läuft.",
    button: "Tool öffnen",
    badge: "Verfügbar",
    link: "/kompass/stoffwechsel-check",
  },
  {
    icon: Calculator,
    title: "Kalorien- & Makro-Rechner",
    text: "Berechne deinen Kalorienbedarf und eine mögliche Makroverteilung.",
    button: "Tool öffnen",
    badge: "Verfügbar",
    link: "/kompass/kalorienrechner",
  },
  {
    icon: Wrench,
    title: "Biohacking & Tools",
    text: "Apps, Tracker und Geräte, die beim Messen und Verstehen des eigenen Systems helfen.",
    button: "Bereich öffnen",
    badge: "Verfügbar",
    link: "/kompass/biohacking-tools",
  },
  {
    icon: FileDown,
    title: "Downloads & Checklisten",
    text: "Praktische Materialien und Ergänzungen zum Buch.",
    button: "Bereich öffnen",
    badge: "Verfügbar",
    link: "/kompass/downloads",
  },
  {
    icon: Utensils,
    title: "Beispielstruktur Ernährung",
    text: "Platzhalter für spätere Beispieltage oder einfache Ernährungsstrukturen.",
    button: "Bereich öffnen",
    badge: "Platzhalter",
  },
  {
    icon: Plus,
    title: "Weitere Inhalte",
    text: "Dieser Bereich kann zukünftig um weitere Tools ergänzt werden.",
    button: "Mehr ansehen",
    badge: "Coming Soon",
  },
];

const infoCards = [
  {
    icon: BookOpen,
    title: "Für Leser des Buches",
    text: "Dieser Bereich ergänzt das Buch und wird bei Bedarf erweitert.",
  },
  {
    icon: Footprints,
    title: "Schritt für Schritt",
    text: "Nutze die Inhalte als Unterstützung für kleine Anpassungen im Alltag.",
  },
  {
    icon: Lightbulb,
    title: "Biohack statt Überforderung",
    text: "Kleine Messpunkte und einfache Systeme helfen oft mehr als extreme Strategien.",
  },
];

const recommendedTools = [
  { icon: Smartphone, title: "Ernährungstracker", text: "Überblick über Kalorien und Makros im Alltag." },
  { icon: Watch, title: "Fitnessuhr / Fitnessring", text: "Aktivität, HRV und Schlaf im Blick behalten." },
  { icon: Wind, title: "CO₂-Messgerät", text: "Raumluftqualität messen für besseren Schlaf und Fokus." },
  { icon: Moon, title: "Schlaftracking", text: "Schlafphasen und Erholung besser verstehen." },
  { icon: Heart, title: "Weitere Biohacking-Tools", text: "Ergänzende Geräte und Methoden zur Selbstbeobachtung." },
];

const Kompass = () => {
  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Kompass | Philipp's Biohack</title>
        <meta
          name="description"
          content="Kompass – Tools, Rechner und Ressourcen."
        />
        <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="section-padding pb-8 md:pb-12">
          <div className="container-narrow">
            <div className="flex flex-col md:flex-row md:items-center md:gap-10">
              <div className="flex-1 text-center md:text-left space-y-5">
                <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
                  Kompass
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Willkommen im Kompass
                </h1>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Hier findest du zusätzliche Tools, Empfehlungen und Materialien, die dich bei der
                  praktischen Umsetzung unterstützen.
                </p>
              </div>

              <div className="hidden md:block shrink-0">
                <img
                  src={buchCover}
                  alt="Du bist nicht das Problem – Buchcover"
                  className="w-[120px] lg:w-[140px] h-auto rounded-lg shadow-sm opacity-90"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tool Grid */}
        <section className="px-5 md:px-8 pb-16 md:pb-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {toolCards.map((card) => (
                <Card
                  key={card.title}
                  className="border-border/50 shadow-sm hover:shadow-md transition-all group"
                >
                  <CardContent className="p-5 md:p-6 flex flex-col h-full space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <card.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <Badge
                        variant={card.badge === "Coming Soon" ? "outline" : "secondary"}
                        className="text-[10px] px-2 py-0.5"
                      >
                        {card.badge}
                      </Badge>
                    </div>

                    <div className="flex-grow space-y-2">
                      <h3 className="font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                    </div>

                    {card.link ? (
                      <Button
                        variant="cta"
                        size="sm"
                        className="w-full mt-auto"
                        asChild
                      >
                        <Link to={card.link}>
                          {card.button}
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="ctaSecondary"
                        size="sm"
                        className="w-full mt-auto"
                        disabled
                      >
                        {card.button}
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {infoCards.map((card) => (
                <Card
                  key={card.title}
                  className="border-border/40 bg-card/80 shadow-none"
                >
                  <CardContent className="p-5 md:p-6 space-y-3 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Tools */}
        <section className="section-padding">
          <div className="container-narrow space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
              Empfohlene Tools & Geräte
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedTools.map((tool) => (
                <Card
                  key={tool.title}
                  className="border-border/40 shadow-none hover:shadow-sm transition-shadow"
                >
                  <CardContent className="p-4 md:p-5 flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <tool.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground text-sm">{tool.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tool.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-5 md:px-8 pb-16 md:pb-20">
          <div className="container-narrow">
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto">
              Die Inhalte in diesem Bereich dienen der strukturierten Selbstbeobachtung und
              praktischen Unterstützung im Alltag und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kompass;
