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
import { Youtube } from "lucide-react";
import buchCover from "@/assets/buch-cover.jpeg";
import { useUtmParams } from "@/hooks/use-utm-params";

const topTopics = [
{
  title: "Stoffwechsel-Buch",
  description: "Die wichtigsten Hebel für deinen Stoffwechsel – kompakt und alltagstauglich in einem Buch.",
  buttonText: "Zum Buch",
  href: "https://stoffwechsel.philippsbiohack.de/buch?utm_source=hub",
  badge: "Neu",
  image: buchCover,
  featured: true
},
{
  title: "Stoffwechsel-Quiz (2 Minuten)",
  description: "Finde heraus, was deinen Stoffwechsel aktuell ausbremst.",
  buttonText: "Ergebnis holen",
  href: "https://stoffwechsel.philippsbiohack.de?utm_source=hub",
  badge: "Beliebt"
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
      <section className="hero-warm-gradient pt-12 pb-8 lg:pt-20 lg:pb-12">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Biohacking – aber ohne Bullshit.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-3 leading-relaxed text-balance">
              Alltagstaugliche Checks und Tools, die dir zeigen, wo du Energie verlierst – und was du zuerst fixen solltest.
            </p>
            <p className="text-xs text-muted-foreground/70 mb-5">
              Hinweis: Kein medizinischer Rat. Nur Selbstreflexion &amp; allgemeine Information.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://at.pinterest.com/philippsbiohack/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.36-.72-.36-1.78c0-1.66.97-2.9 2.17-2.9 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.02-4.9-3.42 0-5.43 2.57-5.43 5.22 0 1.03.4 2.14.9 2.74a.36.36 0 0 1 .08.35l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.9-2.43-4.66 0-3.78 2.75-7.26 7.93-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.23 7.46-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@philipps.biohack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.8.1v-3.5a6.37 6.37 0 0 0-.8-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.49 21.6a6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.01-.13z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@philippsbiohack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
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
      <section className="py-12 lg:py-16 bg-warm-beige">
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
                  <a href={withUtm("https://start.philippsbiohack.de/co2-meter/schlechteluft")} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
                    CO₂-Check
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Weitere Themen */}
      <section className="py-12 lg:py-16 bg-warm-cream">
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
              <TopicCard key={`more-${topic.title}`} {...topic} href={withUtm(topic.href)} />
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