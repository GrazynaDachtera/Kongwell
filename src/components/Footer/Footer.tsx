"use client";

import Image from "next/image";
import "./Footer.scss";

const COMPANY = {
  legalName: "Kongwell Sp. z o.o.",
  addressLine: "ul. Hoża 86/410, 00-682 Warszawa, Polska",
  email: "inquiries@kongwell.com",
};

const IDENTIFIERS = [
  { label: "NIP", value: "7011218901" },
  { label: "KRS", value: "0001122236" },
  { label: "ACER", value: "A0024159A.PL" },
] as const;

const DISCLAIMER =
  "Kongwell Energy Trading trades solely with proprietary capital and does not solicit or accept external investors. The information on this website is provided for regulatory and informational purposes only and does not constitute investment advice or an offer to deal in any financial instrument.";

export default function Footer() {
  const mailto = `mailto:${COMPANY.email}`;

  return (
    <footer
      className="footerContainer"
      aria-labelledby="footer-title"
      role="contentinfo"
    >
      <h2 id="footer-title" className="srOnly">
        Site footer
      </h2>

      <div className="footerInner">
        <div className="footerFirst" aria-hidden="true">
          <Image
            src="/Footer/gorilla.svg"
            alt=""
            width={220}
            height={160}
            className="footerLogo"
            priority
            sizes="(max-width: 480px) 56px, (max-width: 1024px) 64px, 72px"
          />
        </div>

        <div className="footerSecond">
          <address className="footerAddress">
            <p className="footerHeading" aria-label="Company name">
              {COMPANY.legalName}
            </p>

            <p className="footerLine">{COMPANY.addressLine}</p>

            <p className="footerLine">
              <a className="footerLink" href={mailto}>
                {COMPANY.email}
              </a>
            </p>

            <dl className="footerMeta">
              {IDENTIFIERS.map(({ label, value }) => (
                <div className="footerMetaRow" key={label}>
                  <dt className="footerMetaLabel">{label}</dt>
                  <dd className="footerMetaValue">{value}</dd>
                </div>
              ))}
            </dl>
          </address>
        </div>
      </div>

      <hr className="footerRule" />

      <div className="footerThird">
        <p className="footerDisclaimer">{DISCLAIMER}</p>

        <p className="footerContact">
          <span className="footerContactLabel">Contact</span>{" "}
          <a className="footerLink" href={mailto}>
            {COMPANY.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
