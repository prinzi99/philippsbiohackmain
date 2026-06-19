import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { questions, type CheckAnswers } from "@/lib/metabolicCheck";
import { CheckCircle2, XCircle, RotateCcw, ArrowRight } from "lucide-react";

interface Props {
  answers: CheckAnswers;
  onAnswer: (index: number, value: boolean) => void;
  onEvaluate: () => void;
  onReset: () => void;
  error: string | null;
}

const CheckQuestions = ({ answers, onAnswer, onEvaluate, onReset, error }: Props) => (
  <section className="px-5 md:px-8 pb-12 md:pb-16">
    <div className="container-narrow">
      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-5 md:p-8 space-y-6">
          <p className="text-sm font-medium text-foreground">
            Bitte beantworte die folgenden Fragen so ehrlich wie möglich
          </p>

          <div className="space-y-3">
            {questions.map((q, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 p-4 md:p-5 space-y-3"
              >
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="text-muted-foreground mr-1.5">{i + 1}.</span>
                  {q}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onAnswer(i, true)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all",
                      answers[i] === true
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/50 text-muted-foreground hover:border-border hover:bg-muted/30"
                    )}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Ja
                  </button>
                  <button
                    type="button"
                    onClick={() => onAnswer(i, false)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all",
                      answers[i] === false
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-border/50 text-muted-foreground hover:border-border hover:bg-muted/30"
                    )}
                  >
                    <XCircle className="w-4 h-4" />
                    Nein
                  </button>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="cta" size="lg" className="flex-1" onClick={onEvaluate}>
              Check auswerten
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ctaSecondary" size="lg" onClick={onReset}>
              <RotateCcw className="w-4 h-4 mr-1" />
              Zurücksetzen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default CheckQuestions;
