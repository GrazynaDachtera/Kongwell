import type { CSSProperties } from "react";
import "./ContactHome.scss";

type RevealStyle = CSSProperties & { ["--reveal-order"]?: number };

const TITLE_ID = "mission-title";

/* Entrance animation: data-reveal="scroll" (see app/home.scss). */
export default function ContactHome() {
  return (
    <section className="contactHome" aria-labelledby={TITLE_ID}>
      <h2 id={TITLE_ID} className="missionTitle" data-reveal="scroll">
        Our mission is simple
      </h2>

      <p
        className="missionText"
        data-reveal="scroll"
        style={{ "--reveal-order": 1 } as RevealStyle}
      >
        Deliver measurable efficiency gains to Europe’s energy markets –
        quietly, responsibly, and with unwavering respect for the rules that
        keep those markets fair.
      </p>
    </section>
  );
}
