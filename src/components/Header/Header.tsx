"use client";

import { useEffect, useState } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="KongwellHeader">
      <div className="content">
        <h1 className={`title${animate ? " animate" : ""}`}>
          Kongwell Energy Trading
        </h1>
        <p className={`description${animate ? " animate" : ""}`}>
          Maximize Your Energy Potential
        </p>
        <p className={`description${animate ? " animate" : ""}`}>
          Driving liquidity and
          <br />
          efficiency in European energy markets
        </p>
      </div>
    </section>
  );
};

export default Header;
