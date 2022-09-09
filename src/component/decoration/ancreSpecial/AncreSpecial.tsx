import React from "react";
import "./ancreSpecial.scss";
export default function AncreSpecial({
  href,
  src,
  alt,
  value,
}: {
  href: string;
  src: string;
  alt: string;
  value: string;
}) {
  return (
    <a className="ancreSecial" href={href}>
      <img src={src} alt={alt} />
      {value}
    </a>
  );
}
