import type { CSSProperties, ReactNode } from "react";
import "./Slider.scss";

type RevealStyle = CSSProperties & { ["--reveal-order"]?: number };

type Slide = {
  title: string;
  paragraphs: ReactNode[];
};

const slides: readonly Slide[] = [
  {
    title: "Who we are",
    paragraphs: [
      <>
        <strong>Kongwell Energy Trading</strong> is a privately held
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

const TITLE_ID = "about-kongwell-title";

/* Entrance animation: data-reveal="scroll" (see app/home.scss). */
export default function Slider() {
  return (
    <section className="kongwellSlider" aria-labelledby={TITLE_ID}>
      <h2 id={TITLE_ID} className="sliderSectionTitle" data-reveal="scroll">
        About Kongwell
      </h2>

      <div className="sliderGrid">
        {slides.map((slide, i) => {
          const cardTitleId = `about-kongwell-card-${i}-title`;

          return (
            <article
              key={slide.title}
              className="sliderCard"
              data-reveal="scroll"
              style={{ "--reveal-order": i + 1 } as RevealStyle}
              aria-labelledby={cardTitleId}
            >
              <h3 id={cardTitleId} className="sliderTitle">
                {slide.title}
              </h3>

              <div className="sliderBody">
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
