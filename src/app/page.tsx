import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import ContactHome from "../components/ContactHome/ContactHome";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const HERO_WIDTHS = [640, 960, 1280, 1920, 2560];

export default function Home() {
  return (
    <>
      <section className="KongwellWebsite">
        <div className="BackgroundImage">
          {/* Plain <img>: next/image can't build a srcset with `output: "export"`.
              fetchPriority also marks the preload React adds to <head>. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="BackgroundImage__img"
            src="/Header/hero-1920.webp"
            srcSet={HERO_WIDTHS.map((w) => `/Header/hero-${w}.webp ${w}w`).join(", ")}
            sizes="100vw"
            width={1920}
            height={1080}
            alt=""
            fetchPriority="high"
          />
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
