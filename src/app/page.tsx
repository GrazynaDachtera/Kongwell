"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import "../app/styles.scss";

export default function Home() {
  return (
    <>
      <section className="KongwellWebsite">
        <Navbar />
        <Header />
      </section>
    </>
  );
}
