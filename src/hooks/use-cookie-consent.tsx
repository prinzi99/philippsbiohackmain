import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "external_media";

export interface ConsentState {
  necessary: boolean; // always true
  analytics: boolean;
  marketing: boolean;
  external_media: boolean;
}

interface CookieConsentContextType {
  consent: ConsentState | null; // null = not yet decided
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  rejectAll: () => void;
  saveCustom: (consent: Omit<ConsentState, "necessary">) => void;
  openSettings: () => void;
  closeSettings: () => void;
  reopenBanner: () => void;
}

const STORAGE_KEY = "pb_cookie_consent";
const CONSENT_VERSION = 1;

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.consent as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ consent, version: CONSENT_VERSION, timestamp: new Date().toISOString() })
  );
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(() => loadConsent());
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!consent) setShowBanner(true);
  }, [consent]);

  const applyConsent = useCallback((c: ConsentState) => {
    setConsent(c);
    saveConsent(c);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent({ necessary: true, analytics: true, marketing: true, external_media: true });
  }, [applyConsent]);

  const acceptNecessary = useCallback(() => {
    applyConsent({ necessary: true, analytics: false, marketing: false, external_media: false });
  }, [applyConsent]);

  const rejectAll = useCallback(() => {
    applyConsent({ necessary: true, analytics: false, marketing: false, external_media: false });
  }, [applyConsent]);

  const saveCustom = useCallback((custom: Omit<ConsentState, "necessary">) => {
    applyConsent({ necessary: true, ...custom });
  }, [applyConsent]);

  const openSettings = useCallback(() => setShowSettings(true), []);
  const closeSettings = useCallback(() => setShowSettings(false), []);
  const reopenBanner = useCallback(() => {
    setShowBanner(true);
    setShowSettings(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, showSettings, acceptAll, acceptNecessary, rejectAll, saveCustom, openSettings, closeSettings, reopenBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
