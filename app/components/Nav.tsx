"use client";

export default function Nav() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: "rgba(74, 70, 52, 0.85)",
      backdropFilter: "blur(4px)",
      padding: "0 100px",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <span style={{ fontSize: 15, letterSpacing: 2, color: "#f9f3ec" }}>
        大学生のみんな！ 同じ環境で作業するの飽きてない？
      </span>
      <ul style={{ display: "flex", gap: 40, listStyle: "none" }}>
        {[
          { href: "#top",        label: "TOP" },
          { href: "#cafes",      label: "カフェ一覧" },
          { href: "#bluebottle", label: "推しカフェ 4選" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              style={{ fontSize: 15, letterSpacing: 2, color: "#f9f3ec", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
