import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { Shield } from "lucide-react";

export default function CookieSettingsButton() {
  const { consent, reopenBanner } = useCookieConsent();

  // Only show after user has made a choice
  if (!consent) return null;

  return (
    <button
      onClick={reopenBanner}
      aria-label="Cookie-Einstellungen öffnen"
      title="Cookie-Einstellungen"
      className="fixed bottom-4 left-4 z-[9990] w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
    >
      <Shield className="w-4 h-4 text-muted-foreground" />
    </button>
  );
}
