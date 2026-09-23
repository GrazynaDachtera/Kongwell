// src/app/layout.tsx
import "@fontsource-variable/outfit";
import "@fontsource-variable/inter";
import "typeface-poppins";
import "./home.scss";
import type { Metadata } from "next";
import Logo from "../components/Logo/Logo";

export const metadata: Metadata = {
  title: "Kongwell.com",
  description: "Kongwell Energy Trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Logo />
        {children}
      </body>
    </html>
  );
}
