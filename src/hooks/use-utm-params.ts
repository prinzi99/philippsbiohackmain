import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function useUtmParams() {
  const [searchParams] = useSearchParams();

  const utmParams = useMemo(() => {
    const params: Record<string, string> = {};
    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) params[key] = value;
    });
    return params;
  }, [searchParams]);

  const hasUtm = Object.keys(utmParams).length > 0;

  /** Append incoming UTM params to a URL, replacing any existing UTM params */
  const withUtm = (href: string): string => {
    if (!hasUtm) return href;
    const url = new URL(href);
    // Remove existing UTM params from the target URL
    UTM_KEYS.forEach((key) => url.searchParams.delete(key));
    // Add incoming UTM params
    Object.entries(utmParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  };

  return { utmParams, hasUtm, withUtm };
}
