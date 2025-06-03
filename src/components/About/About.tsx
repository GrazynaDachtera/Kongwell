"use client";

import { useEffect, useRef } from "react";
import "./About.scss";

const milestones = [
  {
    title: "Expansion to International Markets",
    content:
      "Our company has successfully expanded its operations to international markets, reaching new customers and establishing a global presence. This expansion has allowed us to better serve our clients worldwide and grow our business.",
    link: "/Blog",
  },
  {
    title: "Sustainable Development Initiatives",
    content:
      "We are committed to sustainability and have implemented various initiatives to reduce our environmental impact. From green energy solutions to eco-friendly products, we continue to invest in sustainable development practices.",
    link: "/Blog",
  },
];

const About = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => refs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="containerSection">
      <h3>Our Milestones</h3>

      <div className="row">
        {milestones.map(({ title, content, link }, i) => (
          <div
            key={title}
            className="card"
            style={{ "--delay": `${i * 0.3}s` } as React.CSSProperties}
            ref={(el) => (refs.current[i] = el!)}
          >
            <h2>{title}</h2>
            <p>{content}</p>
            {link ? (
              <a href={link} className="readMoreButton">
                Read&nbsp;More&nbsp;&gt;&gt;
              </a>
            ) : (
              <button className="readMoreButton">
                Read&nbsp;More&nbsp;&gt;&gt;
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
