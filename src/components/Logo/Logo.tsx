import Image from "next/image";
import "./Logo.scss";

/* Site logo pinned to the top-left corner of the viewport on every device.
   Rendered once, directly inside <body> (see app/layout.tsx), so no page
   section can affect its position. */
export default function Logo() {
  return (
    <div className="siteLogo" aria-hidden="true">
      <Image
        src="/Footer/gorilla.svg"
        alt=""
        width={58}
        height={60}
        priority
      />
    </div>
  );
}
