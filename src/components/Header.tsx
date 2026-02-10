import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14 px-4">
        <Link to="/" className="font-display text-lg font-bold text-foreground tracking-tight">
          Philipp's Biohack
        </Link>
      </div>
    </header>
  );
};

export default Header;
