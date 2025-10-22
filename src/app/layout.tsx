// src/app/layout.tsx
import "./home.scss";
import type { Metadata } from "next";
import Image from "next/image";

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
        <div className="cornerBrand" aria-hidden="true">
          <Image
            src="/Footer/gorilla.svg"
            alt=""
            width={58}
            height={60}
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
