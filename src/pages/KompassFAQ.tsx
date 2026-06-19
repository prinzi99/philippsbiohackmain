import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KompassCrossNav from "@/components/kompass/KompassCrossNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Was mache ich, wenn mein Gewicht trotz Defizit stagniert?",
    a: "Beobachte zwei Wochen. Prüfe Schlaf, Stress und Periode. Senke nicht sofort die Kalorien – manchmal braucht der Körper Stabilität statt Verschärfung.",
  },
  {
    q: "Wie lange sollte ich meine Kalorien beobachten, bevor ich etwas ändere?",
    a: "Mindestens zwei Wochen. Dein Gewicht schwankt täglich durch Wasser, Hormone und Salz. Der Trend zählt, nicht der einzelne Wert.",
  },
  {
    q: "Muss ich jeden Tag tracken?",
    a: "Nein. Tracken ist ein Werkzeug, kein Gesetz. 3–5 Tage reichen oft, um ein Gefühl zu bekommen. Danach kannst du schätzen oder intuitiv essen.",
  },
  {
    q: "Was ist wichtiger: Kalorien, Protein, Schritte oder Schlaf?",
    a: "Schlaf ist die Basis. Ohne Schlaf leidet alles andere. Dann Protein (für Sättigung und Muskeln). Dann Kalorien. Schritte sind Bonus, kein Muss.",
  },
  {
    q: "Was bedeutet es, wenn ich ständig müde bin?",
    a: "Zu wenig Kalorien, zu wenig Schlaf, zu viel Stress oder eine hormonelle Anpassung. Schau in den Selbstcheck. Müdigkeit ist ein Signal, kein Versagen.",
  },
  {
    q: "Wann ist ein Defizit zu aggressiv?",
    a: "Wenn du ständig müde bist, schlecht schläfst, obsessiv ans Essen denkst oder deine Leistung sinkt. Ein Defizit sollte sich nachhaltig anfühlen, nicht wie Bestrafung.",
  },
  {
    q: "Welche Werte sollte ich messen, ohne mich verrückt zu machen?",
    a: "Gewichtstrend (nicht täglich wiegen!), Umfang alle 2 Wochen, Energie-Level subjektiv und Schlaf. Mehr ist optional. Weniger Daten, mehr Gefühl.",
  },
  {
    q: "Wann brauche ich individuelle Unterstützung?",
    a: "Wenn du seit Wochen stagnierst, dich überfordert fühlst oder nicht weißt, was du ändern sollst. Ein durchdachter Ernährungsplan mit Struktur kann dann der nächste Schritt sein.",
  },
];

const KompassFAQ = () => {
  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>FAQ – Kompass | Philipp's Biohack</title>
      <meta name="description" content="Ehrliche Antworten auf die häufigsten Fragen rund um Kalorien, Stoffwechsel, Tracking und Alltag." />
      <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <section className="section-padding pb-6">
          <div className="container-narrow space-y-4">
            <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
              <HelpCircle className="w-3 h-3 mr-1.5" /> Kompass · FAQ
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Häufige Fragen
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ehrliche Antworten auf die Fragen, die im Alltag wirklich auftauchen.
            </p>
          </div>
        </section>

        <section className="px-5 md:px-8 pb-12">
          <div className="container-narrow">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border/50 rounded-xl px-4 bg-card"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="px-5 md:px-8 pb-8">
          <div className="container-narrow">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/kompass">
                <ArrowLeft className="w-4 h-4 mr-1.5" /> Zurück
              </Link>
            </Button>
          </div>
        </section>

        <KompassCrossNav current="faq" />
      </main>

      <Footer />
    </div>
  );
};

export default KompassFAQ;
