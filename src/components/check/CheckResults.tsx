import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { type CheckResult, levelData } from "@/lib/metabolicCheck";
import {
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  Zap,
  Activity,
  Brain,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calculator,
} from "lucide-react";

const levelIcons = [ShieldCheck, AlertTriangle, AlertOctagon];
const levelColors = [
  "text-secondary border-secondary/30 bg-secondary/5",
  "text-amber-600 border-amber-500/30 bg-amber-50",
  "text-destructive border-destructive/30 bg-destructive/5",
];
const areaIcons = [Zap, Activity, Brain];

const statusBadge = (status: string) => {
  const map: Record<string, { class: string; label: string }> = {
    unauffällig: { class: "bg-secondary/10 text-secondary border-secondary/20", label: "Unauffällig" },
    "im Blick behalten": { class: "bg-amber-100 text-amber-700 border-amber-300/40", label: "Im Blick behalten" },
    auffällig: { class: "bg-destructive/10 text-destructive border-destructive/20", label: "Auffällig" },
  };
  const s = map[status] ?? map["unauffällig"];
  return <Badge variant="outline" className={cn("text-[10px] px-2 py-0.5", s.class)}>{s.label}</Badge>;
};

interface Props {
  result: CheckResult;
}

const CheckResults = ({ result }: Props) => {
  const data = levelData[result.level];
  const LevelIcon = levelIcons[result.level];

  return (
    <section className="px-5 md:px-8 pb-12 md:pb-16">
      <div className="container-narrow space-y-8">
        {/* Main result */}
        <Card className={cn("border shadow-sm", levelColors[result.level])}>
          <CardContent className="p-6 md:p-8 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto bg-current/5">
              <LevelIcon className="w-7 h-7" />
            </div>
            <p className="text-sm text-muted-foreground">
              Dein Ergebnis: <span className="font-semibold text-foreground">{result.totalScore} von 8 Punkten</span>
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{data.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">{data.text}</p>
            <p className="text-xs text-muted-foreground/70 italic">
              Der Check ist eine Orientierungshilfe, keine medizinische Diagnose.
            </p>
          </CardContent>
        </Card>

        {/* Area breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {result.areas.map((area, i) => {
            const AreaIcon = areaIcons[i];
            return (
              <Card key={area.label} className="border-border/40 shadow-none">
                <CardContent className="p-4 md:p-5 space-y-3 text-center">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto">
                    <AreaIcon className="w-4 h-4 text-secondary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{area.label}</h3>
                  <p className="text-xs text-muted-foreground">
                    {area.yesCount} von {area.total} Ja-Antworten
                  </p>
                  {statusBadge(area.status)}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Practical hint */}
        <Card className="border-border/40 bg-card/80 shadow-none">
          <CardContent className="p-5 md:p-6 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-foreground text-sm">Praxishinweis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.hint}</p>
            </div>
          </CardContent>
        </Card>

        {/* Next steps */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground text-center">Was jetzt sinnvoll sein kann</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.steps.map((step) => (
              <div key={step} className="flex items-start gap-3 rounded-xl border border-border/40 p-4">
                <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="cta" size="lg" asChild>
            <Link to="/buch/bonus/intern/kalorienrechner">
              <Calculator className="w-4 h-4 mr-1" />
              Zum Kalorien- & Makro-Rechner
            </Link>
          </Button>
          <Button variant="ctaSecondary" size="lg" asChild>
            <Link to="/buch/bonus/intern">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Zurück zum Bonusbereich
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckResults;
