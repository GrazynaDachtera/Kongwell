"use client";

import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="KongwellHeader">
      <div className="content">
        <h1 className="title">Kongwell Energy Trading</h1>
        <p className={`description${animate ? " animate" : ""}`}>
          Maximize Your Energy Potential&nbsp;|&nbsp;Go Big with King Kong
        </p>
      </div>
    </section>
  );
};

export default Header;
