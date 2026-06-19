import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KompassCrossNav from "@/components/kompass/KompassCrossNav";
import BiohackingHero from "@/components/biohacking/BiohackingHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";

const tiers = [
  {
    badge: "Kostenlos starten",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300/50",
    groups: [
      {
        title: "Ernährungstracker",
        hint: "Du brauchst nur eine App. Such dir aus, was dir gefällt.",
        items: [
          { name: "MyFitnessPal", desc: "Am bekanntesten, riesige Datenbank." },
          { name: "Yazio", desc: "Deutsch, übersichtlich." },
          { name: "Cronometer", desc: "Sehr detailliert, für Fortgeschrittene." },
        ],
      },
      {
        title: "Schritte & Bewegung",
        hint: "Die Handy-App reicht völlig (Apple Health, Google Fit).",
        items: [],
      },
    ],
  },
  {
    badge: "Sinnvoll, wenn du genauer messen willst",
    color: "bg-amber-100 text-amber-700 border-amber-300/50",
    groups: [
      {
        title: "Fitnessuhren & Ringe",
        hint: "Kein Muss. Hilfreich, wenn du Schlaf, Schritte und Erholung besser verstehen willst.",
        items: [
          { name: "Garmin", desc: "Gut für Training." },
          { name: "Apple Watch", desc: "Gut für Alltag & Schlaf." },
          { name: "Oura Ring", desc: "Fokussiert auf Regeneration." },
          { name: "Polar", desc: "Gut für Sport." },
        ],
      },
      {
        title: "Schlaftracking",
        hint: "Schlaf ist zentral. Ein Tracker zeigt dir, ob dein Körper wirklich erholt.",
        items: [
          { name: "Oura Ring", desc: "Schlaf & Erholung." },
          { name: "Whoop Band", desc: "Belastung & Recovery." },
          { name: "Apple Watch / Garmin", desc: "Reichen oft schon aus." },
        ],
      },
      {
        title: "Gewicht & Körperfett",
        hint: "Wenn du deine Körperkomposition genau tracken willst – nicht nur das Gewicht auf der Waage.",
        items: [
          {
            name: "Auswahl an guten Körperfettwaagen",
            desc: "Elektroimpedanzwaagen für zu Hause – einfach, schnell und reproduzierbar.",
            href: "#",
          },
          {
            name: "Caliper Körperfettzange",
            desc: "Für die manuelle Falzmessung – präzise, wenn du die Technik beherrschst.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    badge: "Optional für Fortgeschrittene",
    color: "bg-sky-100 text-sky-700 border-sky-300/50",
    groups: [
      {
        title: "Umgebung & Optimierung",
        hint: "Wenn Schlaf, Ernährung und Bewegung sitzen, kannst du hier feintunen. Keine Priorität.",
        items: [
          { name: "CO₂-Messgerät", desc: "Für gute Raumluft." },
          { name: "Blaulichtfilter-Brille", desc: "Für Abendbildschirme." },
          { name: "Tageslichtlampe", desc: "Für Winter oder fensterlose Büros." },
        ],
      },
    ],
  },
];

const KompassBiohackingTools = () => {
  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Empfohlene Tools | Kompass</title>
      <meta name="description" content="Empfohlene Apps, Tracker und Geräte – nach Priorität sortiert." />
      <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <BiohackingHero />

        <section className="px-5 md:px-8 pb-6 md:pb-8">
          <div className="container-narrow">
            <p className="text-xs text-muted-foreground/70 text-center leading-relaxed max-w-xl mx-auto">
              Hinweis: Einige der auf dieser Seite genannten Produkte sind Affiliate-Empfehlungen.
              Für dich entstehen dadurch keine zusätzlichen Kosten.
            </p>
          </div>
        </section>

        <section className="px-5 md:px-8 pb-12 md:pb-16">
          <div className="container-narrow space-y-10">
            {tiers.map((tier) => (
              <div key={tier.badge} className="space-y-4">
                <Badge variant="outline" className={`text-xs px-3 py-1 ${tier.color}`}>
                  {tier.badge}
                </Badge>
                {tier.groups.map((group) => (
                  <Card key={group.title} className="border-border/40 shadow-sm">
                    <CardContent className="p-5 md:p-6 space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{group.title}</h3>
                        <p className="text-sm text-muted-foreground italic">{group.hint}</p>
                      </div>
                      {group.items.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {group.items.map((it) => {
                            const content = (
                              <>
                                <p className="text-sm font-medium text-foreground">{it.name}</p>
                                <p className="text-xs text-muted-foreground">{it.desc}</p>
                              </>
                            );
                            return it.href ? (
                              <a
                                key={it.name}
                                href={it.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-border/40 p-3 hover:bg-accent/5 transition-colors block"
                              >
                                {content}
                              </a>
                            ) : (
                              <div key={it.name} className="rounded-lg border border-border/40 p-3">
                                {content}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}

            {/* Foodpunk */}
            <Card className="border-accent/40 bg-accent/5 shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <Badge variant="outline" className="text-xs px-3 py-1 bg-accent/10 text-accent border-accent/30">
                    Personalisierte Unterstützung
                  </Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Foodpunk – wenn du einen Plan willst, der wirklich passt
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Wenn du dir einen durchdachten, individualisierten Ernährungsplan wünschst, statt
                  selbst zu rechnen und zu planen, ist Foodpunk eine ausgezeichnete Wahl. Speziell
                  für Frauen 40+ mit Stoffwechselproblemen bietet Foodpunk:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Personalisierte Pläne basierend auf deinen Daten",
                    "Klare Mahlzeiten-Vorschläge (kein ewiges Rätselraten)",
                    "Wöchentliche Anpassungen",
                    "Support bei Stagnation oder Unsicherheit",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button variant="cta" size="lg" asChild>
                  <a href="https://foodpunk.de" target="_blank" rel="noopener noreferrer">
                    Mehr über Foodpunk erfahren
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5 md:px-8 pb-8 md:pb-12">
          <div className="container-narrow flex justify-center">
            <Button variant="ctaSecondary" asChild>
              <Link to="/kompass">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Zurück
              </Link>
            </Button>
          </div>
        </section>

        <KompassCrossNav current="tools" />

        <section className="px-5 md:px-8 pb-16 md:pb-20">
          <div className="container-narrow">
            <p className="text-xs text-muted-foreground/70 text-center leading-relaxed max-w-lg mx-auto">
              Die Inhalte dieser Seite dienen der Information und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KompassBiohackingTools;
