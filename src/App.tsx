import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsentProvider } from "@/hooks/use-cookie-consent";
import CookieBanner from "@/components/CookieBanner";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Kompass from "./pages/Kompass";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CookieConsentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
        <CookieSettingsButton />
      </CookieConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
