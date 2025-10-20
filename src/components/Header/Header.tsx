"use client";

import { useEffect, useState } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="KongwellHeader" aria-label="Kongwell Energy Trading">
      <div className={`content ${animate ? "animate" : ""}`}>
        <h1 className="title fade-up">Kongwell Energy Trading</h1>
        <p className="description fade-up">
          Driving liquidity and efficiency in European energy markets.
        </p>
      </div>
    </section>
  );
};

export default Header;
