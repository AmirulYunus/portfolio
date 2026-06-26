import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          color: "#f4f4f5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.16)",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 28,
          }}
        >
          <span
            style={{
              color: "#ef4444",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Production Backend Engineer
          </span>
          <span style={{ color: "rgba(244,244,245,0.64)", fontSize: 24 }}>
            Laravel / AWS / MySQL / Releases
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 142,
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            Amirul
          </h1>
          <p
            style={{
              color: "rgba(244,244,245,0.78)",
              fontSize: 42,
              lineHeight: 1.25,
              marginTop: 32,
              maxWidth: 880,
            }}
          >
            Laravel/PHP systems, MySQL data flows, AWS infrastructure, release
            ownership, and production debugging.
          </p>
        </div>
      </div>
    ),
    size,
  );
}
