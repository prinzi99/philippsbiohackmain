import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <main className="min-h-screen bg-background">
      <title>Impressum – Philipp's Biohack</title>
      <meta name="robots" content="noindex" />

      <Header />

      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-slate max-w-none [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-sm [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Impressum</h1>

              <h2>Angaben gemäß § 5 ECG und § 25 MedienG</h2>
              <p>
                <strong className="text-foreground">Inovomarket Online-Marketing und Vertrieb e.U.</strong><br />
                Einzelunternehmen<br />
                Schulgasse 7<br />
                2100 Korneuburg<br />
                Österreich
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: +43 677 64113808<br />
                E-Mail: info@inovomarket.at<br />
                Website: https://tube-on-marketing.prinzphilipp.at
              </p>

              <h2>Vertretungsberechtigte Person</h2>
              <p>Geschäftsführer/Inhaber: Philipp Prinz</p>

              <h2>Firmenbucheintrag</h2>
              <p>
                Firmenbuchnummer: FN 619833w<br />
                Firmenbuchgericht: Landesgericht Korneuburg
              </p>

              <h2>GISA-Zahl</h2>
              <p>GISA-Zahl: 36790173</p>

              <h2>Umsatzsteuer-Identifikationsnummer</h2>
              <p>UID-Nummer gemäß § 27a UStG: ATU80291024</p>

              <h2>Finanzamt- und Steuernummer</h2>
              <p>Steuernummer: 222470437</p>

              <h2>Unternehmensregister</h2>
              <p>Kennziffer des Unternehmensregisters: R145M575Q</p>

              <h2>Zuständige Aufsichtsbehörde</h2>
              <p>
                Bezirkshauptmannschaft Korneuburg<br />
                Bankmannring 5, 2100 Korneuburg
              </p>

              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Werbefachmann / Online-Marketing-Berater<br />
                Verliehen in: Österreich<br />
                Zuständige Kammer: Wirtschaftskammer Niederösterreich<br />
                Berufsrechtliche Regelungen: Gewerbeordnung (<a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a>)
              </p>

              <h2>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV</h2>
              <p>
                Philipp Prinz<br />
                Schulgasse 7, 2100 Korneuburg
              </p>

              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

              <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>

              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>

              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem österreichischen Urheberrecht.
              </p>

              <h2>Bildnachweise</h2>
              <p>
                Eigene Bilder und lizenzierte Stock-Fotos. Für weitere Informationen kontaktieren Sie uns bitte.
              </p>

              <h2>Cookie-Einstellungen</h2>
              <p>
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen,
                die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
              </p>
              <p>
                Weitere Informationen finden Sie in unserer{" "}
                <Link to="/datenschutz">Datenschutzerklärung</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impressum;
