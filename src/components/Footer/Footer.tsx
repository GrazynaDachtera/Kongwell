"use client";

import Image from "next/image";
import "./Footer.scss";

const FooterFirstSection = () => (
  <div className="footerFirst" aria-hidden="true">
    <Image
      src="/Footer/gorilla.svg"
      alt="Kongwell logo"
      width={220}
      height={160}
      className="footerLogo"
      priority
    />
  </div>
);

const FooterSecondSection = () => {
  const address = [
    {
      header: "Kongwell Sp. z o.o.",
      address: "ul. Hoża 86/410, 00-682 Warszawa, Polska",
      email: "inquiries@kongwell.com",
      NIP: "NIP: 7011218901",
      ACER: "ACER: A0024159A.PL",
      KRS: "KRS: 0001122236",
    },
  ];

  return (
    <div className="footerSecond">
      <div className="footerAddressWrap">
        {address.map((item, idx) => (
          <address className="footerAddress" key={idx}>
            <h4 className="footerHeading">{item.header}</h4>
            <p className="footerLine">{item.address}</p>
            <p className="footerLine">
              <a
                href="mailto:inquiries@kongwell.com"
                aria-label="Email inquiries@kongwell.com"
                className="footerEmail"
              >
                {item.email}
              </a>
            </p>
            <p className="footerLine">{item.NIP}</p>
            <p className="footerLine">{item.KRS}</p>
            <p className="footerLine">{item.ACER}</p>
          </address>
        ))}
      </div>
    </div>
  );
};

const FooterThirdSection = () => (
  <div className="footerThird">
    <p className="footerDisclaimer">
      Kongwell Energy Trading trades solely with proprietary capital and does
      not solicit or accept external investors. The information on this website
      is provided for regulatory and informational purposes only and does not
      constitute investment advice or an offer to deal in any financial
      instrument.
    </p>

    <p className="footerContact">
      Contact{" "}
      <a
        href="mailto:inquiries@kongwell.com"
        rel="noopener noreferrer"
        aria-label="Email inquiries@kongwell.com"
      >
        inquiries@kongwell.com
      </a>
    </p>
  </div>
);

const Footer = () => (
  <footer
    className="footerContainer"
    aria-label="Site footer"
    role="contentinfo"
  >
    <div className="footerInner">
      <FooterFirstSection />
      <FooterSecondSection />
    </div>

    <hr className="footerRule" />

    <FooterThirdSection />
  </footer>
);

export default Footer;
