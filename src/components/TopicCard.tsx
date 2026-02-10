import { ArrowRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  badge?: string;
}

const TopicCard = ({ title, description, buttonText, href, badge }: TopicCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {badge && (
        <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-2 gradient-cta text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg shadow-cta group-hover:opacity-90 transition-opacity">
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
};

export default TopicCard;
