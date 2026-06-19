import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalcHero from "@/components/calculator/CalcHero";
import CalcInputForm from "@/components/calculator/CalcInputForm";
import CalcResults from "@/components/calculator/CalcResults";
import CalcTransparency from "@/components/calculator/CalcTransparency";
import CalcInfoSections from "@/components/calculator/CalcInfoSections";
import KompassCrossNav from "@/components/kompass/KompassCrossNav";
import { calculateAll, type CalcInput, type CalcResult } from "@/lib/calorieCalculator";

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
        <meta name="description" content="Berechne deinen Kalorienbedarf und eine sinnvolle Makroverteilung." />
        <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <CalcHero />
        <CalcInputForm onCalculate={handleCalculate} />

        {result && input && (
          <div ref={resultsRef}>
            <CalcResults result={result} input={input} />
            <CalcTransparency result={result} input={input} />
          </div>
        )}

        <CalcInfoSections />
      </main>

      <Footer />
    </div>
  );
};

export default KompassKalorienRechner;
