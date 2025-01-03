"use client";

import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.scss";

export default function AboutUs() {
  const containerRefs = useRef([]);

  const milestones = [
    { title: "Jacob", content: "Hi, my name is Jacob" },
    { title: "Emily", content: "Hello, I'm Emily" },
    { title: "Michael", content: "Hey there, I'm Michael" },
    { title: "Sarah", content: "Greetings, I'm Sarah" },
  ];

  return (
    <>
      <section className="AboutUsPage">
        <Navbar />
        <section className="AboutUsSection">
          <h2>Meet Our Team</h2>
          <div className="AboutUsContainer">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`container container${index + 1}`}
                ref={(el) => (containerRefs.current[index] = el)}
              >
                <h3>{milestone.title}</h3>
                <p>{milestone.content}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
