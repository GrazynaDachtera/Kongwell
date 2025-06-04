import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Heading, List, ListItem } from "@chakra-ui/react";
import "./Footer.scss";

interface IFooterMenu {
  header: string;
  links: { text: string; to: string }[];
}

const FooterMenu = ({ header, links }: IFooterMenu) => (
  <Box className="footer-menu-container">
    <Heading as="h4" size="md" className="footer-menu-header">
      {header}
    </Heading>
    <List spacing={2} className="footer-menu-list">
      {links.map(({ text, to }) => (
        <ListItem key={to}>
          <Link href={to} className="footer-menu-link">
            {text}
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

const Footer = () => {
  const menus: IFooterMenu[] = [
    {
      header: "Services",
      links: [{ text: "Service", to: "/Service" }],
    },
    {
      header: "Information",
      links: [{ text: "Contact us", to: "/Contact" }],
    },
    {
      header: "Company",
      links: [{ text: "About us", to: "/About" }],
    },
  ];

  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      className="footer-main-container"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="footer-logo-container"
      >
        <Image
          src="/Footer/gorilla-footer.svg"
          alt="Gorilla Logo"
          width={30}
          height={30}
          className="gorilla-logo"
        />
      </Flex>

      <Flex
        className="footer-middle"
        justify="space-between"
        wrap="wrap"
        maxW="75rem"
        w="100%"
      >
        {menus.map((menu) => (
          <FooterMenu key={menu.header} {...menu} />
        ))}
      </Flex>

      <Flex
        className="footer-footer"
        justify="center"
        align="center"
        maxW="75rem"
        w="100%"
      >
        <Box className="footer-footer-terms">
          © {new Date().getFullYear()} Kongwell Company | All rights reserved.
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
