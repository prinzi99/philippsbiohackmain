import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Target, TrendingDown, Minus, Zap } from "lucide-react";
import type { CalcResult, CalcInput } from "@/lib/calorieCalculator";

const r = (n: number) => Math.round(n);

const goalLabels = {
  maintenance: "Erhaltung",
  moderate: "Moderates Defizit (80 %)",
  aggressive: "Stärkeres Defizit (nur kurzfristig)",
};

const goalHints: Record<string, string> = {
  maintenance:
    "Du hältst dein aktuelles Gewicht. Sinnvoll, wenn du dich auf Training und Leistung konzentrieren möchtest.",
  moderate:
    "Ein moderates Defizit ist ein guter Startpunkt, wenn du Fett verlieren möchtest – ohne unnötig hart vorzugehen.",
  aggressive:
    "Ein stärkeres Defizit kann kurzfristig funktionieren, ist im Alltag aber oft schwer durchzuhalten. Beobachte Energie und Hunger genau.",
};

interface Props {
  result: CalcResult;
  input: CalcInput;
}

const CalcResults = ({ result, input }: Props) => (
  <section className="px-5 md:px-8 pb-12 md:pb-16">
    <div className="container-narrow space-y-8">
      {/* A – Quick Overview */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Dein Ergebnis</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ResultCard icon={Flame} label="Grundumsatz (Ø)" value={`${r(result.bmrAvg)} kcal`} muted />
          <ResultCard icon={Zap} label="Erhaltungskalorien" value={`${r(result.tdee)} kcal`} />
          <ResultCard icon={TrendingDown} label="Moderates Defizit (80 %)" value={`${r(result.deficitModerate)} kcal`} />
          <ResultCard icon={TrendingDown} label="Stärkeres Defizit (nur kurzfristig)" value={`${r(result.deficitAggressive)} kcal`} />
          <ResultCard icon={Minus} label="Defizit −500 kcal" value={`${r(result.deficitMinus500)} kcal`} muted className="sm:col-span-2" />
        </div>

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          Ein moderates Defizit ist für viele Nutzer der bessere Startpunkt.
        </p>
      </div>

      {/* B – Chosen Goal */}
      <Card className="border-primary/30 bg-primary/5 shadow-sm">
        <CardContent className="p-5 md:p-6 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Dein aktueller Zielwert</h3>
            <Badge variant="secondary" className="text-[10px] px-2 py-0.5">{goalLabels[input.goal]}</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <MacroBox label="Kalorien" value={`${r(result.targetCalories)}`} unit="kcal" highlight />
            <MacroBox label="Protein" value={`${r(result.proteinG)}`} unit="g" />
            <MacroBox label="Fett" value={`${r(result.fatG)}`} unit="g" />
            <MacroBox label="Kohlenhydrate" value={`${r(result.carbsG)}`} unit="g" />
          </div>

          {result.useTargetWeight && (
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              ℹ️ Dein BMI liegt bei {result.bmi.toFixed(1)} (≥ 30). Die Proteinberechnung basiert auf deinem Wunschgewicht von {result.usedProteinWeight} kg.
            </p>
          )}
        </CardContent>
      </Card>

      {/* C – Interpretation */}
      <Card className="border-border/40 shadow-none">
        <CardContent className="p-5 md:p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {goalHints[input.goal]}
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

function ResultCard({
  icon: Icon,
  label,
  value,
  muted,
  className,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  muted?: boolean;
  className?: string;
}) {
  return (
    <Card className={`border-border/50 shadow-sm ${className ?? ""}`}>
      <CardContent className="p-4 md:p-5 flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${muted ? "bg-muted" : "bg-secondary/10"}`}>
          <Icon className={`w-5 h-5 ${muted ? "text-muted-foreground" : "text-secondary"}`} />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-lg font-bold text-foreground">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function MacroBox({
  label,
  value,
  unit,
  highlight,
}: {
  label: string;
  value: string;
  unit: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-lg p-3 text-center ${highlight ? "bg-primary/10" : "bg-muted/50"}`}>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="text-[10px] text-muted-foreground">{unit}</p>
    </div>
  );
}

export default CalcResults;
