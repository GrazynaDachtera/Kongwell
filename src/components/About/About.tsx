"use client";

import { useEffect, useId, useRef } from "react";
import "./About.scss";

type Milestone =
  | { kind: "bullets"; title: string; intro: string; bullets: string[] }
  | { kind: "content"; title: string; content: string };

type CSSVars = React.CSSProperties & {
  ["--i"]?: number;
  ["--j"]?: number;
};

const milestones: readonly Milestone[] = [
  {
    kind: "bullets",
    title: "Why it matters",
    intro:
      "Efficient, transparent pricing is essential to the smooth functioning of Europe’s energy ecosystem. Our strategies support the objectives of REMIT by:",
    bullets: [
      "Enhancing liquidity - Our disciplined, price-sensitive order flow converts passive quotes into executed trades, prompting market makers to refresh prices and supporting tighter spreads and deeper order books.",
      "Accelerating price discovery - By swiftly lifting and hitting out-of-line quotes we transmit information across venues, aligning prices with underlying fundamentals.",
      "Reducing systemic risk - Robust pre-trade limits, kill-switches, and real-time surveillance keep our activity safe and orderly.",
    ],
  },
  {
    kind: "content",
    title: "How we operate",
    content: `100% proprietary capital - no external investors or clients.

Sophisticated simulations and back-testing ensure stability and safety of our strategies, even in volatile markets.

Transparent governance framework, with formal policies for risk management and purely algorithmic trading, all ACER-compliant.`,
  },
] as const;

function contentToParagraphs(content: string) {
  return content
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function About() {
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
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const titleId = `${sectionId}-title`;

  return (
    <section
      ref={sectionRef}
      className="containerSection"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="sectionTitle">
        Powering Transparent Markets
      </h2>

      <div className="cardsGrid">
        {milestones.map((m, i) => {
          const cardTitleId = `${sectionId}-card-${i}-title`;
          const cardBodyId = `${sectionId}-card-${i}-body`;

          return (
            <article
              key={m.title}
              className="aboutCard"
              data-reveal="card"
              style={{ "--i": i } as CSSVars}
              aria-labelledby={cardTitleId}
              aria-describedby={cardBodyId}
              tabIndex={0}
            >
              <h3 id={cardTitleId} className="cardTitle">
                {m.title}
              </h3>

              {m.kind === "bullets" ? (
                <>
                  <p id={cardBodyId} className="cardText">
                    {m.intro}
                  </p>

                  <ul className="bulletList">
                    {m.bullets.map((text, j) => (
                      <li
                        key={`${j}-${text.slice(0, 24)}`}
                        className="bulletItem"
                        style={{ "--j": j } as CSSVars}
                      >
                        <p className="bulletText">{text}</p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div id={cardBodyId} className="cardTextGroup">
                  {contentToParagraphs(m.content).map((p, idx) => (
                    <p key={idx} className="cardText">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
