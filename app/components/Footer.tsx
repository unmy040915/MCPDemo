"use client";
import { useState } from "react";

const navLinks = [
  { href: "#top",        label: "TOP" },
  { href: "#cafes",      label: "カフェ一覧" },
  { href: "#bluebottle", label: "推しカフェ 4選" },
];

const cafeNames = ["BlueBottle", "Kekkshipearl", "Cafe COQ1F", "Cafe Zoe"];

const logos = [
  { src: "https://www.figma.com/api/mcp/asset/03bc8a5c-7528-40f7-9d66-f1d0da0897e2", alt: "Cafe Zoe logo" },
  { src: "https://www.figma.com/api/mcp/asset/cba0303a-94e4-4a96-b770-aa3128a18bcc", alt: "Cafe COQ1F logo" },
  { src: "https://www.figma.com/api/mcp/asset/1c5f208f-5a2a-48c2-86dd-a90cc19d54cc", alt: "Blue Bottle logo" },
  { src: "https://www.figma.com/api/mcp/asset/3224eeba-9322-4b2e-b949-27e9d823b708", alt: "Keshipearl logo" },
];

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <footer
      style={{
        backgroundColor: "#f9f3ec",
        padding: "58px 100px 40px",
        textAlign: "center",
      }}
    >
      <nav style={{ display: "flex", justifyContent: "center", gap: 80, marginBottom: 60 }}>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize: 25,
              letterSpacing: 2,
              color: "#4a4634",
              opacity: hovered === href ? 0.7 : 1,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={() => setHovered(href)}
            onMouseLeave={() => setHovered(null)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", justifyContent: "center", gap: 60, marginBottom: 48 }}>
        {cafeNames.map((name) => (
          <span key={name} style={{ fontSize: 25, letterSpacing: 1.5, color: "#4a4634" }}>
            {name}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, marginBottom: 36 }}>
        {logos.map(({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={alt} src={src} alt={alt} style={{ height: 64, objectFit: "contain", opacity: 0.8 }} />
        ))}
      </div>

      <p style={{ fontSize: 20, letterSpacing: 2, color: "#4a4634" }}>©SARYU 2023</p>
    </footer>
  );
}
