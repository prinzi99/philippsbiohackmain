import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckHero from "@/components/check/CheckHero";
import CheckQuestions from "@/components/check/CheckQuestions";
import CheckResults from "@/components/check/CheckResults";
import CheckInfoSections from "@/components/check/CheckInfoSections";
import { evaluateCheck, questions, type CheckAnswers, type CheckResult } from "@/lib/metabolicCheck";

const KompassStoffwechselCheck = () => {
  const [answers, setAnswers] = useState<CheckAnswers>({});
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleAnswer = (index: number, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
    setError(null);
  };

  const handleEvaluate = () => {
    const allAnswered = questions.every((_, i) => answers[i] === true || answers[i] === false);
    if (!allAnswered) {
      setError("Bitte beantworte alle Fragen, bevor du den Check auswertest.");
      return;
    }
    const res = evaluateCheck(answers);
    setResult(res);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="kompass-theme min-h-screen flex flex-col">
      <title>Stoffwechsel-Reset Check | Kompass</title>
        <meta name="description" content="Finde heraus, ob dein Stoffwechsel aktuell unter Stress, Anpassung oder Stabilität läuft." />
        <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow">
        <CheckHero />
        <CheckQuestions
          answers={answers}
          onAnswer={handleAnswer}
          onEvaluate={handleEvaluate}
          onReset={handleReset}
          error={error}
        />

        {result && (
          <div ref={resultsRef}>
            <CheckResults result={result} />
          </div>
        )}

        <CheckInfoSections />
      </main>

      <Footer />
    </div>
  );
};

export default KompassStoffwechselCheck;
