"use client";

import { useEffect, useRef } from "react";
import "./About.scss";

type Milestone =
  | {
      title: string;
      intro: string;
      bullets: string[];
    }
  | {
      title: string;
      content: string;
    };

const milestones: Milestone[] = [
  {
    title: "Why it matters",
    intro:
      "Efficient, transparent pricing is essential to the smooth functioning of Europe’s energy ecosystem. Our strategies support the objectives of REMIT by:",
    bullets: [
      "Enhancing liquidity – Our disciplined, price-sensitive order flow converts passive quotes into executed trades, prompting market makers to refresh prices and supporting tighter spreads and deeper order books.",
      "Accelerating price discovery – By swiftly lifting and hitting out-of-line quotes we transmit information across venues, aligning prices with underlying fundamentals.",
      "Reducing systemic risk – Robust pre-trade limits, kill-switches, and real-time surveillance keep our activity safe and orderly.",
    ],
  },
  {
    title: "How we operate",
    content: `100 % proprietary capital — no external investors or clients.

Sophisticated simulations and back-testing ensure stability and safety of our strategies, even in volatile markets.

Transparent governance framework, with formal policies for risk management and purely algorithmic trading, all ACER-compliant.`,
  },
];

const About = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const elements = refs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => el && observer.observe(el));
    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="containerSection">
      <h3>Our Milestones</h3>

      <div className="row">
        {milestones.map((m, i) => (
          <div
            key={m.title}
            className="card"
            style={{ "--delay": `${i * 0.3}s` } as React.CSSProperties}
            ref={(el) => {
              if (el) refs.current[i] = el;
            }}
          >
            <h2>{m.title}</h2>

            {"bullets" in m ? (
              <>
                <p>{m.intro}</p>

                <div className="subCards">
                  {m.bullets.map((text, j) => (
                    <div key={j} className="subCard">
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>{m.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
