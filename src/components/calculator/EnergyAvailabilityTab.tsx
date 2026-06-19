import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, CheckCircle2, Info, ExternalLink } from "lucide-react";

type FfmMode = "bodyfat" | "direct";

const EnergyAvailabilityTab = () => {
  const [mode, setMode] = useState<FfmMode>("bodyfat");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [ffmDirect, setFfmDirect] = useState("");
  const [intake, setIntake] = useState("");
  const [exercise, setExercise] = useState("");
  const [result, setResult] = useState<{ ffm: number; ea: number } | null>(null);

  const handleCalculate = () => {
    const intakeN = parseFloat(intake);
    const exerciseN = parseFloat(exercise) || 0;
    let ffm = 0;

    if (mode === "bodyfat") {
      const w = parseFloat(weight);
      const bf = parseFloat(bodyFat);
      if (!w || !bf || bf <= 0 || bf >= 100) return;
      ffm = w * (1 - bf / 100);
    } else {
      ffm = parseFloat(ffmDirect);
    }

    if (!ffm || ffm <= 0 || !intakeN) return;

    const ea = (intakeN - exerciseN) / ffm;
    setResult({ ffm, ea });
  };

  const reset = () => {
    setWeight(""); setBodyFat(""); setFfmDirect(""); setIntake(""); setExercise(""); setResult(null);
  };

  const getStatus = (ea: number) => {
    if (ea < 30) return {
      label: "Kritisch niedrig",
      color: "text-red-600",
      bg: "bg-red-50 border-red-200",
      icon: AlertTriangle,
      text: "Unterhalb der kritischen Schwelle von 30 kcal/kg FFM. Bei dauerhafter Unterversorgung drohen hormonelle Gegenregulation, Zyklusstörungen und ein gedrosselter Stoffwechsel (RED-S).",
    };
    if (ea < 45) return {
      label: "Untere Versorgung",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      icon: Info,
      text: "Über der kritischen Schwelle, aber noch im unteren Bereich. Geeignet für gezielte Diätphasen – nicht als Dauerzustand.",
    };
    return {
      label: "Gut versorgt",
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
      icon: CheckCircle2,
      text: "Optimaler Bereich (≥ 45 kcal/kg FFM): genug Energie für Training, Regeneration, Hormone und Alltag.",
    };
  };

  return (
    <section className="px-5 md:px-8 py-8 md:py-12">
      <div className="container-narrow space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">Energieverfügbarkeit</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Energy Availability berechnen</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Die Energieverfügbarkeit zeigt, wie viel Energie deinem Körper nach dem Training noch für
            Grundumsatz, Hormone, Immunsystem und Regeneration bleibt – pro Kilogramm fettfreier Masse.
          </p>
        </div>

        <Card className="border-border/40 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p className="font-mono text-foreground bg-muted/50 rounded px-3 py-2 text-xs md:text-sm break-words">
                  EA = (Kalorienzufuhr − Trainingsverbrauch) ÷ Fettfreie Masse (FFM)
                </p>
                <p>
                  <strong className="text-foreground">FFM</strong> = Körpergewicht × (1 − Körperfettanteil ÷ 100).
                  Beispiel: 70 kg × (1 − 0,25) = 52,5 kg FFM.
                </p>
                <p>
                  <Link
                    to="/kompass/faq#koerperfett"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Wie bestimme ich meinen Körperfettanteil?
                  </Link>
                </p>
                <p>
                  <strong className="text-foreground">Schwellenwert:</strong> 30 kcal/kg FFM. Alles darunter
                  löst hormonelle Anpassungen aus.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40 shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-5">
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Fettfreie Masse (FFM) ermitteln</Label>
              <RadioGroup value={mode} onValueChange={(v) => setMode(v as FfmMode)} className="grid gap-2">
                <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-border/50 p-3 hover:bg-muted/30">
                  <RadioGroupItem value="bodyfat" id="ea-bodyfat" />
                  <span className="text-sm">Aus Gewicht + Körperfettanteil berechnen</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-border/50 p-3 hover:bg-muted/30">
                  <RadioGroupItem value="direct" id="ea-direct" />
                  <span className="text-sm">FFM direkt eingeben (z. B. aus Bioimpedanz-Messung)</span>
                </label>
              </RadioGroup>
            </div>

            {mode === "bodyfat" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ea-weight" className="text-sm">Körpergewicht (kg)</Label>
                  <Input id="ea-weight" type="number" inputMode="decimal" placeholder="z. B. 70" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ea-bf" className="text-sm">Körperfettanteil (%)</Label>
                  <Input id="ea-bf" type="number" inputMode="decimal" placeholder="z. B. 25" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="ea-ffm" className="text-sm">Fettfreie Masse (kg)</Label>
                <Input id="ea-ffm" type="number" inputMode="decimal" placeholder="z. B. 52,5" value={ffmDirect} onChange={(e) => setFfmDirect(e.target.value)} />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ea-intake" className="text-sm">Kalorienzufuhr heute (kcal)</Label>
                <Input id="ea-intake" type="number" inputMode="decimal" placeholder="z. B. 1800" value={intake} onChange={(e) => setIntake(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ea-ex" className="text-sm">Trainingsverbrauch (kcal)</Label>
                <Input id="ea-ex" type="number" inputMode="decimal" placeholder="z. B. 400" value={exercise} onChange={(e) => setExercise(e.target.value)} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button onClick={handleCalculate} className="flex-1">
                <Activity className="w-4 h-4 mr-2" />
                Berechnen
              </Button>
              {result && (
                <Button variant="outline" onClick={reset} className="sm:w-auto">Zurücksetzen</Button>
              )}
            </div>
          </CardContent>
        </Card>

        {result && (() => {
          const status = getStatus(result.ea);
          const StatusIcon = status.icon;
          return (
            <Card className={`border ${status.bg}`}>
              <CardContent className="p-5 md:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <StatusIcon className={`w-6 h-6 ${status.color}`} />
                  <div>
                    <p className="text-xs text-muted-foreground">Deine Energieverfügbarkeit</p>
                    <p className={`text-2xl font-bold ${status.color}`}>
                      {result.ea.toFixed(1)} kcal/kg FFM
                    </p>
                  </div>
                  <Badge variant="outline" className={`ml-auto ${status.color} border-current`}>
                    {status.label}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-background/60 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">FFM</p>
                    <p className="text-lg font-semibold text-foreground">{result.ffm.toFixed(1)} kg</p>
                  </div>
                  <div className="bg-background/60 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Schwelle</p>
                    <p className="text-lg font-semibold text-foreground">30 kcal/kg</p>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">{status.text}</p>

                <p className="text-xs text-muted-foreground italic">
                  Hinweis: Keine medizinische Diagnose. Bei anhaltenden Symptomen ärztlich abklären lassen.
                </p>
              </CardContent>
            </Card>
          );
        })()}
      </div>
    </section>
  );
};

export default EnergyAvailabilityTab;
