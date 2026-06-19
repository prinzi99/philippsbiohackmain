import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, RotateCcw, Info } from "lucide-react";
import type { Gender, Goal, ProteinFactor, FatMode, CalcInput } from "@/lib/calorieCalculator";
import { calcBMI } from "@/lib/calorieCalculator";

const activityOptions = [
  { value: "1.2", label: "Sesshaftigkeit", desc: "Primär Schreibtischtätigkeit, wenig Bewegung, kein Training." },
  { value: "1.375", label: "Wenig Aktivität", desc: "Etwas Training oder erhöhte Alltagsbewegung." },
  { value: "1.55", label: "Moderate Aktivität", desc: "Schreibtisch plus regelmäßiges Training oder viel Stehen im Alltag." },
  { value: "1.725", label: "Sehr hohe Aktivität", desc: "Regelmäßiges hartes Training plus hohe Alltagsbewegung." },
  { value: "1.9", label: "Extreme Aktivität", desc: "Viel hartes Training und körperlich sehr fordernde Arbeit." },
];

interface Props {
  onCalculate: (input: CalcInput) => void;
}

const CalcInputForm = ({ onCalculate }: Props) => {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState<Goal>("moderate");
  const [proteinFactor, setProteinFactor] = useState<ProteinFactor>(2.0);
  const [fatMode, setFatMode] = useState<FatMode>("standard");
  const [error, setError] = useState("");

  const showTargetWeight = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || h < 100) return false;
    return calcBMI(w, h) >= 30;
  }, [weight, height]);

  const reset = () => {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setTargetWeight("");
    setActivity("1.55");
    setGoal("moderate");
    setProteinFactor(2.0);
    setFatMode("standard");
    setError("");
  };

  const handleSubmit = () => {
    const a = parseInt(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!age || !weight || !height) {
      setError("Bitte fülle alle erforderlichen Felder aus.");
      return;
    }
    if (a < 10 || a > 120 || w < 30 || w > 300 || h < 100 || h > 250) {
      setError("Bitte prüfe deine Eingaben. Einige Werte wirken unplausibel.");
      return;
    }

    const tw = parseFloat(targetWeight);
    if (showTargetWeight && (!targetWeight || tw < 30 || tw > 300 || tw >= w)) {
      setError("Bitte gib ein realistisches Wunschgewicht an (unter deinem aktuellen Gewicht).");
      return;
    }

    setError("");
    onCalculate({
      gender,
      age: a,
      weight: w,
      height: h,
      targetWeight: showTargetWeight && tw ? tw : undefined,
      activityFactor: parseFloat(activity),
      goal,
      proteinFactor,
      fatMode,
    });
  };

  return (
    <section className="px-5 md:px-8 pb-12 md:pb-16">
      <div className="container-narrow space-y-6">
        {/* Gender */}
        <Card className="border-border/50 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-4">
            <Label className="text-foreground font-semibold">Geschlecht</Label>
            <RadioGroup value={gender} onValueChange={(v) => setGender(v as Gender)} className="flex gap-4">
              {[
                { value: "male", label: "Männlich" },
                { value: "female", label: "Weiblich" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex-1 cursor-pointer rounded-lg border p-4 text-center text-sm font-medium transition-all ${
                    gender === opt.value
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border/50 text-muted-foreground hover:border-border"
                  }`}
                >
                  <RadioGroupItem value={opt.value} className="sr-only" />
                  {opt.label}
                </label>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Body Stats */}
        <Card className="border-border/50 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-5">
            <Label className="text-foreground font-semibold">Körperdaten</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Alter (Jahre)</Label>
                <Input type="number" placeholder="z. B. 30" value={age} onChange={(e) => setAge(e.target.value)} min={10} max={120} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Gewicht (kg)</Label>
                <Input type="number" placeholder="z. B. 80" value={weight} onChange={(e) => setWeight(e.target.value)} min={30} max={300} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Größe (cm)</Label>
                <Input type="number" placeholder="z. B. 178" value={height} onChange={(e) => setHeight(e.target.value)} min={100} max={250} />
              </div>
            </div>

            {showTargetWeight && (
              <div className="sm:col-span-3 space-y-2">
                <div className="flex items-start gap-2 rounded-lg bg-primary/5 border border-primary/20 p-3">
                  <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dein BMI liegt bei ≥ 30. Für eine realistischere Proteinberechnung wird dein <strong className="text-foreground">Wunschgewicht</strong> herangezogen.
                  </p>
                </div>
                <Label className="text-xs text-muted-foreground">Wunschgewicht (kg)</Label>
                <Input type="number" placeholder="z. B. 80" value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)} min={30} max={300} />
              </div>
            )}
          </CardContent>
        </Card>


        <Card className="border-border/50 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-4">
            <Label className="text-foreground font-semibold">Aktivitätsfaktor</Label>
            <RadioGroup value={activity} onValueChange={setActivity} className="space-y-2">
              {activityOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 cursor-pointer rounded-lg border p-4 transition-all ${
                    activity === opt.value
                      ? "border-primary bg-primary/5"
                      : "border-border/50 hover:border-border"
                  }`}
                >
                  <RadioGroupItem value={opt.value} className="mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-foreground">
                      {opt.label} <span className="text-muted-foreground font-normal">({opt.value})</span>
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Goal */}
        <Card className="border-border/50 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-4">
            <Label className="text-foreground font-semibold">Ziel</Label>
            <RadioGroup value={goal} onValueChange={(v) => setGoal(v as Goal)} className="space-y-2">
              {[
                { value: "maintenance", label: "Erhaltung", desc: "Kalorien auf Erhaltungsniveau." },
                { value: "moderate", label: "Moderates Defizit", desc: "80 % des Bedarfs – empfohlener Startpunkt." },
                { value: "aggressive", label: "Stärkeres Defizit (nur kurzfristig)", desc: "70 % des Bedarfs – nur kurzfristig sinnvoll." },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 cursor-pointer rounded-lg border p-4 transition-all ${
                    goal === opt.value
                      ? "border-primary bg-primary/5"
                      : "border-border/50 hover:border-border"
                  }`}
                >
                  <RadioGroupItem value={opt.value} className="mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Protein & Fat */}
        <Card className="border-border/50 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-5">
            <div className="space-y-4">
              <Label className="text-foreground font-semibold">Proteinziel</Label>
              <RadioGroup
                value={String(proteinFactor)}
                onValueChange={(v) => setProteinFactor(parseFloat(v) as ProteinFactor)}
                className="flex flex-wrap gap-3"
              >
                {[2.0, 2.2, 2.4].map((f) => (
                  <label
                    key={f}
                    className={`cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                      proteinFactor === f
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border/50 text-muted-foreground hover:border-border"
                    }`}
                  >
                    <RadioGroupItem value={String(f)} className="sr-only" />
                    {f.toFixed(1)} g / kg
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-foreground font-semibold">Fettberechnung</Label>
              <RadioGroup value={fatMode} onValueChange={(v) => setFatMode(v as FatMode)} className="space-y-2">
                <label
                  className={`flex items-start gap-3 cursor-pointer rounded-lg border p-4 transition-all ${
                    fatMode === "minimum"
                      ? "border-primary bg-primary/5"
                      : "border-border/50 hover:border-border"
                  }`}
                >
                  <RadioGroupItem value="minimum" className="mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-foreground">Mindestmenge</span>
                    <p className="text-xs text-muted-foreground">0,5 g pro kg Körpergewicht</p>
                  </div>
                </label>
                <label
                  className={`flex items-start gap-3 cursor-pointer rounded-lg border p-4 transition-all ${
                    fatMode === "standard"
                      ? "border-primary bg-primary/5"
                      : "border-border/50 hover:border-border"
                  }`}
                >
                  <RadioGroupItem value="standard" className="mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-foreground">Standardverteilung</span>
                    <p className="text-xs text-muted-foreground">20 % der Kalorien (Männer) / 30 % (Frauen)</p>
                  </div>
                </label>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Error */}
        {error && (
          <p className="text-sm text-destructive text-center font-medium">{error}</p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="cta" size="xl" className="flex-1" onClick={handleSubmit}>
            <Calculator className="w-5 h-5" />
            Jetzt berechnen
          </Button>
          <Button variant="ctaSecondary" size="xl" onClick={reset}>
            <RotateCcw className="w-4 h-4" />
            Zurücksetzen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalcInputForm;
