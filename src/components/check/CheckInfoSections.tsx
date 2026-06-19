import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Activity, Brain, ArrowLeft } from "lucide-react";

const explainCards = [
  {
    icon: Zap,
    title: "Energieverfügbarkeit",
    text: "Wenn Kalorienzufuhr, Schlaf und Belastung dauerhaft nicht zusammenpassen, reagiert der Körper oft mit Hunger, Müdigkeit und Anpassung.",
  },
  {
    icon: Activity,
    title: "Leistung & Anpassung",
    text: "Stagnation, sinkende Trainingsleistung und ausbleibende Fortschritte können Hinweise sein, dass dein System bereits kompensiert.",
  },
  {
    icon: Brain,
    title: "Stress & Regulation",
    text: "Innere Unruhe, Gereiztheit und Erschöpfung sind oft nicht einfach nur mentale Themen, sondern Teil einer Gesamtbelastung.",
  },
];

const CheckInfoSections = () => (
  <>
    {/* What the check measures */}
    <section className="section-padding bg-muted/30">
      <div className="container-narrow space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
          Was dieser Check erfasst
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {explainCards.map((card) => (
            <Card key={card.title} className="border-border/40 bg-card/80 shadow-none">
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

    {/* How to read */}
    <section className="section-padding">
      <div className="container-narrow space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
          So solltest du dein Ergebnis lesen
        </h2>
        <div className="space-y-3 max-w-xl mx-auto">
          {[
            "Es geht nicht darum, ob du gut oder schlecht abschneidest.",
            "Es geht darum, ob dein Körper eher auf Kooperation oder auf Schutzmodus eingestellt ist.",
            "Mehrere Ja-Antworten bedeuten nicht automatisch ein Problem, aber sie können ein Muster sichtbar machen.",
            "Entscheidend ist nicht nur die Anzahl, sondern auch in welchen Bereichen sich die Hinweise häufen.",
          ].map((text) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-border/40 p-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="px-5 md:px-8 pb-8">
      <div className="container-narrow space-y-2 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Dieser Check dient der strukturierten Selbsteinschätzung und ersetzt keine medizinische
          oder therapeutische Beratung.
        </p>
        <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-lg mx-auto">
          Wenn Beschwerden stark ausgeprägt sind oder länger bestehen, ist eine individuelle
          fachliche Abklärung sinnvoll.
        </p>
      </div>
    </section>

    {/* Closing card */}
    <section className="px-5 md:px-8 pb-16 md:pb-20">
      <div className="container-narrow">
        <Card className="border-border/40 bg-card/80 shadow-none max-w-lg mx-auto">
          <CardContent className="p-6 md:p-8 space-y-4 text-center">
            <h3 className="text-lg font-bold text-foreground">Nicht härter. Klarer.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Der Reset-Check soll dir nicht sagen, dass etwas mit dir nicht stimmt. Er soll dir
              helfen, besser zu erkennen, was dein System gerade braucht.
            </p>
            <Button variant="ctaSecondary" size="sm" asChild>
              <Link to="/kompass">
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                Zurück
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  </>
);

export default CheckInfoSections;
