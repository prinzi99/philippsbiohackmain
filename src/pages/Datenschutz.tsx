import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-background">
      <title>Datenschutzerklärung – Philipp's Biohack</title>
      <meta name="robots" content="noindex" />

      <Header />

      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-slate max-w-none [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-sm [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
              <p><strong className="text-foreground">Stand: Dezember 2024</strong></p>

              <h2>1. Verantwortlicher</h2>
              <p>
                <strong className="text-foreground">Inovomarket Online-Marketing und Vertrieb e.U.</strong><br />
                Schulgasse 7<br />
                2100 Korneuburg<br />
                Österreich<br />
                E-Mail: info@inovomarket.at<br />
                Telefon: +43 677 64113808
              </p>

              <h2>2. Datenschutzbeauftragter</h2>
              <p>
                Ein Datenschutzbeauftragter ist gesetzlich nicht vorgeschrieben. Bei Fragen wenden Sie sich
                an den Verantwortlichen.
              </p>

              <h2>3. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen
                Website sowie unserer Inhalte und Leistungen erforderlich ist.
              </p>

              <h2>4. Hosting</h2>
              <p>
                <strong className="text-foreground">Hoster:</strong> Lovable Labs Incorporated, Dover, Delaware, USA<br />
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">https://lovable.dev</a><br />
                Datenschutzerklärung:{" "}
                <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer">
                  https://lovable.dev/privacy
                </a>
              </p>

              <h2>5. Cookies</h2>
              <p>
                Wir verwenden technisch notwendige, funktionale, Analyse- und Marketing-Cookies. Sie können
                die Speicherung über Ihre Browser-Einstellungen verhindern.
              </p>

              <h2>6. Newsletter / E-Mail-Marketing (Quentn)</h2>
              <p>
                <strong className="text-foreground">Anbieter:</strong> Quentn.com GmbH, Friedrich-Ebert-Str. 51, 14469 Potsdam, Deutschland<br />
                <a href="https://quentn.com/datenschutz" target="_blank" rel="noopener noreferrer">
                  https://quentn.com/datenschutz
                </a>
              </p>
              <p>
                Quentn ist DSGVO-konform mit Server-Standort in Deutschland. Erhobene Daten: E-Mail, Vorname,
                IP-Adresse, Öffnungsraten, Klickverhalten.
              </p>
              <p>
                Abmeldung jederzeit über den Link im Newsletter oder per E-Mail an info@inovomarket.at.
              </p>

              <h2>7. Webinar-Software (Webinaris)</h2>
              <p>
                <strong className="text-foreground">Anbieter:</strong> Webinaris GmbH, Bussardstraße 5, 82166 Gräfelfing, Deutschland<br />
                <a href="https://www.webinaris.com/datenschutz" target="_blank" rel="noopener noreferrer">
                  https://www.webinaris.com/datenschutz
                </a>
              </p>

              <h2>8. Google Tag Manager & Ads</h2>
              <p>
                Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h2>9. Ihre Rechte</h2>
              <p>
                Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18),
                Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21), Widerruf (Art. 7 Abs. 3),
                Beschwerde bei Aufsichtsbehörde (Art. 77 DSGVO).
              </p>
              <p>
                <strong className="text-foreground">Aufsichtsbehörde:</strong> Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien<br />
                E-Mail: dsb@dsb.gv.at
              </p>

              <h2>Cookie-Einstellungen</h2>
              <p>
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen,
                die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
              </p>
              <p>
                Weitere Informationen finden Sie in unserem{" "}
                <Link to="/impressum">Impressum</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Datenschutz;
