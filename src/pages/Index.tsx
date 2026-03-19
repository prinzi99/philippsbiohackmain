import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopicCard from "@/components/TopicCard";
import FAQSection from "@/components/FAQSection";
import { Zap, Wind } from "lucide-react";
import buchCover from "@/assets/buch-cover.jpeg";
import { useUtmParams } from "@/hooks/use-utm-params";

const topTopics = [
{
  title: "Stoffwechsel-Quiz (2 Minuten)",
  description: "Finde heraus, was deinen Stoffwechsel aktuell ausbremst.",
  buttonText: "Ergebnis holen",
  href: "https://stoffwechsel.philippsbiohack.de?utm_source=hub",
  badge: "Beliebt"
},
{
  title: "Stoffwechsel-Buch",
  description: "Die wichtigsten Hebel für deinen Stoffwechsel – kompakt und alltagstauglich in einem Buch.",
  buttonText: "Zum Buch",
  href: "https://stoffwechsel.philippsbiohack.de/buch?utm_source=hub",
  badge: "Neu",
  image: buchCover
},
{
  title: "Schlechte Luft im Homeoffice?",
  description: "CO₂ ist der unsichtbare Produktivitäts-Killer. Hier ist der Schnellstart.",
  buttonText: "Luftqualität checken",
  href: "https://start.philippsbiohack.de/co2-meter/schlechteluft"
}];


const Index = () => {
  const { withUtm } = useUtmParams();

  return (
    <main className="min-h-screen bg-background">
      {/* SEO */}
      <title>Philipp's Biohack – Biohacking ohne Bullshit</title>
      <meta
        name="description"
        content="Stoffwechsel-Quiz & CO₂-Check: Finde in 2 Min. heraus, wo du Energie verlierst. Alltagstaugliches Biohacking – kostenlos starten." />
      

      <Header />

      {/* Hero */}
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Biohacking – aber ohne Bullshit.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-3 leading-relaxed text-balance">
              Alltagstaugliche Checks und Tools, die dir zeigen, wo du Energie verlierst – und was du zuerst fixen solltest.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Hinweis: Kein medizinischer Rat. Nur Selbstreflexion &amp; allgemeine Information.
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTA Cards */}
      <section className="pb-12 lg:pb-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto grid gap-4">
            {topTopics.map((topic) =>
            <TopicCard key={topic.title} {...topic} href={withUtm(topic.href)} />
            )}
          </div>
        </div>
      </section>

      {/* What is Biohacking */}
      <section className="py-12 lg:py-16 bg-secondary/50">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">
              Was bedeutet Biohacking hier?
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Biohacking heißt für uns: messen, verstehen, optimieren – mit einfachen Mitteln, die in den Alltag passen. Keine extremen Experimente, keine teuren Gadgets.
              </p>
              <p>
                Die meisten Menschen haben ihr Basispotenzial noch gar nicht ausgeschöpft. Deshalb fangen wir bei den einfachen Hebeln an: Stoffwechsel, Luftqualität und Schlaf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start hier */}
      <section className="py-12 lg:py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">
              Start hier
            </h2>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Wenn du abnehmen willst oder stagnierst:</strong>{" "}
                  <a href={withUtm("https://stoffwechsel.philippsbiohack.de?utm_source=hub")} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
                    Stoffwechsel-Quiz
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Wenn du im Homeoffice müde bist:</strong>{" "}
                  <a href="https://start.philippsbiohack.de/co2-meter/schlechteluft" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
                    CO₂-Check
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Weitere Themen */}
      <section className="py-12 lg:py-16 bg-secondary/50">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground mb-2">
              Weitere Themen
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Kommt laufend dazu – hier entstehen neue Checks und Tools.
            </p>
            <div className="grid gap-4">
              {topTopics.map((topic) =>
              <TopicCard key={`more-${topic.title}`} {...topic} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      <Footer />
    </main>);

};

export default Index;