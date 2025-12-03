"use client";

import { useEffect, useId, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import "./Slider.scss";

type CSSVars = CSSProperties & { ["--i"]?: number };

type Slide = {
  title: string;
  paragraphs: ReactNode[];
};

const slides: readonly Slide[] = [
  {
    title: "Who we are",
    paragraphs: [
      <>
        <strong>Kongwell Energy Trading</strong> is a privately-held
        quantitative trading firm founded by senior professionals with a track
        record that spans multiple asset classes. Our collective background in
        quantitative research, exchange technology, and risk management lets us
        approach energy markets with the same rigour typically reserved for
        global macro desks - only applied to the nuanced dynamics of power
        markets.
      </>,
    ],
  },
  {
    title: "What we do",
    paragraphs: [
      <>
        We deploy proprietary algorithms and statistical models to identify and
        correct market inefficiencies. By supplying disciplined, price-sensitive
        order flow, we help validate quoted prices and accelerate price
        discovery during periods of heightened volatility.
      </>,
    ],
  },
] as const;

export default function Slider() {
  const sectionId = useId();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-reveal="card"]')
    );
    if (!cards.length) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      cards.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const titleId = `${sectionId}-title`;

  return (
    <section
      ref={sectionRef}
      className="kongwellSlider"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="sliderSectionTitle">
        About Kongwell
      </h2>

      <div className="sliderGrid">
        {slides.map((slide, i) => {
          const cardTitleId = `${sectionId}-card-${i}-title`;
          const cardBodyId = `${sectionId}-card-${i}-body`;

          return (
            <article
              key={slide.title}
              className="sliderCard"
              data-reveal="card"
              style={{ "--i": i } as CSSVars}
              aria-labelledby={cardTitleId}
              aria-describedby={cardBodyId}
              tabIndex={0}
            >
              <h3 id={cardTitleId} className="sliderTitle">
                {slide.title}
              </h3>

              <div id={cardBodyId} className="sliderBody">
                {slide.paragraphs.map((p, idx) => (
                  <p key={idx} className="sliderText">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
