import type { CSSProperties } from "react";
import "./Header.scss";

type RevealStyle = CSSProperties & { ["--reveal-order"]?: number };

/* Entrance plays on page load in pure CSS (data-reveal="load", see
   app/home.scss), so the headline never waits for JavaScript. */
const Header: React.FC = () => {
  return (
    <header
      className="KongwellHeader"
      aria-label="Kongwell Energy Trading"
      role="banner"
    >
      <div className="content">
        <h1 className="title" data-reveal="load">
          Kongwell Energy Trading
        </h1>
        <p
          className="description"
          data-reveal="load"
          style={{ "--reveal-order": 1 } as RevealStyle}
        >
          Driving liquidity and efficiency in European energy markets.
        </p>
      </div>
    </header>
  );
};

export default Header;
