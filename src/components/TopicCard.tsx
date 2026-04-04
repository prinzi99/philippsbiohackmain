import { ArrowRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  badge?: string;
  image?: string;
  featured?: boolean;
}

const TopicCard = ({ title, description, buttonText, href, badge, image, featured }: TopicCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${
        featured
          ? "bg-card border-primary/30 ring-2 ring-primary/20 shadow-md"
          : "bg-card border-border"
      }`}
    >
      <div className={image ? "flex flex-col sm:flex-row" : ""}>
        <div className={featured ? "p-6 sm:p-8 flex-1" : "p-6 flex-1"}>
          {badge && (
            <span className={`inline-block font-semibold rounded-full mb-3 ${
              featured
                ? "text-sm bg-primary text-primary-foreground px-3.5 py-1.5"
                : "text-xs bg-primary/10 text-primary px-2.5 py-1"
            }`}>
              {badge}
            </span>
          )}
          <h3 className={`font-display font-bold text-card-foreground mb-2 ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}>{title}</h3>
          <p className={`text-muted-foreground mb-4 leading-relaxed ${
            featured ? "text-sm sm:text-base" : "text-sm"
          }`}>{description}</p>
          <span className={`inline-flex items-center gap-2 gradient-cta text-accent-foreground font-semibold rounded-lg shadow-cta group-hover:opacity-90 transition-opacity ${
            featured ? "text-base px-6 py-3" : "text-sm px-5 py-2.5"
          }`}>
            {buttonText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
        {image && (
          <div className={featured ? "sm:w-44 shrink-0" : "sm:w-36 shrink-0"}>
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-full object-cover"
            />
          </div>
        )}
      </div>
    </a>
  );
};

export default TopicCard;
