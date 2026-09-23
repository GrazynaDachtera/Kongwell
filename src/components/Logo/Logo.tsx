import Image from "next/image";
import "./Logo.scss";

/* Site logo: the footer's gorilla badge at the top-left corner of the page.
   Rendered once, directly inside <body> (see app/layout.tsx). */
export default function Logo() {
  return (
    <div className="siteLogo" aria-hidden="true">
      <Image
        src="/Footer/gorilla.svg"
        alt=""
        width={220}
        height={160}
        className="siteLogoImage"
        priority
      />
    </div>
  );
}
