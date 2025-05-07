import Link from "next/link";
import Image from "next/image";
import "./Footer.scss";
import { Flex } from "@chakra-ui/react";

// Footer menu interface
interface IFooterMenu {
  header: string;
  links: { text: string; to: string }[];
}

// Footer Menu Component
const FooterMenu = ({ header, links }: IFooterMenu) => (
  <div className="footer-menu-container">
    <h4 className="footer-menu-header">{header}</h4>
    {links.map(({ text, to }, index) => (
      <Link href={to} key={index} className="footer-menu-link">
        {text}
      </Link>
    ))}
  </div>
);

// Footer Component
const Footer = () => {
  const menus = [
    {
      header: "Services",
      links: [{ text: "Sales & acquisition", to: "/Blog" }],
    },
    {
      header: "Information",
      links: [{ text: "Blog", to: "/Blog" }],
    },
    {
      header: "Company",
      links: [
        { text: "About us", to: "/About" },
        { text: "Contact us", to: "/Contact" },
      ],
    },
  ];

  return (
    <Flex direction="column" align="center" className="footer-main-container">
      <div className="wrapper-footer">
        <div className="wrapper-assist-footer">
          {/* Gorilla Logo at the top */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            className="footer-logo-container"
          >
            <Image
              src="/Footer/gorilla-footer.svg"
              alt="Gorilla Logo"
              width={20}
              height={20}
              className="gorilla-logo"
            />
          </Flex>

          <section className="formSection">
            <div className="contactForm"></div>
            <div className="contactImage"></div>
          </section>

          {/* Footer menus */}
          <Flex className="footer-middle" justify="space-between" wrap="wrap">
            {menus.map((menu, index) => (
              <FooterMenu key={index} {...menu} />
            ))}
          </Flex>

          <Flex justify="space-between" className="footer-footer">
            <Flex align="center" className="footer-footer-logo"></Flex>
          </Flex>
        </div>
      </div>
    </Flex>
  );
};

export default Footer;
