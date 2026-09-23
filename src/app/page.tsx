import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import ContactHome from "../components/ContactHome/ContactHome";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const srcSet = (name: string, widths: number[]) =>
  widths.map((w) => `/Header/${name}-${w}.webp ${w}w`).join(", ");

/* The hero is ~90vh tall with object-fit: cover, so on narrow screens the
   photo is scaled to the height and is wider than the viewport. `sizes` says
   how wide it really renders, so each screen downloads a sharp enough file:
   - landscape photo (16:9): max(100vw, 90vh * 16/9 = 160vh)
   - portrait 3:4 centre crop, for tall screens: max(100vw, 90vh * 3/4 = 67.5vh)
   Widths are spaced well apart so small viewport-height changes (address bar)
   don't make the browser switch files mid-load and download two. */
const HERO_LANDSCAPE = srcSet("hero", [640, 960, 1280, 1920, 2560, 3200, 3840, 5120]);
const HERO_PORTRAIT = srcSet("hero-portrait", [750, 1200, 1800, 2262]);

export default function Home() {
  return (
    <>
      <section className="KongwellWebsite">
        <div className="BackgroundImage">
          {/* Plain <picture>: next/image can't build a srcset with `output: "export"`. */}
          <picture>
            <source
              media="(max-aspect-ratio: 3/4)"
              srcSet={HERO_PORTRAIT}
              sizes="(max-aspect-ratio: 27/40) 67.5vh, 100vw"
              width={2262}
              height={3016}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="BackgroundImage__img"
              src="/Header/hero-1920.webp"
              srcSet={HERO_LANDSCAPE}
              sizes="(max-aspect-ratio: 8/5) 160vh, 100vw"
              width={1920}
              height={1080}
              alt=""
              fetchPriority="high"
            />
          </picture>
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
