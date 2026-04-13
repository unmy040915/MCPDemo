interface WaveDividerProps {
  fromColor: string;
  toColor: string;
}

export default function WaveDivider({ fromColor, toColor }: WaveDividerProps) {
  return (
    <div
      style={{
        backgroundColor: fromColor,
        overflow: "hidden",
        lineHeight: 0,
        marginTop: -2,
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%" }}
      >
        <path
          d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
