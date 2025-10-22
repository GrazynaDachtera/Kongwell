"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./Slider.scss";

type CSSVars = CSSProperties & { ["--delay"]?: string };

const STAGGER_S = 0.3;

const slides = [
  {
    title: "Who we are",
    text: ` <strong>Kongwell Energy Trading</strong> is a privately-held quantitative trading firm founded by senior professionals with a track record that spans multiple asset classes. Our collective background in quantitative research, exchange technology, and risk management lets us approach energy markets with the same rigour typically reserved for global macro desks – only applied to the nuanced dynamics of power markets.`,
  },
  {
    title: "What we do",
    text: `We deploy proprietary algorithms and statistical models to identify and correct market inefficiencies. By supplying disciplined, price-sensitive order flow, we help validate quoted prices and accelerate price discovery during periods of heightened volatility.`,
  },
];

function useRevealOnIntersect(threshold = 0.1) {
  const refs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    if (!refs.current.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);
  return refs;
}

export default function Slider() {
  const refs = useRevealOnIntersect(0.1);
  const setRefAt = (i: number) => (el: HTMLElement | null) => {
    if (el) refs.current[i] = el;
  };
  const styleWithDelay = (i: number): CSSVars => ({
    "--delay": `${i * STAGGER_S}s`,
  });

  return (
    <section className="kongwellSlider" aria-label="About Kongwell">
      <h3 className="sliderSectionTitle">About Kongwell</h3>

      <div className="sliderGrid">
        {slides.map(({ title, text }, i) => (
          <article
            key={title}
            className="sliderCard"
            style={styleWithDelay(i)}
            ref={setRefAt(i)}
          >
            <h3 className="sliderTitle">{title}</h3>
            <p
              className="sliderText"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
