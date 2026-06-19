import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const CalcHero = () => (
  <section className="section-padding pb-8 md:pb-12">
    <div className="container-narrow space-y-6 text-center md:text-left">
      <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
        Bonus-Tool
      </Badge>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        Kalorien- & Makro-Rechner
      </h1>

      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
        Dieses Tool hilft dir dabei, deinen geschätzten Kalorienbedarf und eine sinnvolle
        Makroverteilung zu berechnen. Die Ergebnisse sind kein Dogma, sondern ein fundierter
        Startpunkt.
      </p>

      <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-lg">
        <strong>Wichtig:</strong> Die Berechnung liefert Schätzwerte. Entscheidend ist immer,
        wie dein Körper in der Praxis reagiert.
      </p>

      <Card className="border-border/40 bg-card/80 shadow-none max-w-md md:mx-0 mx-auto">
        <CardContent className="p-4 md:p-5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-secondary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-foreground text-sm">Verstehen statt raten</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Die Formeln helfen dir beim Start. Die Feinjustierung passiert im Alltag.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default CalcHero;
