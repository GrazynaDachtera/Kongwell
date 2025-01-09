"use client";
import React, { useEffect, useRef } from "react";
import "./About.scss";

const About: React.FC = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    containerRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

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

  return (
    <section className="containerSection">
      <h3>Our Milestones</h3>

      <div className="firstRow">
        {milestones.slice(0, 2).map((milestone, index) => (
          <div
            key={index}
            className={`container container${index + 1}`}
            ref={(el) => (containerRefs.current[index] = el)}
          >
            <h2>{milestone.title}</h2>
            <p>{milestone.content}</p>
            {milestone.link ? (
              <a href={milestone.link} className="readMoreButton">
                Read More &gt;&gt;
              </a>
            ) : (
              <button className="readMoreButton">Read More &gt;&gt;</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
