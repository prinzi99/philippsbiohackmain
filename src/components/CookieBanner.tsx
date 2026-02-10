import { useState } from "react";
import { useCookieConsent, type ConsentState } from "@/hooks/use-cookie-consent";
import { Shield, Settings, X } from "lucide-react";

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Notwendig",
    description: "Essenzielle Funktionen wie Formulare, Navigation und Sicherheit. Dazu gehören auch Dienste wie Quentn.",
    locked: true,
  },
  {
    key: "analytics" as const,
    label: "Statistik",
    description: "Helfen uns zu verstehen, wie Besucher die Website nutzen (z. B. Google Analytics).",
    locked: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description: "Werden verwendet, um Werbung relevanter zu gestalten (z. B. Facebook Pixel).",
    locked: false,
  },
  {
    key: "external_media" as const,
    label: "Externe Medien",
    description: "Inhalte von externen Plattformen wie YouTube oder Vimeo.",
    locked: false,
  },
];

export default function CookieBanner() {
  const { showBanner, showSettings, acceptAll, acceptNecessary, rejectAll, saveCustom, openSettings, closeSettings } =
    useCookieConsent();

  const [custom, setCustom] = useState<Omit<ConsentState, "necessary">>({
    analytics: false,
    marketing: false,
    external_media: false,
  });

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[9998]" />

      {/* Banner */}
      <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 md:p-6">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card shadow-lg">
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="flex-1">
                <h2 className="font-display text-base font-bold text-foreground">
                  Datenschutz-Einstellungen
                </h2>
              </div>
            </div>

            {/* Text */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-1">
              Wir nutzen Cookies und ähnliche Technologien, um dir die bestmögliche Erfahrung zu bieten.
              Nicht notwendige Cookies werden erst nach deiner Einwilligung geladen.
            </p>
            <p className="text-xs text-muted-foreground/70 mb-4">
              Mehr Informationen findest du in unserer{" "}
              <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                Datenschutzerklärung
              </a>{" "}
              und im{" "}
              <a href="/impressum" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                Impressum
              </a>
              .
            </p>

            {/* Settings panel */}
            {showSettings && (
              <div className="mb-4 space-y-2 border border-border rounded-lg p-4 bg-secondary/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-foreground">Individuelle Auswahl</span>
                  <button onClick={closeSettings} className="p-1 rounded hover:bg-secondary" aria-label="Schließen">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat.key}
                    className="flex items-start gap-3 py-2 border-b border-border last:border-0"
                  >
                    <input
                      type="checkbox"
                      checked={cat.locked ? true : custom[cat.key as keyof typeof custom]}
                      disabled={cat.locked}
                      onChange={(e) => {
                        if (!cat.locked) {
                          setCustom((prev) => ({ ...prev, [cat.key]: e.target.checked }));
                        }
                      }}
                      className="mt-1 h-4 w-4 rounded border-border text-primary accent-primary"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-foreground">{cat.label}</span>
                      {cat.locked && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                          Immer aktiv
                        </span>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={acceptAll}
                className="flex-1 gradient-cta text-accent-foreground font-semibold text-sm py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptNecessary}
                className="flex-1 bg-secondary text-secondary-foreground font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-secondary text-secondary-foreground font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Ablehnen
              </button>
              {!showSettings ? (
                <button
                  onClick={openSettings}
                  className="flex-1 border border-border text-foreground font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-secondary/50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Einstellungen
                </button>
              ) : (
                <button
                  onClick={() => saveCustom(custom)}
                  className="flex-1 border border-primary text-primary font-semibold text-sm py-2.5 px-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Auswahl speichern
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
