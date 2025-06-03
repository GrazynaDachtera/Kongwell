"use client";

import { Carousel } from "antd";
import "antd/dist/reset.css";
import "./Slider.scss";

const baseSlides = [
  {
    title: "Our Services",
    text: "At Kongwell, we provide comprehensive energy trading solutions that bridge the gap between producers and consumers across global markets. Our services focus on optimizing supply chains and reducing risk to ensure the seamless flow of energy. We aim to deliver innovative, reliable, and efficient solutions that meet the growing demands of the energy industry.",
  },

  {
    title: "Our Mission",
    text: "We envision a future where global energy systems are sustainable, efficient, and driven by innovation. Kongwell aims to be a leader in the energy trading industry, consistently pushing the boundaries of efficiency and reliability. Our vision is to build a dynamic energy network that supports both market needs and environmental responsibility.",
  },
];

const slides = baseSlides.map((s) => ({ ...s, text: `${s.text}\n\n...` }));

const Slider = () => (
  <Carousel arrows>
    {slides.map(({ title, text }) => (
      <div className="slide" key={title}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    ))}
  </Carousel>
);

export default Slider;
