interface RatingProps {
  cups: string[];
}

function RatingCups({ cups }: RatingProps) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {cups.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={src} alt="★" style={{ width: 35, height: 38, objectFit: "contain" }} />
      ))}
    </div>
  );
}

interface ActionButtonProps {
  label: string;
  icon: string;
  textColor: string;
}

function ActionButton({ label, icon, textColor }: ActionButtonProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}>
      <div
        style={{
          width: 75,
          height: 75,
          borderRadius: "50%",
          border: `2px solid ${textColor}`,
          backgroundColor: "rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 11, letterSpacing: 2.75, color: textColor }}>{label}</span>
    </div>
  );
}

export interface CafeSectionData {
  id: string;
  variant: "dark" | "light";
  marqueeBg: string;
  marqueeText: string;
  marqueeDelay: number;
  cafeName: string;
  subtitle?: string;
  description: string[];
  ambiance: string;
  singleSeat: string;
  seats: string;
  deskSize: string;
  maxPeople: string;
  access: string;
  points: string[];
  ratingCups: string[];
  photo: string;
  photoAlt: string;
}

interface CafeSectionProps {
  data: CafeSectionData;
}

export default function CafeSection({ data }: CafeSectionProps) {
  const isDark = data.variant === "dark";
  const bgColor = isDark ? "#4a4634" : "#c9b492";
  const textColor = isDark ? "#f9f3ec" : "#423706";

  return (
    <section
      id={data.id}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "70px 100px 80px",
        scrollMarginTop: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 60,
          alignItems: "flex-start",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {data.subtitle && (
            <p style={{ fontSize: 20, letterSpacing: 2, marginBottom: 4 }}>{data.subtitle}</p>
          )}
          <h2 style={{ fontSize: 55, lineHeight: 1.1, letterSpacing: 3, marginBottom: 24 }}>
            {data.cafeName}
          </h2>
          <p style={{ fontSize: 22, lineHeight: 3.2, letterSpacing: 3.3, marginBottom: 36 }}>
            {data.description.map((line, i) => (
              <span key={i}>{line}{i < data.description.length - 1 && <br />}</span>
            ))}
          </p>

          {/* Info grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 0",
              marginBottom: 20,
            }}
          >
            <div style={{ gridColumn: "1 / -1", fontSize: 17, letterSpacing: 2.55 }}>
              雰囲気：{data.ambiance}
            </div>
            <div style={{ fontSize: 17, letterSpacing: 2.55 }}>一人席：{data.singleSeat}</div>
            <div style={{ fontSize: 17, letterSpacing: 2.55 }}>机サイズ：{data.deskSize}</div>
            <div style={{ fontSize: 17, letterSpacing: 2.55 }}>席数：{data.seats}</div>
            <div style={{ fontSize: 17, letterSpacing: 2.55 }}>おすすめ人数：{data.maxPeople}</div>
          </div>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <span style={{ fontSize: 17, letterSpacing: 2 }}>作業：</span>
            <RatingCups cups={data.ratingCups} />
          </div>

          {/* Access & Point */}
          <div style={{ display: "flex", gap: 40, alignItems: "flex-start", marginBottom: 32 }}>
            <div style={{ flexShrink: 0 }}>
              <p style={{ fontSize: 17, letterSpacing: 2.55, marginBottom: 8 }}>アクセス：</p>
              <p style={{ fontSize: 17, letterSpacing: 2.55 }}>{data.access}</p>
            </div>
            <div>
              <p style={{ fontSize: 17, letterSpacing: 2.55, marginBottom: 8 }}>Point</p>
              <p style={{ fontSize: 17, letterSpacing: 2.55, lineHeight: 2.2 }}>
                {data.points.map((p, i) => (
                  <span key={i}>{p}{i < data.points.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 24 }}>
            <ActionButton label="マップ" icon="📍" textColor={textColor} />
            <ActionButton label="詳細" icon="→" textColor={textColor} />
          </div>
        </div>

        {/* Right: photo */}
        <div style={{ flexShrink: 0, width: 540 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.photo}
            alt={data.photoAlt}
            style={{ width: "100%", height: 356, objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
