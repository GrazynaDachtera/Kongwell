import { Carousel } from "antd";
import "./Slider.scss";

const slides = [
  {
    title: "Who we are",
    text: `Kongwell Energy Trading is a privately-held quantitative trading firm founded by senior professionals with a track record that spans multiple asset classes. Our collective background in quantitative research, exchange technology, and risk management lets us approach energy markets with the same rigour typically reserved for global macro desks – only applied to the nuanced dynamics of power markets.`,
  },
  {
    title: "What we do",
    text: `We deploy proprietary algorithms and statistical models to identify and correct market inefficiencies. By supplying disciplined, price-sensitive order flow, we help validate quoted prices and accelerate price discovery during periods of heightened volatility.`,
  },
];

const Slider = () => (
  <Carousel arrows adaptiveHeight>
    {slides.map(({ title, text }) => (
      <div className="slide" key={title}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    ))}
  </Carousel>
);

export default Slider;
