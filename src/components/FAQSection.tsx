import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Ist das medizinische Beratung?",
    answer:
      "Nein. Philipp's Biohack bietet keine medizinische Beratung, Diagnosen oder Therapieempfehlungen. Alle Inhalte dienen der Selbstreflexion und allgemeinen Information. Bei gesundheitlichen Beschwerden wende dich an einen Arzt.",
  },
  {
    question: "Kostet das etwas?",
    answer:
      "Die Checks und Quizzes sind kostenlos. Auf den jeweiligen Themenseiten werden ggf. weiterführende Schritte und Empfehlungen erklärt.",
  },
  {
    question: "Warum ein Quiz oder Check?",
    answer:
      "Weil jeder anders tickt. Ein kurzer Check gibt dir schnelle Klarheit, wo du stehst – und was für dich persönlich der sinnvollste nächste Schritt ist.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Häufige Fragen
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-lg px-4 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-card-foreground hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
