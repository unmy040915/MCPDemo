"use client";
import { useState } from "react";

const cafes = [
  {
    href: "#bluebottle",
    label: "BlueBottle",
    img: "https://www.figma.com/api/mcp/asset/16eacdf5-e0eb-4ef0-853d-1d0bdb7dbe4e",
  },
  {
    href: "#keshipearl",
    label: "Kershpearl",
    img: "https://www.figma.com/api/mcp/asset/22b336e8-2a00-445e-9db5-f6274d1eab9c",
  },
  {
    href: "#coq1f",
    label: "Cafe COQ1F",
    img: "https://www.figma.com/api/mcp/asset/49d964a0-2f39-4da8-8ce3-cdedb439c62e",
  },
  {
    href: "#zoe",
    label: "Cafe Zoe",
    img: "https://www.figma.com/api/mcp/asset/5e77bb7f-9c65-4f05-ab0d-ea05893048c3",
  },
];

function CafeCard({ href, label, img }: typeof cafes[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        position: "relative",
        width: 265,
        display: "block",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={label}
        style={{ width: "100%", height: 403, objectFit: "cover", display: "block" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 38,
          backgroundColor: "rgba(43,43,43,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 17, letterSpacing: 0.85, color: "#fff" }}>{label}</span>
      </div>
    </a>
  );
}

export default function TableOfContents() {
  return (
    <section
      id="cafes"
      style={{ backgroundColor: "#c58015", padding: "80px 100px 90px" }}
    >
      <p
        style={{
          fontSize: 17,
          lineHeight: 2.6,
          letterSpacing: 2.55,
          color: "#fff",
          textAlign: "center",
          maxWidth: 860,
          margin: "0 auto 60px",
        }}
      >
        自分自身外で作業したい！っていう気持ちが強いので、同じような気持ちの人におすすめのカフェを共有したいと思いこのサイトを作りました。作業なしでも神戸にあるイチオシカフェを大学生の観点からまとめてるので、ぜひ参考にしてください。
      </p>
      <div style={{ display: "flex", gap: 63, justifyContent: "center" }}>
        {cafes.map((cafe) => (
          <CafeCard key={cafe.href} {...cafe} />
        ))}
      </div>
    </section>
  );
}
