import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const BiohackingHero = () => (
  <section className="section-padding pb-8 md:pb-12">
    <div className="container-narrow space-y-6 text-center md:text-left">
      <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
        Bonusbereich – Tools
      </Badge>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        Biohacking & Tools
      </h1>

      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
        Apps, Geräte und einfache Hilfsmittel, die dir helfen können, deinen
        Stoffwechsel besser zu verstehen.
      </p>

      <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-lg">
        Viele Zusammenhänge im Stoffwechsel werden erst sichtbar, wenn man
        beginnt, kleine Messpunkte zu beobachten. Diese Tools können dabei
        helfen – ohne dass dein Alltag zu einem Labor werden muss.
      </p>

      <Card className="border-border/40 bg-card/80 shadow-none max-w-md md:mx-0 mx-auto">
        <CardContent className="p-4 md:p-5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
            <BarChart3 className="w-4 h-4 text-secondary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-foreground text-sm">Messen statt raten</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ein paar einfache Datenpunkte können helfen, Muster zu erkennen
              und Entscheidungen klarer zu treffen.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default BiohackingHero;
