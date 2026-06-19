import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Tool {
  title: string;
  description: string;
  url?: string;
}

interface BiohackingCategoryProps {
  icon: React.ElementType;
  title: string;
  intro: string;
  tools: Tool[];
}

const BiohackingCategory = ({ icon: Icon, title, intro, tools }: BiohackingCategoryProps) => (
  <section className="px-5 md:px-8 pb-12 md:pb-16">
    <div className="container-narrow space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-secondary" />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-foreground">{title}</h2>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Card
            key={tool.title}
            className="border-border/40 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-5 flex flex-col h-full space-y-3">
              <h3 className="font-semibold text-foreground text-sm">{tool.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                {tool.description}
              </p>
              <Button
                variant="ctaSecondary"
                size="sm"
                className="w-full mt-auto"
                disabled={!tool.url}
              >
                Mehr erfahren
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default BiohackingCategory;
