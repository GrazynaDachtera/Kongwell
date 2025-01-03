import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import "./Slider.scss";

const Slider: React.FC = () => (
  <>
    <Carousel arrows infinite={false}>
      <div className="container">
        <h2>Our Services</h2>
        <p>
          At Kongwell, we provide comprehensive energy trading solutions that
          bridge the gap between producers and consumers across global markets.
          Our services focus on optimizing supply chains and reducing risk to
          ensure the seamless flow of energy. We aim to deliver innovative,
          reliable, and efficient solutions that meet the growing demands of the
          energy industry.
        </p>
      </div>
      <div className="container">
        <h2>Our Mission</h2>
        <p>
          Kongwell's mission is to create a sustainable and reliable energy
          future by optimizing supply chains and managing market risks. We are
          committed to delivering value to our partners and clients through
          innovation and expertise. Our goal is to ensure energy accessibility
          while fostering long-term, reliable relationships.
        </p>
      </div>
      <div className="container">
        <h2>Our Vision</h2>
        <p>
          We envision a future where global energy systems are sustainable,
          efficient, and driven by innovation. Kongwell aims to be a leader in
          the energy trading industry, consistently pushing the boundaries of
          efficiency and reliability. Our vision is to build a dynamic energy
          network that supports both market needs and environmental
          responsibility.
        </p>
      </div>
    </Carousel>
  </>
);

export default Slider;
