"use client";
import React, { useEffect, useState, useRef } from "react";
import "./About.scss";

const About: React.FC = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the container is visible
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing once shown
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
    {
      title: "Customer-Centric Innovation",
      content:
        "We focus on customer needs and feedback to drive innovation, resulting in products and services that truly meet market demands. Our customer-centric approach has led to increased satisfaction and loyalty.",
      link: "/Blog",
    },
    {
      title: "Another Milestone",
      content: "Some more content about this milestone.",
      link: "/Blog",
    },
  ];

  return (
    <section className="containerSection">
      <div className="firstRow">
        {milestones.slice(0, 2).map((milestone, index) => (
          <div
            key={index}
            className={`container container${index + 1}`}
            ref={(el) => (containerRefs.current[index] = el)}
          >
            <h2>{milestone.title}</h2>
            <p>{milestone.content}</p>
            {/* "Read More" Button */}
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
      <div className="secondRow">
        {milestones.slice(2).map((milestone, index) => (
          <div
            key={index + 2}
            className={`container container${index + 3}`}
            ref={(el) => (containerRefs.current[index + 2] = el)}
          >
            <h2>{milestone.title}</h2>
            <p>{milestone.content}</p>
            {/* "Read More" Button */}
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
