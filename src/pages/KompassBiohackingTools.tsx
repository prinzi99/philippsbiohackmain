import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiohackingHero from "@/components/biohacking/BiohackingHero";
import BiohackingCategory from "@/components/biohacking/BiohackingCategory";
import { Utensils, Activity, Moon, Lightbulb, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Utensils,
    title: "Ernährung & Energie verstehen",
    intro:
      "Viele Menschen unterschätzen oder überschätzen ihre Kalorienaufnahme. Ernährungstracker können helfen, ein realistisches Gefühl für Portionen und Makronährstoffe zu entwickeln.",
    tools: [
      { title: "MyFitnessPal", description: "Beliebter Ernährungstracker mit sehr großer Lebensmitteldatenbank." },
      { title: "Yazio", description: "Sehr verbreiteter Ernährungstracker im deutschsprachigen Raum mit übersichtlicher Makroanalyse." },
      { title: "Cronometer", description: "Ernährungstracker mit besonders detaillierter Nährstoffanalyse." },
    ],
  },
  {
    icon: Activity,
    title: "Aktivität & Energieverbrauch",
    intro: "Alltagsbewegung und Trainingsbelastung beeinflussen den Energieverbrauch stärker, als viele vermuten.",
    tools: [
      { title: "Garmin Fitnessuhren", description: "Fitnessuhren zur Messung von Aktivität, Herzfrequenz und Trainingsbelastung." },
      { title: "Apple Watch", description: "Smartwatch mit umfassendem Aktivitäts- und Gesundheits-Tracking." },
      { title: "Polar Fitnessuhren", description: "Beliebt für Trainingsanalyse und Herzfrequenzmessung." },
    ],
  },
  {
    icon: Moon,
    title: "Schlaf & Regeneration",
    intro: "Schlaf beeinflusst Hunger, Energie, hormonelle Regulation und Trainingsleistung.",
    tools: [
      { title: "Oura Ring", description: "Ring zur Analyse von Schlaf, HRV und Erholungsstatus." },
      { title: "Whoop Band", description: "Tracker zur Analyse von Belastung, Erholung und Schlafqualität." },
    ],
  },
  {
    icon: Lightbulb,
    title: "Umgebung & Biohacking",
    intro: "Auch kleine Umweltfaktoren können Einfluss auf Energie und Schlaf haben.",
    tools: [
      { title: "CO₂-Messgerät", description: "Hilft dabei, die Luftqualität in Innenräumen zu überwachen." },
      { title: "Blaulichtfilter-Brillen", description: "Können helfen, abends störendes Bildschirmlicht zu reduzieren." },
      { title: "Tageslichtlampen", description: "Unterstützen natürliche Lichtsignale im Alltag." },
    ],
  },
];

const KompassBiohackingTools = () => {
  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Biohacking & Tools | Kompass</title>
        <meta name="description" content="Apps, Geräte und einfache Hilfsmittel zur Selbstbeobachtung." />
        <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <BiohackingHero />

        {categories.map((cat) => (
          <BiohackingCategory key={cat.title} {...cat} />
        ))}

        <section className="section-padding pt-8 md:pt-12">
          <div className="container-narrow">
            <Card className="border-border/40 bg-card/80 shadow-none">
              <CardContent className="p-5 md:p-6 space-y-2 text-center">
                <h3 className="font-semibold text-foreground text-sm">Tools sind nur Hilfsmittel</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Diese Tools sollen dir helfen, Muster zu erkennen und dein eigenes System besser zu verstehen.
                  Sie ersetzen jedoch weder dein Körpergefühl noch gesunden Menschenverstand.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5 md:px-8 pb-8 md:pb-12">
          <div className="container-narrow flex justify-center">
            <Button variant="ctaSecondary" asChild>
              <Link to="/kompass">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Zurück zum Kompass
              </Link>
            </Button>
          </div>
        </section>

        <section className="px-5 md:px-8 pb-16 md:pb-20">
          <div className="container-narrow space-y-3">
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto">
              Einige der Links auf dieser Seite sind sogenannte Affiliate-Links. Wenn du über diese Links ein
              Produkt kaufst, erhalte ich möglicherweise eine kleine Provision. Für dich entstehen dadurch keine
              zusätzlichen Kosten.
            </p>
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
