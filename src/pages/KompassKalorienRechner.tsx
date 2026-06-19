import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalcHero from "@/components/calculator/CalcHero";
import CalcInputForm from "@/components/calculator/CalcInputForm";
import CalcResults from "@/components/calculator/CalcResults";
import CalcTransparency from "@/components/calculator/CalcTransparency";
import CalcInfoSections from "@/components/calculator/CalcInfoSections";
import EnergyAvailabilityTab from "@/components/calculator/EnergyAvailabilityTab";
import KompassCrossNav from "@/components/kompass/KompassCrossNav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { calculateAll, type CalcInput, type CalcResult } from "@/lib/calorieCalculator";
import { Flame, Activity } from "lucide-react";

const KompassKalorienRechner = () => {
  const [result, setResult] = useState<CalcResult | null>(null);
  const [input, setInput] = useState<CalcInput | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (calcInput: CalcInput) => {
    const res = calculateAll(calcInput);
    setResult(res);
    setInput(calcInput);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Kalorien- & Makro-Rechner | Kompass</title>
      <meta name="description" content="Berechne deinen Kalorienbedarf und deine Energieverfügbarkeit (EA)." />
      <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <CalcHero />

        <section className="px-5 md:px-8">
          <div className="container-narrow">
            <Tabs defaultValue="kalorien" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-auto p-1">
                <TabsTrigger value="kalorien" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm">
                  <Flame className="w-4 h-4" />
                  <span>Kalorien & Makros</span>
                </TabsTrigger>
                <TabsTrigger value="ea" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm">
                  <Activity className="w-4 h-4" />
                  <span>Energieverfügbarkeit</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="kalorien" className="mt-6">
                <CalcInputForm onCalculate={handleCalculate} />
                {result && input && (
                  <div ref={resultsRef}>
                    <CalcResults result={result} input={input} />
                    <CalcTransparency result={result} input={input} />
                  </div>
                )}
              </TabsContent>

              <TabsContent value="ea" className="mt-6">
                <EnergyAvailabilityTab />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <CalcInfoSections />
        <KompassCrossNav current="rechner" />
      </main>

      <Footer />
    </div>
  );
};

export default KompassKalorienRechner;
