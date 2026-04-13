export default function Hero() {
  return (
    <section
      id="top"
      style={{ position: "relative", width: "100%", height: 860, overflow: "hidden" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.figma.com/api/mcp/asset/94e1e1af-e015-4345-99c2-3456cbdecfe8"
        alt="カフェ内観"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(74,70,52,0.3) 0%, rgba(74,70,52,0.55) 100%)",
        }}
      />
      <div style={{ position: "absolute", bottom: 120, left: 100 }}>
        <h1
          style={{
            fontSize: 80,
            lineHeight: 1.15,
            letterSpacing: 4,
            color: "#f9f3ec",
            whiteSpace: "pre-line",
          }}
        >
          {"研ぎ澄まされる\n圧倒的集中力"}
        </h1>
      </div>
      <span
        style={{
          position: "absolute",
          bottom: 140,
          right: 100,
          fontSize: 20,
          letterSpacing: 2,
          color: "#f9f3ec",
        }}
      >
        Cafe Zoe
      </span>
    </section>
  );
}
