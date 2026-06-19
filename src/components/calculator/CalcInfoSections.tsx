import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, AlertTriangle, Scale, BarChart3, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: BookOpen,
    title: "Was diese Zahlen bedeuten",
    items: [
      "Grundumsatz = geschätzte Kalorienmenge im absoluten Ruhezustand.",
      "Erhaltungskalorien = geschätzter Kalorienbedarf im Alltag.",
      "Defizit = Kalorienbereich für Fettverlust.",
      "Makros = Verteilung von Protein, Fett und Kohlenhydraten.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Warum das nur ein Startpunkt ist",
    items: [
      "Keine Formel kennt deine komplette Biologie.",
      "Stress, Schlaf, Bewegung und Diäthistorie beeinflussen die Realität.",
      "Die Zahlen sind gute Schätzungen, keine exakte Wahrheit.",
    ],
  },
  {
    icon: Scale,
    title: "Warum ein moderates Defizit oft sinnvoller ist",
    items: [
      "Mehr Alltagstauglichkeit.",
      "Geringeres Risiko für Heißhunger.",
      "Bessere Trainingsleistung.",
      "Bessere langfristige Umsetzbarkeit.",
    ],
  },
  {
    icon: BarChart3,
    title: "Praxis schlägt Formel",
    items: [
      "Nach 2–3 Wochen sollte man die Entwicklung beobachten.",
      "Gewicht, Energie, Hunger und Alltag sind wichtige Feedbacksignale.",
      "Die Kalorienzufuhr kann danach angepasst werden.",
    ],
  },
];

const CalcInfoSections = () => (
  <>
    {/* Info Blocks */}
    <section className="section-padding">
      <div className="container-narrow space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
          Hintergrund & Einordnung
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((s) => (
            <Card key={s.title} className="border-border/40 shadow-none">
              <CardContent className="p-5 md:p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {s.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center leading-relaxed italic max-w-md mx-auto">
          „Die Berechnung liefert den Startpunkt. Die Praxis liefert die Feinjustierung."
        </p>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="px-5 md:px-8 pb-8">
      <div className="container-narrow">
        <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto">
          Die Ergebnisse sind fundierte Schätzwerte und ersetzen keine individuelle medizinische
          oder ernährungswissenschaftliche Beratung.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="px-5 md:px-8 pb-16 md:pb-20">
      <div className="container-narrow">
        <Card className="border-border/40 bg-card/80 shadow-none">
          <CardContent className="p-6 md:p-8 text-center space-y-4">
            <h3 className="font-bold text-foreground">Nicht perfekt. Aber klarer.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Dieser Rechner soll dir keinen starren Plan aufzwingen, sondern dir einen
              verständlichen Startpunkt geben. Entscheidend ist, wie dein Körper in der Praxis
              reagiert.
            </p>
            <Button variant="ctaSecondary" asChild>
              <Link to="/buch/bonus/intern">
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Bonusbereich
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  </>
);

export default CalcInfoSections;
