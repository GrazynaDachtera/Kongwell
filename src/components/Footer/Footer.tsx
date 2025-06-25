"use client";

import Image from "next/image";
import "./Footer.scss";

const FooterFirstSection = () => (
  <div className="footer-first-section">
    <Image
      src="/Footer/KongwellFooter.png"
      alt="Kongwell logo"
      width={180}
      height={50}
      className="footer-logo"
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
    <div className="footer-second-section">
      <div className="footer-address-wrapper">
        <div className="footer-address-content">
          {address.map((item, idx) => (
            <div key={idx}>
              <h4 className="footer-address-header">{item.header}</h4>
              <p className="footer-address-street">{item.address}</p>
              <p className="footer-address-email">{item.email}</p>
              <p className="footer-nip">{item.NIP}</p>
              <p className="footer-krs">{item.KRS}</p>
              <p className="footer-acer">{item.ACER}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FooterThirdSection = () => (
  <div className="footer-third-section">
    <p className="footer-disclaimer">
      Kongwell Energy Trading trades solely with proprietary capital and does
      not solicit or accept external investors. The information on this website
      is provided for regulatory and informational purposes only and does not
      constitute investment advice or an offer to deal in any financial
      instrument.
    </p>
    <div className="footer-third-right">
      Contact:
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=inquiries@kongwell.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        inquiries@kongwell.com
      </a>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer-main-container">
    <FooterFirstSection />
    <hr className="footer-divider" />
    <FooterSecondSection />
    <hr className="footer-divider" />
    <FooterThirdSection />
  </div>
);

export default Footer;
