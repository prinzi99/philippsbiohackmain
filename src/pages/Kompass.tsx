import { useState, useRef } from "react";
import { Calculator, Activity, HelpCircle, Wrench, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import CalcInputForm from "@/components/calculator/CalcInputForm";
import CalcResults from "@/components/calculator/CalcResults";
import { calculateAll, type CalcInput, type CalcResult } from "@/lib/calorieCalculator";

import CheckQuestions from "@/components/check/CheckQuestions";
import CheckResults from "@/components/check/CheckResults";
import { evaluateCheck, questions, type CheckAnswers, type CheckResult } from "@/lib/metabolicCheck";

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
    a: "Zu wenig Kalorien, zu wenig Schlaf, zu viel Stress oder eine hormonelle Anpassung. Schau in den Reset-Check. Müdigkeit ist ein Signal, kein Versagen.",
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
    a: "Wenn du seit Wochen stagnierst, dich überfordert fühlst oder nicht weißt, was du ändern sollst. Ein durchdachter Ernährungsplan mit Struktur kann dann der nächste Schritt sein. Für viele Frauen 40+ ist ein personalisierter Plan – etwa von Foodpunk – der Durchbruch. Mehr dazu findest du im Tab „Empfohlene Tools“.",
  },
];

const messpunkte = [
  { title: "Gewichtstrend", text: "Nicht täglich, sondern Wochendurchschnitt." },
  { title: "Umfang", text: "Einmal alle 2 Wochen messen reicht völlig." },
  { title: "Energie-Level", text: "Subjektiv: hoch, mittel, niedrig." },
  { title: "Hunger & Sättigung", text: "Ehrlich beobachten – ohne Bewertung." },
  { title: "Schlaf", text: "Stunden und Qualität." },
  { title: "Schritte", text: "Optional. Kein Stress, wenn’s mal weniger sind." },
  { title: "Training", text: "Häufigkeit und gefühlte Leistung." },
];

const toolTiers = [
  {
    badge: "Kostenlos starten",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300/50",
    groups: [
      {
        title: "Ernährungstracker",
        hint: "Du brauchst nur eine App. Such dir aus, was dir gefällt.",
        items: [
          { name: "MyFitnessPal", desc: "Am bekanntesten, riesige Datenbank." },
          { name: "Yazio", desc: "Deutsch, sehr übersichtlich." },
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

const Kompass = () => {
  // Rechner state
  const [calcResult, setCalcResult] = useState<CalcResult | null>(null);
  const [calcInput, setCalcInput] = useState<CalcInput | null>(null);
  const calcResultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (input: CalcInput) => {
    setCalcResult(calculateAll(input));
    setCalcInput(input);
    setTimeout(() => calcResultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  // Check state
  const [answers, setAnswers] = useState<CheckAnswers>({});
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);
  const [checkError, setCheckError] = useState<string | null>(null);
  const checkResultsRef = useRef<HTMLDivElement>(null);

  const handleAnswer = (i: number, v: boolean) => {
    setAnswers((p) => ({ ...p, [i]: v }));
    setCheckError(null);
  };
  const handleEvaluate = () => {
    const allAnswered = questions.every((_, i) => answers[i] === true || answers[i] === false);
    if (!allAnswered) {
      setCheckError("Bitte beantworte alle Fragen, bevor du den Check auswertest.");
      return;
    }
    setCheckResult(evaluateCheck(answers));
    setTimeout(() => checkResultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };
  const handleCheckReset = () => {
    setAnswers({});
    setCheckResult(null);
    setCheckError(null);
  };

  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Kompass | Philipp's Biohack</title>
      <meta name="description" content="Dein praktischer Kompass – Rechner, Messpunkte, FAQ und empfohlene Tools." />
      <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="section-padding pb-8 md:pb-12">
          <div className="container-narrow text-center md:text-left space-y-5">
            <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
              Kompass
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Dein Kompass für den Alltag
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deine praktische Orientierung – Rechner, Messpunkte, ehrliche Antworten und Tools,
              die wirklich helfen. Ohne Überforderung, ohne Druck.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-5 md:px-8 pb-16 md:pb-20">
          <div className="container-wide">
            <Tabs defaultValue="rechner" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto p-1 mb-8">
                <TabsTrigger value="rechner" className="py-2.5 text-sm">
                  <Calculator className="w-4 h-4 mr-1.5" /> Rechner
                </TabsTrigger>
                <TabsTrigger value="messen" className="py-2.5 text-sm">
                  <Activity className="w-4 h-4 mr-1.5" /> Messen
                </TabsTrigger>
                <TabsTrigger value="faq" className="py-2.5 text-sm">
                  <HelpCircle className="w-4 h-4 mr-1.5" /> FAQ
                </TabsTrigger>
                <TabsTrigger value="tools" className="py-2.5 text-sm">
                  <Wrench className="w-4 h-4 mr-1.5" /> Tools
                </TabsTrigger>
              </TabsList>

              {/* TAB: RECHNER */}
              <TabsContent value="rechner" className="space-y-6">
                <div className="container-narrow space-y-3 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Kalorien- & Makro-Rechner</h2>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                    Ein warmer Startpunkt, kein Dogma. Trag deine Werte ein und erhalte
                    Alltagszahlen, mit denen du arbeiten kannst.
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xl">
                    💡 Beobachte deine Werte zwei Wochen, bevor du etwas änderst.
                  </p>
                </div>

                <CalcInputForm onCalculate={handleCalculate} />

                {calcResult && calcInput && (
                  <div ref={calcResultsRef}>
                    <CalcResults result={calcResult} input={calcInput} />
                  </div>
                )}
              </TabsContent>

              {/* TAB: MESSEN */}
              <TabsContent value="messen" className="space-y-8">
                <div className="container-narrow space-y-3 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Stoffwechsel-Selbstcheck
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                    Müdigkeit, Hunger und Stagnation sind keine persönlichen Fehler – sie sind Signale.
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xl">
                    Dieser Check hilft dir zu verstehen, ob dein Stoffwechsel gerade unter Stress steht.
                  </p>
                </div>

                <CheckQuestions
                  answers={answers}
                  onAnswer={handleAnswer}
                  onEvaluate={handleEvaluate}
                  onReset={handleCheckReset}
                  error={checkError}
                />

                {checkResult && (
                  <div ref={checkResultsRef}>
                    <CheckResults result={checkResult} />
                  </div>
                )}

                {/* Messpunkte */}
                <div className="container-narrow space-y-5">
                  <div className="text-center md:text-left space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      Wichtige Messpunkte – ohne Überforderung
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Du musst nicht alles messen. Start mit 2–3 Punkten, die für dich Sinn machen.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {messpunkte.map((m) => (
                      <Card key={m.title} className="border-border/40 shadow-none">
                        <CardContent className="p-4 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{m.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{m.text}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* TAB: FAQ */}
              <TabsContent value="faq">
                <div className="container-narrow space-y-6">
                  <div className="text-center md:text-left space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Häufige Fragen
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                      Ehrliche Antworten auf die Fragen, die im Alltag wirklich auftauchen.
                    </p>
                  </div>

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
              </TabsContent>

              {/* TAB: TOOLS */}
              <TabsContent value="tools">
                <div className="container-narrow space-y-8">
                  <div className="text-center md:text-left space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Empfohlene Tools
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                      Sortiert nach Priorität – fang mit dem an, was kostenlos ist und im Alltag
                      funktioniert.
                    </p>
                  </div>

                  {toolTiers.map((tier) => (
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
                                {group.items.map((it) => (
                                  <div
                                    key={it.name}
                                    className="rounded-lg border border-border/40 p-3"
                                  >
                                    <p className="text-sm font-medium text-foreground">{it.name}</p>
                                    <p className="text-xs text-muted-foreground">{it.desc}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}

                  {/* Foodpunk highlight */}
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
                        Wenn du dir einen durchdachten, individualisierten Ernährungsplan wünschst,
                        statt selbst zu rechnen und zu planen, ist Foodpunk eine ausgezeichnete Wahl.
                        Speziell für Frauen 40+ mit Stoffwechselproblemen bietet Foodpunk:
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
                      <p className="text-xs text-muted-foreground/70">
                        Hinweis: Affiliate-Empfehlung. Für dich entstehen keine zusätzlichen Kosten.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-5 md:px-8 pb-16 md:pb-20">
          <div className="container-narrow">
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-lg mx-auto">
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
