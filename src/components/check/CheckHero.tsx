import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

const CheckHero = () => (
  <section className="section-padding pb-8 md:pb-12">
    <div className="container-narrow space-y-6 text-center md:text-left">
      <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
        Kompass
      </Badge>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        Stoffwechsel-Selbstcheck
      </h1>

      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
        Müdigkeit, Hunger und Stagnation sind keine persönlichen Fehler – sie sind Signale.
        Dieser Check hilft dir zu verstehen, ob dein Stoffwechsel gerade unter Stress steht.
      </p>

      <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-lg">
        <strong>Wichtig:</strong> Es geht nicht um richtig oder falsch, sondern um Muster.
      </p>

      <Card className="border-border/40 bg-card/80 shadow-none max-w-md md:mx-0 mx-auto">
        <CardContent className="p-4 md:p-5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Eye className="w-4 h-4 text-secondary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-foreground text-sm">Selbstcheck statt Black Box</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Der Check bewertet keine Disziplin, sondern Hinweise auf Energieverfügbarkeit,
              Regulation und Belastung.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default CheckHero;
