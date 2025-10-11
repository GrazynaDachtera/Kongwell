"use client";

import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import "./Navbar.scss";

const NavBar: React.FC = () => {
  return (
    <Flex className="wrapper-navbar">
      <nav className="navbar">
        <div className="logo-navbar">
          <Image
            src="/Navbar/gorilla.svg"
            width={58}
            height={60}
            className="Kongwellogo"
            alt="Kongwellogo"
            priority
          />
        </div>
      </nav>
    </Flex>
  );
};

export default NavBar;
