import type { CSSProperties } from "react";
import "./About.scss";

type RevealStyle = CSSProperties & { ["--reveal-order"]?: number };

type Bullet = { lead: string; text: string };

type Milestone =
  | { kind: "bullets"; title: string; intro: string; bullets: Bullet[] }
  | { kind: "content"; title: string; content: string };

const milestones: readonly Milestone[] = [
  {
    kind: "bullets",
    title: "Why it matters",
    intro:
      "Efficient, transparent pricing is essential to the smooth functioning of Europe’s energy ecosystem. Our strategies support the objectives of REMIT by:",
    bullets: [
      {
        lead: "Enhancing liquidity",
        text: "our disciplined, price-sensitive order flow converts passive quotes into executed trades, prompting market makers to refresh prices and supporting tighter spreads and deeper order books.",
      },
      {
        lead: "Accelerating price discovery",
        text: "by swiftly lifting and hitting out-of-line quotes we transmit information across venues, aligning prices with underlying fundamentals.",
      },
      {
        lead: "Reducing systemic risk",
        text: "robust pre-trade limits, kill-switches, and real-time surveillance keep our activity safe and orderly.",
      },
    ],
  },
  {
    kind: "content",
    title: "How we operate",
    content: `100% proprietary capital – no external investors or clients.

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

const TITLE_ID = "transparent-markets-title";

/* Entrance animation: data-reveal="scroll" (see app/home.scss). */
export default function About() {
  return (
    <section className="containerSection" aria-labelledby={TITLE_ID}>
      <h2 id={TITLE_ID} className="sectionTitle" data-reveal="scroll">
        Powering transparent markets
      </h2>

      <div className="cardsGrid">
        {milestones.map((m, i) => {
          const cardTitleId = `transparent-markets-card-${i}-title`;

          return (
            <article
              key={m.title}
              className="aboutCard"
              data-reveal="scroll"
              style={{ "--reveal-order": i + 1 } as RevealStyle}
              aria-labelledby={cardTitleId}
            >
              <h3 id={cardTitleId} className="cardTitle">
                {m.title}
              </h3>

              {m.kind === "bullets" ? (
                <>
                  <p className="cardText">{m.intro}</p>

                  <ul className="bulletList">
                    {m.bullets.map(({ lead, text }) => (
                      <li key={lead} className="bulletItem">
                        <p className="bulletText">
                          <strong>{lead}</strong> – {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="cardTextGroup">
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
