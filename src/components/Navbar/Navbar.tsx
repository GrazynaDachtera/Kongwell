"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.scss";

export default function NavBar() {
  return (
    <div className="brand-mark" role="banner" aria-label="Site logo">
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/Navbar/gorilla.svg"
          width={58}
          height={60}
          alt="Kongwello logo"
          priority
        />
      </Link>
    </div>
  );
}
