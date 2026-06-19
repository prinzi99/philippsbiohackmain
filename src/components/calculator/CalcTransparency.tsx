import { Card, CardContent } from "@/components/ui/card";
import type { CalcResult, CalcInput } from "@/lib/calorieCalculator";

const r1 = (n: number) => n.toFixed(1);
const r0 = (n: number) => Math.round(n);

const goalLabel = { maintenance: "Erhaltung", moderate: "Moderates Defizit (×0,8)", aggressive: "Aggressives Defizit (×0,7)" };
const goalMultiplier = { maintenance: 1, moderate: 0.8, aggressive: 0.7 };

interface Props {
  result: CalcResult;
  input: CalcInput;
}

const CalcTransparency = ({ result, input }: Props) => {
  const { gender, age, weight, height, activityFactor, goal, proteinFactor, fatMode } = input;
  const isMale = gender === "male";
  const { useTargetWeight, usedProteinWeight, bmi } = result;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">So wird gerechnet</h2>
          <p className="text-sm text-muted-foreground">Keine Black Box – hier siehst du alle Schritte</p>
        </div>

        {/* Step 1 */}
        <StepCard step={1} title="Grundumsatz – Mifflin-St Jeor">
          <p className="text-sm text-muted-foreground mb-2">
            {isMale ? "Männer" : "Frauen"}: BMR = (10 × Gewicht) + (6,25 × Größe) − (5 × Alter) {isMale ? "+ 5" : "− 161"}
          </p>
          <Formula>
            BMR = (10 × {weight}) + (6,25 × {height}) − (5 × {age}) {isMale ? "+ 5" : "− 161"} = <strong>{r1(result.bmr1)} kcal</strong>
          </Formula>
        </StepCard>

        {/* Step 2 */}
        <StepCard step={2} title="Grundumsatz – Harris-Benedict">
          <p className="text-sm text-muted-foreground mb-2">
            {isMale
              ? `Männer: BMR = 88,362 + (13,397 × ${weight}) + (4,799 × ${height}) − (5,677 × ${age})`
              : `Frauen: BMR = 447,593 + (9,247 × ${weight}) + (3,098 × ${height}) − (4,330 × ${age})`}
          </p>
          <Formula>
            = <strong>{r1(result.bmr2)} kcal</strong>
          </Formula>
        </StepCard>

        {/* Step 3 */}
        <StepCard step={3} title="Mittelwert">
          <Formula>
            ({r1(result.bmr1)} + {r1(result.bmr2)}) / 2 = <strong>{r1(result.bmrAvg)} kcal</strong>
          </Formula>
        </StepCard>

        {/* Step 4 */}
        <StepCard step={4} title="Erhaltungskalorien (TDEE)">
          <Formula>
            {r1(result.bmrAvg)} × {activityFactor} = <strong>{r0(result.tdee)} kcal</strong>
          </Formula>
        </StepCard>

        {/* Step 5 */}
        <StepCard step={5} title="Defizit-Stufen">
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Erhaltung: {r0(result.tdee)} kcal (100 %)</p>
            <p>Moderates Defizit: {r0(result.tdee)} × 0,8 = <strong className="text-foreground">{r0(result.deficitModerate)} kcal</strong></p>
            <p>Aggressives Defizit: {r0(result.tdee)} × 0,7 = <strong className="text-foreground">{r0(result.deficitAggressive)} kcal</strong></p>
            <p>Einfache Variante: {r0(result.tdee)} − 500 = <strong className="text-foreground">{r0(result.deficitMinus500)} kcal</strong></p>
          </div>
        </StepCard>

        {/* Step 6 */}
        <StepCard step={6} title="Makronährstoffe">
          <p className="text-xs text-muted-foreground mb-3">
            Bezogen auf: {goalLabel[goal]} → {r0(result.targetCalories)} kcal
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Protein:</strong>{" "}
              {useTargetWeight ? (
                <span>{usedProteinWeight} (Wunschgewicht, BMI {bmi.toFixed(1)} ≥ 30)</span>
              ) : (
                <span>{weight}</span>
              )}
              {" "}× {proteinFactor.toFixed(1)} = {r1(result.proteinG)} g → {r0(result.proteinKcal)} kcal
            </p>
            <p>
              <strong className="text-foreground">Fett:</strong>{" "}
              {fatMode === "minimum"
                ? `${weight} × 0,5 = ${r1(result.fatG)} g → ${r0(result.fatKcal)} kcal`
                : `${r0(result.targetCalories)} × ${isMale ? "0,2" : "0,3"} = ${r0(result.fatKcal)} kcal → ${r1(result.fatG)} g`}
            </p>
            <p>
              <strong className="text-foreground">Kohlenhydrate:</strong> ({r0(result.targetCalories)} − {r0(result.proteinKcal)} − {r0(result.fatKcal)}) / 4 = {r1(result.carbsG)} g
            </p>
          </div>
        </StepCard>
      </div>
    </section>
  );
};

function StepCard({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <Card className="border-border/40 shadow-none">
      <CardContent className="p-5 md:p-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
            {step}
          </span>
          <h3 className="font-semibold text-foreground text-sm">{title}</h3>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted/50 rounded-lg px-4 py-3 text-sm font-mono text-foreground break-all leading-relaxed">
      {children}
    </div>
  );
}

export default CalcTransparency;
