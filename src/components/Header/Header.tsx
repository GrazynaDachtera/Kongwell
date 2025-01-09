"use client";

import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 10); // Adjusted delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="KongwellHeader">
      <div className="content">
        <h1 className="title">Kongwell Energy Trading</h1>
        <p className={`description ${animate ? "animate" : ""}`}>
          Maximize Your Energy Potential | Go Big with King Kong
        </p>
      </div>
    </section>
  );
};

export default Header;
