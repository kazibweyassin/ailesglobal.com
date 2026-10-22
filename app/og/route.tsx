import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e7",
          color: "#1c1b19",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#1e4638", marginRight: 16 }} />
          <div style={{ fontSize: 28, letterSpacing: "0.16em", color: "#1e4638" }}>AILES GLOBAL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 980 }}>Move forward with confidence</div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#4e4940" }}>Germany · Canada · Ireland · United Kingdom</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#1e4638" }}>ailesglobal.com</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
