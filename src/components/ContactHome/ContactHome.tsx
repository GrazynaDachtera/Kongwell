"use client";

import { useEffect, useId, useRef } from "react";
import "./ContactHome.scss";

type CSSVars = React.CSSProperties & { ["--i"]?: number };

export default function ContactHome() {
  const sectionId = useId();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      node.classList.add("show");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add("show");
        observer.unobserve(node);
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const titleId = `${sectionId}-title`;
  const textId = `${sectionId}-text`;

  return (
    <section ref={sectionRef} className="contactHome" aria-labelledby={titleId}>
      <h2 id={titleId} className="missionTitle">
        Our Mission is simple
      </h2>

      <p
        id={textId}
        className="missionText fadeUp"
        style={{ "--i": 1 } as CSSVars}
      >
        Deliver measurable efficiency gains to Europe’s energy markets -
        quietly, responsibly, and with unwavering respect for the rules that
        keep those markets fair.
      </p>
    </section>
  );
}
