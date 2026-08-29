import { ImageResponse } from "next/og";

export const alt = "Henrique Zimermann - DevSecOps e SRE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #03050a 0%, #060c1a 55%, #0a1230 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", width: 12, height: 12, borderRadius: 999, background: "#FF9900" }} />
          AWS Student Builder Group Leader - Univali
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
          Henrique Zimermann
        </div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 20, fontWeight: 600, color: "#38bdf8" }}>
          DevSecOps &amp; SRE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 820,
          }}
        >
          Cloud, automação de infraestrutura, observabilidade e arquiteturas resilientes.
        </div>
      </div>
    ),
    { ...size }
  );
}
