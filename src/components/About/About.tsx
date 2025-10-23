"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./About.scss";

type Milestone =
  | { title: string; intro: string; bullets: string[] }
  | { title: string; content: string };

type CSSVars = CSSProperties & { ["--delay"]?: string };

const BASE_DELAY_S = 0.3;
const STAGGER_S = 0.3;

const milestones: Milestone[] = [
  {
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
    title: "How we operate",
    content: `100 % proprietary capital - no external investors or clients.

Sophisticated simulations and back-testing ensure stability and safety of our strategies, even in volatile markets.

Transparent governance framework, with formal policies for risk management and purely algorithmic trading, all ACER-compliant.`,
  },
];

export default function About() {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const elements = refs.current.filter(Boolean);
    if (!elements.length) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const styleWithDelay = (i: number): CSSVars => ({
    "--delay": `${BASE_DELAY_S + i * STAGGER_S}s`,
  });

  return (
    <section
      className="containerSection"
      aria-label="Powering Transparent Markets"
      aria-labelledby="transparent-markets-title"
      role="region"
    >
      <h3 id="transparent-markets-title" className="sectionTitle">
        Powering Transparent Markets
      </h3>

      <div className="cardsGrid">
        {milestones.map((m, i) => (
          <div
            key={m.title}
            className="aboutCard"
            style={styleWithDelay(i)}
            ref={(el) => {
              if (el) refs.current[i] = el;
            }}
            tabIndex={0}
            aria-label={m.title}
          >
            <h2 className="cardTitle">{m.title}</h2>

            {"bullets" in m ? (
              <>
                <p className="cardText">{m.intro}</p>
                <div className="bulletList">
                  {m.bullets.map((text, j) => (
                    <div key={j} className="bulletItem">
                      <p className="bulletText">{text}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="cardText">{m.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
