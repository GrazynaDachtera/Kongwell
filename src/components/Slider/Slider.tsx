"use client";

import { useEffect, useState } from "react";
import "./Slider.scss";

const slides = [
  {
    title: "Who we are",
    text: `Kongwell Energy Trading is a privately-held quantitative trading firm founded by senior professionals with a track record that spans multiple asset classes. Our collective background in quantitative research, exchange technology, and risk management lets us approach energy markets with the same rigour typically reserved for global macro desks – only applied to the nuanced dynamics of power markets.`,
  },
  {
    title: "What we do",
    text: `We deploy proprietary algorithms and statistical models to identify and correct market inefficiencies. By supplying disciplined, price-sensitive order flow, we help validate quoted prices and accelerate price discovery during periods of heightened volatility.`,
  },
];

const Slider = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      className={`KongwellSlider ${animate ? "animate" : ""}`}
      aria-label="About Kongwell"
    >
      <div className="cards">
        {slides.map(({ title, text }) => (
          <article className="card fade-up" key={title}>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Slider;
