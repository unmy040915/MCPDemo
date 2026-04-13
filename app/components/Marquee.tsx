interface MarqueeProps {
  text: string;
  bgColor?: string;
  delay?: number;
}

export default function Marquee({ text, bgColor = "#f9f3ec", delay = 0 }: MarqueeProps) {
  const repeated = `${text}・`.repeat(10) + " ";
  return (
    <div
      style={{
        backgroundColor: bgColor,
        overflow: "hidden",
        padding: "10px 0",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontSize: 85,
          letterSpacing: 4,
          color: "#4a4634",
          animation: `marquee 20s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {repeated}
      </span>
    </div>
  );
}
