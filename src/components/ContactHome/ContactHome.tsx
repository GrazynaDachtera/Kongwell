"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./ContactHome.scss";

type CSSVars = CSSProperties & { ["--delay"]?: string };

const BASE_DELAY_S = 0.35;
const STAGGER_S = 0.3;

export default function ContactHome() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("show");
          observer.unobserve(node);
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="contactHome" aria-label="Our Mission">
      <h3 className="missionTitle">Our Mission is simple</h3>

      <h4
        className="missionText fadeUp"
        style={{ "--delay": `${BASE_DELAY_S + STAGGER_S}s` } as CSSVars}
      >
        Deliver measurable efficiency gains to Europe’s energy markets –
        quietly, responsibly, and with unwavering respect for the rules that
        keep those markets fair.
      </h4>
    </section>
  );
}
