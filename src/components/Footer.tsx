import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Philipp's Biohack</p>
          <nav className="flex gap-6">
            <Link to="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
