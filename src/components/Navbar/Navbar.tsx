"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Flex } from "@chakra-ui/react";
import "./Navbar.scss";

const NavBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    toggleBodyOverflow(!isActive);
  };

  const closeMenu = useCallback(() => {
    setIsActive(false);
    toggleBodyOverflow(false);
  }, []);

  const toggleBodyOverflow = (shouldOverflow: boolean) => {
    document.body.classList.toggle("overflow-hidden", shouldOverflow);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && isActive) closeMenu();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive, closeMenu]);

  const menuItems = [
    { label: "home", path: "/" },
    { label: "contact", path: "/Contact" },
  ];

  return (
    <>
      <Flex className="wrapper-navbar">
        <nav className="navbar">
          <div className="logo-navbar">
            <Image
              src={"/Navbar/gorilla.svg"}
              width={58}
              height={60}
              className="Kongwellogo"
              alt={"Kongwellogo"}
            />
          </div>

          <div className={`links-navbar-center ${isActive ? "active" : ""}`}>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={pathname === item.path ? "active" : ""}
                >
                  <Link href={item.path} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="apply-hamburger" onClick={toggleMenu}>
            <div className={`hamburger ${isActive ? "active" : ""}`}>
              <span className={`bar ${isActive ? "active" : ""}`}></span>
              <span className={`bar ${isActive ? "active" : ""}`}></span>
              <span className={`bar ${isActive ? "active" : ""}`}></span>
            </div>
          </div>
        </nav>
      </Flex>

      <div className={`nav-menu ${isActive ? "active" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={pathname === item.path ? "active" : ""}
            >
              <Link href={item.path} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
