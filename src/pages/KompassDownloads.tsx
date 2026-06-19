import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileDown, FileText, ClipboardList, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

interface DownloadItem {
  title: string;
  description: string;
  url?: string;
}

interface DownloadCategoryProps {
  icon: React.ElementType;
  title: string;
  intro: string;
  items: DownloadItem[];
}

const DownloadCategory = ({ icon: Icon, title, intro, items }: DownloadCategoryProps) => (
  <section className="px-5 md:px-8 pb-12 md:pb-16">
    <div className="container-narrow space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-secondary" />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{intro}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.title} className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex flex-col h-full space-y-3">
              <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-grow">{item.description}</p>
              {item.url ? (
                <Button variant="cta" size="sm" className="w-full mt-auto" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <FileDown className="w-3.5 h-3.5 mr-1" />
                    PDF herunterladen
                  </a>
                </Button>
              ) : (
                <Button variant="cta" size="sm" className="w-full mt-auto" disabled>
                  <FileDown className="w-3.5 h-3.5 mr-1" />
                  PDF herunterladen
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const categories: DownloadCategoryProps[] = [
  {
    icon: ClipboardList,
    title: "Checklisten",
    intro: "Kurze Übersichten, die dir helfen können, wichtige Faktoren im Blick zu behalten.",
    items: [
      { title: "Stoffwechsel Reset Checkliste", description: "Wichtige Punkte, die in einer Reset-Phase sinnvoll sein können.", url: "/downloads/Stoffwechsel-Reset-Checkliste.pdf" },
      { title: "Defizit-Phase Checkliste", description: "Eine Übersicht der wichtigsten Faktoren während einer Fettverlustphase.", url: "/downloads/Defizit-Phase-Checkliste.pdf" },
      { title: "Alltags-Checkliste", description: "Einfache Erinnerungspunkte für Ernährung, Schlaf und Bewegung.", url: "/downloads/Alltags-Checkliste.pdf" },
    ],
  },
  {
    icon: FileText,
    title: "Arbeitsblätter",
    intro: "Vorlagen, die dir helfen können, Beobachtungen festzuhalten und Muster zu erkennen.",
    items: [
      { title: "Ernährungs-Beobachtungsblatt", description: "Ein einfaches Formular zur Beobachtung von Mahlzeiten, Hunger und Energie.", url: "/downloads/Ernahrungs-Beobachtungsblatt.pdf" },
      { title: "Wochenübersicht Training & Energie", description: "Hilft dabei, Training, Energielevel und Belastung zu reflektieren.", url: "/downloads/Wochenubersicht-Training-und-Energie.pdf" },
      { title: "Schlaf- und Erholungsprotokoll", description: "Eine einfache Vorlage zur Beobachtung von Schlafdauer und Erholung.", url: "/downloads/Schlaf-und-Erholungsprotokoll.pdf" },
    ],
  },
  {
    icon: LayoutGrid,
    title: "Vorlagen & Übersichten",
    intro: "Kompakte Übersichten, die wichtige Zusammenhänge schnell sichtbar machen.",
    items: [
      { title: "Makronährstoff-Übersicht", description: "Eine einfache Übersicht zur Orientierung bei Protein, Fett und Kohlenhydraten.", url: "/downloads/Makronahrstoff-Ubersicht.pdf" },
      { title: "Kalorien-Startpunkt Übersicht", description: "Eine visuelle Übersicht der Berechnungslogik für Kalorienbedarf.", url: "/downloads/Kalorien-Startpunkt-Ubersicht.pdf" },
      { title: "Stoffwechsel-System Übersicht", description: "Ein Überblick über die wichtigsten Einflussfaktoren auf Energie und Regulation.", url: "/downloads/Stoffwechsel-System-Ubersicht.pdf" },
    ],
  },
];

const KompassDownloads = () => {
  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Downloads & Checklisten | Kompass</title>
        <meta name="description" content="Praktische Materialien zur Umsetzung." />
        <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <section className="section-padding pb-8 md:pb-12">
          <div className="container-narrow space-y-6 text-center md:text-left">
            <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
              Kompass – Ressourcen
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Downloads & Checklisten
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Praktische Materialien zur Umsetzung.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-lg">
              Manche Dinge werden klarer, wenn man sie aufschreibt oder strukturiert beobachtet.
              Diese Materialien sollen dir helfen, die Konzepte einfacher im Alltag umzusetzen.
            </p>
          </div>
        </section>

        {categories.map((cat) => (
          <DownloadCategory key={cat.title} {...cat} />
        ))}

        <section className="section-padding pt-8 md:pt-12">
          <div className="container-narrow">
            <Card className="border-border/40 bg-card/80 shadow-none">
              <CardContent className="p-5 md:p-6 space-y-2 text-center">
                <h3 className="font-semibold text-foreground text-sm">Einfach statt perfekt</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Diese Materialien sind bewusst einfach gehalten. Sie sollen dir helfen,
                  Zusammenhänge sichtbar zu machen – nicht deinen Alltag komplizierter.
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
          <div className="container-narrow">
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto">
              Die Materialien dienen der praktischen Unterstützung und ersetzen keine individuelle Beratung.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KompassDownloads;
