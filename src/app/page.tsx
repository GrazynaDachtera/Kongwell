"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import ContactHome from "../components/ContactHome/ContactHome";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import "../app/home.scss";

export default function Home() {
  return (
    <>
      <section className="KongwellWebsite">
        <div className="BackgroundImage">
          <Navbar />
          <Header />
        </div>
        <Slider />
        <About />
        <ContactHome />
        <Footer />
      </section>
    </>
  );
}
